import { constants } from "@/lib/constants";
import { LiaDiscord, LiaTelegram, LiaTwitter  } from "react-icons/lia";

export default function CommunitySection() {
  const socialLinks = [
    { icon: LiaDiscord , name: "Discord", href: constants.discord_url },
    { icon: LiaTwitter , name: "Twitter", href: constants.twitter_url },
    { icon: LiaTelegram , name: "Telegram", href: constants.telegram_url },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Join Our Nocturnal Community</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
        <p className="text-lg text-purple-200 max-w-3xl mx-auto">
          Connect with fellow night owls and stay updated on all Nazuna Token developments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            className="token-card p-6 rounded-xl text-center hover:bg-purple-900/50 transition"
          >
            <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <social.icon className="h-6 w-6 text-pink-400" />
            </div>
            <span className="text-white font-medium">{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
