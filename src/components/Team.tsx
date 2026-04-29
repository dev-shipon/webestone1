import { motion } from "framer-motion";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";

const team = [
  {
    name: "Alamin",
    role: "Founder & Growth Strategist",
    image: "https://i.pravatar.cc/300?u=alamin",
    bio: "Passionate about scaling brands with ROI-driven digital strategies.",
  },
  {
    name: "Sarah Kabir",
    role: "Head of AI Operations",
    image: "https://i.pravatar.cc/300?u=sarahk",
    bio: "Integrating cutting-edge AI into marketing funnels for maximum efficiency.",
  },
  {
    name: "Rakib Ahmed",
    role: "Creative Director",
    image: "https://i.pravatar.cc/300?u=rakib",
    bio: "Crafting visual stories that resonate and convert audiences.",
  },
  {
    name: "Tania Islam",
    role: "Lead Performance Marketer",
    image: "https://i.pravatar.cc/300?u=tania",
    bio: "Data nerd focused on lowering CPA and increasing LTV for our clients.",
  },
];

export default function Team() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Meet the <span className="text-neon-green">Experts</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              We are a team of data-driven marketers, creative designers, and AI specialists dedicated to your growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 border border-white/10 group-hover:border-neon-green/50 transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-neon-green hover:text-black transition-all"><Linkedin className="w-4 h-4" /></a>
                    <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-neon-green hover:text-black transition-all"><Twitter className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-green transition-colors">{member.name}</h3>
              <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
