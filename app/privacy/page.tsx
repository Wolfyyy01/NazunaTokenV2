import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Cookie, Database, Contact } from "lucide-react";
import { constants } from "@/lib/constants";
import PageTransition from "@/components/PageTransition";

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
                "We do not collect any personal data. We do not ask for your name, email, or store any wallet information on our servers.",
                "All blockchain data (including wallet addresses and transactions) is publicly available and stored on the Polygon blockchain.",
                "Wallet connection is handled securely via thirdweb.com. We do not store or track any wallet connection history.",
            ],
        },
        {
            id: "use",
            title: "2. How We Use Data",
            icon: Eye,
            content: [
                "Since we do not collect personal information, we do not use it. Simple as that.",
                "We may display public blockchain data, such as balances or transaction history, directly from the blockchain.",
            ],
        },
        {
            id: "thirdparty",
            title: "3. Third-Party Services",
            icon: Shield,
            content: [
                "We use thirdweb.com for wallet integration and smart contract interaction.",
                "Their own privacy policies apply when using their services (e.g. MetaMask or WalletConnect).",
                "We do not use analytics tools like Google Analytics or Facebook Pixel.",
            ],
        },
        {
            id: "cookies",
            title: "4. Cookies and Tracking",
            icon: Cookie,
            content: [
                "We do not use cookies or tracking tools.",
                "If any cookies are set, they are from third-party providers (e.g. wallet UI frameworks).",
                "You can clear or block cookies from your browser settings at any time.",
            ],
        },
        {
            id: "security",
            title: "5. Security",
            icon: Shield,
            content: [
                "We follow best practices in our smart contracts and frontend code.",
                "No sensitive user data is ever stored or processed.",
                "Contracts are deployed on verified networks (Polygon) and code is open source.",
                "Wallet safety remains your responsibility; we do not ask for login credentials.",
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
