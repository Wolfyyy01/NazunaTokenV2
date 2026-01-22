import { constants } from "@/lib/constants"
import { MessageCircle, Camera, Shield, AlertTriangle, ExternalLink, Users } from "lucide-react"
import Link from "next/link"

export default function PaymentVerificationCard() {
  const verificationSteps = [
    {
      step: 1,
      title: "Complete Your Purchase",
      description: "Send POL to the presale contract and wait for transaction confirmation",
      icon: Shield,
    },
    {
      step: 2,
      title: "Take a Screenshot",
      description: "Capture your transaction hash and payment confirmation from PolygonScan",
      icon: Camera,
    },
    {
      step: 3,
      title: "Join Our Community",
      description: "Enter our Telegram or Discord and post your payment proof",
      icon: MessageCircle,
    },
    {
      step: 4,
      title: "Get Verified",
      description: "Our team will verify your payment and ensure token distribution",
      icon: Users,
    },
  ]

  const communityLinks = [
    {
      name: "Telegram",
      icon: MessageCircle,
      url: constants.telegram_url,
      color: "bg-[#0088cc] hover:bg-[#0077b5]",
      description: "Join our main community",
    },
    {
      name: "Discord",
      icon: Users,
      url: constants.discord_url,
      color: "bg-[#5865F2] hover:bg-[#4752C4]",
      description: "Chat with the community",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto">
        {/* Main Alert Card */}
        <div className="token-card p-8 rounded-2xl border-2 border-yellow-500/30 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 mb-8">
          <div className="flex items-start mb-6">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                Important: Payment Verification Required
              </h2>
              <p className="text-yellow-200 text-lg leading-relaxed">
                To ensure smooth token distribution and avoid any issues, please verify your payment by posting proof in
                our official community channels.
              </p>
            </div>
          </div>

          {/* Warning Message */}
          <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-4 mb-6">
            <div className="flex items-center mb-2">
              <Shield className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-semibold">Why Verification Matters</span>
            </div>
            <ul className="text-yellow-200 text-sm space-y-1 ml-7">
              <li>• Prevents token distribution errors</li>
              <li>• Ensures you receive the correct bonus amount</li>
              <li>• Provides backup proof of your purchase</li>
              <li>• Helps our team track all transactions</li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communityLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-between group`}
              >
                <div className="flex items-center">
                  <link.icon className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">{link.name}</div>
                    <div className="text-sm opacity-90">{link.description}</div>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Verification Steps */}
        <div className="token-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-800 mb-6 text-center">
            Payment Verification Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verificationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white dark:text-white light:text-gray-800 mb-2">{step.title}</h4>
                <p className="text-purple-200 dark:text-purple-200 light:text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* What to Include */}
          <div className="mt-8 p-6 bg-purple-900/20 dark:bg-purple-900/20 light:bg-purple-100/30 rounded-xl">
            <h4 className="text-lg font-bold text-white dark:text-white light:text-gray-800 mb-4 flex items-center">
              <Camera className="h-5 w-5 mr-2 text-pink-400" />
              What to Include in Your Screenshot
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-pink-400 dark:text-pink-400 light:text-purple-600 mb-2">
                  Required Information:
                </h5>
                <ul className="text-purple-200 dark:text-purple-200 light:text-gray-600 text-sm space-y-1">
                  <li>• Transaction hash (0x...)</li>
                  <li>• POL amount sent</li>
                  <li>• Your wallet address</li>
                  <li>• Timestamp of transaction</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-pink-400 dark:text-pink-400 light:text-purple-600 mb-2">
                  Helpful Tips:
                </h5>
                <ul className="text-purple-200 dark:text-purple-200 light:text-gray-600 text-sm space-y-1">
                  <li>• Use PolygonScan for verification</li>
                  <li>• Include your username/handle</li>
                  <li>• Mention expected token amount</li>
                  <li>• Be patient for team response</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg">
              <Shield className="h-5 w-5 mr-2" />
              Secure Your Token Distribution Today
            </div>
            <p className="text-purple-300 dark:text-purple-300 light:text-gray-600 text-sm mt-2">
              Join thousands of verified NZNA token holders
            </p>
          </div>
        </div>

        {/* Additional Security Notice */}
        <div className="mt-6 token-card p-6 rounded-2xl border border-blue-500/30 bg-blue-900/10">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-blue-400 font-semibold mb-2">Security Reminder</h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                Only share your transaction hash and payment proof in our official channels. Never share your private
                keys or seed phrases. Our team will never ask for sensitive wallet information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
