import { constants } from "@/lib/constants"
import Image from "next/image"
import { LiaDiscord, LiaEnvelope, LiaTelegram, LiaTwitter } from "react-icons/lia"

export default function Footer() {
  const socialLinks = [
    { icon: LiaDiscord, name: "Discord", href: constants.discord_url },
    { icon: LiaTwitter, name: "Twitter", href: constants.twitter_url },
    { icon: LiaTelegram, name: "Telegram", href: constants.telegram_url },
    { icon: LiaEnvelope, name: "Email", href: `mailto:${constants.email}` },
  ]

  const footerLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/tos" },
    { label: "Whitepaper", href: "/whitepaper" },
  ]

  return (
    <footer className="bg-purple-900/30 border-t border-purple-800/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
              <Image
                src={constants.logo}
                alt="Nazuna Token Logo Footer"
              />
            </div>
            <span className="ml-2 text-2xl font-bold gradient-text">Nazuna Token</span>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="text-purple-300 hover:text-pink-400 transition">
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800/30 flex flex-col md:flex-row justify-between">
          <p className="text-purple-400 text-sm">© 2026 Nazuna Token. All rights reserved. With 💜 by Wolfy!</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-purple-300 hover:text-pink-400 text-sm transition">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
