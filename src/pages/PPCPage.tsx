import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  Target, 
  Search, 
  BarChart3, 
  MousePointer2, 
  Zap, 
  DollarSign, 
  LineChart,
  ShieldCheck,
  ChevronRight,
  PieChart
} from "lucide-react";
import { useState } from "react";

const ppcServices = [
  {
    title: "Google Search Ads",
    description: "Kew jokhon apnar service khujche, thik tokhon-i apnar brand-ke top position-e niye asun.",
    icon: <Search className="w-6 h-6" />,
    color: "bg-blue-600"
  },
  {
    title: "Display Advertising",
    description: "Visual branding-er maddhome internet-er sobcheye boro website gulo-te apnar ad display korun.",
    icon: <PieChart className="w-6 h-6" />,
    color: "bg-orange-500"
  },
  {
    title: "Retargeting Campaigns",
    description: "Website visit kore kine jayni emon potential customer-der punaray apnar brand-er kache niye asun.",
    icon: <Target className="w-6 h-6" />,
    color: "bg-purple-600"
  },
  {
    title: "Shopping Ads",
    description: "E-commerce business-er jonno product image ar price soho direct Google shopping ads.",
    icon: <DollarSign className="w-6 h-6" />,
    color: "bg-emerald-600"
  }
];

const ppcStats = [
  { label: "Lower CPA", value: "35%", icon: <DollarSign className="w-5 h-5 text-emerald-400" /> },
  { label: "CTR Increase", value: "12x", icon: <MousePointer2 className="w-5 h-5 text-blue-400" /> },
  { label: "Total Managed Ad Spend", value: "৳50M+", icon: <ShieldCheck className="w-5 h-5 text-purple-400" /> }
];

export default function PPCPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#020617] pt-24 pb-20 relative overflow-hidden text-white">
      {/* Dynamic Background Noise & Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-emerald-500/5 rounded-full blur-[160px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-semibold mb-8 backdrop-blur-md"
          >
            <Zap className="w-4 h-4 fill-current" />
            High Intent Traffic Engine
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight"
          >
            Pay for <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent italic">Results</span>, <br />
            Not for Guesswork
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Amra apnar protita taka (৳) hisheb kori. Precision-targeted PPC campaign-er maddhome immediate traffic ar measurable ROI nishchit korun.
          </motion.p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {ppcStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="bg-slate-900/50 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-xl hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-3xl bg-white/5 mb-6">{stat.icon}</div>
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {ppcServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative group cursor-pointer"
            >
              <div className="h-full bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[3rem] p-10 backdrop-blur-md transition-all duration-500 group-hover:border-emerald-500/30 group-hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-[1.5rem] ${service.color} flex items-center justify-center text-white mb-8 shadow-2xl transform transition-transform group-hover:rotate-12`}>
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-6 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-3 font-bold text-emerald-400 group/btn">
                  Launch Campaign
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </div>
              </div>

              <AnimatePresence>
                {hoveredIdx === idx && (
                  <motion.div
                    layoutId="ppc-glow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-emerald-500/10 blur-[80px] -z-10 rounded-full"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Content Section: ROI Driven Process */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-white/5 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                Amader 4-Step <br />
                <span className="text-emerald-400">PPC Framework</span>
              </h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Keyword Intelligence", desc: "Highest intent search terms khuje ber kora hoy." },
                  { step: "02", title: "Creative Ad Copy", desc: "Emon vabe ad lekha hoy jeta user-ke click korte boddho kore." },
                  { step: "03", title: "Landing Page Sync", desc: "Ad-er sathe landing page match kore conversion rate barano hoy." },
                  { step: "04", title: "24/7 Optimization", desc: "Bidding strategy ar performance daily track ar improve kora hoy." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="text-3xl font-black text-white/10 group-hover:text-emerald-500/50 transition-colors">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800/40 rounded-3xl border border-white/10 p-4 backdrop-blur-3xl">
                <div className="flex items-center justify-between mb-8 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-sm font-mono text-slate-500 tracking-widest">REALTIME_ROAS_TRACKER</div>
                </div>
                
                <div className="space-y-6">
                  {[85, 60, 95].map((w, i) => (
                    <div key={i} className="space-y-2 px-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-400">Campaign Layer 0{i+1}</span>
                        <span className="text-emerald-400 font-bold">{w}% Efficiency</span>
                      </div>
                      <div className="h-3 w-full bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${w}%` }}
                          transition={{ duration: 1.5, delay: i * 0.2 }}
                          className="h-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]" 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-[2rem] text-center">
                  <div className="text-slate-400 text-sm uppercase mb-2">Estimated Monthly Revenue</div>
                  <div className="text-5xl font-black text-emerald-400">৳2,45,000+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
