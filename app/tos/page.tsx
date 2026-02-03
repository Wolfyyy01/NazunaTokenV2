import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Users, AlertTriangle, Scale } from "lucide-react";
import { constants } from "@/lib/constants";

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
        "By using the Nazuna Token website or interacting with the $NZNA smart contract, you agree to these Terms of Service.",
        "If you do not agree, please discontinue use of the site and token immediately.",
        "These terms may change as the Night Walkers ecosystem evolves. Continued use means you accept the most recent version.",
      ],
    },
    {
      id: "definitions",
      title: "2. Definitions",
      icon: Users,
      content: [
        '"Nazuna Token" or "$NZNA" refers to the ERC-20 token deployed on the Polygon blockchain.',
        '"Platform" refers to this website, the smart contracts, and any associated community tools.',
        '"User" or "Hunter" means anyone who visits the site or interacts with the $NZNA ecosystem.',
        '"We", "us", or "the creator" refers to the solo developer behind Nazuna Token, operating this as an experimental community project.',
      ],
    },
    {
      id: "eligibility",
      title: "3. Eligibility and Use",
      icon: AlertTriangle,
      content: [
        "You must be at least 18 years old to interact with the token or access this site.",
        "You are solely responsible for complying with the laws of your jurisdiction regarding cryptocurrency and digital tokens.",
        "We use Vercel Analytics and Google Search Console to monitor platform performance and search visibility. By using the site, you acknowledge this anonymized data collection.",
      ],
    },
    {
      id: "usage",
      title: "4. Token Use and Disclaimer",
      icon: Scale,
      content: [
        "$NZNA is a community-driven token and does not guarantee any utility, financial return, or profit.",
        "Airdrops and rewards are distributed based on community activity (e.g., Zealy). Eligibility is determined at our sole discretion.",
        "Token value is purely speculative. You are responsible for any risks associated with blockchain transactions.",
        "This is an experimental project. We do not promise roadmap completion, specific exchange listings, or long-term maintenance.",
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
                  <p key={index} className="text-purple-200 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Prohibited Use */}
          <div className="token-card p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10">
            <h2 className="text-2xl font-bold text-white mb-6">5. Prohibited Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-3">Do not use $NZNA for:</h3>
                <ul className="space-y-2 text-purple-200">
                  <li>• Money laundering or illegal activities</li>
                  <li>• Exploiting smart contract vulnerabilities</li>
                  <li>• Botting or manipulating community events</li>
                  <li>• Any malicious behavior against the ecosystem</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-3">Respect the Hunt:</h3>
                <ul className="space-y-2 text-purple-200">
                  <li>• No spamming in community channels</li>
                  <li>• No impersonating team members</li>
                  <li>• No presenting $NZNA as financial advice</li>
                  <li>• No creating fake clones to scam others</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="token-card p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10">
            <h2 className="text-2xl font-bold text-white mb-6">6. Limitation of Liability</h2>
            <p className="text-purple-200 mb-4">
              Nazuna Token is provided “as is”. We make no guarantees about uptime, security, or token price. 
            </p>
            <p className="text-purple-200 mb-4">
              By interacting with the platform, you agree to hold the creator harmless for any losses, bugs, or blockchain-related issues.
            </p>
            <p className="text-pink-400 font-bold italic">
              You assume 100% responsibility for your digital assets.
            </p>
          </div>

          {/* Contact */}
          <div className="token-card p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10">
            <h2 className="text-2xl font-bold text-white mb-6">7. Contact</h2>
            <p className="text-purple-200 mb-4">
              Questions regarding the Night Walkers rules? Reach out:
            </p>
            <div className="space-y-2 text-purple-200">
              <p>Discord: <a href={constants.discord_url} target="_blank" className="text-pink-400 hover:underline">{constants.discord_url}</a></p>
              <p>Telegram: <a href={constants.telegram_url} target="_blank" className="text-pink-400 hover:underline">{constants.telegram_url}</a></p>
              <p>Twitter: <a href={constants.twitter_url} target="_blank" className="text-pink-400 hover:underline">{constants.twitter_url}</a></p>
              <p>Email: <a href={`mailto:${constants.email}`} className="text-pink-400 hover:underline">{constants.email}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}