import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Target, Lightbulb, Heart, Star, Award } from "lucide-react";

// CountUp component
function CountUp({
	end,
	duration = 2000,
	suffix = "",
}: {
	end: number;
	duration?: number;
	suffix?: string;
}) {
	const [count, setCount] = useState(0);
	const [hasStarted, setHasStarted] = useState(false);
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasStarted) {
					setHasStarted(true);
					let start = 0;
					const increment = end / (duration / 16);
					const timer = setInterval(() => {
						start += increment;
						if (start >= end) {
							clearInterval(timer);
							setCount(end);
						} else {
							setCount(Math.floor(start));
						}
					}, 16);
				}
			},
			{ threshold: 0.5 },
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [end, duration, hasStarted]);

	return (
		<span ref={ref}>
			{count}
			{suffix}
		</span>
	);
}

export default function AboutPage() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

	const stats = [
		{ value: 50, suffix: "+", label: "Projects Delivered" },
		{ value: 30, suffix: "+", label: "Happy Clients" },
		{ value: 5, suffix: "+", label: "Years Experience" },
		{ value: 98, suffix: "%", label: "Client Satisfaction" },
	];

	const values = [
		{
			icon: Target,
			title: "Mission",
			description:
				"To empower businesses with AI-driven digital strategies that create real, measurable growth.",
		},
		{
			icon: Lightbulb,
			title: "Vision",
			description:
				"To be the most innovative and trusted digital growth partner for businesses worldwide.",
		},
		{
			icon: Heart,
			title: "Core Values",
			description:
				"Transparency, Innovation, Results-Driven, Client-First approach in everything we do.",
		},
	];

	const teamMembers = [
		{
			name: "Amir Hossain",
			role: "CEO & Co-Founder",
			image: null,
			bio: "Visionary leader with 10+ years in digital marketing and business strategy.",
		},
		{
			name: "Sarah Rahman",
			role: "Head of SEO",
			image: null,
			bio: "SEO expert specializing in AI-powered search optimization and content strategy.",
		},
		{
			name: "David Chen",
			role: "Lead Developer",
			image: null,
			bio: "Full-stack developer passionate about creating fast, scalable web experiences.",
		},
		{
			name: "Fatima Khan",
			role: "Creative Director",
			image: null,
			bio: "Award-winning designer with a passion for minimalist, impactful brand identities.",
		},
	];

	return (
		<main
			ref={containerRef}
			className="relative min-h-screen text-white pt-20 overflow-hidden"
		>
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-[150px]" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px]" />
			</div>

			{/* Hero */}
			<section className="relative py-24 px-6 z-10 text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-4xl mx-auto space-y-6"
				>
					<span className="inline-block px-4 py-2 bg-neon-green/10 text-neon-green rounded-full text-sm font-bold border border-neon-green/30 uppercase tracking-wide">
						About WeBestOne
					</span>
					<h1 className="text-5xl md:text-7xl font-bold leading-tight">
						We Build{" "}
						<span className="bg-gradient-to-r from-neon-green to-blue-400 bg-clip-text text-transparent">
							Digital Growth
						</span>{" "}
						Engines
					</h1>
					<p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
						WeBestOne is a high-end digital agency combining creativity,
						technology, and AI to help businesses thrive in the modern digital
						landscape.
					</p>
				</motion.div>
			</section>

			{/* Stats */}
			<section className="py-16 px-6 relative z-10">
				<div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1 }}
							viewport={{ once: true }}
							className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
						>
							<div className="text-4xl md:text-5xl font-bold text-neon-green mb-2">
								<CountUp end={stat.value} suffix={stat.suffix} />
							</div>
							<div className="text-sm text-neutral-400">{stat.label}</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Mission/Vision/Values */}
			<section className="py-20 px-6 relative z-10">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
						What Drives Us
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{values.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.15 }}
								viewport={{ once: true }}
								className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-neon-green/30 transition-all duration-300"
							>
								<div className="w-14 h-14 bg-neon-green/10 border border-neon-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-green/20 transition-colors">
									<item.icon className="w-7 h-7 text-neon-green" />
								</div>
								<h3 className="text-2xl font-bold text-white mb-4">
									{item.title}
								</h3>
								<p className="text-neutral-400 leading-relaxed">
									{item.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team */}
			<section className="py-20 px-6 relative z-10">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<span className="text-neon-green font-mono text-sm tracking-widest uppercase block mb-4">
							The Team
						</span>
						<h2 className="text-4xl md:text-5xl font-bold text-white">
							Meet the People Behind WeBestOne
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{teamMembers.map((member, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								viewport={{ once: true }}
								className="group text-center"
							>
								{/* Avatar */}
								<div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-green/20 to-blue-500/20 border border-white/10 flex items-center justify-center overflow-hidden">
									{member.image ?
										<img
											src={member.image}
											alt={member.name}
											className="w-full h-full object-cover"
										/>
									:	<Users className="w-12 h-12 text-neutral-400" />}
								</div>
								<h3 className="text-xl font-bold text-white mb-1">
									{member.name}
								</h3>
								<p className="text-neon-green text-sm font-medium mb-3">
									{member.role}
								</p>
								<p className="text-neutral-400 text-sm leading-relaxed">
									{member.bio}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Awards/Recognition Row */}
			<section className="py-16 px-6 relative z-10 border-t border-white/5">
				<div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-12 items-center">
					{[
						"Best Agency 2024",
						"Top Rated on Clutch",
						"Google Partner",
						"Meta Business Partner",
					].map((award, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: i * 0.1 }}
							viewport={{ once: true }}
							className="flex items-center gap-3 text-neutral-400"
						>
							<Award className="w-5 h-5 text-neon-green" />
							<span className="font-medium">{award}</span>
						</motion.div>
					))}
				</div>
			</section>
		</main>
	);
}
