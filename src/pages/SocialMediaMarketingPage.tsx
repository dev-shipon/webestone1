import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Plus, 
  Share2, 
  Zap, 
  Target, 
  BarChart3, 
  MessageSquare, 
  Users, 
  PlayCircle,
  ArrowRight,
  TrendingUp,
  Search
} from "lucide-react";
import { MagneticButton } from "../components/ui/MagneticButton";

const processSteps = [
  { 
    title: "Insight planning", 
    desc: "Understanding your audience's behavior and planning content that resonates with their needs and interests." 
  },
  { 
    title: "Content Creation & Curation", 
    desc: "Developing visually stunning and engaging content tailored for each specific social platform." 
  },
  { 
    title: "Audience Engagement", 
    desc: "Proactive community management and interaction to build real connections and brand loyalty." 
  },
  { 
    title: "Performance Tracking & Optimization", 
    desc: "Continuous data analysis to refine strategies and maximize your social media ROI." 
  }
];

const faqs = [
  {
    q: "How does automation improve results?",
    a: "Automation allows for faster response times, more precise targeting, and 24/7 engagement, ensuring no opportunity is missed in the fast-paced social landscape."
  },
  {
    q: "Does automation replace creativity?",
    a: "No, automation handles repetitive tasks like scheduling and data collection, freeing up our creative team to focus on high-level strategy and unique storytelling."
  },
  {
    q: "How are paid campaigns managed?",
    a: "We use data-driven insights to optimize ad spend across platforms like Meta, LinkedIn, and TikTok, ensuring maximum reach and conversion for your budget."
  },
  {
    q: "Is competitor research included?",
    a: "Yes, we perform deep-dive competitor analysis to identify gaps, trends, and opportunities within your specific niche."
  }
];

const stats = [
  { label: "Engagement Rate", value: "3.5x", icon: <TrendingUp className="w-5 h-5 text-emerald-400" /> },
  { label: "Brand Reach", value: "2M+", icon: <Target className="w-5 h-5 text-blue-400" /> },
  { label: "Conversion Lift", value: "45%", icon: <BarChart3 className="w-5 h-5 text-purple-400" /> }
];

export default function SocialMediaMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="relative min-h-screen text-white pt-20 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-400 text-sm font-bold uppercase tracking-widest">
            <Zap className="w-4 h-4 fill-current" />
            Social Media Supremacy
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter uppercase">
            Social Media <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Marketing Service</span>
          </h1>
          <p className="text-neutral-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Connection that builds real growth. By combining strategy and creativity, 
            Webestone operates as a Social Media Marketing Agency that converts social engagement into steady, 
            measurable business growth.
          </p>
          <div className="pt-8">
            <Link to="/contact">
              <MagneticButton className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all">
                BOOK A DISCOVERY CALL
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 border border-white/10 rounded-[3rem] p-8 backdrop-blur-xl">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 border-r last:border-r-0 border-white/10 px-4">
                        <div className="p-3 rounded-2xl bg-white/5 mb-2">{stat.icon}</div>
                        <div className="text-4xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">How We Manage Social Growth</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-black/40 border border-white/10 hover:border-purple-500/30 transition-all flex flex-col items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-xl">
                    {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-neutral-900 group shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000" 
                    alt="Social Media Growth"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                        <Users className="w-6 h-6 text-blue-400" />
                        <div>
                            <div className="text-white font-bold">Real Connections</div>
                            <div className="text-neutral-400 text-xs">Community First Strategy</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Why Our Social Strategy <br />
                    <span className="text-purple-400">Stands Out</span>
                </h2>
                <div className="space-y-6">
                    {[
                        { title: "Local Market Expertise", desc: "Deep understanding of Bangladeshi and global audience behavior.", icon: <Globe className="text-blue-400 w-6 h-6" /> },
                        { title: "Content that Converts", desc: "Focused on turning engagement into direct business value and sales.", icon: <Target className="text-pink-400 w-6 h-6" /> },
                        { title: "AI-Enhanced Precision", desc: "Leveraging automation for 24/7 engagement and hyper-targeting.", icon: <Zap className="text-yellow-400 w-6 h-6" /> }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="mt-1">{item.icon}</div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-neutral-400 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 relative z-10 bg-neutral-900/30 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Social Growth FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left py-4 hover:text-purple-400 transition-colors"
                >
                  <span className="text-lg font-bold">{faq.q}</span>
                  <Plus className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-45 text-purple-400' : ''}`} />
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
        <div className="max-w-4xl mx-auto p-12 rounded-[4rem] bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-white/10 backdrop-blur-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Ready to dominate <br />
            <span className="text-purple-400">every feed?</span>
          </h2>
          <Link to="/contact">
            <MagneticButton className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
               Launch Your Strategy <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </Link>
        </div>
      </section>
    </main>
  );
}
