import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import PageTransition from "@/components/PageTransition"
import PresaleHero from "@/components/presale/PresaleHero"
import PresaleStats from "@/components/presale/PresaleStats"
import PresalePurchase from "@/components/presale/PresalePurchase"
import PresaleInfo from "@/components/presale/PresaleInfo"
import PaymentVerificationCard from "@/components/presale/PaymentVerificationCard"

export const metadata: Metadata = {
  title: "Presale - Nazuna Token",
  description:
    "Join the Nazuna Token presale and secure your tokens at the best price. Limited time offer with exclusive bonuses.",
}

export default function PresalePage() {
  return (
    <PageTransition>
      <Navigation />
      <main className="min-h-screen pt-24">
        <PresaleHero />
        <PresaleStats />
        <PaymentVerificationCard />
        <PresalePurchase />
        <PresaleInfo />
      </main>
      <Footer />
    </PageTransition>
  )
}
