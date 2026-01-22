<<<<<<< HEAD
import { Calendar, Gift, Lock, Zap } from "lucide-react"

const startDate = new Date("2025-06-13") 
const totalDays = 60
const phaseLength = 15 

function getTimelineStatus(phaseIndex: number) {
  const now = new Date()
  const phaseStart = new Date(startDate)
  phaseStart.setDate(startDate.getDate() + phaseIndex * phaseLength)
  const phaseEnd = new Date(phaseStart)
  phaseEnd.setDate(phaseStart.getDate() + phaseLength)

  if (now >= phaseEnd) return "completed"
  if (now >= phaseStart && now < phaseEnd) return "active"
  return "upcoming"
}

export default function PresaleInfo() {
  const features = [
    {
      icon: Gift,
      title: "Exclusive Bonuses",
      description:
        "Get up to 50% bonus tokens during the presale period. Early supporters receive the highest rewards.",
    },
    {
      icon: Lock,
      title: "Secure Smart Contracts",
      description:
        "All presale funds are secured by audited smart contracts. Your investment is protected by blockchain technology.",
    },
    {
      icon: Calendar,
      title: "Claimable After Presale",
      description:
        "Tokens will be claimable within 48 hours after the presale ends. Enjoy peace of mind with our transparent process.",
    },
  ]

  const timeline = [
    {
      phase: "Phase 1",
      duration: "Days 1-15",
      bonus: "50%",
      price: "0.05 POL",
    },
    {
      phase: "Phase 2",
      duration: "Days 16-30",
      bonus: "50%",
      price: "0.1 POL",
    },
    {
      phase: "Phase 3",
      duration: "Days 31-45",
      bonus: "50%",
      price: "0.2 POL",
    },
    {
      phase: "Phase 4",
      duration: "Days 46-60",
      bonus: "50%",
      price: "0.3 POL",
    },
  ].map((phase, index) => ({
    ...phase,
    status: getTimelineStatus(index),
  }))


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Features */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Presale Features</span>
          </h2>
          <p className="text-lg text-purple-200 dark:text-purple-200 light:text-gray-600">
            Why join the Nazuna Token presale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="token-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 light:bg-purple-100/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-white dark:text-white light:text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-purple-200 dark:text-purple-200 light:text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Presale Timeline */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Presale Timeline</span>
          </h2>
          <p className="text-lg text-purple-200 dark:text-purple-200 light:text-gray-600">
            Four phases with decreasing bonuses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((phase, index) => (
            <div
              key={index}
              className={`token-card p-6 rounded-2xl relative overflow-hidden ${phase.status === "active"
                ? "ring-2 ring-pink-500/50"
                : phase.status === "completed"
                  ? "opacity-75"
                  : "opacity-60"
                }`}
            >
              {phase.status === "active" && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  ACTIVE
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-800 mb-2">{phase.phase}</h3>
                <p className="text-purple-300 dark:text-purple-300 light:text-gray-600 text-sm mb-4">
                  {phase.duration}
                </p>

                <div className="space-y-3">
                  <div>
                    <span className="text-pink-400 dark:text-pink-400 light:text-purple-600 text-2xl font-bold">
                      +{phase.bonus}
                    </span>
                    <p className="text-purple-200 dark:text-purple-200 light:text-gray-600 text-sm">Bonus Tokens</p>
                  </div>

                  <div>
                    <span className="text-white dark:text-white light:text-gray-800 text-lg font-semibold">
                      {phase.price}
                    </span>
                    <p className="text-purple-200 dark:text-purple-200 light:text-gray-600 text-sm">per NZNA</p>
                  </div>
                </div>

                <div
                  className={`mt-4 px-3 py-1 rounded-full text-xs font-medium ${phase.status === "completed"
                    ? "bg-green-900/30 text-green-400"
                    : phase.status === "active"
                      ? "bg-pink-900/30 text-pink-400"
                      : "bg-gray-900/30 text-gray-400"
                    }`}
                >
                  {phase.status.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notice */}
      <div className="mt-16 token-card p-8 rounded-2xl border-2 border-yellow-500/30">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">Important Information</h3>
        <div className="space-y-3 text-purple-200 dark:text-purple-200 light:text-gray-600">
          <p>• Minimum purchase: 1POL </p>
          <p>• Tokens will be distributed within 48 hours after presale completion based claim page</p>
          <p>• All sales are final. Please ensure you understand the risks before participating</p>
          <p>• By participating, you agree to our Terms of Service and acknowledge the risks involved</p>
        </div>
      </div>
    </section>
  )
}
=======
import { Calendar, Gift, Lock, Zap } from "lucide-react"

const startDate = new Date("2025-06-13") 
const totalDays = 60
const phaseLength = 15 

function getTimelineStatus(phaseIndex: number) {
  const now = new Date()
  const phaseStart = new Date(startDate)
  phaseStart.setDate(startDate.getDate() + phaseIndex * phaseLength)
  const phaseEnd = new Date(phaseStart)
  phaseEnd.setDate(phaseStart.getDate() + phaseLength)

  if (now >= phaseEnd) return "completed"
  if (now >= phaseStart && now < phaseEnd) return "active"
  return "upcoming"
}

export default function PresaleInfo() {
  const features = [
    {
      icon: Gift,
      title: "Exclusive Bonuses",
      description:
        "Get up to 50% bonus tokens during the presale period. Early supporters receive the highest rewards.",
    },
    {
      icon: Lock,
      title: "Secure Smart Contracts",
      description:
        "All presale funds are secured by audited smart contracts. Your investment is protected by blockchain technology.",
    },
    {
      icon: Calendar,
      title: "Claimable After Presale",
      description:
        "Tokens will be claimable within 48 hours after the presale ends. Enjoy peace of mind with our transparent process.",
    },
  ]

  const timeline = [
    {
      phase: "Phase 1",
      duration: "Days 1-15",
      bonus: "50%",
      price: "0.05 POL",
    },
    {
      phase: "Phase 2",
      duration: "Days 16-30",
      bonus: "50%",
      price: "0.1 POL",
    },
    {
      phase: "Phase 3",
      duration: "Days 31-45",
      bonus: "50%",
      price: "0.2 POL",
    },
    {
      phase: "Phase 4",
      duration: "Days 46-60",
      bonus: "50%",
      price: "0.3 POL",
    },
  ].map((phase, index) => ({
    ...phase,
    status: getTimelineStatus(index),
  }))


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Features */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Presale Features</span>
          </h2>
          <p className="text-lg text-purple-200 dark:text-purple-200 light:text-gray-600">
            Why join the Nazuna Token presale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="token-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-purple-900/50 dark:bg-purple-900/50 light:bg-purple-100/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-pink-400 dark:text-pink-400 light:text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-white dark:text-white light:text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-purple-200 dark:text-purple-200 light:text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Presale Timeline */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Presale Timeline</span>
          </h2>
          <p className="text-lg text-purple-200 dark:text-purple-200 light:text-gray-600">
            Four phases with decreasing bonuses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((phase, index) => (
            <div
              key={index}
              className={`token-card p-6 rounded-2xl relative overflow-hidden ${phase.status === "active"
                ? "ring-2 ring-pink-500/50"
                : phase.status === "completed"
                  ? "opacity-75"
                  : "opacity-60"
                }`}
            >
              {phase.status === "active" && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  ACTIVE
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-800 mb-2">{phase.phase}</h3>
                <p className="text-purple-300 dark:text-purple-300 light:text-gray-600 text-sm mb-4">
                  {phase.duration}
                </p>

                <div className="space-y-3">
                  <div>
                    <span className="text-pink-400 dark:text-pink-400 light:text-purple-600 text-2xl font-bold">
                      +{phase.bonus}
                    </span>
                    <p className="text-purple-200 dark:text-purple-200 light:text-gray-600 text-sm">Bonus Tokens</p>
                  </div>

                  <div>
                    <span className="text-white dark:text-white light:text-gray-800 text-lg font-semibold">
                      {phase.price}
                    </span>
                    <p className="text-purple-200 dark:text-purple-200 light:text-gray-600 text-sm">per NZNA</p>
                  </div>
                </div>

                <div
                  className={`mt-4 px-3 py-1 rounded-full text-xs font-medium ${phase.status === "completed"
                    ? "bg-green-900/30 text-green-400"
                    : phase.status === "active"
                      ? "bg-pink-900/30 text-pink-400"
                      : "bg-gray-900/30 text-gray-400"
                    }`}
                >
                  {phase.status.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notice */}
      <div className="mt-16 token-card p-8 rounded-2xl border-2 border-yellow-500/30">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">Important Information</h3>
        <div className="space-y-3 text-purple-200 dark:text-purple-200 light:text-gray-600">
          <p>• Minimum purchase: 1POL </p>
          <p>• Tokens will be distributed within 48 hours after presale completion based claim page</p>
          <p>• All sales are final. Please ensure you understand the risks before participating</p>
          <p>• By participating, you agree to our Terms of Service and acknowledge the risks involved</p>
        </div>
      </div>
    </section>
  )
}
>>>>>>> 4868a2ef1f87d3468fb5c5bfeaf038c19f550435
