"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Zap, 
  Code2, 
  CheckCircle2, 
  AlertCircle,
  Terminal,
  Server,
  Layers
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function CustomSoftwarePageContent() {
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
          <motion.h1 variants={item} className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">{`// ARCHITECTURE & ENGINEERING`}</motion.h1>
          <motion.h2 variants={item} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-12 uppercase">
            CUSTOM SOFTWARE FOR<br/>AGGRESSIVE SCALING
          </motion.h2>
          <motion.p variants={item} className="text-xl md:text-2xl font-light text-slate-400 max-w-2xl leading-relaxed">
            Escape the limitations of off-the-shelf software. We engineer bespoke, scalable, cloud-native infrastructures tailored to your exact operational workflows.
          </motion.p>
        </section>

        {/* 2. The Problem/Warning */}
        <section className="mb-32 p-12 bg-red-500/5 border border-red-500/20 relative">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>
          <motion.h3 variants={item} className="text-2xl md:text-4xl font-black text-red-500 mb-8 uppercase tracking-tighter">
            OFF-THE-SHELF IS DIGITAL SABOTAGE
          </motion.h3>
          <motion.p variants={item} className="text-lg text-slate-400 max-w-4xl leading-relaxed">
            Using generic SaaS products to run a unique business forces you to compromise your workflows. You pay for features you don&apos;t use, suffer through disconnected data silos, and hit technical roadblocks the moment you try to scale. Generic software is designed for everyone, which means it is optimized for no one.
          </motion.p>
        </section>

        {/* 3. The ABUQITMIR Solution */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={item}>
            <h3 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">BESPOKE INFRASTRUCTURE</h3>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              We map your exact business logic and encode it into proprietary software. Whether you need a high-traffic SaaS backend, a localized ERP, or a secure fintech dashboard, we build systems that give you total ownership, military-grade security, and infinite scalability.
            </p>
          </motion.div>
          <motion.div variants={item} className="grid grid-cols-2 gap-4">
             {[1,2,3,4].map(i => (
               <div key={i} className="aspect-square bg-cyan-400/5 border border-cyan-400/10 flex items-center justify-center p-8">
                  <div className="w-full h-full border border-cyan-400/20 rounded-full animate-pulse opacity-20" />
               </div>
             ))}
          </motion.div>
        </section>

        {/* 4. Core Capabilities */}
        <section className="mb-32">
          <h3 className="text-3xl font-black text-white mb-16 uppercase tracking-tighter">ENGINEERING DEPLOYMENTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Scalable MVPs", desc: "Rapid deployment of core features for tech startups." },
              { title: "Enterprise ERP", desc: "Unified data ecosystems for massive efficiency." },
              { title: "Legacy Modernization", desc: "Refactoring outdated codebases to cloud standards." },
              { title: "Microservices", desc: "Decoupled architectures that communicate seamlessly." },
            ].map((cap, id) => (
              <motion.div key={id} variants={item} className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                <h4 className="text-xl font-bold text-white mb-4 uppercase">{cap.title}</h4>
                <p className="text-slate-500 text-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Service-Specific Strategy */}
        <section className="mb-32 py-24 px-12 bg-white/[0.02] border border-white/5">
          <motion.div variants={item} className="max-w-4xl">
            <h3 className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">THE AGILE BLUEPRINT</h3>
            <p className="text-2xl md:text-4xl font-light text-white leading-tight mb-8">
              We operate in strict <span className="text-cyan-400 font-black">2-week sprints</span>. We don&apos;t disappear for months and return with a bloated product. 
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              You get continuous staging access, allowing us to pivot technical direction based on real-time market feedback. Total transparency, zero latency.
            </p>
          </motion.div>
        </section>

        {/* 6. Tech Command */}
        <section className="py-24 mb-32 border-y border-white/5">
          <h3 className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-16 text-center">THE SERVER-SIDE ARSENAL</h3>
          <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-50 contrast-125">
             {[
               { icon: Code2, label: "Node.js" },
               { icon: Cpu, label: "Python" },
               { icon: Database, label: "PostgreSQL" },
               { icon: Layers, label: "Docker" },
               { icon: Server, label: "AWS" },
             ].map((tech, i) => (
               <div key={i} className="flex flex-col items-center gap-4 group">
                  <tech.icon className="w-12 h-12 text-white group-hover:text-cyan-400 transition-colors" />
                  <span className="font-mono text-[10px] uppercase tracking-widest">{tech.label}</span>
               </div>
             ))}
          </div>
        </section>

        {/* 7. Brutalist UI/UX */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-20">
           <motion.div variants={item} className="order-2 lg:order-1">
              <div className="aspect-video bg-white/5 border border-white/10 flex flex-col p-4 font-mono text-[10px]">
                 <div className="flex justify-between border-b border-white/10 pb-2 mb-4">
                    <span>STATUS: OPTIMIZED</span>
                    <span>LATENCY: 0.04ms</span>
                 </div>
                 <div className="flex-grow flex items-center justify-center">
                    <div className="w-3/4 h-3/4 border border-cyan-400/20 relative">
                       <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400" />
                       <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400" />
                       <div className="w-full h-px bg-cyan-400/20 absolute top-1/2" />
                       <div className="h-full w-px bg-cyan-400/20 absolute left-1/2" />
                    </div>
                 </div>
              </div>
           </motion.div>
           <motion.div variants={item} className="order-1 lg:order-2">
              <h3 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">UI DESIGNED FOR DATA, NOT DISTRACTION</h3>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                Enterprise software must be highly functional. We utilize brutalist UI principles—high contrast, dense information architecture, and zero latency—to ensure your team can process massive amounts of data without cognitive fatigue.
              </p>
           </motion.div>
        </section>

        {/* 8. Vertical Case Studies */}
        <section className="mb-32">
          <h3 className="text-4xl font-black text-white mb-20 uppercase tracking-tighter">SYSTEMS IN COMBAT</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={item} className="p-10 bg-white/[0.02] border border-white/5">
               <div className="text-cyan-400 font-mono text-xs mb-4 uppercase tracking-widest">LOGISTICS ARCHITECTURE</div>
               <h4 className="text-2xl font-bold text-white mb-6 uppercase">QUERY OPTIMIZATION PROTOCOL</h4>
               <p className="text-slate-500 text-sm mb-8">Rebuilt a logistics tracking system, reducing database query times by 80% and handling 5x concurrent users.</p>
               <div className="text-3xl font-black text-white">-80% <span className="text-xs font-mono font-normal text-slate-500 uppercase">Latency</span></div>
            </motion.div>
            <motion.div variants={item} className="p-10 bg-white/[0.02] border border-white/5">
               <div className="text-cyan-400 font-mono text-xs mb-4 uppercase tracking-widest">FINTECH DEPLOYMENT</div>
               <h4 className="text-2xl font-bold text-white mb-6 uppercase">CAPITAL ACCELERATOR MVP</h4>
               <p className="text-slate-500 text-sm mb-8">Deployed a fintech MVP in 10 weeks, resulting in zero-bug production launch and securing $2M in seed funding.</p>
               <div className="text-3xl font-black text-white">10 <span className="text-xs font-mono font-normal text-slate-500 uppercase">Weeks to Launch</span></div>
            </motion.div>
          </div>
        </section>

        <section className="pt-32 pb-12 text-center">
           <motion.h3 variants={item} className="text-3xl font-black text-white mb-12 uppercase tracking-tighter">COMMENCE THE BUILD</motion.h3>
           <motion.div variants={item}>
              <Link href="/contact" className="px-12 py-5 bg-cyan-400 text-black font-mono font-black text-xl hover:bg-white transition-colors">INITIATE_SPRINT_0</Link>
           </motion.div>
        </section>

      </motion.div>
      <Footer suffix="SYS.SW.PROT" />
    </main>
  );
}
