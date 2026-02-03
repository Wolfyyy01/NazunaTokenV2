export default function RoadmapSection() {
  const roadmapPhases = [
    {
      phase: 1,
      title: "Genesis Airdrop",
      description:
        "Distribution of initial supply to early adopters and active community members via Zealy sprints. (Completed)",
      quarter: "Q1 2026",
    },
    {
      phase: 2,
      title: "Website 2.0 & Token Info",
      description:
        "Launch of the new website, updated whitepaper, and detailed tokenomics disclosure. Building the foundation. (Current)",
      quarter: "Q1 2026",
    },
    {
      phase: 3,
      title: "The Vault & Utility",
      description:
        "Beta launch of 'The Vault' and testing of utility mechanisms. Gamified ecosystem engagement begins.",
      quarter: "Q3 2026",
    },
    {
      phase: 4,
      title: "Liquidity Pool Creation",
      description:
        "Official listing and liquidity pool creation on Uniswap/QuickSwap. Opening the market for everyone.",
      quarter: "Q4 2026",
    },
  ];

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Our Nocturnal Journey</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
        <p className="text-lg text-purple-200 max-w-3xl mx-auto">
          Follow our path as we illuminate the crypto space with Nazuna Token.
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 -ml-0.5"></div>

        {/* Timeline items */}
        <div className="space-y-12 md:space-y-0">
          {roadmapPhases.map((phase, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""} group`}
            >
              <div className={`md:w-1/2 px-6 py-4 md:py-12 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                <div className="token-card p-6 rounded-xl">
                  <div className={`flex items-center mb-2 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center ${index % 2 === 1 ? "md:ml-3 md:mr-0" : "mr-3"}`}
                    >
                      <span className="text-white font-bold">{phase.phase}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <p className="text-purple-200">{phase.description}</p>
                  <div className="mt-4 text-sm text-pink-400 font-medium">{phase.quarter}</div>
                </div>
              </div>
              <div className="hidden md:block w-1/2 px-6 py-4 md:py-12">
                <div className="h-full flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-pink-500 border-4 border-purple-900/50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
