"use client"
import { constants } from "@/lib/constants"
import TokenomicsChart from "./TokenomicsChart"
import { useReadContract } from "thirdweb/react";
import { useEffect, useState } from "react";
import { formatUnits } from "ethers";

export default function TokenomicsSection() {
  const [totalSupply, setTotalSupply] = useState<string | null>(null);

  const { data, isPending } = useReadContract({
    contract: constants.contract,
    method: "function totalSupply() view returns (uint256)",
    params: [],
  });

  useEffect(() => {
  if (data && !isPending) {
    const readableSupply = formatUnits(data, 18)
    setTotalSupply(readableSupply);
  }
}, [data, isPending]);

  return (
    <section
      id="tokenomics"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-xl bg-gradient-to-b from-purple-900/20 to-transparent"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Tokenomics</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
        <p className="text-lg text-purple-200 max-w-3xl mx-auto">
          Carefully designed distribution to ensure long-term sustainability and growth.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="relative">
            <TokenomicsChart />
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="space-y-6">
            {constants.tokenomicsData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-purple-300 font-medium">{item.label}</span>
                  <span className="text-pink-400 font-bold">{item.percentage}%</span>
                </div>
                <div className="w-full bg-purple-900/30 rounded-full h-3">
                  <div
                    className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <div className="p-6 bg-purple-900/30 rounded-xl border border-purple-800/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-300">Total Supply</span>
                  <span className="text-white font-bold text-xl">{totalSupply} NZNA</span>
                </div>
                {/* <div className="flex items-center justify-between">
                  <span className="text-purple-300">Initial Market Cap</span>
                  <span className="text-white font-bold">$500,000</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
