"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Crosshair } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function AboutPageContent() {
  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
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
        {/* 1. Hero Profile */}
        <section className="mb-32">
          <motion.h1 variants={item} className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">{`// FOUNDER PROFILE`}</motion.h1>
          <motion.h2 variants={item} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-10 max-w-4xl uppercase">
            THE ARCHITECT<br/>BEHIND THE CODE
          </motion.h2>
          <motion.p variants={item} className="text-2xl md:text-3xl font-light text-slate-400 max-w-2xl">
            Technical mastery meets aggressive business strategy.
          </motion.p>
        </section>

        {/* 2. Who I Am */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <motion.div variants={item} className="aspect-[4/5] bg-white/5 border border-white/10 relative overflow-hidden group">
             <div className="absolute inset-0 flex items-center justify-center font-mono text-white/10 text-9xl font-black select-none group-hover:scale-110 transition-transform duration-1000">MBA.TECH</div>
             <div className="absolute bottom-10 left-10 text-cyan-400 font-mono text-xs tracking-widest uppercase">ID.PROTO // ACTIVE</div>
          </motion.div>
          <motion.div variants={item}>
            <h3 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">BEYOND THE TERMINAL</h3>
            <p className="text-lg text-slate-400 font-light leading-relaxed mb-6">
              I am not just a developer; I am a digital growth architect. I founded AbuQitmir.tech to bridge the massive gap between raw coding and actual business ROI. I recognized that companies don&apos;t need &quot;websites&quot;&mdash;they need digital assets that generate revenue, automate processes, and dominate search engines.
            </p>
          </motion.div>
        </section>

        {/* 3. Academic Foundation */}
        <section className="py-24 px-12 bg-white/[0.02] border border-white/5 mb-32">
          <motion.div variants={item} className="max-w-4xl">
            <h3 className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">THE INTERSECTION OF CODE AND COMMERCE</h3>
            <p className="text-2xl md:text-4xl font-light text-white leading-tight">
              Armed with an <span className="text-cyan-400 font-black">M.B.A.</span> and years of hardcore technical engineering, I bring a unique dual-perspective to every project. I understand profit and loss statements as fluently as I understand Python and React.
            </p>
          </motion.div>
        </section>

        {/* 4. Professional Pillars */}
        <section className="mb-32">
          <h3 className="text-4xl font-black text-white mb-20 uppercase tracking-tighter">THREE PILLARS OF EXECUTION</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "Performance", desc: "If it takes more than a second to load, it is broken. We engineer for speed." },
              { icon: Target, title: "Purpose", desc: "No feature is built simply because it 'looks cool.' Everything serves the conversion metric." },
              { icon: Crosshair, title: "Precision", desc: "From E-E-A-T compliant semantic writing to pixel-perfect UI, accuracy is our baseline." },
            ].map((pillar, id) => (
              <motion.div key={id} variants={item} className="group">
                <pillar.icon className="w-10 h-10 text-cyan-400 mb-8 group-hover:rotate-12 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-4 uppercase">{pillar.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Closing CTA */}
        <section className="text-center py-32 border-t border-white/5">
          <motion.h3 variants={item} className="text-4xl md:text-6xl font-black text-white mb-12 uppercase">
            READY TO RESTRUCTURE YOUR<br/>DIGITAL PRESENCE?
          </motion.h3>
          <motion.div variants={item}>
            <Link href="/contact" className="inline-flex items-center gap-4 px-10 py-5 bg-cyan-400 text-black font-mono font-black text-xl hover:bg-white transition-colors">
              SPEAK DIRECTLY WITH THE FOUNDER <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </section>
      </motion.div>
      <Footer suffix="FOUNDER.BIO.RES" />
    </main>
  );
}
