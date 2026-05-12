"use client";

import { motion } from "motion/react";
import { Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function PolandMarketPageContent() {
  const container: any = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const item: any = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <main className="pt-32 pb-24 px-6 overflow-x-hidden bg-[#020617] selection:bg-cyan-400 selection:text-black">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto">
        <section className="mb-32">
          <motion.h1 variants={item} className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">{`// REGIONAL DEPLOYMENT: POLAND`}</motion.h1>
          <motion.h2 variants={item} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-12 uppercase">
            EASTERN EUROPEAN<br/>ENGINEERING HUB.
          </motion.h2>
          <motion.p variants={item} className="text-xl md:text-2xl font-light text-slate-400 max-w-2xl leading-relaxed">
            Deploying high-end brutalist architectures for Poland&apos;s rapidly evolving tech sector.
          </motion.p>
        </section>

        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={item} className="p-10 border border-white/5 bg-white/[0.01]">
                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">MARKET STRATEGY</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                   Technical infrastructure optimized for the EU market with local Polish market insights.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-[10px]">
                   <ShieldCheck className="w-3 h-3" /> GDPR COMPLIANT DATA FLOWS
                </div>
            </motion.div>
            <motion.div variants={item} className="p-10 border border-white/5 bg-white/[0.01]">
                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">REGIONAL CASE STUDY</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                   Secured and refactored a Warsaw-based SaaS, improving backend efficiency by 45%.
                </p>
                <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest">+45% EFFICIENCY</div>
            </motion.div>
        </section>

        <section className="pt-32 pb-12 text-center">
           <Link href="/contact" className="px-12 py-5 bg-cyan-400 text-black font-mono font-black text-xl hover:bg-white transition-colors uppercase tracking-tighter">INITIATE_POLAND_DEPLOYMENT</Link>
        </section>
      </motion.div>
      <Footer suffix="POL.MARKET.PROT" />
    </main>
  );
}
