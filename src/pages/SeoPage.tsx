import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Plus, 
  Search, 
  Zap, 
  Target, 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  LineChart,
  ArrowRight
} from "lucide-react";
import { MagneticButton } from "../components/ui/MagneticButton";

const offers = [
  {
    title: "AI SEO Strategy",
    desc: "Predictive modeling and AI-driven insights to build a future-proof roadmap.",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    title: "AI Search Consultancy",
    desc: "Expert guidance on navigating the evolving landscape of AI-powered search.",
    icon: Search,
    color: "text-blue-400"
  },
  {
    title: "GEO SEO",
    desc: "Generative Engine Optimization to ensure your brand is cited by LLMs.",
    icon: Globe,
    color: "text-emerald-400"
  },
  {
    title: "AEO SEO",
    desc: "Answer Engine Optimization to dominate voice and direct-answer queries.",
    icon: Target,
    color: "text-rose-400"
  },
  {
    title: "Entity Optimization",
    desc: "Establishing authority through structured data and knowledge graph integration.",
    icon: ShieldCheck,
    color: "text-purple-400"
  },
  {
    title: "Technical SEO",
    desc: "Deep-level site health checks and performance optimization for crawlers.",
    icon: LineChart,
    color: "text-orange-400"
  },
  {
    title: "Digital PR",
    desc: "High-authority link building and brand mentions through strategic outreach.",
    icon: Globe,
    color: "text-cyan-400"
  },
  {
    title: "EverySearch Tracking",
    desc: "LLM performance tracking and visibility monitoring across all platforms.",
    icon: BarChart3,
    color: "text-pink-400"
  }
];

const steps = [
  { num: "1", title: "Research your niche", desc: "Deep-dive into market trends and competitor gaps using proprietary AI tools." },
  { num: "2", title: "Set up your team", desc: "Assigning dedicated experts to execute every facet of your customized strategy." },
  { num: "3", title: "Create a game plan", desc: "Mapping out a 12-month roadmap focused on sustainable organic growth." },
  { num: "4", title: "Review and scale", desc: "Continuous monitoring and rapid iteration to maximize your results." }
];

const faqs = [
  {
    q: "Why should I choose WebestOne?",
    a: "We specialize in next-gen AI-driven SEO that adapts to the evolving search landscape, including LLMs and generative search engines."
  },
  {
    q: "How does your SEO approach differ?",
    a: "Our strategy is built around clarity, authority, and adaptability, supported by continuous data analysis and AI-driven insights."
  },
  {
    q: "How long does SEO take to show results?",
    a: "Visibility improvements are typically seen within 3-6 months, depending on the niche, competition, and starting baseline."
  },
  {
    q: "Can you guarantee rankings?",
    a: "No reputable agency can guarantee #1 rankings, but we guarantee data-backed strategies that significantly improve visibility and high-intent traffic."
  }
];

export default function SeoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="relative min-h-screen text-white pt-20 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-bold border border-blue-500/30 uppercase tracking-widest">
            Dominating Search Results
          </span>
          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter uppercase">
            NEXT-GEN SEO BY <br />
            <span className="text-neon-green">WEBESTONE</span>
          </h1>
          <p className="text-neutral-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Data-driven, results-oriented SEO strategy and services. 
            Search visibility no longer works the way most businesses think it does.
          </p>
          <div className="pt-8">
            <Link to="/contact">
              <MagneticButton className="px-10 py-5 bg-neon-green text-black font-bold text-lg rounded-full shadow-[0_0_30px_rgba(0,255,157,0.3)] hover:shadow-[0_0_50px_rgba(0,255,157,0.5)] transition-all">
                GET STARTED NOW
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Offers Section */}
      <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">What We Offer</h2>
            <div className="w-24 h-1 bg-neon-green mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-black/40 border border-white/10 hover:border-neon-green/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${offer.color}`}>
                  <offer.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{offer.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {offer.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-12">
              Clear Steps, <br />
              <span className="text-neon-green text-3xl md:text-5xl">Clear Results</span>
            </h2>
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 font-bold group-hover:border-neon-green group-hover:text-neon-green transition-colors">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-neutral-900 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-neon-green/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-neon-green/10 rounded-full blur-[50px] animate-pulse"></div>
                <Search className="w-32 h-32 text-neon-green/50 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left py-4 hover:text-neon-green transition-colors"
                >
                  <span className="text-lg font-bold">{faq.q}</span>
                  <Plus className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-45 text-neon-green' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-neutral-400 pt-2 pb-4 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-neon-green/10 border border-white/10 backdrop-blur-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Ready to lead the <br />
            <span className="text-neon-green">automated world?</span>
          </h2>
          <Link to="/contact">
            <MagneticButton className="px-10 py-5 bg-neon-green text-black font-bold rounded-full hover:scale-105 transition-transform">
               Get Your Free Audit <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </MagneticButton>
          </Link>
        </div>
      </section>
    </main>
  );
}
