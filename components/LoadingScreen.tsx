
"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { constants } from "@/lib/constants"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f0a1a] dark:bg-[#0f0a1a] light:bg-purple-50"
        >
          <div className="relative">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Image 
                  src={constants.logo}
                  alt="Nazuna Token Logo"
                />
              </div>
            </motion.div>

            {/* Pulsing circle behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-500/30 blur-md"
              />
            </div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold gradient-text mb-2">Nazuna Token</h2>
              <p className="text-purple-300 dark:text-purple-300 light:text-purple-600">
                Embracing the night...
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mt-8 max-w-[200px] mx-auto"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}