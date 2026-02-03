'use client'

// ATENTIE: Muta exportul de metadata in fisierul parinte (page.tsx sau layout.tsx)
// deoarece 'use client' nu permite export de metadata.
/*
export const metadata: Metadata = {
    title: "Whitepaper - Nazuna Token",
    description: "Technical whitepaper and ecosystem documentation for Nazuna Token (NZNA).",
}
*/

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, BookOpen, Target, Zap, Users, Shield, TrendingUp, Globe, Copy, Check } from "lucide-react"
import { constants } from "@/lib/constants"

export default function Whitepaper() {
    // State pentru butonul de copiere
    const [copied, setCopied] = useState(false)

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(constants.contract_address)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const sections = [
        {
            id: "abstract",
            title: "Abstract",
            icon: BookOpen,
            content: [
                "Nazuna Token ($NZNA) is a community-driven asset inspired by the 'Call of the Night' aesthetic, built for those who thrive in the digital moonlight.",
                "Unlike traditional memecoins that rely solely on hype, Nazuna aims to build a gamified ecosystem where holders (Hunters) earn their keep through activity, lore engagement, and community challenges.",
                "This document outlines the transition from our Genesis phase to a fully realized ecosystem on the Polygon network.",
            ],
        },
        {
            id: "problem",
            title: "Problem Statement",
            icon: Target,
            content: [
                "The Web3 space is saturated with 'pump and dump' tokens that offer no longevity or reason to hold beyond speculative greed.",
                "Communities are often treated as exit liquidity rather than participants.",
                "Nazuna Token seeks to fix this by distributing supply through merit and activity (Proof of Hunt) rather than just selling it to the highest bidder.",
            ],
        },
        {
            id: "solution",
            title: "Our Approach",
            icon: Zap,
            content: [
                "Fair Distribution: We rejected the traditional ICO model. Instead, we use 'Sprints' (via Zealy) and direct engagement to distribute tokens to active users.",
                "Gamified Utility: The token is designed to be the key to future game — a future mechanism for redeeming exclusive digital collectibles and rewards.",
                "Low Friction: Built on Polygon for negligible gas fees, ensuring that even small interactions are economically viable.",
            ],
        },
        {
            id: "distribution",
            title: "Distribution Mechanism",
            icon: TrendingUp, // Changed icon slightly to fit better
            content: [
                "The Genesis Airdrop has successfully distributed the initial supply to early adopters.",
                "Future distribution is algorithmic based on community seasons. We hold reserves for: Marketing, Liquidity Pool (LP), and Season 2 Rewards.",
                "There is no 'presale' price. The value of $NZNA is determined by the community and the utility we build together.",
                "Unclaimed tokens from expired airdrops are returned to the Community Treasury for future events.",
            ],
        }
    ];

    // Datele pentru tabelul Tokenomics (din imaginile tale)
    const tokenomicsTable = [
        {
            category: "Airdrop Genesis",
            percent: "10,00 %",
            amount: "1,000,000",
            role: "Reward for hunters on Zealy.",
            status: "Waiting"
        },
        {
            category: "Liquidity Pool (LP)",
            percent: "40,00 %",
            amount: "4,000,000",
            role: "Tokens to be paired with POL on Uniswap/QuickSwap.",
            status: "Waiting"
        },
        {
            category: "Marketing & Partners",
            percent: "20,00 %",
            amount: "2,000,000",
            role: "Payments for promotion, influencers and future contests.",
            status: "Waiting"
        },
        {
            category: "Team (Dev)",
            percent: "15,00 %",
            amount: "1,500,000",
            role: "Developer and founder allocation.",
            status: "Waiting"
        },
        {
            category: "Community & Rewards",
            percent: "15,00 %",
            amount: "1,500,000",
            role: "Reserves for Zealy Season 2 or in-game rewards.",
            status: "-"
        }
    ];

    const technicalSpecs = [
        { label: "Blockchain", value: "Polygon (PoS)" },
        { label: "Token Standard", value: "ERC-20" },
        { label: "Total Supply", value: "9,987,500 NZNA" }, // Actualizat conform sumei din tabel
        { label: "Launch Date", value: "January 2026" },
        // Smart Contract row is handled separately in JSX
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
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                <span className="gradient-text">Nazuna Whitepaper</span>
                            </h1>
                            <p className="text-lg text-purple-200">
                                Version 2.0 • January 2026
                            </p>
                        </div>
                    </div>
                </div>

                {/* Table of Contents */}
                <div className="token-card p-8 rounded-2xl mb-12 border border-purple-500/20 bg-purple-900/10">
                    <h2 className="text-2xl font-bold text-white mb-6">Table of Contents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <a href="#abstract" className="block text-purple-300 hover:text-pink-400 transition-colors">1. Abstract</a>
                            <a href="#problem" className="block text-purple-300 hover:text-pink-400 transition-colors">2. Problem Statement</a>
                            <a href="#solution" className="block text-purple-300 hover:text-pink-400 transition-colors">3. Our Solution</a>
                            <a href="#tokenomics" className="block text-purple-300 hover:text-pink-400 transition-colors">4. Tokenomics</a>
                        </div>
                        <div className="space-y-2">
                            <a href="#technology" className="block text-purple-300 hover:text-pink-400 transition-colors">5. Technology</a>
                            <a href="#governance" className="block text-purple-300 hover:text-pink-400 transition-colors">6. Governance</a>
                            <a href="#roadmap" className="block text-purple-300 hover:text-pink-400 transition-colors">7. Roadmap</a>
                            <a href="#team" className="block text-purple-300 hover:text-pink-400 transition-colors">8. Team</a>
                        </div>
                    </div>
                </div>

                {/* Main Sections */}
                <div className="space-y-12">
                    {sections.map((section) => (
                        <div key={section.id} id={section.id} className="token-card p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10">
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

                    {/* Technical Specifications with Copy Button */}
                    <div id="technology" className="token-card p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center mr-4">
                                <Shield className="h-6 w-6 text-pink-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Technical Specifications</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {technicalSpecs.map((spec, index) => (
                                <div key={index} className="flex justify-between items-center p-4 bg-purple-900/30 rounded-lg border border-purple-500/10">
                                    <span className="text-purple-300">{spec.label}</span>
                                    <span className="text-white font-semibold">{spec.value}</span>
                                </div>
                            ))}
                            {/* Smart Contract Row with Copy Button */}
                            <div className="flex justify-between items-center p-4 bg-purple-900/30 rounded-lg border border-purple-500/10 md:col-span-2">
                                <span className="text-purple-300">Smart Contract</span>
                                <div className="flex items-center gap-3">
                                    <span className="text-white font-mono text-sm sm:text-base">
                                        {constants.contract_address.slice(0, 6)}...{constants.contract_address.slice(-6)}
                                    </span>
                                    <button 
                                        onClick={handleCopyAddress}
                                        className="p-2 bg-purple-700/50 hover:bg-purple-600 rounded-md transition-all text-white"
                                        title="Copy Address"
                                    >
                                        {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tokenomics Table */}
                    <div id="tokenomics" className="token-card p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center mr-4">
                                <TrendingUp className="h-6 w-6 text-pink-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Tokenomics Model</h2>
                        </div>
                        <p className="text-purple-200 mb-6">
                            The Nazuna Token economic model focuses on sustainable community growth. 
                            Below is the breakdown of the token supply allocation.
                        </p>

                        <div className="overflow-x-auto rounded-xl border border-purple-500/20">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-purple-900/50 text-pink-400 text-sm uppercase tracking-wider">
                                    <tr>
                                        <th className="p-4 font-bold">Category</th>
                                        <th className="p-4 font-bold">Percent</th>
                                        <th className="p-4 font-bold">Tokens</th>
                                        <th className="p-4 font-bold hidden md:table-cell">Role / Scope</th>
                                        <th className="p-4 font-bold">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-purple-900/10 divide-y divide-purple-500/10 text-purple-100">
                                    {tokenomicsTable.map((row, index) => (
                                        <tr key={index} className="hover:bg-purple-900/20 transition-colors">
                                            <td className="p-4 font-medium">{row.category}</td>
                                            <td className="p-4 text-pink-300">{row.percent}</td>
                                            <td className="p-4 font-mono text-white">{row.amount}</td>
                                            <td className="p-4 text-sm text-purple-200 hidden md:table-cell">{row.role}</td>
                                            <td className="p-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium 
                                                    ${row.status === 'Waiting' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' : 'bg-gray-500/20 text-gray-300'}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* Total Row */}
                                    <tr className="bg-purple-900/40 font-bold border-t border-purple-500/30">
                                        <td className="p-4 text-white">TOTAL</td>
                                        <td className="p-4 text-pink-400">100,00 %</td>
                                        <td className="p-4 text-white font-mono">10,000,000</td>
                                        <td className="p-4 hidden md:table-cell"></td>
                                        <td className="p-4"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 md:hidden text-xs text-purple-400 italic">
                            * Scroll horizontally to view full details
                        </div>
                    </div>

                    {/* Governance */}
                    <div id="governance" className="token-card p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center mr-4">
                                <Users className="h-6 w-6 text-pink-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Governance</h2>
                        </div>
                        <p className="text-purple-200">
                            Nazuna Token operates on a "Soft Governance" model. As a solo-dev project, major technical decisions are handled by the creator, but community feedback gathered through Discord and X (Twitter) directly influences the roadmap. We listen to the Hunters.
                        </p>
                    </div>

                    {/* Roadmap */}
                    <div id="roadmap" className="token-card p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center mr-4">
                                <Globe className="h-6 w-6 text-pink-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Roadmap 2026</h2>
                        </div>
                        <div className="p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-800/30">
                            <ul className="space-y-3 text-purple-200">
                                <li className="flex items-start"><span className="text-green-400 mr-2">✓</span> Phase 1: Genesis Airdrop (Completed)</li>
                                <li className="flex items-start"><span className="text-yellow-400 mr-2">➜</span> Phase 2: Website 2.0 & Token Info (Current)</li>
                                <li className="flex items-start"><span className="text-purple-400 mr-2">•</span> Phase 3: The Vault (Beta) & Utility Testing</li>
                                <li className="flex items-start"><span className="text-purple-400 mr-2">•</span> Phase 4: Liquidity Pool Creation on Uniswap</li>
                                <li className="flex items-start"><span className="text-purple-400 mr-2">•</span> Phase 5: Strategic Partnerships & Season 2</li>
                            </ul>
                        </div>
                    </div>

                    {/* Team */}
                    <div id="team" className="token-card p-8 rounded-2xl border border-purple-500/20 bg-purple-900/10">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center mr-4">
                                <Users className="h-6 w-6 text-pink-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Team</h2>
                        </div>
                        <div className="text-purple-200 space-y-4">
                            <p>
                                Nazuna Token is developed by <strong>Wolfy01</strong>.
                            </p>
                            <p>
                                This is a passion project built by a solo developer. There is no VC funding, no hidden team, and no corporate agenda. Just code, anime, and community.
                            </p>
                            <p className="text-pink-400 italic mt-4">
                                "We walk the night together."
                            </p>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="token-card p-8 rounded-2xl border-2 border-yellow-500/30 bg-yellow-900/5">
                        <h2 className="text-2xl font-bold text-yellow-400 mb-6">Disclaimer</h2>
                        <div className="space-y-4 text-purple-200">
                            <p>
                                $NZNA is a community/utility token with no promise of financial return.
                                Cryptocurrencies are volatile and risky.
                            </p>
                            <p>
                                This whitepaper is a living document and may change as the project evolves. 
                                Always do your own research (DYOR).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}