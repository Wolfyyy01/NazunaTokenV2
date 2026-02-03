"use client";

import { MediaRenderer, useReadContract } from "thirdweb/react";
import { getNFT } from "thirdweb/extensions/erc1155";
import { Skeleton } from "@/components/ui/skeleton";
import client from "@/lib/client";

interface BoxImageProps {
  contract: any;
  tokenId: bigint;
  className?: string;
}

export default function BoxImage({ contract, tokenId, className }: BoxImageProps) {
  const { data: nft, isLoading } = useReadContract(getNFT, {
    contract,
    tokenId,
  });

  if (isLoading) {
    return <Skeleton className={`w-full h-full rounded-2xl ${className}`} />;
  }

  return (
    <MediaRenderer 
      client={client}
      src={nft?.metadata.image} 
      className={`rounded-2xl object-cover ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
