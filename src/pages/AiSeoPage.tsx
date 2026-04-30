import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Plus } from "lucide-react";
// Note: Assets are imported but may need to be replaced with valid paths or placeholders
// import aiHeroImg from "../assets/ai_seo_hero.png";
// import aiStrategyImg from "../assets/ai_seo_strategy.png";

const aiHeroImg = "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop";
const aiStrategyImg = "https://images.unsplash.com/photo-1620712943543-bcc4638d9f8e?q=80&w=1965&auto=format&fit=crop";

export default function AiSeoPage() {
	const [activeFaq, setActiveFaq] = useState<number | null>(0);

	const faqs = [
		{
			question: "How is AI SEO different from traditional SEO?",
			answer:
				"AI SEO uses machine learning and data analysis to predict trends, understand user intent better, and automate complex tasks like keyword research and content optimization at scale.",
		},
		{
			question: "Will AI SEO make my website rank faster?",
			answer:
				"While SEO is always a long-term game, AI-driven strategies help identify high-impact opportunities quickly, allowing for faster adjustments and more efficient ranking improvements compared to manual methods.",
		},
		{
			question: "Is AI-generated content safe for Google ranking?",
			answer:
				"Google rewards high-quality, helpful content regardless of how it's produced. We use AI to enhance research and structure, but our expert human editors always refine the content to ensure it meets Google's E-E-A-T standards.",
		},
		{
			question: "Can AI help with technical SEO audits?",
			answer:
				"Yes, AI tools can scan thousands of pages in minutes to find broken links, duplicate content, and site speed issues that humans might miss, providing a more comprehensive technical foundation.",
		},
	];

	const workflowSteps = [
		{
			num: "1",
			title: "Data Collection",
			desc: "We use AI to gather vast amounts of data from search engines, competitors, and your own site's performance to build a solid foundation.",
		},
		{
			num: "2",
			title: "Predictive Analysis",
			desc: "Our AI models identify emerging keyword trends and content gaps, allowing us to stay ahead of the curve and your competitors.",
		},
		{
			num: "3",
			title: "Dynamic Optimization",
			desc: "We continuously refine content and meta-data based on real-time search engine algorithm changes and user behavior data.",
		},
		{
			num: "4",
			title: "Performance Tracking",
			desc: "AI-powered reporting provides deep insights into what's working and where to pivot, ensuring maximum ROI for your SEO investment.",
		},
	];

	const SectionHeading = ({
		topTitle,
		mainTitle,
		greenText,
	}: {
		topTitle: string;
		mainTitle: string;
		greenText?: string;
	}) => (
		<div className="inline-block mb-12 relative z-10 w-full text-center lg:text-left">
			<span className="text-neon-green font-mono text-sm tracking-widest uppercase block mb-4">
				{topTitle}
			</span>
			<h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-white relative inline-block">
				{mainTitle}{" "}
				{greenText && (
					<span className="text-neon-green relative inline-block">
						{greenText}
						<svg
							className="absolute w-full h-3 -bottom-2 text-neon-green/50 left-0"
							viewBox="0 0 200 9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.00025 6.99996C18.4475 2.66663 80.9167 -2.49997 197.99 1.99996"
								stroke="currentColor"
								strokeWidth="3"
								strokeLinecap="round"
							></path>
						</svg>
					</span>
				)}
			</h2>
		</div>
	);

	return (
		<main className="min-h-screen bg-black text-white pt-24 overflow-hidden">
			{/* 1. Hero / Split Header Layout */}
			<section className="relative z-10 border-b border-white/5">
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="bg-gradient-to-br from-indigo-600 to-purple-500 py-20 px-6 lg:px-16 flex flex-col justify-center">
						<motion.h1
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] uppercase text-white tracking-tighter"
						>
							AI-DRIVEN SEO: THE FUTURE OF SEARCH VISIBILITY
						</motion.h1>
					</div>

					<div className="relative min-h-[400px]">
						<img
							src={aiHeroImg}
							alt="AI SEO Hero"
							className="absolute inset-0 w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-indigo-900/30 mix-blend-overlay"></div>
						<div className="absolute inset-x-0 bottom-4 right-4 flex justify-end">
							<Link
								to="/contact"
								className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-500 hover:bg-[#87E65C] hover:text-black text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-1"
							>
								GET AI AUDIT
							</Link>
						</div>
					</div>
				</div>

				<div className="bg-neutral-950 text-white border-b border-white/5 py-20 px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<h2 className="text-3xl md:text-4xl font-black text-indigo-500 uppercase leading-snug tracking-tighter">
							WHY SETTLE FOR ANALOG SEO IN A DIGITAL AI WORLD?
						</h2>
						<p className="font-medium text-neutral-100 leading-relaxed text-lg">
							Traditional SEO is becoming obsolete. With search engines
							incorporating AI into their core algorithms, you need an AI-driven
							approach to maintain and grow your rankings.
						</p>
						<p className="font-medium text-neutral-100 leading-relaxed text-lg">
							At Webestone, we leverage cutting-edge artificial intelligence to
							decipher search patterns, optimize content with pinpoint accuracy,
							and deliver results that manual strategies simply can't match.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl p-2 bg-neutral-900"
					>
						<img
							src={aiStrategyImg}
							alt="AI SEO Strategy"
							className="w-full h-auto rounded-xl object-cover"
						/>
					</motion.div>
				</div>
			</section>

			{/* 2. Workflow Timeline Track */}
			<section className="py-24 px-6 relative z-10 bg-neutral-950 text-white border-b border-white/5">
				<div className="max-w-7xl mx-auto space-y-16">
					<div className="text-center relative">
						<SectionHeading
							topTitle="OUR AI PROCESS"
							mainTitle="The AI SEO"
							greenText="Success Loop"
						/>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative pt-8">
						<div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-px border-t border-dashed border-white/20 z-0"></div>

						{workflowSteps.map((step, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.1 }}
								className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
							>
								<div className="w-16 h-16 rounded-full bg-neutral-900 border-2 border-indigo-500/50 flex items-center justify-center text-xl font-bold text-indigo-400 mb-2">
									{step.num}
								</div>
								<h3 className="text-xl font-bold text-white border-b border-white/10 pb-3 w-full lg:w-3/4">
									{step.title}
								</h3>
								<p className="text-sm font-medium text-neutral-400 leading-relaxed">
									{step.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* 4. FAQs Section */}
			<section className="py-24 px-6 relative z-10 bg-black border-t border-white/5">
				<div className="max-w-4xl mx-auto space-y-16">
					<div className="text-center space-y-4 flex flex-col items-center">
						<SectionHeading
							topTitle="QUESTIONS & ANSWERS"
							mainTitle="FAQs about"
							greenText="AI SEO"
						/>
					</div>

					<div className="bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 md:p-10 divide-y divide-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
						{faqs.map((faq, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className="py-6"
							>
								<button
									onClick={() => setActiveFaq(activeFaq === i ? null : i)}
									className="w-full flex items-center justify-between gap-6 text-left group"
								>
									<div className="flex items-center gap-4">
										<div
											className={`w-8 h-8 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${
												activeFaq === i ?
													"bg-neon-green border-neon-green text-black rotate-180"
												:	"border-white/20 text-white group-hover:border-neon-green group-hover:text-neon-green"
											}`}
										>
											<Plus
												className={`w-4 h-4 transition-transform duration-300 ${
													activeFaq === i ? "rotate-45" : ""
												}`}
											/>
										</div>
										<h3
											className={`text-lg md:text-xl font-bold transition-colors ${
												activeFaq === i ? "text-white" : (
													"text-neutral-300 group-hover:text-white"
												)
											}`}
										>
											{faq.question}
										</h3>
									</div>
								</button>

								<AnimatePresence>
									{activeFaq === i && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3 }}
											className="overflow-hidden"
										>
											<p className="pt-6 pl-12 text-neutral-400 leading-relaxed font-medium">
												{faq.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
