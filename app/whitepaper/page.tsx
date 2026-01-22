<<<<<<< HEAD
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, BookOpen, Target, Zap, Users, Shield, TrendingUp, Globe } from "lucide-react"
import { constants } from "@/lib/constants"
import PageTransition from "@/components/PageTransition"

export const metadata: Metadata = {
    title: "Whitepaper - Nazuna Token",
    description: "Technical whitepaper and comprehensive documentation for Nazuna Token cryptocurrency project.",
}

export default function Whitepaper() {
    const sections = [
        {
            id: "abstract",
            title: "Abstract",
            icon: BookOpen,
            content: [
                "Nazuna Token (NZNA) is a community-driven memecoin inspired by the anime character Nazuna Nanakusa from 'Call of the Night'.",
                "It was created for fun, exploration of anime x crypto themes, and potential utility within side projects such as staking or community events.",
                "This whitepaper presents the current state of the project, technical foundations, tokenomics, and goals — not guarantees.",
            ],
        },
        {
            id: "problem",
            title: "Problem Statement",
            icon: Target,
            content: [
                "Most memecoins offer no real community engagement or functionality beyond speculative trading.",
                "Nazuna Token aims to explore lightweight integrations with actual utility (staking, rewards, integrations with apps) while keeping the anime theme front and center.",
                "It avoids overpromising and focuses on transparency and experimentation without misleading users.",
            ],
        },
        {
            id: "solution",
            title: "Our Approach",
            icon: Zap,
            content: [
                "The project is built on Polygon for fast and low-cost transactions, deployed using thirdweb contracts (unmodified).",
                "There is no central dashboard or platform — interaction is done through the smart contract and frontends built by the creator.",
                "Future staking functionality is planned post-launch, with transparent rules and rewards, but only if community interest grows.",
            ],
        },
        {
            id: "presale",
            title: "Presale Structure",
            icon: Download,
            content: [
                "Nazuna Token is currently in a limited presale phase, split into 4 rounds over 60 days. Each round offers decreasing bonuses to early supporters.",
                "Participants can contribute in POL (Polygon native token) via our website. Purchases are recorded securely in a local database for accurate distribution.",
                "After the presale ends, all tokens will be claimable through the official claim page using the same wallet used to purchase.",
                "Any unclaimed tokens may be burned or redistributed based on community feedback.",
                "Token price increases slightly each phase to reward early adoption and help stabilize initial liquidity.",
            ],
        }

    ];


    const technicalSpecs = [
        { label: "Blockchain", value: "Polygon (ERC-20 compatible)" },
        { label: "Total Supply", value: constants.total_supply },
        { label: "Decimals", value: "18" },
        { label: "Smart Contract", value: constants.contract_address },
        { label: "Presale Range", value: "0.05 – 0.3 POL" },
        { label: "Platform", value: "Deployed via thirdweb.com" },
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
                                <span className="gradient-text">Nazuna Token Whitepaper</span>
                            </h1>
                            <p className="text-lg text-purple-200 dark:text-purple-200 light:text-gray-600">
                                Version 1.0 • May 2025
                            </p>
                        </div>
                        {/* <button className="mt-6 md:mt-0 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex items-center">
                            <Download className="h-5 w-5 mr-2" />
                            Download PDF
                        </button> */}
                    </div>
                </div>

                {/* Table of Contents */}
                <div className="token-card p-8 rounded-2xl mb-12">
                    <h2 className="text-2xl font-bold text-white dark:text-white mb-6 light:text-gray-800">Table of Contents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <a href="#abstract" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                1. Abstract
                            </a>
                            <a href="#problem" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                2. Problem Statement
                            </a>
                            <a href="#solution" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                3. Our Solution
                            </a>
                            <a href="#tokenomics" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                4. Tokenomics
                            </a>
                        </div>
                        <div className="space-y-2">
                            <a href="#technology" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                5. Technology
                            </a>
                            <a href="#governance" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                6. Governance
                            </a>
                            <a href="#governance" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                7. Roadmap
                            </a>
                            <a href="#team" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                8. Team & Advisors
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Sections */}
                <div className="space-y-12">
                    {sections.map((section) => (
                        <div key={section.id} id={section.id} className="token-card p-8 rounded-2xl">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mr-4 light:bg-purple-100/80">
                                    <section.icon className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800">{section.title}</h2>
                            </div>
                            <div className="space-y-4">
                                {section.content.map((paragraph, index) => (
                                    <p key={index} className="text-purple-200 dark:text-purple-200 leading-relaxed light:text-gray-600">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Technical Specifications */}
                    <div id="technology" className="token-card p-8 rounded-2xl">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mr-4 light:bg-purple-100/80">
                                <Shield className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800">
                                Technical Specifications
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {technicalSpecs.map((spec, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center p-4 bg-purple-900/30 dark:bg-purple-900/30 rounded-lg light:bg-purple-100/50"
                                >
                                    <span className="text-purple-300 dark:text-purple-300 light:text-gray-700">{spec.label}</span>
                                    <span className="text-white dark:text-white font-semibold light:text-gray-800">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tokenomics */}
                    <div id="tokenomics" className="token-card p-8 rounded-2xl">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mr-4 light:bg-purple-100/80">
                                <TrendingUp className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800">Tokenomics Model</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-purple-200 dark:text-purple-200 light:text-gray-600">
                                The Nazuna Token economic model is designed to incentivize long-term holding, community participation,
                                and ecosystem growth through carefully balanced token distribution and utility mechanisms.
                                A portion of the supply is allocated to presale participants, recorded transparently for fair distribution.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-pink-400 dark:text-pink-400 mb-3 light:text-purple-600">
                                        Distribution Breakdown:
                                    </h3>
                                    <ul className="space-y-2 text-purple-200 dark:text-purple-200 light:text-gray-600">
                                        {constants.tokenomicsData.map((item, index) => (
                                            <li key={index}>
                                                <span className="mr-2">•</span>
                                                {item.percentage}% - {item.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-pink-400 dark:text-pink-400 mb-3 light:text-purple-600">
                                        Utility Features:
                                    </h3>
                                    <ul className="space-y-2 text-purple-200 dark:text-purple-200 light:text-gray-600">
                                        <li>• Transparent token allocation</li>
                                        <li>• (Planned) staking rewards system</li>
                                        <li>• Fun integrations with other projects</li>
                                        <li>• Community giveaways and Discord-based perks</li>
                                        <li>• Not intended as a financial instrument</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Governance */}
                    <div id="governance" className="token-card p-8 rounded-2xl">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mr-4 light:bg-purple-100/80">
                                <Users className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800">
                                Decentralized Governance
                            </h2>
                        </div>
                        <div className="space-y-4 text-purple-200 dark:text-purple-200 light:text-gray-600">
                            <p className="text-purple-200">
                                Currently, Nazuna Token has no DAO or governance system. Any future decisions (such as token burns or staking rules) may be proposed informally on Discord or Twitter and voted manually by community members using off-chain tools.
                            </p>

                            {/* <p>
                                Nazuna Token implements a decentralized autonomous organization (DAO) structure that gives token holders
                                direct control over the project's future development and key decisions.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-purple-900/50 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-3 light:bg-purple-100/80">
                                        <span className="text-2xl font-bold text-pink-400 dark:text-pink-400 light:text-purple-600">1</span>
                                    </div>
                                    <h4 className="font-semibold text-white dark:text-white mb-2 light:text-gray-800">Proposal</h4>
                                    <p className="text-sm">Community members submit improvement proposals</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-purple-900/50 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-3 light:bg-purple-100/80">
                                        <span className="text-2xl font-bold text-pink-400 dark:text-pink-400 light:text-purple-600">2</span>
                                    </div>
                                    <h4 className="font-semibold text-white dark:text-white mb-2 light:text-gray-800">Voting</h4>
                                    <p className="text-sm">Token holders vote on proposals with weighted voting power</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-purple-900/50 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-3 light:bg-purple-100/80">
                                        <span className="text-2xl font-bold text-pink-400 dark:text-pink-400 light:text-purple-600">3</span>
                                    </div>
                                    <h4 className="font-semibold text-white dark:text-white mb-2 light:text-gray-800">Implementation</h4>
                                    <p className="text-sm">Approved proposals are automatically executed via smart contracts</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Global Vision */}
                    <div className="token-card p-8 rounded-2xl">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mr-4 light:bg-purple-100/80">
                                <Globe className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800">Vision & Future</h2>
                        </div>
                        <div className="space-y-4 text-purple-200 dark:text-purple-200 light:text-gray-600">
                            <p>
                                Our vision extends beyond a simple cryptocurrency to create a comprehensive ecosystem that bridges the
                                gap between anime culture and decentralized finance. We aim to become the premier platform for
                                anime-inspired digital assets and community-driven experiences.
                            </p>
                            <div className="mt-6 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-800/30">
                                <h3 className="text-lg font-semibold text-pink-400 dark:text-pink-400 mb-3 light:text-purple-600">
                                    Roadmap:
                                </h3>

                                <ul className="space-y-2 text-purple-200">
                                    <li>• Q2 2025: Rebuild website</li>
                                    <li>• Q3 2025: Launch token info site, build Discord tools</li>
                                    <li>• Q4 2025: Introduce staking and limited NFT support</li>
                                    <li>• 2026: Explore deeper integrations with other mini projects (e.g. games)</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    {/* Team */}
                    <div id="team" className="token-card p-8 rounded-2xl">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center mr-4">
                                <Users className="h-6 w-6 text-pink-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Team & Community</h2>
                        </div>
                        <div className="space-y-4 text-purple-200">
                            <p>
                                Nazuna Token is developed and maintained by <strong>Wolfy01</strong>, a solo developer passionate about web3,
                                anime, and building cool things on the internet.
                            </p>
                            <ul className="space-y-1">
                                <li>• Frontend: Next.js + Tailwind</li>
                                <li>• Blockchain: Polygon</li>
                                <li>• Community: Discord management and development handled directly</li>
                            </ul>
                            <p>
                                While there is no formal team or VC backing, the project is supported by a small but enthusiastic community
                                across Discord and Twitter.
                            </p>
                            <p className="italic text-pink-400">
                                If you'd like to contribute (dev/design/community), feel free to reach out — it’s an open and friendly project!
                            </p>
                        </div>
                    </div>


                    {/* Disclaimer */}
                    <div className="token-card p-8 rounded-2xl border-2 border-yellow-500/30">
                        <h2 className="text-2xl font-bold text-yellow-400 mb-6">Important Disclaimer</h2>
                        <div className="space-y-4 text-purple-200 dark:text-purple-200 light:text-gray-600">
                            <p>
                                This whitepaper is for informational purposes only and does not constitute investment advice, financial
                                advice, trading advice, or any other sort of advice. You should not treat any of the whitepaper's
                                content as such.
                            </p>
                            <p>
                                Cryptocurrency investments carry significant risk, including the potential for total loss of capital.
                                Past performance does not guarantee future results. Please conduct your own research and consult with
                                financial advisors before making investment decisions.
                            </p>
                            <p className="font-semibold text-yellow-400">
                                Nazuna Token is a utility token and should not be considered a security or investment contract.
                            </p>
                            <p className="text-yellow-400">
                                Participation in the presale is voluntary and non-refundable. Ensure you are using the correct wallet address and understand the risks before contributing.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
=======
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, BookOpen, Target, Zap, Users, Shield, TrendingUp, Globe } from "lucide-react"
import { constants } from "@/lib/constants"
import PageTransition from "@/components/PageTransition"

export const metadata: Metadata = {
    title: "Whitepaper - Nazuna Token",
    description: "Technical whitepaper and comprehensive documentation for Nazuna Token cryptocurrency project.",
}

export default function Whitepaper() {
    const sections = [
        {
            id: "abstract",
            title: "Abstract",
            icon: BookOpen,
            content: [
                "Nazuna Token (NZNA) is a community-driven memecoin inspired by the anime character Nazuna Nanakusa from 'Call of the Night'.",
                "It was created for fun, exploration of anime x crypto themes, and potential utility within side projects such as staking or community events.",
                "This whitepaper presents the current state of the project, technical foundations, tokenomics, and goals — not guarantees.",
            ],
        },
        {
            id: "problem",
            title: "Problem Statement",
            icon: Target,
            content: [
                "Most memecoins offer no real community engagement or functionality beyond speculative trading.",
                "Nazuna Token aims to explore lightweight integrations with actual utility (staking, rewards, integrations with apps) while keeping the anime theme front and center.",
                "It avoids overpromising and focuses on transparency and experimentation without misleading users.",
            ],
        },
        {
            id: "solution",
            title: "Our Approach",
            icon: Zap,
            content: [
                "The project is built on Polygon for fast and low-cost transactions, deployed using thirdweb contracts (unmodified).",
                "There is no central dashboard or platform — interaction is done through the smart contract and frontends built by the creator.",
                "Future staking functionality is planned post-launch, with transparent rules and rewards, but only if community interest grows.",
            ],
        },
        {
            id: "presale",
            title: "Presale Structure",
            icon: Download,
            content: [
                "Nazuna Token is currently in a limited presale phase, split into 4 rounds over 60 days. Each round offers decreasing bonuses to early supporters.",
                "Participants can contribute in POL (Polygon native token) via our website. Purchases are recorded securely in a local database for accurate distribution.",
                "After the presale ends, all tokens will be claimable through the official claim page using the same wallet used to purchase.",
                "Any unclaimed tokens may be burned or redistributed based on community feedback.",
                "Token price increases slightly each phase to reward early adoption and help stabilize initial liquidity.",
            ],
        }

    ];


    const technicalSpecs = [
        { label: "Blockchain", value: "Polygon (ERC-20 compatible)" },
        { label: "Total Supply", value: constants.total_supply },
        { label: "Decimals", value: "18" },
        { label: "Smart Contract", value: constants.contract_address },
        { label: "Presale Range", value: "0.05 – 0.3 POL" },
        { label: "Platform", value: "Deployed via thirdweb.com" },
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
                                <span className="gradient-text">Nazuna Token Whitepaper</span>
                            </h1>
                            <p className="text-lg text-purple-200 dark:text-purple-200 light:text-gray-600">
                                Version 1.0 • May 2025
                            </p>
                        </div>
                        {/* <button className="mt-6 md:mt-0 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex items-center">
                            <Download className="h-5 w-5 mr-2" />
                            Download PDF
                        </button> */}
                    </div>
                </div>

                {/* Table of Contents */}
                <div className="token-card p-8 rounded-2xl mb-12">
                    <h2 className="text-2xl font-bold text-white dark:text-white mb-6 light:text-gray-800">Table of Contents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <a href="#abstract" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                1. Abstract
                            </a>
                            <a href="#problem" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                2. Problem Statement
                            </a>
                            <a href="#solution" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                3. Our Solution
                            </a>
                            <a href="#tokenomics" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                4. Tokenomics
                            </a>
                        </div>
                        <div className="space-y-2">
                            <a href="#technology" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                5. Technology
                            </a>
                            <a href="#governance" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                6. Governance
                            </a>
                            <a href="#governance" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                7. Roadmap
                            </a>
                            <a href="#team" className="block text-purple-300 hover:text-pink-400 transition-colors">
                                8. Team & Advisors
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Sections */}
                <div className="space-y-12">
                    {sections.map((section) => (
                        <div key={section.id} id={section.id} className="token-card p-8 rounded-2xl">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mr-4 light:bg-purple-100/80">
                                    <section.icon className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800">{section.title}</h2>
                            </div>
                            <div className="space-y-4">
                                {section.content.map((paragraph, index) => (
                                    <p key={index} className="text-purple-200 dark:text-purple-200 leading-relaxed light:text-gray-600">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Technical Specifications */}
                    <div id="technology" className="token-card p-8 rounded-2xl">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mr-4 light:bg-purple-100/80">
                                <Shield className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800">
                                Technical Specifications
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {technicalSpecs.map((spec, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center p-4 bg-purple-900/30 dark:bg-purple-900/30 rounded-lg light:bg-purple-100/50"
                                >
                                    <span className="text-purple-300 dark:text-purple-300 light:text-gray-700">{spec.label}</span>
                                    <span className="text-white dark:text-white font-semibold light:text-gray-800">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tokenomics */}
                    <div id="tokenomics" className="token-card p-8 rounded-2xl">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mr-4 light:bg-purple-100/80">
                                <TrendingUp className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800">Tokenomics Model</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-purple-200 dark:text-purple-200 light:text-gray-600">
                                The Nazuna Token economic model is designed to incentivize long-term holding, community participation,
                                and ecosystem growth through carefully balanced token distribution and utility mechanisms.
                                A portion of the supply is allocated to presale participants, recorded transparently for fair distribution.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-pink-400 dark:text-pink-400 mb-3 light:text-purple-600">
                                        Distribution Breakdown:
                                    </h3>
                                    <ul className="space-y-2 text-purple-200 dark:text-purple-200 light:text-gray-600">
                                        {constants.tokenomicsData.map((item, index) => (
                                            <li key={index}>
                                                <span className="mr-2">•</span>
                                                {item.percentage}% - {item.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-pink-400 dark:text-pink-400 mb-3 light:text-purple-600">
                                        Utility Features:
                                    </h3>
                                    <ul className="space-y-2 text-purple-200 dark:text-purple-200 light:text-gray-600">
                                        <li>• Transparent token allocation</li>
                                        <li>• (Planned) staking rewards system</li>
                                        <li>• Fun integrations with other projects</li>
                                        <li>• Community giveaways and Discord-based perks</li>
                                        <li>• Not intended as a financial instrument</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Governance */}
                    <div id="governance" className="token-card p-8 rounded-2xl">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mr-4 light:bg-purple-100/80">
                                <Users className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800">
                                Decentralized Governance
                            </h2>
                        </div>
                        <div className="space-y-4 text-purple-200 dark:text-purple-200 light:text-gray-600">
                            <p className="text-purple-200">
                                Currently, Nazuna Token has no DAO or governance system. Any future decisions (such as token burns or staking rules) may be proposed informally on Discord or Twitter and voted manually by community members using off-chain tools.
                            </p>

                            {/* <p>
                                Nazuna Token implements a decentralized autonomous organization (DAO) structure that gives token holders
                                direct control over the project's future development and key decisions.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-purple-900/50 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-3 light:bg-purple-100/80">
                                        <span className="text-2xl font-bold text-pink-400 dark:text-pink-400 light:text-purple-600">1</span>
                                    </div>
                                    <h4 className="font-semibold text-white dark:text-white mb-2 light:text-gray-800">Proposal</h4>
                                    <p className="text-sm">Community members submit improvement proposals</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-purple-900/50 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-3 light:bg-purple-100/80">
                                        <span className="text-2xl font-bold text-pink-400 dark:text-pink-400 light:text-purple-600">2</span>
                                    </div>
                                    <h4 className="font-semibold text-white dark:text-white mb-2 light:text-gray-800">Voting</h4>
                                    <p className="text-sm">Token holders vote on proposals with weighted voting power</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-purple-900/50 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-3 light:bg-purple-100/80">
                                        <span className="text-2xl font-bold text-pink-400 dark:text-pink-400 light:text-purple-600">3</span>
                                    </div>
                                    <h4 className="font-semibold text-white dark:text-white mb-2 light:text-gray-800">Implementation</h4>
                                    <p className="text-sm">Approved proposals are automatically executed via smart contracts</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Global Vision */}
                    <div className="token-card p-8 rounded-2xl">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mr-4 light:bg-purple-100/80">
                                <Globe className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-white dark:text-white light:text-gray-800">Vision & Future</h2>
                        </div>
                        <div className="space-y-4 text-purple-200 dark:text-purple-200 light:text-gray-600">
                            <p>
                                Our vision extends beyond a simple cryptocurrency to create a comprehensive ecosystem that bridges the
                                gap between anime culture and decentralized finance. We aim to become the premier platform for
                                anime-inspired digital assets and community-driven experiences.
                            </p>
                            <div className="mt-6 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-800/30">
                                <h3 className="text-lg font-semibold text-pink-400 dark:text-pink-400 mb-3 light:text-purple-600">
                                    Roadmap:
                                </h3>

                                <ul className="space-y-2 text-purple-200">
                                    <li>• Q2 2025: Rebuild website</li>
                                    <li>• Q3 2025: Launch token info site, build Discord tools</li>
                                    <li>• Q4 2025: Introduce staking and limited NFT support</li>
                                    <li>• 2026: Explore deeper integrations with other mini projects (e.g. games)</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    {/* Team */}
                    <div id="team" className="token-card p-8 rounded-2xl">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-900/50 rounded-xl flex items-center justify-center mr-4">
                                <Users className="h-6 w-6 text-pink-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Team & Community</h2>
                        </div>
                        <div className="space-y-4 text-purple-200">
                            <p>
                                Nazuna Token is developed and maintained by <strong>Wolfy01</strong>, a solo developer passionate about web3,
                                anime, and building cool things on the internet.
                            </p>
                            <ul className="space-y-1">
                                <li>• Frontend: Next.js + Tailwind</li>
                                <li>• Blockchain: Polygon</li>
                                <li>• Community: Discord management and development handled directly</li>
                            </ul>
                            <p>
                                While there is no formal team or VC backing, the project is supported by a small but enthusiastic community
                                across Discord and Twitter.
                            </p>
                            <p className="italic text-pink-400">
                                If you'd like to contribute (dev/design/community), feel free to reach out — it’s an open and friendly project!
                            </p>
                        </div>
                    </div>


                    {/* Disclaimer */}
                    <div className="token-card p-8 rounded-2xl border-2 border-yellow-500/30">
                        <h2 className="text-2xl font-bold text-yellow-400 mb-6">Important Disclaimer</h2>
                        <div className="space-y-4 text-purple-200 dark:text-purple-200 light:text-gray-600">
                            <p>
                                This whitepaper is for informational purposes only and does not constitute investment advice, financial
                                advice, trading advice, or any other sort of advice. You should not treat any of the whitepaper's
                                content as such.
                            </p>
                            <p>
                                Cryptocurrency investments carry significant risk, including the potential for total loss of capital.
                                Past performance does not guarantee future results. Please conduct your own research and consult with
                                financial advisors before making investment decisions.
                            </p>
                            <p className="font-semibold text-yellow-400">
                                Nazuna Token is a utility token and should not be considered a security or investment contract.
                            </p>
                            <p className="text-yellow-400">
                                Participation in the presale is voluntary and non-refundable. Ensure you are using the correct wallet address and understand the risks before contributing.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
>>>>>>> 4868a2ef1f87d3468fb5c5bfeaf038c19f550435
