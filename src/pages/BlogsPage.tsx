import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ArrowRight, MoveUpRight } from "lucide-react";
import { blogPosts, categories } from "../data/blogData";

export default function BlogsPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("All");

	const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
	const regularPosts = blogPosts.filter(
		(p) => !p.featured || p.id !== featuredPost.id,
	);

	const filteredPosts = regularPosts.filter((post) => {
		const matchesCategory =
			activeCategory === "All" || post.category === activeCategory;
		const matchesSearch =
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	return (
		<main className="min-h-screen text-white pt-20">
			{/* Header */}
			<section className="py-20 px-6 text-center relative">
				<div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 to-transparent pointer-events-none" />
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					className="relative z-10 max-w-3xl mx-auto space-y-6"
				>
					<span className="inline-block px-4 py-2 bg-neon-green/10 text-neon-green rounded-full text-sm font-bold border border-neon-green/30">
						Our Blog
					</span>
					<h1 className="text-5xl md:text-7xl font-bold">
						Latest{" "}
						<span className="bg-gradient-to-r from-neon-green to-blue-400 bg-clip-text text-transparent">
							Insights
						</span>
					</h1>
					<p className="text-neutral-400 text-lg">
						Stay updated with the latest trends in digital marketing, AI,
						design, and more.
					</p>
				</motion.div>
			</section>

			{/* Featured Post */}
			{featuredPost && (
				<section className="px-6 pb-16 max-w-7xl mx-auto">
					<Link to={`/blogs/${featuredPost.id}`}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="group relative grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-neon-green/30 transition-all"
						>
							<div
								className={`aspect-[4/3] md:aspect-auto bg-gradient-to-br ${featuredPost.image} relative`}
							>
								<div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
								<span className="absolute top-6 left-6 px-3 py-1 bg-neon-green text-black text-xs font-bold rounded-full">
									Featured
								</span>
							</div>
							<div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
								<span className="text-neon-green text-sm font-medium">
									{featuredPost.category} · {featuredPost.readTime}
								</span>
								<h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-neon-green transition-colors leading-tight">
									{featuredPost.title}
								</h2>
								<p className="text-neutral-400 leading-relaxed">
									{featuredPost.excerpt}
								</p>
								<div className="flex items-center gap-4 pt-4 border-t border-white/10">
									<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-sm font-bold text-white">
										{featuredPost.author?.charAt(0) || "W"}
									</div>
									<div>
										<div className="text-sm font-bold text-white">
											{featuredPost.author || "WeBestOne Team"}
										</div>
										<div className="text-xs text-neutral-500">
											{featuredPost.date}
										</div>
									</div>
									<div className="ml-auto flex items-center text-neon-green font-medium text-sm gap-1">
										Read More <MoveUpRight className="w-4 h-4" />
									</div>
								</div>
							</div>
						</motion.div>
					</Link>
				</section>
			)}

			{/* Filters */}
			<section className="px-6 pb-8 max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
					{/* Search */}
					<div className="relative w-full md:w-80">
						<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
						<input
							type="text"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Search articles..."
							className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neon-green/50 transition-colors"
						/>
					</div>
					{/* Categories */}
					<div className="flex flex-wrap gap-2">
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setActiveCategory(cat)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
									activeCategory === cat ?
										"bg-neon-green text-black"
									:	"bg-white/5 text-neutral-400 hover:bg-white/10 border border-white/10"
								}`}
							>
								{cat}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Blog Grid */}
			<section className="px-6 pb-24 max-w-7xl mx-auto">
				{filteredPosts.length === 0 ?
					<div className="text-center py-24 text-neutral-500">
						<p className="text-xl">No articles found for "{searchQuery}"</p>
					</div>
				:	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredPosts.map((post, i) => (
							<motion.article
								key={post.id}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.05 }}
								className="group"
							>
								<Link to={`/blogs/${post.id}`}>
									<div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-neon-green/30 transition-all h-full flex flex-col">
										<div
											className={`aspect-[16/9] bg-gradient-to-br ${post.image} relative overflow-hidden`}
										>
											<div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 group-hover:scale-105 transform" />
											<span className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur text-xs font-medium text-white border border-white/10 rounded-full">
												{post.category}
											</span>
										</div>
										<div className="p-6 flex flex-col gap-4 flex-1">
											<div className="flex items-center gap-2 text-xs text-neutral-500">
												<span>{post.date}</span>
												<span>·</span>
												<span>{post.readTime}</span>
											</div>
											<h3 className="text-lg font-bold text-white group-hover:text-neon-green transition-colors leading-snug">
												{post.title}
											</h3>
											<p className="text-sm text-neutral-400 leading-relaxed flex-1">
												{post.excerpt}
											</p>
											<div className="flex items-center text-sm font-medium text-neutral-400 group-hover:text-neon-green transition-colors pt-4 border-t border-white/5">
												Read More{" "}
												<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
											</div>
										</div>
									</div>
								</Link>
							</motion.article>
						))}
					</div>
				}
			</section>
		</main>
	);
}
