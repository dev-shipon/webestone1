import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Typically, for SEO, it takes 3-6 months for significant growth. However, for Paid Ads (PPC) and SMM, you can start seeing results within the first month of campaign launch.",
  },
  {
    question: "Do you offer custom marketing plans?",
    answer: "Yes, every business is unique. We build customized growth engines based on your industry, target audience, and business goals rather than using generic packages.",
  },
  {
    question: "What is a Free Marketing Audit?",
    answer: "It's a comprehensive review of your current digital presence. We analyze your website, SEO, and social media to find gaps and show you where your budget is being wasted.",
  },
  {
    question: "How do you track success?",
    answer: "We focus on revenue and conversions, not just likes and shares. We provide detailed monthly reports showing lead growth, traffic quality, and ROI.",
  },
  {
    question: "Which industries do you specialize in?",
    answer: "While we work with various sectors, we have extensive experience in E-commerce, Ed-Tech, Real Estate, and NGOs across Bangladesh and globally.",
  },
];

function FAQItem({ faq, index }: { faq: any; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border-b border-white/5 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-neon-green' : 'text-white group-hover:text-neutral-300'}`}>
          {faq.question}
        </span>
        <div className={`p-2 rounded-lg bg-white/5 border border-white/10 transition-all ${isOpen ? 'bg-neon-green text-black' : 'text-neutral-500'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-neutral-400 leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="text-neon-green">Questions</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Everything you need to know about growing your brand with WeBestOne.
            </p>
          </motion.div>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
