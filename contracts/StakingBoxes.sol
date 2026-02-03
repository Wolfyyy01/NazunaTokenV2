// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StakingBoxes is ReentrancyGuard, ERC1155Holder, Ownable {
    using SafeERC20 for IERC20;

    IERC20 public immutable nznaToken;
    IERC1155 public immutable boxCollection;

    struct StakedToken {
        uint256 tokenId;
        uint256 amount;
    }

    struct Staker {
        uint256 amountStaked; // Total count of items staked
        StakedToken[] stakedTokens;
        uint256 timeOfLastUpdate;
        uint256 unclaimedRewards;
    }

    // Reward per hour per 1 unit of token ID (in wei)
    mapping(uint256 => uint256) public rewardPerHourPerTokenId;

    // Maximum Reward Pool: 150,000 NZNA (initial)
    uint256 public maxRewardSupply = 150000 * 1e18;
    // Total rewards distributed so far
    uint256 public totalRewardsDistributed;

    // Mapping of the User Address to Staker Info
    mapping(address => Staker) public stakers;

    event Staked(address indexed user, uint256 tokenId, uint256 amount);
    event Withdrawn(address indexed user, uint256 tokenId, uint256 amount);
    event RewardsClaimed(address indexed user, uint256 amount);
    event RewardRateUpdated(uint256 tokenId, uint256 rate);
    event PoolEmpty(address indexed user, uint256 remainingRewards);

    // Store as basic address initially to avoid constructor failure
    address public boxCollectionAddress;
    address public nznaTokenAddress;

    constructor(address _boxCollection, address _nznaToken) Ownable(msg.sender) {
        boxCollectionAddress = _boxCollection;
        nznaTokenAddress = _nznaToken;
        
        // Initialize interfaces
        boxCollection = IERC1155(_boxCollection);
        nznaToken = IERC20(_nznaToken);
    }

    function setRewardRate(uint256 _tokenId, uint256 _rate) external onlyOwner {
        rewardPerHourPerTokenId[_tokenId] = _rate;
        emit RewardRateUpdated(_tokenId, _rate);
    }

    function getRewardRate(address _user) public view returns (uint256) {
        Staker storage staker = stakers[_user];
        uint256 rate = 0;
        for (uint256 i = 0; i < staker.stakedTokens.length; i++) {
            uint256 tokenId = staker.stakedTokens[i].tokenId;
            uint256 amount = staker.stakedTokens[i].amount;
            rate += rewardPerHourPerTokenId[tokenId] * amount;
        }
        return rate;
    }

    function updateRewards(address _user) internal {
        Staker storage staker = stakers[_user];
        if (staker.amountStaked > 0) {
            uint256 rewards = calculateRewards(_user);
            staker.unclaimedRewards += rewards;
        }
        staker.timeOfLastUpdate = block.timestamp;
    }

    function stake(uint256 _tokenId, uint256 _amount) external nonReentrant {
        require(_amount > 0, "Amount must be > 0");
        require(boxCollection.balanceOf(msg.sender, _tokenId) >= _amount, "Insufficient balance");

        updateRewards(msg.sender);

        boxCollection.safeTransferFrom(msg.sender, address(this), _tokenId, _amount, "");

        Staker storage staker = stakers[msg.sender];
        
        bool found = false;
        for (uint256 i = 0; i < staker.stakedTokens.length; i++) {
            if (staker.stakedTokens[i].tokenId == _tokenId) {
                staker.stakedTokens[i].amount += _amount;
                found = true;
                break;
            }
        }
        if (!found) {
            staker.stakedTokens.push(StakedToken(_tokenId, _amount));
        }

        staker.amountStaked += _amount;
        
        emit Staked(msg.sender, _tokenId, _amount);
    }

    function withdraw(uint256 _tokenId, uint256 _amount) external nonReentrant {
        require(_amount > 0, "Amount must be > 0");
        Staker storage staker = stakers[msg.sender];
        require(staker.amountStaked >= _amount, "Insufficient staked amount");

        updateRewards(msg.sender);

        bool found = false;
        for (uint256 i = 0; i < staker.stakedTokens.length; i++) {
            if (staker.stakedTokens[i].tokenId == _tokenId) {
                require(staker.stakedTokens[i].amount >= _amount, "Insufficient staked balance for this token");
                staker.stakedTokens[i].amount -= _amount;
                if (staker.stakedTokens[i].amount == 0) {
                    // Remove from array by swapping with last element
                    staker.stakedTokens[i] = staker.stakedTokens[staker.stakedTokens.length - 1];
                    staker.stakedTokens.pop();
                }
                found = true;
                break;
            }
        }
        require(found, "Token not staked");

        staker.amountStaked -= _amount;

        boxCollection.safeTransferFrom(address(this), msg.sender, _tokenId, _amount, "");
        
        emit Withdrawn(msg.sender, _tokenId, _amount);
    }

    // Emergency unstake function used internally when pool is empty
    function _emergencyUnstakeAll(address _user) internal {
        Staker storage staker = stakers[_user];
        if (staker.amountStaked == 0) return;

        for (uint256 i = 0; i < staker.stakedTokens.length; i++) {
            uint256 tokenId = staker.stakedTokens[i].tokenId;
            uint256 amount = staker.stakedTokens[i].amount;
            if (amount > 0) {
                boxCollection.safeTransferFrom(address(this), _user, tokenId, amount, "");
                emit Withdrawn(_user, tokenId, amount);
            }
        }
        
        delete staker.stakedTokens;
        staker.amountStaked = 0;
        
        // CRITICAL FIX: Reset time and rewards to prevent "ghost rewards" on future re-entry
        staker.timeOfLastUpdate = block.timestamp;
        staker.unclaimedRewards = 0;
    }

    function claimRewards() external nonReentrant {
        updateRewards(msg.sender);
        uint256 rewards = stakers[msg.sender].unclaimedRewards;
        require(rewards > 0, "No rewards to claim");
        
        // 1. Check Global Cap
        uint256 remainingCap = maxRewardSupply > totalRewardsDistributed ? maxRewardSupply - totalRewardsDistributed : 0;
        bool isCapReached = false;
        
        if (rewards > remainingCap) {
            rewards = remainingCap;
            isCapReached = true;
        }

        // 2. Check Contract Balance (Liquidity)
        uint256 contractBalance = nznaToken.balanceOf(address(this));
        if (rewards > contractBalance) {
            rewards = contractBalance;
            isCapReached = true;
        }

        // If pool is essentially empty (or user gets 0 due to caps), force unstake
        if (rewards == 0 && isCapReached) {
            stakers[msg.sender].unclaimedRewards = 0; // Reset pending to avoid loops
            _emergencyUnstakeAll(msg.sender);
            emit PoolEmpty(msg.sender, 0);
            return; // Exit without transfer since amount is 0
        }

        // Subtract what is paid.
        stakers[msg.sender].unclaimedRewards -= rewards;
        totalRewardsDistributed += rewards;
        
        nznaToken.safeTransfer(msg.sender, rewards);
        emit RewardsClaimed(msg.sender, rewards);

        // If we hit a cap/empty state during this claim, return NFTs
        if (isCapReached) {
             _emergencyUnstakeAll(msg.sender);
             emit PoolEmpty(msg.sender, rewards);
        }
    }

    function calculateRewards(address _staker) public view returns (uint256) {
         Staker storage staker = stakers[_staker];
         if (staker.amountStaked == 0) return 0;
         
         uint256 timeDiff = block.timestamp - staker.timeOfLastUpdate;
         uint256 rate = getRewardRate(_staker);
         
         return (timeDiff * rate) / 3600;
    }

    function availableRewards(address _staker) public view returns (uint256) {
        Staker storage staker = stakers[_staker];
        uint256 pending = calculateRewards(_staker);
        return staker.unclaimedRewards + pending;
    }
    
    function getStakedTokens(address _user) public view returns (StakedToken[] memory) {
        return stakers[_user].stakedTokens;
    }

    // --- ADMIN FUNCTIONS ---

    // Update the maximum reward supply
    function setMaxRewardSupply(uint256 _newMax) external onlyOwner {
        maxRewardSupply = _newMax;
    }

    // Recover NZNA tokens or withdraw excess
    function adminWithdrawTokens(uint256 _amount) external onlyOwner {
        require(nznaToken.balanceOf(address(this)) >= _amount, "Insufficient balance");
        nznaToken.safeTransfer(msg.sender, _amount);
    }
}
