"use client";

import { motion } from "motion/react";
import { 
  Globe, 
  Target, 
  MapPin, 
  Zap, 
  TrendingUp, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function USMarketPageContent() {
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
          <motion.h1 variants={item} className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">{`// REGIONAL DEPLOYMENT: USA`}</motion.h1>
          <motion.h2 variants={item} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-12 uppercase">
            DOMINATING THE<br/>AMERICAN MARKET.
          </motion.h2>
          <motion.p variants={item} className="text-xl md:text-2xl font-light text-slate-400 max-w-2xl leading-relaxed">
            Scalable digital infrastructure built for the aggressive pace of US enterprises. We deliver high-ROI solutions from New York to Silicon Valley.
          </motion.p>
        </section>

        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={item} className="p-10 border border-white/5 bg-white/[0.01]">
                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">US MARKET STRATEGY</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                   Focused on extreme scalability and cloud-native resilience. We understand the competitive landscape of the US tech market and engineer for maximum acquisition efficiency.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-[10px]">
                   <ShieldCheck className="w-3 h-3" /> GDPR & HIPAA COMPLIANT ARCHITECTURES
                </div>
            </motion.div>
            <motion.div variants={item} className="p-10 border border-white/5 bg-white/[0.01]">
                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">REGIONAL CASE STUDY</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                   Rebuilt a California-based fintech platform, achieving a 400% increase in concurrent user capacity with zero latency trade execution.
                </p>
                <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest">+400% CAPACITY</div>
            </motion.div>
        </section>

        <section className="py-24 border-t border-white/5">
           <h3 className="text-4xl font-black text-white mb-16 uppercase tracking-tighter text-center">LOCALIZED US FAQ</h3>
           <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: "Do you offer US-based project management?", a: "Yes, we providing seamless communication during Eastern and Pacific time zones." },
                { q: "Are your payments US tax-compliant?", a: "Yes, we handle global billing with full documentation for US entities." },
              ].map((faq, i) => (
                <div key={i} className="p-6 border border-white/5">
                   <h4 className="text-sm font-mono text-cyan-400 mb-2 uppercase">{faq.q}</h4>
                   <p className="text-slate-500 text-sm">{faq.a}</p>
                </div>
              ))}
           </div>
        </section>

        <section className="pt-32 pb-12 text-center">
           <Link href="/contact" className="px-12 py-5 bg-cyan-400 text-black font-mono font-black text-xl hover:bg-white transition-colors uppercase tracking-tighter">INITIATE_US_DEPLOYMENT</Link>
        </section>
      </motion.div>
      <Footer suffix="US.MARKET.PROT" />
    </main>
  );
}
