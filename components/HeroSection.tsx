"use client"
import { ArrowUp } from "lucide-react"
import Token3D from "./Token3D"
import { constants } from "@/lib/constants"

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Nazuna Token</span>
            <br />
            <span className="text-white">The Night Belongs to Us</span>
          </h1>
          <p className="text-lg text-purple-200 mb-8 max-w-lg">
            Inspired by Nazuna Nanakusa from Call of the Night, Nazuna Token is a decentralized cryptocurrency that
            thrives in the moonlight. Join our nocturnal community and embrace the power of the night.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={constants.discord_url} target="_blank" className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30">
              Discord
            </a>
            <a href="/whitepaper" className="px-8 py-3 rounded-full bg-transparent border-2 border-purple-500 text-purple-300 font-medium hover:bg-purple-900/30 transition-all duration-300">
              Whitepaper
            </a>
          </div>
          <div className="mt-10 flex items-center space-x-6">
            <div className="flex items-center">
              <div className="pulse-custom w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
              <span className="text-sm text-purple-300">Live on <a href={'https://polygonscan.com/address/'+constants.contract_address} target="_blank">Polygon</a> </span>
            </div>
            {/* Staking */}
            {/* <div className="flex items-center">
              <ArrowUp className="h-5 w-5 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300">Staking Available</span>
            </div> */}
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="floating">
            <Token3D />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-purple-900/30 blur-3xl -z-10"></div>
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-pink-900/30 blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  )
}
