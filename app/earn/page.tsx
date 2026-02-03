
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import AdBanner from "@/components/AdBanner"
import StickyAd from "@/components/StickyAd"
import { ExternalLink, Gift, Coins, Wallet, CoinsIcon, Layers } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Earn Crypto - Nazuna Token",
  description: "Discover the best ways to earn free cryptocurrency and NZNA tokens.",
};

export default function EarnPage() {
  const earnMethods = [
    {
      title: "Staking Boxes",
      description: "Buy and stake boxes to earn NZNA tokens passively. High APY and exclusive rewards.",
      link: "/boxes",
      icon: Layers,
      buttonText: "Start Staking",
      isInternal: true
    },
    {
      title: "FaucetPay",
      description: "Microwallet provider and earning platform. Earn crypto by completing tasks, surveys, and using faucets.",
      link: "https://faucetpay.io/?r=996411", // Placeholder referral link
      icon: Wallet,
      buttonText: "Join FaucetPay"
    },
    {
      title: "ClaimFreeCoins(polygon)",
      description: "Claim free crypto coins every few minutes. Supports multiple cryptocurrencies and instant withdrawals.",
      link: "https://claimfreecoins.io/polygon-faucet/?r=dariea332@gmail.com", // Placeholder referral link
      icon: Coins,
      buttonText: "Start Claiming"
    },
    {
      title: "Cointiply",
      description: "Earn free Bitcoin by interacting with this high-paying faucet & rewards site.",
      link: "https://cointiply.com/r/qx1PZ3", // Placeholder referral link
      icon: Gift,
      buttonText: "Earn Bitcoin"
    },
    {
      title: "PolPick",
      description: "Earn free Polygon tokens every hour or playing games.",
      link: "https://polpick.io/?ref=alexandru", // Placeholder referral link
      icon: CoinsIcon,
      buttonText: "Earn Polygon"
    },
    // Add more earning methods here
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0f0a1a]">
        <Navigation />
        <StickyAd />
        
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Earn Crypto</span>
            </h1>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto mb-8">
              Discover the best ways to earn free cryptocurrency. We've curated a list of trusted platforms to help you grow your portfolio.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>

          <AdBanner />

          {/* Earn Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mb-16">
            {earnMethods.map((method, index) => (
              <div key={index} className="token-card p-8 rounded-2xl flex flex-col h-full hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-900/50 rounded-xl flex items-center justify-center mb-6">
                  <method.icon className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-purple-200 mb-6 flex-grow">{method.description}</p>
                <a
                  href={method.link}
                  target={method.isInternal ? "_self" : "_blank"}
                  rel={method.isInternal ? "" : "noopener noreferrer"}
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex items-center justify-center"
                >
                  {method.buttonText}
                  {method.isInternal ? null : <ExternalLink className="ml-2 h-4 w-4" />}
                </a>
              </div>
            ))}
          </div>

          <AdBanner />

          {/* Disclaimer */}
          <div className="mt-16 p-6 rounded-2xl bg-purple-900/20 border border-purple-500/20 text-center">
            <h4 className="text-white font-semibold mb-2">Disclaimer</h4>
            <p className="text-sm text-purple-300">
              The links provided above may be referral links. We may earn a commission if you sign up through these links. 
              Please do your own research before investing time or money into any platform.
            </p>
          </div>
        </main>
      </div>
    </PageTransition>
  )
}
