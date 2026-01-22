<<<<<<< HEAD
"use client"

import { TrendingUp, Users, Target, DollarSign } from "lucide-react"
import { useState, useEffect } from "react"
import axios from "axios"

export default function PresaleStats() {
    const [stats, setStats] = useState({
        raised: 0,
        target: 30000,
        participants: 0,
        tokensLeft: 2000000,
    })

    const progressPercentage = (stats.raised / stats.target) * 100

    const statsData = [
        {
            icon: DollarSign,
            label: "Raised",
            value: `$${stats.raised.toLocaleString()}`,
            subtext: `of $${stats.target.toLocaleString()} goal`,
        },
        {
            icon: Users,
            label: "Participants",
            value: stats.participants.toLocaleString(),
            subtext: "Early supporters",
        },
        {
            icon: Target,
            label: "Progress",
            value: `${progressPercentage.toFixed(1)}%`,
            subtext: "of target reached",
        },
        {
            icon: TrendingUp,
            label: "Tokens Left",
            value: `${(stats.tokensLeft / 1000000).toFixed(1)}M`,
            subtext: "NAZU available",
        },
    ]

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/presale-stats", )
                setStats(response.data)
            } catch (error) {
                console.error("Error fetching stats:", error)
            }
        }

        fetchStats()

        const interval = setInterval(fetchStats, 10000)

        return () => clearInterval(interval)
    }, [])


    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="gradient-text">Presale Progress</span>
                </h2>
                <p className="text-lg text-purple-200 dark:text-purple-200 light:text-gray-600">
                    Real-time presale statistics and progress tracking
                </p>
            </div>

            {/* Progress Bar */}
            <div className="max-w-4xl mx-auto mb-12">
                <div className="token-card p-8 rounded-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-purple-300 dark:text-purple-300 light:text-gray-700 font-medium">
                            Funding Progress
                        </span>
                        <span className="text-pink-400 dark:text-pink-400 light:text-purple-600 font-bold">
                            {progressPercentage.toFixed(1)}%
                        </span>
                    </div>
                    <div className="w-full bg-purple-900/30 dark:bg-purple-900/30 light:bg-purple-200/50 rounded-full h-4 mb-4">
                        <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-1000 relative overflow-hidden"
                            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                    </div>
                    <div className="flex justify-between text-sm text-purple-300 dark:text-purple-300 light:text-gray-600">
                        <span>${stats.raised.toLocaleString()} raised</span>
                        <span>${stats.target.toLocaleString()} goal</span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, index) => (
                    <div key={index} className="token-card p-6 rounded-2xl text-center">
                        <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 light:bg-purple-100/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <stat.icon className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
                        </div>
                        <div className="text-2xl font-bold text-white dark:text-white light:text-gray-800 mb-1">{stat.value}</div>
                        <div className="text-purple-300 dark:text-purple-300 light:text-gray-600 font-medium mb-1">
                            {stat.label}
                        </div>
                        <div className="text-sm text-purple-400 dark:text-purple-400 light:text-gray-500">{stat.subtext}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
=======
"use client"

import { TrendingUp, Users, Target, DollarSign } from "lucide-react"
import { useState, useEffect } from "react"
import axios from "axios"

export default function PresaleStats() {
    const [stats, setStats] = useState({
        raised: 0,
        target: 30000,
        participants: 0,
        tokensLeft: 2000000,
    })

    const progressPercentage = (stats.raised / stats.target) * 100

    const statsData = [
        {
            icon: DollarSign,
            label: "Raised",
            value: `$${stats.raised.toLocaleString()}`,
            subtext: `of $${stats.target.toLocaleString()} goal`,
        },
        {
            icon: Users,
            label: "Participants",
            value: stats.participants.toLocaleString(),
            subtext: "Early supporters",
        },
        {
            icon: Target,
            label: "Progress",
            value: `${progressPercentage.toFixed(1)}%`,
            subtext: "of target reached",
        },
        {
            icon: TrendingUp,
            label: "Tokens Left",
            value: `${(stats.tokensLeft / 1000000).toFixed(1)}M`,
            subtext: "NAZU available",
        },
    ]

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/presale-stats", )
                setStats(response.data)
            } catch (error) {
                console.error("Error fetching stats:", error)
            }
        }

        fetchStats()

        const interval = setInterval(fetchStats, 10000)

        return () => clearInterval(interval)
    }, [])


    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="gradient-text">Presale Progress</span>
                </h2>
                <p className="text-lg text-purple-200 dark:text-purple-200 light:text-gray-600">
                    Real-time presale statistics and progress tracking
                </p>
            </div>

            {/* Progress Bar */}
            <div className="max-w-4xl mx-auto mb-12">
                <div className="token-card p-8 rounded-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-purple-300 dark:text-purple-300 light:text-gray-700 font-medium">
                            Funding Progress
                        </span>
                        <span className="text-pink-400 dark:text-pink-400 light:text-purple-600 font-bold">
                            {progressPercentage.toFixed(1)}%
                        </span>
                    </div>
                    <div className="w-full bg-purple-900/30 dark:bg-purple-900/30 light:bg-purple-200/50 rounded-full h-4 mb-4">
                        <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-1000 relative overflow-hidden"
                            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                    </div>
                    <div className="flex justify-between text-sm text-purple-300 dark:text-purple-300 light:text-gray-600">
                        <span>${stats.raised.toLocaleString()} raised</span>
                        <span>${stats.target.toLocaleString()} goal</span>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, index) => (
                    <div key={index} className="token-card p-6 rounded-2xl text-center">
                        <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 light:bg-purple-100/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <stat.icon className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
                        </div>
                        <div className="text-2xl font-bold text-white dark:text-white light:text-gray-800 mb-1">{stat.value}</div>
                        <div className="text-purple-300 dark:text-purple-300 light:text-gray-600 font-medium mb-1">
                            {stat.label}
                        </div>
                        <div className="text-sm text-purple-400 dark:text-purple-400 light:text-gray-500">{stat.subtext}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
>>>>>>> 4868a2ef1f87d3468fb5c5bfeaf038c19f550435
