import PageTransition from "@/components/PageTransition"
import ShopList from "@/components/boxes/ShopList"
import InventoryList from "@/components/boxes/InventoryList"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Staking Boxes - Nazuna Token",
  description: "Acquire and stake boxes to earn passive NZNA token rewards. Higher rarity boxes provide better staking yields.",
};

export default function BoxesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Staking Boxes</span>
          </h1>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Acquire and stake boxes to earn passive NZNA token rewards. Higher rarity boxes provide better staking yields.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-8"></div>
        </div>

        {/* Shop Section */}
        <ShopList />

        {/* Inventory Section */}
        <InventoryList />
      </div>
    </PageTransition>
  )
}
