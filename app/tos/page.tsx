
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Users, AlertTriangle, Scale } from "lucide-react";
import { constants } from "@/lib/constants";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Terms of Service - Nazuna Token",
  description: "Terms of Service and legal disclaimer for Nazuna Token.",
};

export default function TermsOfService() {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: Shield,
      content: [
        "By using the Nazuna Token website or interacting with the NZNA smart contract, you agree to these Terms of Service.",
        "If you do not agree, please discontinue use of the site and token immediately.",
        "These terms may change over time. Continued use means you accept the most recent version.",
      ],
    },
    {
      id: "definitions",
      title: "2. Definitions",
      icon: Users,
      content: [
        '"Nazuna Token" or "NZNA" refers to the ERC-20 token deployed on the Polygon blockchain.',
        '"Platform" refers to this informational website and the associated smart contract functionality.',
        '"User" means anyone who visits the site or interacts with the smart contract.',
        '"We", "us", or "the creator" refers to the solo developer behind Nazuna Token, not a registered business.',
      ],
    },
    {
      id: "eligibility",
      title: "3. Eligibility and Use",
      icon: AlertTriangle,
      content: [
        "You must be at least 18 years old to interact with the token or access this site.",
        "You are responsible for complying with the laws of your own jurisdiction regarding cryptocurrency use.",
        "We do not knowingly offer services to users from regions where crypto is banned or restricted.",
      ],
    },
    {
      id: "usage",
      title: "4. Token Use and Disclaimer",
      icon: Scale,
      content: [
        "NZNA is a memecoin and has no guaranteed utility, value, or financial return.",
        "This token is part of a public presale. Participation in the presale is voluntary, and purchase data (wallet address, amount contributed, and tokens allocated) is stored securely for distribution purposes.",
        "Token value is purely speculative. You are responsible for your own investment decisions.",
        "This is not an investment product. It is intended as a fun, experimental token built by a solo developer.",
        "We do not promise any roadmap completion, exchange listing, or long-term maintenance.",
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
            <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="text-lg text-purple-200">Last updated: May 2025</p>
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
                  <p key={index} className="text-purple-200 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Prohibited Use */}
          <div className="token-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">5. Prohibited Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-3">Do not use NZNA for:</h3>
                <ul className="space-y-2 text-purple-200">
                  <li>• Money laundering or financing illegal activities</li>
                  <li>• Circumventing financial regulations</li>
                  <li>• Exploiting smart contract vulnerabilities</li>
                  <li>• Any malicious or abusive behavior on the platform</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-3">Respect the ecosystem:</h3>
                <ul className="space-y-2 text-purple-200">
                  <li>• Do not spam Discord or other community channels</li>
                  <li>• Do not impersonate team members or mislead others</li>
                  <li>• Do not fork or clone the token to scam users</li>
                  <li>• Do not present Nazuna Token as financial advice</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="token-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">6. Disclaimer and Limitation of Liability</h2>
            <p className="text-purple-200 mb-4">
              Nazuna Token is offered “as is” without warranty. We make no guarantees about its availability, security, or future development.
            </p>
            <p className="text-purple-200 mb-4">
              By using this site or interacting with NZNA, you agree to hold us harmless for any losses, bugs, token price changes, or issues resulting from use.
            </p>
            <p className="text-pink-400 font-semibold">
              You assume full responsibility for all risks involved in owning or trading NZNA.
            </p>
          </div>

          {/* Contact */}
          <div className="token-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">7. Contact</h2>
            <p className="text-purple-200 mb-4">
              If you have any questions, feel free to reach out through the following channels:
            </p>
            <div className="space-y-2 text-purple-200 dark:text-purple-200 light:text-gray-600">
              <p>Discord: <a href={constants.discord_url} target="_blank">{constants.discord_url}</a></p>
              <p>Telegram: <a href={constants.telegram_url} target="_blank">@Nazunatoken</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
