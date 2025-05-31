import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import TokenomicsSection from "@/components/TokenomicsSection"
import RoadmapSection from "@/components/RoadmapSection"
import HowToBuySection from "@/components/HowToBuySection"
import CommunitySection from "@/components/CommunitySection"
import PageTransition from "@/components/PageTransition"
import LoadingScreen from "@/components/LoadingScreen"

export default function Home() {
  return (
    <PageTransition>
      <main>

        <LoadingScreen />
        <HeroSection />
        <AboutSection />
        <TokenomicsSection />
        <RoadmapSection />
        <HowToBuySection />
        <CommunitySection />
      </main>
    </PageTransition>
  )
}
