import { Link } from "react-router-dom";
import { Scale, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const sections = [
	{
		id: 1,
		title: "Introduction",
		content: `These Terms and Conditions constitute a legal agreement between you (the "Client" or "User") and WeBestOne (the "Company"). By engaging our services or using our website, you acknowledge that you have read, understood, and agreed to these terms in full. If you do not agree with any part of these Terms and Conditions, you should discontinue using our website or services immediately.`,
	},
	{
		id: 2,
		title: "Services Provided",
		content: `WeBestOne provides a variety of professional digital solutions including, but not limited to, digital marketing, web development, content creation, design services, branding, automation, and artificial intelligence powered solutions. The scope, timeline, and pricing of each project will be clearly defined in an official written agreement or proposal before the commencement of work.`,
	},
	{
		id: 3,
		title: "Intellectual Property Rights",
		content: `All content, materials, graphics, logos, text, designs, concepts, and software created or displayed on this website are the exclusive intellectual property of WeBestOne unless otherwise stated. No content from this website or any of our deliverables may be reproduced, distributed, modified, transmitted, or used for commercial purposes without prior written consent from WeBestOne. Any client materials provided to WeBestOne for project purposes remain the intellectual property of the client.`,
	},
	{
		id: 4,
		title: "Payment Terms",
		content: `All projects and services require a signed proposal or agreement before work begins. Payment schedules, methods, and deadlines will be clearly defined in each contract. Payments are due according to the agreed schedule. Late payments may result in delayed project timelines or temporary suspension of services until outstanding balances are cleared. All deposits and completed milestone payments are considered non-refundable unless otherwise specified in writing.`,
	},
	{
		id: 5,
		title: "Client Responsibilities",
		content: `The client agrees to provide accurate, complete, and timely information required for the successful execution of the project. The client is responsible for reviewing all deliverables within the given review period and providing clear feedback. Failure to provide necessary content, approvals, or information may delay project delivery and affect timelines.`,
	},
	{
		id: 6,
		title: "Confidentiality",
		content: `WeBestOne agrees to treat all information shared by the client as confidential and to use it solely for project purposes. Confidential information will not be disclosed to any third party without the client's written consent, unless required by law. Similarly, the client agrees not to disclose any confidential business information, processes, or proprietary materials belonging to WeBestOne.`,
	},
	{
		id: 7,
		title: "Limitation of Liability",
		content: `While WeBestOne strives to provide professional, accurate, and reliable digital solutions, the company shall not be held responsible for any indirect, incidental, or consequential damages, including but not limited to loss of profits, revenue, data, or business opportunities resulting from the use of our website or services. Our total liability for any claim shall not exceed the total amount paid by the client for the specific service in question.`,
	},
	{
		id: 8,
		title: "Revisions and Modifications",
		content: `Project revisions or modifications are allowed only as per the terms mentioned in the signed agreement. Requests for additional changes beyond the agreed scope may require additional time and cost, subject to written approval from both parties.`,
	},
	{
		id: 9,
		title: "Termination Policy",
		content: `Either party may terminate a project or agreement with written notice under the following circumstances:`,
		bullets: [
			"Breach of contract by either party",
			"Non-payment or consistent delay in payments",
			"Mutual consent between the client and WeBestOne",
		],
		afterBullets:
			"Upon termination, the client will be responsible for payment for all work completed up to the termination date.",
	},
	{
		id: 10,
		title: "Third Party Tools and Services",
		content: `WeBestOne may integrate third party tools, plugins, software, or services into a client's project when necessary. We do not hold responsibility for the functionality, pricing, or policy changes of any external service provider.`,
	},
	{
		id: 11,
		title: "Updates to Terms and Conditions",
		content: `WeBestOne reserves the right to modify or update these Terms and Conditions at any time without prior notice. All updates will be published on this page, and the revised date will indicate the effective version. Continued use of our website or services after such modifications constitutes acceptance of the updated Terms and Conditions.`,
	},
	{
		id: 12,
		title: "Governing Law",
		content: `These Terms and Conditions shall be governed by and interpreted in accordance with the applicable laws. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts.`,
	},
];

export default function TermsAndConditionsPage() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<main className="relative min-h-screen pt-32 pb-24">
			{/* Background glows */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

			<div className="relative z-10 max-w-4xl mx-auto px-6">
				{/* Back link */}
				<Link
					to="/"
					className="inline-flex items-center gap-2 text-neutral-400 hover:text-neon-green transition-colors text-sm mb-10 group"
				>
					<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
					Back to Home
				</Link>

				{/* Header */}
				<div className="mb-12">
					<div className="inline-flex items-center gap-2 text-neon-green text-sm font-medium bg-neon-green/10 border border-neon-green/20 rounded-full px-4 py-1.5 mb-6">
						<Scale className="w-4 h-4" />
						Legal Document
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
						Terms &amp; Conditions
					</h1>
					<p className="text-neutral-400">
						<span className="font-semibold text-neutral-300">
							Effective Date:
						</span>{" "}
						February 22, 2025
					</p>
					<p className="text-neutral-400 mt-4 leading-relaxed">
						Welcome to{" "}
						<span className="text-neon-green font-semibold">WeBestOne</span>.
						These Terms and Conditions govern your use of our website, services,
						and any related digital platforms operated by WeBestOne. By
						accessing or using our website or services, you agree to comply with
						and be bound by the following terms. Please read them carefully
						before proceeding.
					</p>
				</div>

				{/* Divider */}
				<div className="border-t border-white/5 mb-12" />

				{/* Sections */}
				<div className="space-y-10">
					{sections.map((section) => (
						<section key={section.id} className="group">
							<div className="flex items-start gap-4">
								<span className="flex-shrink-0 w-8 h-8 rounded-lg bg-neon-green/10 border border-neon-green/20 text-neon-green text-xs font-bold flex items-center justify-center mt-1">
									{section.id}
								</span>
								<div className="flex-1">
									<h2 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
										{section.title}
									</h2>
									<p className="text-neutral-400 leading-relaxed">
										{section.content}
									</p>
									{section.bullets && (
										<ul className="mt-3 space-y-2">
											{section.bullets.map((bullet, i) => (
												<li
													key={i}
													className="flex items-start gap-2 text-neutral-400"
												>
													<span className="mt-2 w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0" />
													{bullet}
												</li>
											))}
										</ul>
									)}
									{section.afterBullets && (
										<p className="text-neutral-400 leading-relaxed mt-3">
											{section.afterBullets}
										</p>
									)}
								</div>
							</div>
							<div className="mt-8 border-b border-white/5" />
						</section>
					))}
				</div>

				{/* Contact section */}
				<div className="mt-14 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
					<h2 className="text-xl font-bold text-white mb-4">
						13. Contact Information
					</h2>
					<p className="text-neutral-400 mb-6">
						For any questions or clarifications regarding these Terms and
						Conditions, please contact us through:
					</p>
					<div className="space-y-3">
						<a
							href="mailto:legal@webestone.com"
							className="flex items-center gap-3 text-neutral-300 hover:text-neon-green transition-colors"
						>
							<span className="text-lg">📧</span>
							<span>legal@webestone.com</span>
						</a>
						<p className="flex items-center gap-3 text-neutral-300">
							<span className="text-lg">📍</span>
							<span>Dhaka, Bangladesh</span>
						</p>
					</div>
					<div className="mt-6 pt-6 border-t border-white/10">
						<Link
							to="/contact"
							className="inline-flex items-center gap-2 bg-neon-green hover:bg-neon-green/90 text-blue-900 font-bold px-6 py-3 rounded-lg transition-colors"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
