"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Footer from "../components/Footer";
import { BlogPost, BlogCategory } from "../../lib/blog-data";
import { useState } from "react";
import { Menu } from "lucide-react";

interface BlogListingContentProps {
  blogs: BlogPost[];
}

const categories: (BlogCategory | "All")[] = ["All", "Mobile App Development", "AI Startups", "Custom Software", "Business Automation", "Startup Strategy"];

export default function BlogListingContent({ blogs }: BlogListingContentProps) {
  const [activeCategory, setActiveCategory] = useState<(BlogCategory | "All")>("All");

  const filteredBlogs = activeCategory === "All" 
    ? blogs 
    : blogs.filter(b => b.category === activeCategory);

  const container: any = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const item: any = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <main className="pt-32 pb-24 px-6 overflow-x-hidden bg-black selection:bg-cyan-400 selection:text-black">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <section className="mb-24 border-b-2 border-white pb-12">
          <motion.h1 variants={item} className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">{`// KNOWLEDGE_ECOSYSTEM_V1.0`}</motion.h1>
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
            <motion.h2 variants={item} className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] text-white uppercase max-w-4xl">
              THE INTEL<br/>ENGINE.
            </motion.h2>
            <motion.p variants={item} className="text-slate-500 font-mono text-xs uppercase tracking-widest max-w-xs text-right">
              Pillar articles, technical clusters, and engineering logs for high-growth enterprises.
            </motion.p>
          </div>
        </section>

        {/* Categories Bar */}
        <motion.div variants={item} className="flex flex-wrap gap-4 mb-16 px-4 py-3 border-y border-white/10 bg-white/5 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 font-mono text-[10px] uppercase tracking-widest transition-all ${
                activeCategory === cat 
                ? "bg-cyan-400 text-black font-bold" 
                : "text-slate-500 hover:text-white"
              }`}
            >
              [{cat}]
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-white/20">
           {filteredBlogs.map((blog) => (
             <motion.div 
               key={blog.slug} 
               variants={item}
               className={`group border border-white/10 p-8 hover:bg-white/[0.03] transition-all relative overflow-hidden flex flex-col h-full ${
                 blog.type === 'Pillar' ? 'md:col-span-2 bg-white/[0.01]' : ''
               }`}
             >
                {/* Visual Label */}
                <div className="flex justify-between items-start mb-12">
                  <span className={`text-[10px] font-mono px-3 py-1 border border-white/20 uppercase tracking-widest ${
                    blog.type === 'Pillar' ? 'bg-white text-black font-black' : 'text-cyan-400'
                  }`}>
                    {blog.type}
                  </span>
                  <span className="text-[10px] font-mono text-slate-600 italic">ID_{blog.slug.slice(0, 8).toUpperCase()}</span>
                </div>

                <div className="flex-grow">
                  <h3 className={`font-black text-white uppercase tracking-tighter leading-none mb-6 group-hover:text-cyan-400 transition-colors ${
                    blog.type === 'Pillar' ? 'text-4xl md:text-5xl' : 'text-2xl'
                  }`}>
                    {blog.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium line-clamp-3 mb-8 tracking-tight leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Footer of the card */}
                <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-end">
                   <div className="font-mono text-[9px] text-slate-600 uppercase flex gap-4">
                      <span>{blog.date}</span>
                      <span>{blog.category}</span>
                   </div>
                   <Link 
                     href={`/blog/${blog.slug}`} 
                     className="bg-cyan-400 text-black p-4 inline-block hover:translate-x-1 hover:-translate-y-1 transition-transform"
                   >
                     <Menu className="w-5 h-5" />
                   </Link>
                </div>

                {/* Pillar Accent */}
                {blog.type === 'Pillar' && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 rotate-45 translate-x-12 -translate-y-12 pointer-events-none" />
                )}
             </motion.div>
           ))}
        </section>

        {/* Search Intent Note for Branding */}
        <motion.div variants={item} className="mt-24 p-8 border-2 border-white/10 bg-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="max-w-xl">
              <h4 className="text-white font-black uppercase text-xl mb-2 italic tracking-tighter">Strategic Search Dominance</h4>
              <p className="text-slate-500 text-xs font-mono tracking-widest uppercase">
                Our content engine is designed to satisfy high-intent queries across the enterprise spectrum. From technical deep-dives to business ROI analysis.
              </p>
           </div>
           <Link href="/contact" className="px-10 py-4 bg-white text-black font-black font-mono text-sm uppercase border-2 border-black hover:bg-cyan-400 transition-colors">
              QUERY_SUPPORT
           </Link>
        </motion.div>

      </motion.div>
      <Footer suffix="CONTENT.ENGINE.V1" />
    </main>
  );
}
