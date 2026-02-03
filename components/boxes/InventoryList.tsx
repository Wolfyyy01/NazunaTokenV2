"use client"

import { Package, Lock, Sparkles, Coins } from "lucide-react"
import { useState, useEffect } from "react"
import { useActiveAccount, useReadContract, TransactionButton } from "thirdweb/react"
import { constants } from "@/lib/constants"
import { prepareContractCall } from "thirdweb"
import { getContract } from "thirdweb";
import client from "@/lib/client";
import StakingCard from "./StakingCard"
import { useToast } from "@/hooks/use-toast"

export default function InventoryList() {
  const account = useActiveAccount();
  const { toast } = useToast();

  // Initializare Contracte
  const boxContract = getContract({
    client,
    address: constants.box_contract_address || "0x2d355478971d42fbddf879377216e18b2ad87559",
    chain: constants.activeChain,
  });

  const stakingContract = constants.stakingContract

  // Citire Recompense Totale
  const { data: stakerInfo, refetch: refetchRewards } = useReadContract({
    contract: stakingContract,
    method: "function stakers(address) view returns (uint256 amountStaked, uint256 timeOfLastUpdate, uint256 unclaimedRewards)",
    params: [account?.address || ""],
  });

  // Calculăm reward-ul în timp real (aproximativ) sau folosim ce e pe lanț
  // Folosim availableRewards pentru a include și reward-urile stocate (unclaimed) chiar dacă nu mai avem stake activ
  const { data: currentRewards, refetch: refetchCurrentRewards } = useReadContract({
    contract: stakingContract,
    method: "function availableRewards(address _staker) view returns (uint256)",
    params: [account?.address || ""],
  });

  // 1. Get Staked Tokens
  const { data: stakedTokensData, refetch: refetchStaked } = useReadContract({
    contract: stakingContract,
    method: "function getStakedTokens(address) view returns ((uint256 tokenId, uint256 amount)[])",
    params: [account?.address || ""],
  });

  // 2. Get User Balances (Batch)
  const { data: balancesData, refetch: refetchBalances } = useReadContract({
    contract: boxContract,
    method: "function balanceOfBatch(address[], uint256[]) view returns (uint256[])",
    params: [
      [account?.address || "", account?.address || "", account?.address || ""],
      [BigInt(0), BigInt(1), BigInt(2)]
    ],
  });

  const handleRefresh = () => {
    // Refresh imediat
    refetchStaked();
    refetchBalances();
    refetchRewards();
    refetchCurrentRewards();

    // Refresh după 2 secunde (pentru a permite propagarea tranzacției)
    setTimeout(() => {
      refetchStaked();
      refetchBalances();
      refetchRewards();
      refetchCurrentRewards();
    }, 2000);
    
    // Refresh după 5 secunde (siguranță)
    setTimeout(() => {
        refetchStaked();
        refetchBalances();
        refetchRewards();
        refetchCurrentRewards();
    }, 5000);
  };

  // Refresh automat la recompense (la fiecare 5 secunde)
  useEffect(() => {
    const interval = setInterval(() => {
      if (account) {
        refetchCurrentRewards();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [refetchCurrentRewards, account]);

  const displayRewards = currentRewards ? (Number(currentRewards) / 1e18).toFixed(4) : "0.0000";

  const inventoryItems = [
    { id: BigInt(0), name: "Starter Box", color: "from-blue-600 to-cyan-500" },
    { id: BigInt(1), name: "Nightwalker Box", color: "from-purple-600 to-pink-500" },
    { id: BigInt(2), name: "Nazuna's Secret Box", color: "from-yellow-500 to-red-500" }
  ];

  if (!account) {
    return (
      <div className="text-center py-12 bg-purple-900/10 rounded-2xl border border-purple-500/10 mb-20">
        <p className="text-purple-300">Connect your wallet to view your inventory and staking.</p>
      </div>
    );
  }

  // Filter items logic
  const filteredItems = inventoryItems.map((item, index) => {
    const balance = balancesData && balancesData[index] ? BigInt(balancesData[index]) : BigInt(0);
    
    // Find staked amount
    let stakedAmount = BigInt(0);
    if (stakedTokensData) {
      // @ts-ignore
      const found = stakedTokensData.find((t) => t.tokenId === item.id);
      if (found) stakedAmount = found.amount;
    }

    return { ...item, balance, stakedAmount };
  }).filter(item => item.balance > BigInt(0) || item.stakedAmount > BigInt(0));

  return (
    <div>
      {/* Panou Recompense */}
      <div className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-6 md:mb-0">
          <div className="p-4 bg-yellow-500/20 rounded-full mr-6">
            <Coins className="w-10 h-10 text-yellow-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">{displayRewards} NZNA</h2>
            <p className="text-purple-300">Unclaimed Staking Rewards</p>
          </div>
        </div>
        
        <TransactionButton
          transaction={() => {
            return prepareContractCall({
              contract: stakingContract,
              method: "function claimRewards()",
              params: [],
            });
          }}
          onTransactionConfirmed={() => {
            toast({
              title: "Rewards Claimed",
              description: "Your rewards have been sent to your wallet!",
              className: "bg-yellow-600 border-yellow-500 text-white",
            });
            handleRefresh();
          }}
          className="!px-8 !py-4 !rounded-xl !bg-yellow-500 hover:!bg-yellow-400 !text-black !font-bold !text-lg !shadow-lg !shadow-yellow-500/20"
        >
          Claim Rewards
        </TransactionButton>
      </div>

      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <Package className="mr-2 text-purple-400" />
        Your Inventory & Staking
      </h2>
      
      {filteredItems.length === 0 ? (
        <div className="text-center py-12 bg-purple-900/10 rounded-2xl border border-purple-500/10">
           <p className="text-purple-300">You don't own any boxes yet. Visit the Shop to get some!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <StakingCard
              key={item.id.toString()}
              tokenId={item.id}
              name={item.name}
              color={item.color}
              stakingContract={stakingContract}
              boxContract={boxContract}
              userBalance={item.balance}
              stakedAmount={item.stakedAmount}
              onRefresh={handleRefresh}
            />
          ))}
        </div>
      )}
    </div>
  )
}
