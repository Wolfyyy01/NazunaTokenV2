"use client";

import { useState, useEffect } from "react";
import { TransactionButton, useReadContract, useActiveAccount } from "thirdweb/react";
import { prepareContractCall, toWei } from "thirdweb";
import { constants } from "@/lib/constants";
import { balanceOf, setApprovalForAll, isApprovedForAll, getNFT } from "thirdweb/extensions/erc1155";
import { getContract } from "thirdweb";
import client from "@/lib/client";
import { useToast } from "@/hooks/use-toast";
import BoxImage from "./BoxImage";
import { Skeleton } from "@/components/ui/skeleton";

interface StakingCardProps {
  tokenId: bigint;
  name: string;
  color: string;
  stakingContract: any;
  boxContract: any;
  userBalance: bigint;
  stakedAmount: bigint;
  onRefresh: () => void;
}

export default function StakingCard({ 
  tokenId, name, color, stakingContract, boxContract,
  userBalance, stakedAmount, onRefresh
}: StakingCardProps) {
  const account = useActiveAccount();
  const { toast } = useToast();
  const [stakeAmount, setStakeAmount] = useState(1);
  const [unstakeAmount, setUnstakeAmount] = useState(1);

  // 1. Fetch NFT Metadata (Name, Rarity)
  const { data: nft, isLoading: isLoadingNFT } = useReadContract(getNFT, {
    contract: boxContract,
    tokenId,
  });

  // 2. Check Approval
  const { data: isApproved, refetch: refetchApproval } = useReadContract({
    contract: boxContract,
    method: "function isApprovedForAll(address account, address operator) view returns (bool)",
    params: [account?.address || "", stakingContract.address],
  });

  // Extract attributes
  const attributes = (nft?.metadata?.attributes || []) as any[];
  const typeAttr = attributes.find(a => a.trait_type === "Type" || a.trait_type === "Rarity" || a.trait_type === "type" || a.trait_type === "rarity");
  const typeValue = typeAttr?.value || "Common"; // Default to Common if not found
  const displayName = nft?.metadata.name || name;

  return (
    <div className="token-card p-6 rounded-2xl flex flex-col border border-purple-500/20 bg-[#1a1528] relative overflow-hidden transition-all hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10">
      
      {/* Header Cutie */}
      <div className="flex items-start space-x-4 mb-6 z-10">
        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${color} p-1 shadow-lg flex-shrink-0`}>
          <div className="w-full h-full bg-black/50 rounded-xl overflow-hidden">
            <BoxImage contract={boxContract} tokenId={tokenId} />
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="flex flex-col gap-1">
             <span className={`self-start px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
               String(typeValue).toLowerCase().includes('legendary') ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' : 
               String(typeValue).toLowerCase().includes('rare') ? 'bg-pink-500/10 border-pink-500/30 text-pink-400' : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
             }`}>
               {String(typeValue)}
             </span>
             {isLoadingNFT ? (
                <Skeleton className="h-6 w-3/4 mb-1" />
             ) : (
                <h3 className="font-bold text-white text-lg leading-tight">{displayName}</h3>
             )}
          </div>
          
          <div className="grid grid-cols-2 gap-2 mt-3">
             <div className="bg-white/5 rounded-lg p-2 text-center">
                <p className="text-xs text-purple-300">Owned</p>
                <p className="font-bold text-white">{userBalance.toString()}</p>
             </div>
             <div className="bg-white/5 rounded-lg p-2 text-center border border-yellow-500/20">
                <p className="text-xs text-yellow-500/80">Staked</p>
                <p className="font-bold text-yellow-400">{stakedAmount.toString()}</p>
             </div>
          </div>
        </div>
      </div>

      {/* Secțiunea de Acțiuni */}
      <div className="space-y-4 z-10">
        
        {/* Stake Section */}
        <div className="bg-black/20 p-4 rounded-xl border border-purple-500/10">
            <h4 className="text-xs font-bold text-purple-300 mb-3 uppercase tracking-wider flex items-center justify-between">
              Stake 
              <span className="text-white normal-case opacity-70">Balance: {userBalance.toString()}</span>
            </h4>
            
            {!isApproved ? (
              <div className="flex flex-col gap-2">
                 <p className="text-xs text-yellow-200/80 mb-1">
                   You must approve the staking contract before you can stake your boxes.
                 </p>
                 <TransactionButton
                  transaction={() => {
                    return setApprovalForAll({
                      contract: boxContract,
                      operator: stakingContract.address,
                      approved: true,
                    });
                  }}
                  onTransactionConfirmed={() => {
                    toast({
                      title: "Approved Successfully",
                      description: "You can now stake your boxes.",
                      className: "bg-green-600 border-green-500 text-white",
                    });
                    refetchApproval();
                    onRefresh();
                  }}
                  className="!w-full !py-2 !text-sm !bg-yellow-600 hover:!bg-yellow-500 !text-white !font-bold !rounded-lg"
                >
                  1. Approve Access
                </TransactionButton>
              </div>
            ) : (
              <div className="flex gap-2">
                <input 
                  type="number" 
                  min="1" 
                  max={Number(userBalance)}
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(Number(e.target.value))}
                  className="w-20 bg-black/30 border border-purple-500/30 rounded-lg text-center text-white text-sm focus:outline-none focus:border-purple-500"
                />
                <TransactionButton
                  transaction={() => {
                    return prepareContractCall({
                      contract: stakingContract,
                      method: "function stake(uint256 _tokenId, uint256 _amount)",
                      params: [tokenId, BigInt(stakeAmount)],
                    });
                  }}
                  onTransactionConfirmed={() => {
                    toast({
                      title: "Staked Successfully",
                      description: `You have staked ${stakeAmount} box(es).`,
                      className: "bg-purple-600 border-purple-500 text-white",
                    });
                    onRefresh();
                  }}
                  className="!flex-grow !py-2 !rounded-lg !bg-purple-600 hover:!bg-purple-500 !text-white !text-sm !font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={userBalance < BigInt(stakeAmount) || stakeAmount <= 0}
                >
                  2. Stake
                </TransactionButton>
              </div>
            )}
        </div>

        {/* Unstake Section */}
        {stakedAmount > BigInt(0) && (
          <div className="bg-black/20 p-4 rounded-xl border border-pink-500/10">
             <h4 className="text-xs font-bold text-pink-300 mb-3 uppercase tracking-wider flex items-center justify-between">
              Unstake
              <span className="text-white normal-case opacity-70">Staked: {stakedAmount.toString()}</span>
             </h4>
             <div className="flex gap-2">
              <input 
                type="number" 
                min="1" 
                max={Number(stakedAmount)}
                value={unstakeAmount}
                onChange={(e) => setUnstakeAmount(Number(e.target.value))}
                className="w-20 bg-black/30 border border-pink-500/30 rounded-lg text-center text-white text-sm focus:outline-none focus:border-pink-500"
              />
              <TransactionButton
                transaction={() => {
                  return prepareContractCall({
                    contract: stakingContract,
                    method: "function withdraw(uint256 _tokenId, uint256 _amount)",
                    params: [tokenId, BigInt(unstakeAmount)],
                  });
                }}
                onTransactionConfirmed={() => {
                  toast({
                    title: "Unstaked Successfully",
                    description: `You have withdrawn ${unstakeAmount} box(es).`,
                    className: "bg-pink-600 border-pink-500 text-white",
                  });
                  onRefresh();
                }}
                className="!flex-grow !py-2 !rounded-lg !bg-pink-600 hover:!bg-pink-500 !text-white !text-sm !font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={stakedAmount < BigInt(unstakeAmount) || unstakeAmount <= 0}
              >
                Withdraw
              </TransactionButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
