"use client";

import { useState } from "react";
import { prepareContractCall, toWei } from "thirdweb";
import { TransactionButton, useReadContract, useActiveAccount } from "thirdweb/react";
import { constants } from "@/lib/constants";

export default function StakingInterface() {
  const account = useActiveAccount();
  const [tokenIdToStake, setTokenIdToStake] = useState(0); // Default Token ID 0
  const [amountToStake, setAmountToStake] = useState(1);

  // 1. READ: Get Available Rewards
  const { data: rewardsData, isLoading: isLoadingRewards } = useReadContract({
    contract: constants.stakingContract,
    method: "function availableRewards(address) view returns (uint256)",
    params: [account?.address || ""],
  });

  // 2. READ: Get Staked Tokens
  const { data: stakedTokens, isLoading: isLoadingStaked } = useReadContract({
    contract: constants.stakingContract,
    method: "function getStakedTokens(address) view returns ((uint256 tokenId, uint256 amount)[])",
    params: [account?.address || ""],
  });

  if (!account) return <div>Please connect your wallet first.</div>;

  return (
    <div className="p-6 bg-gray-900 text-white rounded-xl space-y-8">
      
      {/* SECTION: REWARDS */}
      <div className="border border-purple-500/30 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Your Rewards</h2>
        <p className="text-2xl text-purple-300">
          {isLoadingRewards ? "Loading..." : rewardsData ? (Number(rewardsData) / 1e18).toFixed(4) : "0"} NZNA
        </p>
        
        <TransactionButton
          transaction={() =>
            prepareContractCall({
              contract: constants.stakingContract,
              method: "function claimRewards()",
              params: [],
            })
          }
          onTransactionConfirmed={() => alert("Rewards Claimed!")}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Claim Rewards
        </TransactionButton>
      </div>

      {/* SECTION: STAKE NEW TOKENS */}
      <div className="border border-blue-500/30 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Stake NFTs</h2>
        <div className="flex gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">Token ID</label>
            <input 
              type="number" 
              value={tokenIdToStake} 
              onChange={(e) => setTokenIdToStake(Number(e.target.value))}
              className="bg-gray-800 border border-gray-700 rounded p-2 w-24"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Amount</label>
            <input 
              type="number" 
              value={amountToStake} 
              onChange={(e) => setAmountToStake(Number(e.target.value))}
              className="bg-gray-800 border border-gray-700 rounded p-2 w-24"
            />
          </div>
        </div>

        {/* 
            NOTE: For ERC1155, the user must first Approve the Staking Contract 
            on the NFT Collection Contract (setApprovalForAll). 
            Thirdweb often handles this automatically, or you can add a separate button.
        */}
        <TransactionButton
          transaction={() =>
            prepareContractCall({
              contract: constants.stakingContract,
              method: "function stake(uint256 _tokenId, uint256 _amount)",
              params: [BigInt(tokenIdToStake), BigInt(amountToStake)],
            })
          }
          onTransactionConfirmed={() => alert("Staked Successfully!")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Stake {amountToStake} x ID #{tokenIdToStake}
        </TransactionButton>
      </div>

      {/* SECTION: YOUR STAKED ITEMS */}
      <div className="border border-pink-500/30 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Currently Staked</h2>
        {isLoadingStaked ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 gap-2">
            {stakedTokens && stakedTokens.length > 0 ? (
              stakedTokens.map((staked, index) => (
                <div key={index} className="flex justify-between items-center bg-white/5 p-3 rounded">
                  <span>Token ID: {staked.tokenId.toString()} (Qty: {staked.amount.toString()})</span>
                  
                  <TransactionButton
                    transaction={() =>
                      prepareContractCall({
                        contract: constants.stakingContract,
                        method: "function withdraw(uint256 _tokenId, uint256 _amount)",
                        params: [staked.tokenId, staked.amount], // Withdraw all (example)
                      })
                    }
                    onTransactionConfirmed={() => alert("Withdrawn!")}
                    className="bg-red-600/80 hover:bg-red-700 text-xs px-3 py-1 rounded"
                  >
                    Unstake
                  </TransactionButton>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No tokens staked.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
