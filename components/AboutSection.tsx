import { Box, Clock, Users } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: Box,
      title: "Decentralized",
      description:
        "Built on Polygon network, Nazuna Token is completely decentralized with no central authority controlling it.",
    },
    {
      icon: Clock,
      title: "Night-Optimized",
      description:
        "Our token thrives when the sun goes down.",
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Our nocturnal community decides the future of Nazuna Token through decentralized governance.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">About Nazuna Token</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
        <p className="text-lg text-purple-200 max-w-3xl mx-auto">
          Nazuna Token is more than just a cryptocurrency - it's a tribute to the night and the freedom it represents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="token-card p-8 rounded-2xl">
            <div className="w-16 h-16 bg-purple-900/50 rounded-xl flex items-center justify-center mb-6">
              <feature.icon className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-purple-200">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
