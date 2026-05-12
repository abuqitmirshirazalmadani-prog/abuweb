"use client";

import { motion } from "motion/react";
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Search, 
  BarChart, 
  Globe, 
  ShieldCheck,
  Activity,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function SEOMasteryPageContent() {
  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className="pt-32 pb-24 px-6 overflow-x-hidden bg-[#020617] selection:bg-cyan-400 selection:text-black">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto"
      >
        <section className="mb-32">
          <motion.h1 variants={item} className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">{`// SEO DOMINANCE`}</motion.h1>
          <motion.h2 variants={item} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-12 uppercase">
            SEMANTIC PRECISION.<br/>ENTITY AUTHORITY.
          </motion.h2>
          <motion.p variants={item} className="text-xl md:text-2xl font-light text-slate-400 max-w-2xl leading-relaxed">
            We don&apos;t spam keywords. We engineer E-E-A-T compliant semantic graphs that inform search engines of your absolute authority in your niche.
          </motion.p>
        </section>

        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={item} className="p-10 border border-white/5 bg-white/[0.01]">
                <Search className="w-10 h-10 text-cyan-400 mb-8" />
                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">SEMANTIC ENTITY MAPPING</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                   We identify the core digital entities your brand represents and build a web of topical authority that search engines cannot ignore. This goes beyond traditional keyword research.
                </p>
            </motion.div>
            <motion.div variants={item} className="p-10 border border-white/5 bg-white/[0.01]">
                <TrendingUp className="w-10 h-10 text-cyan-400 mb-8" />
                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">LOCAL SEO MASTERY</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                   Dominating regional markets through localized E-E-A-T strategies, map-pack optimization, and hyper-targeted regional content silos.
                </p>
            </motion.div>
        </section>

        <section className="mb-32 py-24 px-12 bg-cyan-400 text-black">
          <motion.div variants={item} className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-12">
               +315% ORGANIC GROWTH
            </h3>
            <p className="text-lg font-bold uppercase tracking-widest max-w-2xl mx-auto opacity-80">
               Average increase in organic visibility for our high-end SEO builds. We don&apos;t just rank; we command the results page.
            </p>
          </motion.div>
        </section>

        <section className="pt-32 pb-12 text-center">
           <Link href="/contact" className="px-12 py-5 bg-cyan-400 text-black font-mono font-black text-xl hover:bg-white transition-colors uppercase tracking-tighter">INITIATE_SEO_AUDIT</Link>
        </section>
      </motion.div>
      <Footer suffix="SEO.ENTITY.PROT" />
    </main>
  );
}
