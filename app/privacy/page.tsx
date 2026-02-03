import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Cookie, Database, Contact } from "lucide-react";
import { constants } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy - Nazuna Token",
  description: "Privacy Policy and data protection information for Nazuna Token users.",
};

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "collection",
      title: "1. What We Collect",
      icon: Database,
      content: [
        "We do not collect any personal data such as your name, email, or physical address.",
        "To facilitate airdrops and community rewards, we may temporarily store wallet addresses and activity points (e.g., from Zealy or our platform) in our database to ensure accurate distribution of $NZNA.",
        "All blockchain transactions (including wallet addresses and transfers) are publicly available and permanently stored on the Polygon network.",
        "Wallet connection is handled securely via third-party providers. We do not track your private keys, seed phrases, or personal wallet behavior.",
      ],
    },
    {
      id: "use",
      title: "2. How We Use Data",
      icon: Eye,
      content: [
        "Wallet addresses are used solely for tracking community contributions, validating airdrop eligibility, and enabling future ecosystem features.",
        "We do not sell, trade, or share any collected data with marketing firms or third-party analytics companies.",
        "Public leaderboards may display truncated wallet addresses and token balances to maintain transparency within the Night Walkers community.",
      ],
    },
    {
      id: "thirdparty",
      title: "3. Third-Party Services",
      icon: Shield,
      content: [
        "We use Thirdweb for secure wallet integration and smart contract interactions.",
        "When connecting your wallet, the privacy policies of your specific provider (e.g., MetaMask, Rabby, Coinbase Wallet) apply.",
        "We intentionally avoid using invasive tracking tools like Google Analytics or Facebook Pixels to protect our Hunters' privacy.",
        "We use Vercel Analytics to monitor website performance and traffic patterns. This helps us ensure a smooth experience for all Hunters without collecting personally identifiable information (PII).",
        "Google Search Console is used to monitor our site's presence in search results. It provides us with anonymized data about how users find our lair.",
      ],
    },
    {
      id: "cookies",
      title: "4. Cookies and Tracking",
      icon: Cookie,
      content: [
        "Our website does not use tracking cookies for advertising or profiling.",
        "Essential technical cookies may be set by your wallet provider or the decentralized infrastructure to maintain your session.",
        "You can manage or block these cookies through your browser settings at any time.",
        "Vercel Analytics is designed to be privacy-friendly and typically does not use invasive cookies to track you across the web."
      ],
    },
    {
      id: "security",
      title: "5. Security",
      icon: Shield,
      content: [
        "We follow industry best practices for our smart contracts and frontend security.",
        "No sensitive personal data is ever stored by us. Your security is on-chain.",
        "Our smart contracts are deployed on verified networks and are open for public audit.",
        "Important: Wallet safety is your responsibility. Nazuna Token team members will NEVER ask for your private keys or seed phrases.",
      ],
    },
    {
      id: "contact",
      title: "6. Contact Us",
      icon: Contact,
      content: [
        "If you have questions about your privacy or the Night Walkers ecosystem, join us through:",
        `Discord: ${constants.discord_url}`,
        `Telegram: ${constants.telegram_url}`,
        `Twitter: ${constants.twitter_url}`,
        `Email: ${constants.email}`,
      ],
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-lg text-purple-200">Last updated: January 2026</p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} className="token-card p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center mr-4">
                  <section.icon className="h-6 w-6 text-pink-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.content.map((paragraph, index) => (
                  <p key={index} className="text-purple-200 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}