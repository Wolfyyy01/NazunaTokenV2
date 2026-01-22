"use client"

import { useState, useEffect } from "react"
import { X, Bell, ExternalLink } from "lucide-react"
import Link from "next/link"
import { constants } from "@/lib/constants"

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [announcement, setAnnouncement] = useState({
    message: "Join our Telegram for presale distribution updates and announcements!",
    link: constants.telegram_url,
    isNew: true,
  })

  // Check local storage on mount to see if the banner was dismissed
  useEffect(() => {
    const bannerDismissed = localStorage.getItem("announcementBannerDismissed")
    const lastAnnouncementId = localStorage.getItem("lastAnnouncementId")

    // If banner was dismissed in the last 24 hours, don't show it
    if (bannerDismissed) {
      const dismissedTime = Number.parseInt(bannerDismissed)
      const currentTime = new Date().getTime()

      // Show again after 24 hours
      if (currentTime - dismissedTime < 24 * 60 * 60 * 1000) {
        setIsVisible(false)
      } else {
        // Reset if 24 hours passed
        localStorage.removeItem("announcementBannerDismissed")
      }
    }

    // Simulate fetching the latest announcement
    // In a real app, you would fetch this from an API
    const mockFetchAnnouncement = () => {
      const announcements = [
        {
          id: "1",
          message: "Join our Telegram for presale distribution updates and announcements!",
          link: constants.telegram_url,
          isNew: true,
        }
      ]

      // Get a random announcement for demo purposes
      const randomIndex = Math.floor(Math.random() * announcements.length)
      return announcements[randomIndex]
    }

    const latestAnnouncement = mockFetchAnnouncement()
    setAnnouncement(latestAnnouncement)

    // If this is a new announcement ID, show the banner even if it was dismissed before
    if (lastAnnouncementId !== latestAnnouncement.id) {
      setIsVisible(true)
      localStorage.setItem("lastAnnouncementId", latestAnnouncement.id || "")
    }
  }, [])

  const dismissBanner = () => {
    setIsVisible(false)
    localStorage.setItem("announcementBannerDismissed", new Date().getTime().toString())
  }

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-3 px-4 relative z-[60]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Bell className="h-5 w-5 mr-2 text-pink-300 animate-pulse" />
          <p className="text-sm md:text-base">
            {announcement.message}{" "}
            <Link
              href={announcement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-pink-300 hover:text-pink-200 inline-flex items-center"
            >
              Join now <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          </p>
        </div>
        <button
          onClick={dismissBanner}
          className="text-white/80 hover:text-white ml-2 p-1"
          aria-label="Dismiss announcement"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
