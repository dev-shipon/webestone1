import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Plus } from "lucide-react";
// import wpDevHeroImg from "../assets/wp_dev_hero.png";
// import wpDevStrategyImg from "../assets/wp_dev_strategy.png";

const wpDevHeroImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop";
const wpDevStrategyImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop";

export default function WordpressDevelopmentPage() {
	const [activeFaq, setActiveFaq] = useState<number | null>(0);

	const faqs = [
		{
			question: "How long does it take to develop a custom WordPress site?",
			answer:
				"A custom WordPress website typically takes between 4 to 8 weeks, depending on the complexity of the design, features, and the amount of content.",
		},
		{
			question: "Will I be able to update the website myself?",
			answer:
				"Yes, we build our WordPress sites using intuitive, custom-tailored dashboards so you can easily update content, add pages, and manage your site without coding knowledge.",
		},
		{
			question: "Do you offer ongoing WordPress maintenance?",
			answer:
				"Absolutely. We offer complete support and maintenance packages, including regular updates, security monitoring, backups, and performance optimization.",
		},
		{
			question: "Can you optimize my existing WordPress site?",
			answer:
				"Yes, we offer audit, optimization, and redesign services tailored to improve the speed, security, and conversion rate of your current WordPress website.",
		},
	];

	const workflowSteps = [
		{
			num: "1",
			title: "Briefing",
			desc: "We begin by understanding your vision and requirements. This step ensures that every feature of your new website aligns perfectly with your business goals and audience needs.",
		},
		{
			num: "2",
			title: "Design",
			desc: "Our creative team crafts a unique, visually appealing design tailored to your brand. This phase focuses on user experience, ensuring your site is beautiful and functional.",
		},
		{
			num: "3",
			title: "Theme Development",
			desc: "We develop a dedicated WordPress theme based on the approved design. This step includes coding a responsive and optimized theme that enhances your site's performance and accessibility.",
		},
		{
			num: "4",
			title: "Testing",
			desc: "Rigorous testing ensures flawless functionality on all devices. We address any bugs rapidly, making it a seamless experience before deployment.",
		},
	];

	const partnerReasons = [
		{
			num: "1",
			title: "Quality and Excellence in Development",
			desc: "With several years of WordPress development experience, we assess your business requirements minutely to deliver excellent solutions. Quality is our top-most priority, and we maintain it across all verticals of web solutions to craft bespoke solutions.",
		},
		{
			num: "2",
			title: "Ongoing Support and Maintenance",
			desc: "Our services extend post-delivery of the web solution developed for your business. We ensure seamless performance and regularly update the website with the latest trends for the utmost value. No matter your time zone, you will get our desired support.",
		},
		{
			num: "3",
			title: "Performance Optimization for Speed and Efficiency",
			desc: "We employ the industry's best practices to ensure the efficient performance of your website. Along with developing fast-loading web pages, we design intuitive UI for easy and hassle-free navigation. Optimization also helps with high SERP rankings and accelerated lead collection.",
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
					<div className="bg-gradient-to-br from-blue-600 to-cyan-500 py-20 px-6 lg:px-16 flex flex-col justify-center">
						<motion.h1
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] uppercase text-white tracking-tighter"
						>
							WORDPRESS DEVELOPMENT THAT DRIVES GROWTH, NOT JUST CLICKS
						</motion.h1>
					</div>
					<div className="relative min-h-[400px]">
						<img
							src={wpDevHeroImg}
							alt="WordPress Development"
							className="absolute inset-0 w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay"></div>
						<div className="absolute inset-x-0 bottom-4 right-4 flex justify-end">
							<Link
								to="/contact"
								className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-[#87E65C] hover:text-black text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-1"
							>
								SCHEDULE CALL
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
						<h2 className="text-3xl md:text-4xl font-black text-blue-700 uppercase leading-snug tracking-tighter">
							YOUR BUSINESS DESERVES MORE THAN A BASIC WORDPRESS THEME
						</h2>
						<p className="font-medium text-neutral-100 leading-relaxed text-lg">
							It needs a clear strategy, exceptional performance, and the
							ability to scale with your ambition. Webestone brings all this
							together with expert WordPress web development services,
							custom-built for your brand, your objectives, and your future.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl p-2 bg-neutral-900"
					>
						<img
							src={wpDevStrategyImg}
							alt="Development strategy"
							className="w-full h-auto rounded-xl object-cover"
						/>
					</motion.div>
				</div>
			</section>

			{/* 2. Workflow Section */}
			<section className="py-24 px-6 bg-neutral-950 border-b border-white/5">
				<div className="max-w-7xl mx-auto space-y-16">
					<div className="text-center">
						<SectionHeading
							topTitle="OUR WORKFLOW"
							mainTitle="WordPress Development"
							greenText="Time Track"
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
						{workflowSteps.map((step, idx) => (
							<motion.div key={idx} className="flex flex-col space-y-4">
								<div className="w-16 h-16 rounded-full bg-neutral-900 border-2 border-purple-500/50 flex items-center justify-center text-xl font-bold text-purple-400">
									{step.num}
								</div>
								<h3 className="text-xl font-bold text-white">{step.title}</h3>
								<p className="text-sm text-neutral-400">{step.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* 3. Why Partner Up Section */}
			<section className="py-24 px-6 bg-black text-white">
				<div className="max-w-7xl mx-auto">
					<div className="bg-[#111111] border border-white/5 rounded-3xl p-8 lg:p-16">
						<h2 className="text-3xl md:text-5xl font-bold text-blue-400 text-center mb-16">
							Why Partner Up With Webestone?
						</h2>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							{partnerReasons.map((reason, idx) => (
								<div key={idx} className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
									<h3 className="text-xl font-bold mb-4">{reason.title}</h3>
									<p className="text-neutral-400 text-sm">{reason.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* 4. FAQs Section */}
			<section className="py-24 px-6 bg-black border-t border-white/5">
				<div className="max-w-4xl mx-auto space-y-16">
					<div className="text-center">
						<SectionHeading
							topTitle="QUESTIONS & ANSWERS"
							mainTitle="FAQs about our"
							greenText="WordPress Services"
						/>
					</div>
					<div className="bg-neutral-900/40 rounded-[2rem] p-6 md:p-10 divide-y divide-white/10">
						{faqs.map((faq, i) => (
							<div key={i} className="py-6">
								<button
									onClick={() => setActiveFaq(activeFaq === i ? null : i)}
									className="w-full flex items-center justify-between text-left group"
								>
									<h3 className="text-lg md:text-xl font-bold">{faq.question}</h3>
									<Plus className={`w-5 h-5 transition-transform ${activeFaq === i ? "rotate-45" : ""}`} />
								</button>
								<AnimatePresence>
									{activeFaq === i && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
										>
											<p className="pt-6 text-neutral-400">{faq.answer}</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
