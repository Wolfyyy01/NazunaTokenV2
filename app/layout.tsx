import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Montserrat } from "next/font/google"
import "./globals.css"
import { constants } from "@/lib/constants"
import { ThirdwebProvider } from "thirdweb/react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import LoadingScreen from "@/components/LoadingScreen"
import AnnouncementBanner from "@/components/notifications/AnnouncementBanner"
import TelegramButton from "@/components/notifications/TelegramButton"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
})

export const viewport: Viewport ={
  themeColor: "#0f0a1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "Nazuna Token | Anime-Inspired Token on Polygon",
  description:
    "Nazuna Token (NZNA) is a memecoin built on Polygon, inspired by Nazuna Nanakusa from Call of the Night. Fuel your journey through Web3 with style, community, and night energy.",
  icons: {
    icon: typeof constants.logo === "string" ? constants.logo : constants.logo.src,
  },
  keywords: [
    "Nazuna Token",
    "NZNA",
    "Polygon",
    "anime crypto",
    "vampire token",
    "memecoin",
    "Web3 anime",
    "Call of the Night",
    "crypto project 2025"
  ],
  authors: [{ name: "Wolfy01" }],
  creator: "Wolfy01",
  openGraph: {
    title: "Nazuna Token — Built for the Night",
    description:
      "The Nazuna Token (NZNA) is an anime-powered memecoin running on Polygon. Stake your soul to the chain and join the nocturnal movement.",
    type: "website",
    locale: "en_US",
    url: constants.base_url,
    siteName: "Nazuna Token",
    images: [
      {
        url: `${constants.image_url}/logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Nazuna Token OpenGraph Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nazunatoken",
    title: "Nazuna Token | The Night Belongs to Us",
    description:
      "NZNA is a community-powered anime memecoin built for nocturnal Web3 warriors. Join the vibe.",
    images: [`${constants.image_url}/logo.jpg`],
  },
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className={`${poppins.className} min-h-screen bg-[#0f0a1a] text-[#f0e6ff] overflow-x-hidden`}>
        <ThirdwebProvider>
          <Navigation />
          {children}
          <Footer />
        </ThirdwebProvider>
      </body>
    </html>
  )
}
