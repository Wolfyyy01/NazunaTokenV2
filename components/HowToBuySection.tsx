import { constants } from "@/lib/constants"
import { Copy } from "lucide-react"
import ContractAddressBox from "./ContractAdressBox"

export default function HowToBuySection() {
  const steps = [
    {
      step: 1,
      title: "Get a Wallet",
      description: "Download MetaMask or Brave Wallet and set up your Polygon wallet.",
    },
    {
      step: 2,
      title: "Buy POL",
      description: "Purchase POL from an exchange and send it to your wallet.",
    },
    {
      step: 3,
      title: "Connect to DEX",
      description: "Go to Uniswap or PancakeSwap and connect your wallet.",
    },
    {
      step: 4,
      title: "Swap for NZNA",
      description: "Enter our contract address and swap your POL for Nazuna Token.",
    },
  ]
  
  return (
    <section
      id="buy"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-xl bg-gradient-to-b from-purple-900/20 to-transparent"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">How to Buy Nazuna Token</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
        <p className="text-lg text-purple-200 max-w-3xl mx-auto">
          Join our nocturnal community in just a few simple steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-4 text-center text-purple-300 font-semibold text-xl">
          Coming Soon
        </div>
        {/* {steps.map((step, index) => (
          <div key={index} className="token-card p-6 rounded-xl text-center">
            <div className="w-20 h-20 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold gradient-text">{step.step}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-purple-200">{step.description}</p>
          </div>
        ))} */}
      </div>

      <div className="mt-16 bg-purple-900/30 rounded-2xl p-8 border border-purple-800/50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-4">Contract Address</h3>
            <div className="bg-purple-900/50 rounded-xl p-4 mb-6">
              <code className="text-purple-200 break-all">{constants.contract_address}</code>
            </div>
            <ContractAddressBox />
          </div>
          <div className="md:w-1/2">
            <div className="bg-black/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-purple-300">Current Price</span>
                <span className="text-white font-bold">$0.00</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-purple-300">24h Volume</span>
                <span className="text-white font-bold">$0.00</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-purple-300">Market Cap</span>
                <span className="text-white font-bold">$0.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-300">Decimals</span>
                <span className="text-white font-bold">18</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
