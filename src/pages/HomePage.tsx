import Hero from "../components/Hero";
import ServiceGrid from "../components/ServiceGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import OurPromises from "../components/OurPromises";
import VideoSection from "../components/VideoSection";
import LatestInsights from "../components/LatestInsights";
import servicesData from "../data/services.json";
import { blogPosts } from "../data/blogData";

export default function HomePage() {
	const services = servicesData.filter((s) => s.description); // filter out empty services
	const posts = blogPosts.slice(0, 3);

	return (
		<main>
			<Hero />
			<ServiceGrid initialServices={services} />
			<WhyChooseUs />
			<OurPromises />
			<VideoSection />
			<LatestInsights initialPosts={posts} />
		</main>
	);
}
