"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Footer from "../../components/Footer";
import { BlogPost } from "../../../lib/blog-data";
import { CheckCircle, Info, MessageSquare, ArrowRight, CornerDownRight } from "lucide-react";

interface BlogPostContentProps {
  blog: BlogPost;
  blogs: BlogPost[];
}

export default function BlogPostContent({ blog, blogs }: BlogPostContentProps) {
  const container: any = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item: any = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <main className="pt-32 pb-24 px-6 overflow-x-hidden bg-black selection:bg-cyan-400 selection:text-black">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl mx-auto">
        <Link href="/blog" className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-12 inline-block hover:text-white transition-colors">
           &lt; _RETURN_TO_ARCHIVE
        </Link>
        
        <header className="mb-20 border-b-2 border-white pb-12">
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-8">
               <span className="bg-white text-black text-[10px] font-black uppercase px-3 py-1 font-mono tracking-widest">
                  {blog.type}
               </span>
               <span className="border border-cyan-400 text-cyan-400 text-[10px] font-black uppercase px-3 py-1 font-mono tracking-widest">
                  {blog.intent}
               </span>
               <span className="text-slate-500 text-[10px] font-mono tracking-[0.3em] uppercase">
                  {blog.category}
               </span>
            </motion.div>
            <motion.h1 variants={item} className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-12 max-w-4xl">
               {blog.title}
            </motion.h1>
            <motion.div variants={item} className="flex flex-wrap items-center gap-10 font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em]">
               <div>STATUS: _PUBLISHED</div>
               <div>AUTHOR: {blog.author}</div>
               <div>REVISION: {blog.date.replace(/-/g, '.')}</div>
            </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           {/* Sidebar: Table of Contents / Keywords */}
           <aside className="lg:col-span-3 hidden lg:block sticky top-32 h-fit">
              <div className="border-l-2 border-white/10 pl-6 space-y-12">
                 <div>
                    <h5 className="text-white font-black uppercase text-xs mb-4 tracking-widest">Navigation</h5>
                    <ul className="space-y-3 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                       <li className="text-white cursor-help">01. The Hook</li>
                       <li className="hover:text-white transition-colors cursor-pointer">02. Credibility</li>
                       <li className="hover:text-white transition-colors cursor-pointer">03. Clarity</li>
                       <li className="hover:text-white transition-colors cursor-pointer">04. Actionability</li>
                       <li className="hover:text-white transition-colors cursor-pointer">05. Trust</li>
                    </ul>
                 </div>
                 <div>
                    <h5 className="text-white font-black uppercase text-xs mb-4 tracking-widest">Semantics</h5>
                    <div className="flex flex-wrap gap-2">
                       {blog.semanticKeywords.map(kw => (
                         <span key={kw} className="text-[9px] font-mono text-slate-600 bg-white/5 border border-white/5 px-2 py-1 leading-none uppercase">
                            #{kw.replace(/\s+/g, '_')}
                         </span>
                       ))}
                    </div>
                 </div>
              </div>
           </aside>

           {/* Main Article Content */}
           <article className="lg:col-span-9">
              <section className="space-y-16">
                 {/* Hook */}
                 <div className="p-8 border-2 border-white bg-white/5 relative">
                    <div className="absolute -top-3 -left-3 bg-cyan-400 p-2 border-2 border-white">
                       <Info className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-white leading-tight tracking-tight italic">
                       &ldquo;{blog.content.hook}&rdquo;
                    </p>
                 </div>

                 {/* Credibility */}
                 <div className="flex gap-6 items-start">
                    <div className="bg-white/10 p-3">
                       <CheckCircle className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                       <h4 className="text-white font-black uppercase tracking-tighter text-lg mb-4">Strategic Baseline</h4>
                       <p className="text-slate-400 leading-relaxed text-lg font-light">
                          {blog.content.credibility}
                       </p>
                    </div>
                 </div>

                 {/* Clarity */}
                 <div className="prose prose-invert prose-cyan max-w-none text-slate-400 font-light leading-relaxed text-lg space-y-6">
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Core Definition</h2>
                    <p>{blog.content.clarity}</p>
                 </div>

                 {/* Actionability */}
                 <div className="bg-white p-10 border-4 border-black">
                    <h4 className="text-black font-black uppercase tracking-tight text-3xl mb-8 border-b-4 border-black pb-4">
                       {blog.content.actionability.title}
                    </h4>
                    <ul className="space-y-6">
                       {blog.content.actionability.steps.map((step, i) => (
                         <li key={i} className="flex gap-4 items-start text-black">
                            <span className="font-mono font-black text-2xl">0{i+1}.</span>
                            <p className="text-lg font-bold leading-tight pt-1">{step}</p>
                         </li>
                       ))}
                    </ul>
                 </div>

                 {/* Trust */}
                 <div className="border-y-2 border-white/10 py-12 flex gap-8 items-center italic">
                    <div className="bg-cyan-400/10 p-4 border border-cyan-400/20">
                       <MessageSquare className="w-8 h-8 text-cyan-400" />
                    </div>
                    <p className="text-slate-400 text-lg font-medium leading-relaxed">
                       {blog.content.trust}
                    </p>
                 </div>

                 {/* FAQS for AI SEO */}
                 <div className="space-y-8 pt-12">
                     <h3 className="text-2xl font-black text-white uppercase tracking-widest text-center border-b border-white/5 pb-4">ENGINEERING_FAQS</h3>
                     <div className="grid grid-cols-1 gap-4">
                        {blog.content.faqs.map((faq, i) => (
                          <div key={i} className="border border-white/10 p-6 bg-white/[0.01] group hover:border-cyan-400/50 transition-colors">
                             <h5 className="text-white font-bold text-lg mb-4 uppercase tracking-tight flex items-center gap-3">
                                <CornerDownRight className="w-5 h-5 text-cyan-400" />
                                {faq.q}
                             </h5>
                             <p className="text-slate-500 text-base font-medium leading-relaxed pl-8">
                                {faq.a}
                             </p>
                          </div>
                        ))}
                     </div>
                 </div>

                 {/* Related Intelligence - Internal Linking Strategy */}
                 {blog.relatedSlugs && blog.relatedSlugs.length > 0 && (
                   <div className="pt-24">
                      <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
                         <span className="w-8 h-px bg-cyan-400"></span>
                         INTER_CONNECTED_INTELLIGENCE
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {blog.relatedSlugs.map(relSlug => {
                            const relPost = blogs.find(b => b.slug === relSlug);
                            if (!relPost) return null;
                            return (
                              <Link 
                                key={relSlug}
                                href={`/blog/${relSlug}`}
                                className="p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all group border-l-4 hover:border-l-cyan-400"
                              >
                                 <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-2 block">{relPost.category}</span>
                                 <h4 className="text-white font-black uppercase text-xl group-hover:text-cyan-400 transition-colors">{relPost.title}</h4>
                                 <p className="text-slate-500 text-xs mt-4 font-medium line-clamp-2">{relPost.excerpt}</p>
                              </Link>
                            )
                         })}
                      </div>
                   </div>
                 )}

                 {/* Soft CTA / Conversion */}
                 <div className="mt-24 bg-cyan-400 p-12 relative overflow-hidden">
                    <div className="relative z-10">
                       <h3 className="text-black font-black text-4xl uppercase tracking-tighter mb-6 leading-none">
                          {blog.content.conversion.text}
                       </h3>
                       <Link 
                         href={blog.content.conversion.link}
                         className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 font-mono font-black text-xl hover:translate-x-2 transition-transform uppercase"
                       >
                          {blog.content.conversion.cta}
                          <ArrowRight className="w-6 h-6" />
                       </Link>
                    </div>
                    {/* Decorative Background Text */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 pointer-events-none opacity-5">
                       <p className="text-[200px] font-black uppercase text-black leading-none border-b-[20px] border-black">CTA</p>
                    </div>
                 </div>
              </section>
           </article>
        </div>
      </motion.div>
      <Footer suffix={`BLOG.${blog.slug.toUpperCase().slice(0, 10)}`} />
    </main>
  );
}
