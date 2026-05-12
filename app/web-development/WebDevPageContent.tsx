"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Zap, 
  Code2, 
  Terminal,
  Layers,
  Activity,
  Maximize2,
  Cpu
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function WebDevPageContent() {
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
          <motion.h1 variants={item} className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">{`// WEB ENGINEERING`}</motion.h1>
          <motion.h2 variants={item} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-12 uppercase">
            SUB-SECOND FRONTENDS.<br/>JAMSTACK PORTALS.
          </motion.h2>
          <motion.p variants={item} className="text-xl md:text-2xl font-light text-slate-400 max-w-2xl leading-relaxed">
            We weaponize Next.js and headless architectures to build web experiences that load faster than the user can blink. Total SEO dominance starts with speed.
          </motion.p>
        </section>

        <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Headless CMS", desc: "Decoupled content management for maximum flexibility." },
              { title: "Edge Deployment", desc: "Global distribution via CDN for sub-second delivery." },
              { title: "Static Generation", desc: "Pre-rendered pages for extreme security and performance." },
            ].map((cap, id) => (
              <motion.div key={id} variants={item} className="p-10 border border-white/5 bg-white/[0.01]">
                <h4 className="text-xl font-bold text-white mb-4 uppercase">{cap.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
        </section>

        <section className="mb-32 py-24 px-12 bg-white/[0.02] border border-white/5">
          <motion.div variants={item} className="max-w-4xl mx-auto text-center">
            <h3 className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">THE PERFORMANCE PROTOCOL</h3>
            <p className="text-2xl md:text-4xl font-light text-white leading-tight mb-12">
              Every millisecond of delay costs real revenue. We utilize <span className="text-cyan-400 font-bold italic">Vercel & Netlify</span> edge networks to ensure your application is alive and interactive before your competitors even resolve.
            </p>
            <div className="flex justify-center gap-12 font-mono text-xs opacity-50 uppercase tracking-widest">
               <span>Next.js 15</span>
               <span>Tailwind 4</span>
               <span>TypeScript</span>
            </div>
          </motion.div>
        </section>

        <section className="pt-32 pb-12 text-center">
           <Link href="/contact" className="px-12 py-5 bg-cyan-400 text-black font-mono font-black text-xl hover:bg-white transition-colors uppercase tracking-tighter">INITIATE_WEB_BUILD</Link>
        </section>
      </motion.div>
      <Footer suffix="WEB.DEV.PROT" />
    </main>
  );
}
