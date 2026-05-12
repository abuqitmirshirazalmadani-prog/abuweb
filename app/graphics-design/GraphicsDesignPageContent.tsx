"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  PenTool, 
  Layers, 
  Box, 
  Monitor, 
  Zap,
  Activity
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function GraphicsDesignPageContent() {
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
          <motion.h1 variants={item} className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">{`// VISUAL ENGINEERING`}</motion.h1>
          <motion.h2 variants={item} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-12 uppercase">
            PREMIUM DESIGN.<br/>BRUTALIST EDGES.
          </motion.h2>
          <motion.p variants={item} className="text-xl md:text-2xl font-light text-slate-400 max-w-2xl leading-relaxed">
            We don&apos;t do pretty pictures. We engineer visual identities that communicate authority and technical dominance. Functional aesthetics for high-growth enterprises.
          </motion.p>
        </section>

        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10">
            {[
              { tile: "Brand Identity", desc: "Atomic design systems that scale from business cards to billboards." },
              { tile: "UI/UX Engineering", desc: "High-density data visualization and functional brutalist interfaces." },
              { tile: "3D Assets", desc: "Custom engineered 3D models and high-end tech visualizations." },
            ].map((cap, id) => (
              <motion.div key={id} variants={item} className="bg-[#020617] p-10 hover:bg-white/[0.03] transition-colors">
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{cap.tile}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
        </section>

        <section className="pt-32 pb-12 text-center">
           <Link href="/contact" className="px-12 py-5 bg-cyan-400 text-black font-mono font-black text-xl hover:bg-white transition-colors uppercase tracking-tighter italic">INITIATE_DESIGN_PROT</Link>
        </section>
      </motion.div>
      <Footer suffix="GRAPH.DESIGN.PROT" />
    </main>
  );
}
