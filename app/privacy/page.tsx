<<<<<<< HEAD
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
        "We do not collect any personal data such as your name or email.",
        "However, during the presale, we store wallet addresses and token purchase amounts in a local database. This is used solely to track contributions and ensure accurate token distribution.",
        "All blockchain data (including wallet addresses and transactions) is publicly available and stored on the Polygon network.",
        "Wallet connection is handled securely via thirdweb.com. We do not track wallet connection history or behavior.",
      ],
    },
    {
      id: "use",
      title: "2. How We Use Data",
      icon: Eye,
      content: [
        "We use the wallet addresses and amounts solely for tracking contributions and enabling the post-presale claim process.",
        "We do not sell, share, or use this data for any marketing or analytics purposes.",
        "You may see your wallet address and token amount displayed in our leaderboard or confirmation screens — this is for transparency only.",
      ],
    },
    {
      id: "thirdparty",
      title: "3. Third-Party Services",
      icon: Shield,
      content: [
        "We use thirdweb.com for wallet integration and smart contract interaction.",
        "Their own privacy policies apply when using their services (e.g. MetaMask, WalletConnect).",
        "We do not use analytics tools like Google Analytics or Facebook Pixel.",
      ],
    },
    {
      id: "cookies",
      title: "4. Cookies and Tracking",
      icon: Cookie,
      content: [
        "We do not use cookies or any browser-based tracking.",
        "If any cookies are set, they originate from third-party wallet providers.",
        "You can clear or block cookies from your browser settings at any time.",
      ],
    },
    {
      id: "security",
      title: "5. Security",
      icon: Shield,
      content: [
        "We follow best practices in our smart contracts and frontend code.",
        "No sensitive personal data is stored or processed by us.",
        "Presale data (wallets + amounts) is stored securely in a local database and not shared externally.",
        "Contracts are deployed on verified networks and code is publicly auditable.",
        "Wallet safety remains your responsibility; we will never ask for private keys or seed phrases.",
      ],
    },
    {
      id: "contact",
      title: "6. Contact Us",
      icon: Contact,
      content: [
        "If you have questions about your privacy or how the site works, contact us through:",
        `Discord: ${constants.discord_url}`,
        "Telegram: @nazunatoken",
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
          <p className="text-lg text-purple-200">Last updated: June 2025</p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} className="token-card p-8 rounded-2xl">
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
=======
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
        "We do not collect any personal data such as your name or email.",
        "However, during the presale, we store wallet addresses and token purchase amounts in a local database. This is used solely to track contributions and ensure accurate token distribution.",
        "All blockchain data (including wallet addresses and transactions) is publicly available and stored on the Polygon network.",
        "Wallet connection is handled securely via thirdweb.com. We do not track wallet connection history or behavior.",
      ],
    },
    {
      id: "use",
      title: "2. How We Use Data",
      icon: Eye,
      content: [
        "We use the wallet addresses and amounts solely for tracking contributions and enabling the post-presale claim process.",
        "We do not sell, share, or use this data for any marketing or analytics purposes.",
        "You may see your wallet address and token amount displayed in our leaderboard or confirmation screens — this is for transparency only.",
      ],
    },
    {
      id: "thirdparty",
      title: "3. Third-Party Services",
      icon: Shield,
      content: [
        "We use thirdweb.com for wallet integration and smart contract interaction.",
        "Their own privacy policies apply when using their services (e.g. MetaMask, WalletConnect).",
        "We do not use analytics tools like Google Analytics or Facebook Pixel.",
      ],
    },
    {
      id: "cookies",
      title: "4. Cookies and Tracking",
      icon: Cookie,
      content: [
        "We do not use cookies or any browser-based tracking.",
        "If any cookies are set, they originate from third-party wallet providers.",
        "You can clear or block cookies from your browser settings at any time.",
      ],
    },
    {
      id: "security",
      title: "5. Security",
      icon: Shield,
      content: [
        "We follow best practices in our smart contracts and frontend code.",
        "No sensitive personal data is stored or processed by us.",
        "Presale data (wallets + amounts) is stored securely in a local database and not shared externally.",
        "Contracts are deployed on verified networks and code is publicly auditable.",
        "Wallet safety remains your responsibility; we will never ask for private keys or seed phrases.",
      ],
    },
    {
      id: "contact",
      title: "6. Contact Us",
      icon: Contact,
      content: [
        "If you have questions about your privacy or how the site works, contact us through:",
        `Discord: ${constants.discord_url}`,
        "Telegram: @nazunatoken",
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
          <p className="text-lg text-purple-200">Last updated: June 2025</p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} className="token-card p-8 rounded-2xl">
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
>>>>>>> 4868a2ef1f87d3468fb5c5bfeaf038c19f550435
}