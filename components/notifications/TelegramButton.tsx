"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { constants } from "@/lib/constants"

export default function TelegramButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="absolute bottom-16 right-0 w-72 bg-white dark:bg-[#1a0f2e] rounded-lg shadow-lg p-4 mb-2 border border-purple-300 dark:border-purple-800 animate-in fade-in slide-in-from-bottom-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800 dark:text-white flex items-center">
              <MessageCircle className="h-5 w-5 text-[#0088cc] mr-2" />
              Nazuna Token Telegram
            </h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Join our official Telegram group for:</p>

          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-[#0088cc] mr-2">•</span>
              <span>Presale distribution announcements</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0088cc] mr-2">•</span>
              <span>Wallet verification for token distribution</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0088cc] mr-2">•</span>
              <span>Live updates and community discussions</span>
            </li>
          </ul>

          <a
            href={constants.telegram_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#0088cc] hover:bg-[#0077b5] text-white font-medium py-2 px-4 rounded text-center transition-colors"
          >
            Join Telegram Group
          </a>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`rounded-full p-3 shadow-lg flex items-center justify-center transition-all duration-300 ${
          isExpanded ? "bg-white dark:bg-[#1a0f2e] text-[#0088cc]" : "bg-[#0088cc] text-white animate-pulse"
        }`}
        aria-label="Telegram notifications"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}
