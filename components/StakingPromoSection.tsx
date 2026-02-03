import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";

export default function StakingPromoSection() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-[#1a1528] to-purple-900/20 border border-purple-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-purple-500/40 transition-colors duration-500">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3 text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-3 h-3 mr-2" />
              Passive Income
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Stake Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Nazuna Boxes</span>
            </h2>
            <p className="text-lg text-purple-200 mb-8 max-w-xl mx-auto md:mx-0">
              Turn your collection into a yield-generating asset. Stake your boxes to earn NZNA tokens automatically. 
              Higher rarity boxes provide better APY!
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               <Link href="/boxes" className="inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 group-hover:scale-105 transform">
                  Start Staking Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>
               <Link href="/boxes" className="inline-flex items-center px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300">
                  View Inventory
               </Link>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="md:w-1/3 flex justify-center">
             <div className="relative w-48 h-48 transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl rotate-6 opacity-30 animate-pulse blur-sm"></div>
                <div className="absolute inset-0 bg-[#130f1e] border border-purple-500/50 rounded-2xl flex items-center justify-center shadow-2xl ring-1 ring-white/10">
                    <Layers className="w-20 h-20 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-[#1a1528] border border-purple-500/30 px-3 py-1 rounded-lg shadow-xl text-xs text-yellow-400 font-bold animate-bounce delay-100">
                    High APY
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#1a1528] border border-purple-500/30 px-3 py-1 rounded-lg shadow-xl text-xs text-green-400 font-bold animate-bounce delay-700">
                    Auto-Compound
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}