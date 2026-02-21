import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	Send,
	CheckCircle,
	MessageCircle,
} from "lucide-react";

const contactInfo = {
	address: "Dhaka, Bangladesh",
	phone: "+880 1333 600 272",
	email: "webestone@gmail.com",
	workingHours: "Mon - Fri: 9AM - 6PM (BST)",
};

export default function ContactPage() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		company: "",
		service: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate submission then open mailto
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const mailtoBody = `Name: ${formState.name}%0ACompany: ${formState.company}%0AService: ${formState.service}%0A%0AMessage:%0A${formState.message}`;
		window.open(
			`mailto:${contactInfo.email}?subject=Project Inquiry from ${formState.name}&body=${mailtoBody}`,
			"_blank",
		);

		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	const contactItems = [
		{ icon: MapPin, title: "Our Location", detail: contactInfo.address },
		{
			icon: Phone,
			title: "Phone",
			detail: contactInfo.phone,
			href: `tel:${contactInfo.phone}`,
		},
		{
			icon: Mail,
			title: "Email",
			detail: contactInfo.email,
			href: `mailto:${contactInfo.email}`,
		},
		{ icon: Clock, title: "Working Hours", detail: contactInfo.workingHours },
	];

	return (
		<main className="relative min-h-screen text-white pt-20 overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-[150px]" />
				<div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px]" />
			</div>

			<section className="relative py-24 px-6 z-10">
				<div className="max-w-7xl mx-auto">
					{/* Heading */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-20 space-y-4"
					>
						<span className="inline-block px-4 py-2 bg-neon-green/10 text-neon-green rounded-full text-sm font-bold border border-neon-green/30 uppercase tracking-wide">
							Get In Touch
						</span>
						<h1 className="text-5xl md:text-7xl font-bold">
							Let's Build{" "}
							<span className="bg-gradient-to-r from-neon-green to-blue-400 bg-clip-text text-transparent">
								Together
							</span>
						</h1>
						<p className="text-xl text-neutral-400 max-w-2xl mx-auto">
							Ready to transform your digital presence? Tell us about your
							project and we'll get back to you within 24 hours.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						{/* Left: Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="space-y-10"
						>
							<div className="space-y-6">
								{contactItems.map((item, i) => (
									<div key={i} className="flex items-start gap-5 group">
										<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-neon-green/10 group-hover:border-neon-green/30 transition-all">
											<item.icon className="w-5 h-5 text-neon-green" />
										</div>
										<div>
											<p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
												{item.title}
											</p>
											{item.href ?
												<a
													href={item.href}
													className="text-white font-medium hover:text-neon-green transition-colors"
												>
													{item.detail}
												</a>
											:	<p className="text-white font-medium">{item.detail}</p>}
										</div>
									</div>
								))}
							</div>

							{/* WhatsApp CTA */}
							<div className="p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20">
								<h3 className="text-white font-bold mb-2 flex items-center gap-2">
									<MessageCircle className="text-[#25D366] w-5 h-5" />
									Chat on WhatsApp
								</h3>
								<p className="text-neutral-400 text-sm mb-4">
									Get an instant response via WhatsApp
								</p>
								<a
									href={`https://wa.me/8801333600272?text=Hi, I want to discuss a project.`}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20BD5A] transition-colors text-sm"
								>
									Start Chat
								</a>
							</div>
						</motion.div>

						{/* Right: Form */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
						>
							<AnimatePresence mode="wait">
								{isSubmitted ?
									<motion.div
										key="success"
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										className="h-full flex flex-col items-center justify-center p-12 rounded-3xl bg-neon-green/10 border border-neon-green/30 text-center space-y-6"
									>
										<CheckCircle className="w-20 h-20 text-neon-green" />
										<h3 className="text-3xl font-bold text-white">
											Message Sent!
										</h3>
										<p className="text-neutral-400">
											Your email client should have opened. We'll get back to
											you soon.
										</p>
										<button
											onClick={() => {
												setIsSubmitted(false);
												setFormState({
													name: "",
													email: "",
													company: "",
													service: "",
													message: "",
												});
											}}
											className="px-6 py-3 bg-neon-green text-black font-bold rounded-full hover:bg-neon-green/90 transition-colors"
										>
											Send Another Message
										</button>
									</motion.div>
								:	<motion.form
										key="form"
										onSubmit={handleSubmit}
										className="space-y-6 p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
									>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div className="space-y-2">
												<label className="text-sm text-neutral-400">
													Your Name *
												</label>
												<input
													type="text"
													name="name"
													value={formState.name}
													onChange={handleChange}
													required
													placeholder="John Doe"
													className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-neon-green/50 transition-colors"
												/>
											</div>
											<div className="space-y-2">
												<label className="text-sm text-neutral-400">
													Email Address *
												</label>
												<input
													type="email"
													name="email"
													value={formState.email}
													onChange={handleChange}
													required
													placeholder="john@company.com"
													className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-neon-green/50 transition-colors"
												/>
											</div>
										</div>

										<div className="space-y-2">
											<label className="text-sm text-neutral-400">
												Company (Optional)
											</label>
											<input
												type="text"
												name="company"
												value={formState.company}
												onChange={handleChange}
												placeholder="Your Company"
												className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-neon-green/50 transition-colors"
											/>
										</div>

										<div className="space-y-2">
											<label className="text-sm text-neutral-400">
												Service Interested In
											</label>
											<select
												name="service"
												value={formState.service}
												onChange={handleChange}
												className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-green/50 transition-colors"
											>
												<option value="">Select a service...</option>
												<option value="SEO">SEO</option>
												<option value="Digital Marketing">
													Digital Marketing
												</option>
												<option value="Web Development">Web Development</option>
												<option value="UI/UX Design">UI/UX Design</option>
												<option value="Social Media">
													Social Media Marketing
												</option>
												<option value="AI Solutions">AI Solutions</option>
												<option value="Other">Other</option>
											</select>
										</div>

										<div className="space-y-2">
											<label className="text-sm text-neutral-400">
												Your Message *
											</label>
											<textarea
												name="message"
												value={formState.message}
												onChange={handleChange}
												required
												rows={5}
												placeholder="Tell us about your project..."
												className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-neon-green/50 transition-colors resize-none"
											/>
										</div>

										<button
											type="submit"
											disabled={isSubmitting}
											className="w-full py-4 bg-neon-green text-black font-bold rounded-xl hover:bg-neon-green/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,157,0.3)] hover:shadow-[0_0_30px_rgba(0,255,157,0.5)]"
										>
											{isSubmitting ?
												<>
													<div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
													Sending...
												</>
											:	<>
													<Send className="w-5 h-5" />
													Send Message
												</>
											}
										</button>
									</motion.form>
								}
							</AnimatePresence>
						</motion.div>
					</div>
				</div>
			</section>
		</main>
	);
}
