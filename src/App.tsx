import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import WhatsAppChat from "./components/WhatsAppChat";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

export default function App() {
	return (
		<BrowserRouter>
			<div className="relative min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
				<BackgroundEffects />
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/blogs" element={<BlogsPage />} />
					<Route path="/blogs/:id" element={<BlogDetailPage />} />
					<Route path="/services" element={<ServicesPage />} />
					<Route path="/services/:slug" element={<ServiceDetailPage />} />
					<Route
						path="/terms-and-conditions"
						element={<TermsAndConditionsPage />}
					/>
					<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
				<Footer />
				<WhatsAppChat />
			</div>
		</BrowserRouter>
	);
}
