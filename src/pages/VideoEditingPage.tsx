import {
	motion,
	AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function VideoEditingPage() {
	// FAQs Data
	const faqs = [
		{
			question: "What does a video production service include?",
			answer:
				"Video production encompasses every activity that will be carried out to produce a video. Whether it's a full-length film, a marketing video, TVC, or a social video or even a music video, the process will be the same. You can expect some tweaks with the specifics.",
		},
		{
			question: "What are some fine examples of video production?",
			answer:
				"Examples include corporate promotional videos, product demonstrations, customer testimonials, event highlights, animated explainer videos, and social media reels.",
		},
		{
			question: "What can be some key aspects of video production service?",
			answer:
				"Key aspects include pre-production (scripting, storyboarding, planning), production (filming, lighting, directing), and post-production (editing, color grading, sound design, VFX).",
		},
		{
			question: "What can you expect from a video production service?",
			answer:
				"You can expect a professional, end-to-end collaborative process. We take your core message and transform it into a visually compelling story that resonates with your target audience and drives engagement.",
		},
	];

	// Slider Services
	const sliderServices = [
		{ image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop", title: "Commercial Videos" },
		{ image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop", title: "Post Production Editing" },
		{ image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1000&auto=format&fit=crop", title: "Corporate Films" },
		{ image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop", title: "Social Media Reels" },
	];

	// Process Steps
	const steps = [
		{
			num: "01",
			title: "Discovery & Strategy",
			desc: "We align on your goals, target audience, and key messages before we start.",
		},
		{
			num: "02",
			title: "Scripting & Concept",
			desc: "Creative writers craft compelling narratives tailored specifically for your brand.",
		},
		{
			num: "03",
			title: "Pre-Production",
			desc: "Location scouting, casting, and detailed logistical planning to ensure a smooth shoot.",
		},
		{
			num: "04",
			title: "Rough Storyboard",
			desc: "A storyboard is the backbone of the process, ensuring the visual style and story match your vision. We craft a storyboard that details the visuals, scene by scene. It gives you an idea of the final video.",
		},
		{
			num: "05",
			title: "Filming & Production",
			desc: "Our expert crew captures stunning 4K/6K cinema-quality footage using top-tier equipment.",
		},
		{
			num: "06",
			title: "Editing & Delivery",
			desc: "Meticulous color grading, sound mixing, and visual effects finalized for your launch.",
		},
	];

	const [activeFaq, setActiveFaq] = useState<number | null>(0);
	const [activeStep, setActiveStep] = useState<number>(0);

	// Refs for scroll step spy
	const processContainerRef = useRef<HTMLDivElement>(null);

	// Create duplicated array for seamless infinite slider
	const extendedSlider = [
		...sliderServices,
		...sliderServices,
		...sliderServices,
	];

	return (
		<main className="min-h-screen bg-black text-white pt-24">
			{/* 1. Hero Section */}
			<section className="relative pt-12 lg:pt-20 pb-20 px-6 z-10">
				{/* Background Glow */}
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
					<div className="absolute top-20 left-10 w-[500px] h-[500px] bg-neon-green/10 blur-[120px] rounded-full"></div>
					<div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full"></div>
				</div>

				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="space-y-8"
					>
						<h1 className="text-4xl md:text-5xl font-bold leading-tight">
							Video Production and <br />
							<span className="text-neon-green">Editing Services</span>
						</h1>

						<p className="text-xl text-neutral-300 leading-relaxed max-w-lg font-medium">
							Make them say WOW! with us. Break Webestone brings you
							extraordinarily eye-catching videos to help you dominate your
							competitors in any dimension.
						</p>

						<div className="pt-4">
							<Link
								to="/contact"
								className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon-green text-black font-bold text-lg rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,157,0.3)] transition-all duration-300 hover:bg-[#87E65C]"
							>
								Get a quote
								<ArrowRight className="w-5 h-5" />
							</Link>
						</div>
					</motion.div>

					{/* Image Column */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative z-10 flex justify-center lg:justify-end"
					>
						<img
							src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop"
							alt="Video Production Editor Illustration"
							className="w-full max-w-md md:max-w-lg lg:max-w-2xl drop-shadow-[0_0_40px_rgba(0,255,157,0.2)]"
						/>
					</motion.div>
				</div>
			</section>

			{/* 2. Services We Offer (Continuous Slider) */}
			<section className="py-24 relative z-10 bg-neutral-950/50 border-y border-white/5 overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl xl:text-5xl font-bold text-neon-green leading-tight relative inline-block"
					>
						Services We Offer
						<svg
							className="absolute w-full h-3 -bottom-3 text-neon-green/50 left-0"
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
					</motion.h2>
				</div>

				<div className="relative w-full flex overflow-hidden">
					{/* Left/Right Fade Masks */}
					<div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-neutral-950/50 to-transparent z-10"></div>
					<div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-neutral-950/50 to-transparent z-10"></div>

					<motion.div
						animate={{
							x: ["0%", "-33.3333%"],
						}}
						transition={{
							ease: "linear",
							duration: 15,
							repeat: Infinity,
						}}
						className="flex gap-6 px-6"
					>
						{extendedSlider.map((service, i) => (
							<div
								key={i}
								className="relative w-[80vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] aspect-[3/4] rounded-[2rem] overflow-hidden group shrink-0"
							>
								{/* Image */}
								<img
									src={service.image}
									alt={service.title}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>

								{/* Overlay Gradient */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

								{/* Text Content */}
								<div className="absolute inset-0 p-8 flex flex-col justify-end">
									<h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
										{service.title}
									</h3>
									<div className="h-1 w-12 bg-neon-green mt-4 rounded-full opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100"></div>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</section>

			{/* 3. How do we get started? (Scroll Reveal Steps) */}
			<section className="py-24 px-6 relative z-10">
				<div className="max-w-7xl mx-auto space-y-16">
					<div className="text-center space-y-4">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-3xl md:text-4xl xl:text-5xl font-bold text-neon-green leading-tight relative inline-block"
						>
							How do we get started?
							<svg
								className="absolute w-full h-3 -bottom-3 text-neon-green/50 left-0"
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
						</motion.h2>
					</div>

					<div
						className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
						ref={processContainerRef}
					>
						{/* Left: Sticky Image Container */}
						<div className="hidden lg:flex sticky top-24 h-[500px] flex-col justify-center items-center">
							<div className="relative w-full max-w-md aspect-square bg-neutral-900 border border-white/10 rounded-full flex items-center justify-center p-12 overflow-hidden">
								{/* Moving Grid Background */}
								<div className="absolute inset-0 bg-gradient-to-tr from-neon-green/10 via-transparent to-purple-500/10 opacity-20"></div>
								<AnimatePresence mode="popLayout">
									<motion.img
										key={activeStep}
										initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
										animate={{ opacity: 1, scale: 1, rotate: 0 }}
										exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
										transition={{ duration: 0.5 }}
										src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop"
										alt="Process Illustration"
										className="relative z-10 w-full h-full object-contain"
									/>
								</AnimatePresence>
							</div>
						</div>

						{/* Right: Scrolling Steps List */}
						<div className="space-y-12 py-12 lg:py-64">
							{steps.map((step, idx) => (
								<motion.div
									key={idx}
									className="relative group cursor-default"
									initial="hidden"
									whileInView="visible"
									viewport={{ margin: "-50% 0px -50% 0px" }}
									onViewportEnter={() => setActiveStep(idx)}
								>
									{/* Vertical dotted line connector */}
									{idx !== steps.length - 1 && (
										<div className="absolute left-[2.25rem] top-24 bottom-[-3rem] w-px border-l-2 border-dashed border-white/10"></div>
									)}

									<div
										className={`flex flex-col md:flex-row gap-6 md:gap-8 items-start transition-all duration-500 ${activeStep === idx ? "opacity-100" : "opacity-30 hover:opacity-100"}`}
									>
										{/* Number Indicator */}
										<div
											className={`w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center text-3xl font-black transition-colors duration-500 ${activeStep === idx ? "bg-purple-900/40 text-neon-green border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.2)]" : "bg-neutral-900 text-neutral-500 border border-white/5"}`}
										>
											{step.num}
										</div>

										{/* Content Card */}
										<div
											className={`flex-1 p-8 rounded-3xl transition-all duration-500 ${activeStep === idx ? "bg-gradient-to-br from-purple-900/60 to-neutral-900 border border-purple-500/30 shadow-2xl scale-[1.02]" : "bg-transparent border border-transparent"}`}
										>
											<h3 className="text-2xl font-bold text-white mb-4">
												{step.title}
											</h3>
											<p className="text-neutral-300 leading-relaxed font-medium">
												{step.desc}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* 4. FAQs Section */}
			<section className="py-24 px-6 relative z-10 bg-neutral-950/30 border-t border-white/5">
				<div className="max-w-4xl mx-auto space-y-16">
					<div className="text-center space-y-4">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-3xl md:text-4xl xl:text-5xl font-bold text-neon-green leading-tight relative inline-block"
						>
							Frequently Asked Questions (FAQs)
							<svg
								className="absolute w-full h-3 -bottom-3 text-neon-green/50 left-0"
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
						</motion.h2>
					</div>

					<div className="bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 md:p-10 divide-y divide-white/10">
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
									className="w-full flex items-center justify-between gap-6 text-left"
								>
									<h3
										className={`text-lg md:text-xl font-bold transition-colors ${activeFaq === i ? "text-neon-green" : "text-white hover:text-neon-green/80"}`}
									>
										{faq.question}
									</h3>
									<div
										className={`w-8 h-8 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${activeFaq === i ? "bg-neon-green border-neon-green text-black rotate-180" : "border-white/20 text-white"}`}
									>
										<ChevronDown className="w-5 h-5" />
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
											<p className="pt-6 text-neutral-300 leading-relaxed font-medium">
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
