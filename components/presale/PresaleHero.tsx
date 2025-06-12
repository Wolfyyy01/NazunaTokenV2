"use client"

import { Clock, Star, Zap } from "lucide-react"
import { useState, useEffect } from "react"

export default function PresaleHero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const presaleEndDate = new Date('2025-06-13')
    presaleEndDate.setDate(presaleEndDate.getDate() + 60)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = presaleEndDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const features = [
    { icon: Star, text: "50% Bonus Tokens" },
    { icon: Zap, text: "Early Access" },
    { icon: Clock, text: "Limited Time" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 mb-6">
          <span className="text-pink-400 font-semibold text-sm">🔥 PRESALE LIVE NOW</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Nazuna Token Presale</span>
        </h1>

        <p className="text-xl text-purple-200 dark:text-purple-200 light:text-gray-600 mb-8 max-w-3xl mx-auto">
          Join the exclusive presale and secure your NZNA tokens at the best price. Limited time offer with incredible
          bonuses for early supporters.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-purple-900/30 dark:bg-purple-900/30 light:bg-purple-100/50 px-4 py-2 rounded-full"
            >
              <feature.icon className="h-5 w-5 text-pink-400 dark:text-pink-400 light:text-purple-600" />
              <span className="text-purple-200 dark:text-purple-200 light:text-gray-700 font-medium">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Countdown Timer */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-purple-300 dark:text-purple-300 light:text-gray-600 mb-4">
            Presale Ends In:
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="token-card p-4 rounded-xl text-center">
                <div className="text-2xl md:text-3xl font-bold text-white dark:text-white light:text-gray-800 mb-1">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-purple-300 dark:text-purple-300 light:text-gray-600 capitalize">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
