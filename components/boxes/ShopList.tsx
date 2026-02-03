"use client"

import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react"
import { claimTo, getNFT } from "thirdweb/extensions/erc1155"
import { constants } from "@/lib/constants"
import { getContract, toEther } from "thirdweb";
import client from "@/lib/client";
import { useToast } from "@/hooks/use-toast";
import BoxImage from "./BoxImage";
import { Sparkles } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface ShopItemCardProps {
  contract: any;
  tokenId: bigint;
  color: string;
}

function ShopItemCard({ contract, tokenId, color }: ShopItemCardProps) {
  const account = useActiveAccount();
  const { toast } = useToast();

  const { data: nft, isLoading } = useReadContract(getNFT, {
    contract,
    tokenId,
  });
  console.log(nft);

  // Fetch Claim Condition (Price)
  const { data: claimCondition } = useReadContract({
    contract,
    method: "function getClaimConditionById(uint256 _tokenId, uint256 _conditionId) view returns ((uint256 startTimestamp, uint256 maxClaimableSupply, uint256 supplyClaimed, uint256 quantityLimitPerWallet, bytes32 merkleRoot, uint256 pricePerToken, address currency, string metadata))",
    params: [tokenId, BigInt(0)], // Using Condition ID 0
  });

  if (isLoading) {
    return (
      <div className="token-card p-6 rounded-2xl flex flex-col items-center text-center border border-purple-500/20 h-[500px]">
        <Skeleton className="w-32 h-32 rounded-2xl mb-6" />
        <Skeleton className="h-8 w-3/4 mb-2" />
        <Skeleton className="h-6 w-1/4 mb-4" />
        <Skeleton className="h-20 w-full mb-6" />
        <Skeleton className="h-12 w-full mt-auto" />
      </div>
    );
  }

  // Extract attributes safely
  const attributes = (nft?.metadata?.attributes || []) as any[];
  const typeAttr = attributes.find(a => a.trait_type === "Type" || a.trait_type === "Rarity" || a.trait_type === "type" || a.trait_type === "rarity");
  
  const typeValue = typeAttr?.value || "Unknown";
  
  // Format Price & Supply
  const price = claimCondition ? `${toEther(claimCondition.pricePerToken)} POL` : "Loading...";
  
  const maxSupply = claimCondition ? claimCondition.maxClaimableSupply : BigInt(0);
  const claimedSupply = claimCondition ? claimCondition.supplyClaimed : BigInt(0);
  const remaining = maxSupply - claimedSupply;
  
  const isSoldOut = claimCondition ? remaining <= BigInt(0) : false;

  return (
    <div className="token-card p-6 rounded-2xl flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-300 border border-purple-500/20 h-full">
      <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${color} p-1 mb-6 shadow-lg flex-shrink-0`}>
         <div className="w-full h-full bg-black/50 rounded-xl overflow-hidden">
            <BoxImage contract={contract} tokenId={tokenId} />
         </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{nft?.metadata.name || `Box #${tokenId}`}</h3>
      
      <div className="flex flex-col items-center gap-2 mb-4">
        <div className="flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-white/10 ${
            String(typeValue).toLowerCase().includes('legendary') ? 'text-yellow-400' : 
            String(typeValue).toLowerCase().includes('rare') ? 'text-pink-400' : 'text-blue-400'
            }`}>
            {String(typeValue)}
            </span>
            {claimCondition && (
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  isSoldOut 
                    ? "bg-red-500/20 text-red-300 border-red-500/30" 
                    : "bg-purple-500/20 text-purple-300 border-purple-500/30"
                }`}>
                    {isSoldOut ? "Sold Out" : `${remaining.toString()} / ${maxSupply.toString()} Left`}
                </span>
            )}
        </div>
        <span className="text-sm font-semibold text-green-400">
          {price}
        </span>
      </div>

      <p className="text-purple-200 text-sm mb-6 flex-grow">{nft?.metadata.description || "No description available."}</p>
      
      <TransactionButton
        disabled={isSoldOut}
        transaction={() => {
          if (isSoldOut) throw new Error("This item is sold out");
          if (!account) throw new Error("Please connect your wallet");
          
          return claimTo({
            contract: contract,
            to: account.address,
            tokenId: tokenId,
            quantity: BigInt(1),
          });
        }}
        onTransactionConfirmed={(tx) => {
          toast({
            title: "Purchase Successful",
            description: `You have successfully purchased ${nft?.metadata.name || "Box"}!`,
            className: "bg-green-600 border-green-500 text-white",
          });
        }}
        onError={(error) => {
          console.error("Purchase failed", error);
          toast({
            title: "Purchase Failed",
            description: error.message || "Transaction failed. Please try again.",
            variant: "destructive",
          });
        }}
        className={`!w-full !py-3 !rounded-xl !text-white !font-bold !transition-all !shadow-lg mt-auto ${
          isSoldOut 
            ? "!bg-gray-600 !cursor-not-allowed opacity-50" 
            : "!bg-gradient-to-r !from-purple-600 !to-pink-500 hover:!from-purple-700 hover:!to-pink-600 hover:!shadow-purple-500/30"
        }`}
      >
        {isSoldOut ? "Sold Out" : "Buy Now"}
      </TransactionButton>
    </div>
  );
}

export default function ShopList() {
  const account = useActiveAccount();
  
  // Contractul de NFT-uri (Box Collection)
  const boxContract = getContract({
    client,
    address: constants.box_contract_address || "0x2d355478971d42fbddf879377216e18b2ad87559",
    chain: constants.activeChain,
  });

  const availableBoxes = [
    { id: BigInt(0), color: "from-blue-600 to-cyan-500" },
    { id: BigInt(1), color: "from-purple-600 to-pink-500" },
    { id: BigInt(2), color: "from-yellow-500 to-red-500" }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <Sparkles className="mr-2 text-pink-400" />
        Box Shop
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {availableBoxes.map((box) => (
          <ShopItemCard 
            key={box.id.toString()}
            contract={boxContract}
            tokenId={box.id}
            color={box.color}
          />
        ))}
      </div>
    </div>
  )
}
