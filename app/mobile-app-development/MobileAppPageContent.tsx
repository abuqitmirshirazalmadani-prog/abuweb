"use client";

import { motion } from "motion/react";
import { 
  Smartphone, 
  Cpu, 
  Globe, 
  Zap, 
  Code2, 
  CheckCircle2, 
  AlertCircle,
  Terminal,
  Layers,
  Activity
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function MobileAppPageContent() {
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
        {/* 1. Category Hero */}
        <section className="mb-32">
          <motion.h1 variants={item} className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">{`// MOBILE ENGINEERING`}</motion.h1>
          <motion.h2 variants={item} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-12 uppercase">
            NATIVE PERFORMANCE.<br/>CROSS-PLATFORM REACH.
          </motion.h2>
          <motion.p variants={item} className="text-xl md:text-2xl font-light text-slate-400 max-w-2xl leading-relaxed">
            High-fidelity React Native and Flutter deployments. We don&apos;t build web-wrappers; we engineer native-grade mobile experiences that dominate app stores.
          </motion.p>
        </section>

        {/* 2. The Problem */}
        <section className="mb-32 p-12 bg-red-500/5 border border-red-500/20 relative">
          <motion.h3 variants={item} className="text-2xl md:text-4xl font-black text-red-500 mb-8 uppercase tracking-tighter">
            THE HYBRID TRAP
          </motion.h3>
          <motion.p variants={item} className="text-lg text-slate-400 max-w-4xl leading-relaxed">
            Most agencies use low-cost hybrid tools that result in laggy animations, broken navigation, and massive battery drain. A poor mobile app is worse than no app at all. We eliminate the lag and provide sub-second responsiveness.
          </motion.p>
        </section>

        {/* 3. The ABUQITMIR Solution */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={item}>
            <h3 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">FLUID ARCHITECTURE</h3>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              Utilizing Flutter and React Native, we achieve 60FPS performance on both iOS and Android from a single codebase. This means faster time-to-market without compromising the tactile feel of a premium native application.
            </p>
          </motion.div>
          <motion.div variants={item} className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center p-12">
             <div className="w-48 h-96 border-4 border-slate-800 rounded-[3rem] p-4 relative bg-black shadow-2xl">
                <div className="w-20 h-1 bg-slate-800 absolute top-4 left-1/2 -translate-x-1/2 rounded-full" />
                <div className="mt-8 space-y-4">
                   <div className="h-32 bg-cyan-400/20 rounded-xl border border-cyan-400/30 animate-pulse" />
                   <div className="h-4 w-3/4 bg-white/10 rounded" />
                   <div className="h-4 w-1/2 bg-white/10 rounded" />
                   <div className="grid grid-cols-2 gap-2">
                      <div className="h-10 bg-white/5 rounded" />
                      <div className="h-10 bg-white/5 rounded" />
                   </div>
                </div>
             </div>
          </motion.div>
        </section>

        {/* 4. Core Capabilities */}
        <section className="mb-32">
          <h3 className="text-3xl font-black text-white mb-16 uppercase tracking-tighter">MOBILE DEPLOYMENT SUITE</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "iOS & Android", desc: "Symmetric feature parity across all major mobile ecosystems." },
              { title: "Offline-First", desc: "Robust data synchronization that works without connectivity." },
              { title: "Biometric Auth", desc: "FaceID and Fingerprint integration for top-tier security." },
            ].map((cap, id) => (
              <motion.div key={id} variants={item} className="p-10 border border-white/5 bg-white/[0.01]">
                <h4 className="text-xl font-bold text-white mb-4 uppercase">{cap.title}</h4>
                <p className="text-slate-500 text-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. Tech Stack */}
        <section className="py-24 mb-32 border-y border-white/5">
           <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-50">
             {['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'].map((tech) => (
               <span key={tech} className="font-mono text-xl font-black text-white uppercase tracking-widest">{tech}</span>
             ))}
           </div>
        </section>

        {/* FAQ */}
        <section className="py-24 border-t border-white/5">
           <h3 className="text-4xl font-black text-white mb-16 uppercase tracking-tighter">MOBILE FAQ</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { q: "Flutter vs React Native?", a: "We choose based on your specific graphic and background task requirements. Both offer near-native speed." },
                { q: "App Store guidelines?", a: "We handle the entire submission and review process for Apple and Google." },
              ].map((faq, i) => (
                <div key={i} className="p-8 border border-white/5">
                   <h4 className="text-sm font-mono text-cyan-400 mb-4">{faq.q}</h4>
                   <p className="text-slate-500 text-sm">{faq.a}</p>
                </div>
              ))}
           </div>
        </section>

        <section className="pt-32 pb-12 text-center">
           <Link href="/contact" className="px-12 py-5 bg-cyan-400 text-black font-mono font-black text-xl hover:bg-white transition-colors uppercase tracking-tighter italic">INITIATE_MOBILE_BUILD</Link>
        </section>

      </motion.div>
      <Footer suffix="MOB.APP.PROT" />
    </main>
  );
}
