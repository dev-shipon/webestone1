import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

type Section = {
	id: number;
	title: string;
	content: string;
	subGroups?: { label: string; bullets: string[] }[];
	bullets?: string[];
	afterBullets?: string;
};

const sections: Section[] = [
	{
		id: 1,
		title: "Introduction",
		content: `This Privacy Policy applies to all visitors, clients, and users of WeBestOne and its related services. The purpose of this document is to ensure complete transparency about how we handle your personal and business information in accordance with data protection regulations.`,
	},
	{
		id: 2,
		title: "Information We Collect",
		content: `We collect both personal and non-personal information in order to provide and improve our services.`,
		subGroups: [
			{
				label:
					"Personal Information — includes any information that can identify you as an individual, such as:",
				bullets: [
					"Full name",
					"Email address",
					"Phone number",
					"Company name",
					"Project details or messages you share through forms",
					"Billing and payment details (only when applicable)",
				],
			},
			{
				label:
					"Non-Personal Information — data that cannot be used to personally identify you, such as:",
				bullets: [
					"Browser type",
					"Device type",
					"Operating system",
					"Referring website",
					"Pages viewed and time spent on the website",
				],
			},
		],
	},
	{
		id: 3,
		title: "How We Use the Information",
		content: `The information we collect is used to:`,
		bullets: [
			"Communicate with you regarding inquiries, projects, and services.",
			"Personalize your experience and provide content relevant to your interests.",
			"Process transactions and deliver purchased services.",
			"Send administrative updates, promotional messages, or newsletters (only with your consent).",
			"Analyze user behavior to improve our website's performance and user experience.",
		],
		afterBullets:
			"We do not sell, rent, or trade your personal information to any third party for marketing purposes.",
	},
	{
		id: 4,
		title: "Cookies and Tracking Technologies",
		content: `Our website uses cookies and similar tracking technologies to improve user experience and website functionality. Cookies are small text files stored on your device that help us recognize your browser and store preferences. You may choose to disable cookies through your browser settings, although certain parts of the website may not function properly as a result. We also use analytics tools, such as Google Analytics, to understand how visitors interact with our website. These tools may collect anonymized data, such as page visits, traffic sources, and time spent on pages.`,
	},
	{
		id: 5,
		title: "Data Protection and Security",
		content: `WeBestOne takes data security very seriously. We implement appropriate physical, digital, and managerial measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All sensitive information transmitted online (such as payment details) is encrypted using Secure Socket Layer (SSL) technology. Access to personal information within our organization is restricted to authorized team members who require it for project purposes.`,
	},
	{
		id: 6,
		title: "Sharing of Information",
		content: `We may share your information with trusted third parties only in the following situations:`,
		bullets: [
			"When required to complete a project, such as hosting providers, payment gateways, or technical partners.",
			"When required by law, regulation, or a valid legal request.",
			"When necessary to protect the rights, property, or safety of WeBestOne, our clients, or the public.",
		],
		afterBullets:
			"All third-party partners who receive data from WeBestOne are bound by confidentiality and data protection agreements.",
	},
	{
		id: 7,
		title: "Data Retention",
		content: `We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable law. Once the data is no longer required, it will be securely deleted or anonymized. Clients may request deletion of their personal information at any time by contacting our Data Protection Officer through the details provided below.`,
	},
	{
		id: 8,
		title: "Your Rights",
		content: `Depending on your location, you may have certain rights under data protection laws, including:`,
		bullets: [
			"The right to access your personal data.",
			"The right to correct inaccurate or incomplete information.",
			"The right to request deletion of your data.",
			"The right to withdraw consent for marketing communication.",
			"The right to request data portability.",
		],
		afterBullets:
			"To exercise any of these rights, please contact our team using the details listed in Section 11.",
	},
	{
		id: 9,
		title: "Links to Other Websites",
		content: `Our website may contain links to third-party websites or resources. These external sites are not operated by WeBestOne, and we are not responsible for their privacy policies or content. We encourage users to review the privacy practices of any third-party site they visit.`,
	},
	{
		id: 10,
		title: "Updates to This Privacy Policy",
		content: `WeBestOne reserves the right to update or modify this Privacy Policy at any time. All changes will be published on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.`,
	},
	{
		id: 11,
		title: "Consent",
		content: `By using our website and services, you consent to the terms of this Privacy Policy and agree to the collection and use of information as described above.`,
	},
];

export default function PrivacyPolicyPage() {
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
						<ShieldCheck className="w-4 h-4" />
						Legal Document
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
						Privacy Policy
					</h1>
					<p className="text-neutral-400">
						<span className="font-semibold text-neutral-300">
							Effective Date:
						</span>{" "}
						February 22, 2025
					</p>
					<p className="text-neutral-400 mt-4 leading-relaxed">
						At <span className="text-neon-green font-semibold">WeBestOne</span>,
						we respect your privacy and are committed to protecting the personal
						information you share with us. This Privacy Policy explains how we
						collect, use, store, and safeguard your data when you visit our
						website or use our digital services. By using our website or
						engaging with our services, you agree to the practices described in
						this Privacy Policy.
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

									{/* Sub-groups (Section 2) */}
									{section.subGroups && (
										<div className="mt-4 space-y-4">
											{section.subGroups.map((group, gi) => (
												<div key={gi}>
													<p className="text-neutral-300 text-sm font-medium mb-2">
														{group.label}
													</p>
													<ul className="space-y-2 ml-2">
														{group.bullets.map((bullet, bi) => (
															<li
																key={bi}
																className="flex items-start gap-2 text-neutral-400 text-sm"
															>
																<span className="mt-2 w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0" />
																{bullet}
															</li>
														))}
													</ul>
												</div>
											))}
										</div>
									)}

									{/* Simple bullets */}
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
						12. Contact Information
					</h2>
					<p className="text-neutral-400 mb-6">
						If you have any questions, requests, or concerns about this Privacy
						Policy or the way we handle your information, please contact us:
					</p>
					<div className="space-y-3">
						<a
							href="mailto:privacy@webestone.com"
							className="flex items-center gap-3 text-neutral-300 hover:text-neon-green transition-colors"
						>
							<span className="text-lg">📧</span>
							<span>privacy@webestone.com</span>
						</a>
						<p className="flex items-center gap-3 text-neutral-300">
							<span className="text-lg">📍</span>
							<span>Dhaka, Bangladesh</span>
						</p>
					</div>
					<p className="text-neutral-500 text-sm mt-4">
						Our Data Protection Officer will respond to all legitimate requests
						within a reasonable timeframe.
					</p>
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
