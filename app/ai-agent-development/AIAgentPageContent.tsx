"use client";

import { motion } from "motion/react";
import { 
  Cpu, 
  BrainCircuit, 
  Bot, 
  Zap, 
  Code2, 
  ShieldAlert,
  Terminal,
  Database,
  Activity
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function AIAgentPageContent() {
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
          <motion.h1 variants={item} className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">{`// INTELLIGENT AGENTS`}</motion.h1>
          <motion.h2 variants={item} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-12 uppercase">
            AUTONOMOUS AI.<br/>INTEGRATED LOGIC.
          </motion.h2>
          <motion.p variants={item} className="text-xl md:text-2xl font-light text-slate-400 max-w-2xl leading-relaxed">
            Custom LLM Agents designed to automate complex workflows. We don&apos;t just install ChatGPT; we engineer proprietary RAG pipelines and autonomous agents that think for your business.
          </motion.p>
        </section>

        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <motion.div variants={item} className="p-12 bg-white/5 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-cyan-400/50">MODEL_CONNECTED: CLAUDE-3.5-SONNET</div>
              <div className="space-y-4">
                 <div className="flex gap-4">
                    <div className="w-8 h-8 rounded bg-cyan-400" />
                    <div className="h-8 flex-grow bg-white/10 rounded flex items-center px-4 font-mono text-[10px]">Analyzing supply chain bottleneck...</div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-8 h-8 rounded bg-white/20" />
                    <div className="h-24 flex-grow bg-white/5 rounded border border-white/10 p-4 font-mono text-[10px] text-slate-400 leading-relaxed italic">
                       &gt; identified 4 inefficient nodes in secondary distribution path.<br/>
                       &gt; executing re-routing protocol via API_v2.<br/>
                       &gt; optimization efficiency increased by 22%.
                     </div>
                 </div>
              </div>
           </motion.div>
           <motion.div variants={item}>
              <h3 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">BEYOND CHAT INTERFACES</h3>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                The real power of AI is not in a chat box. It is in autonomous background workers that monitor your databases, process your leads, and optimize your systems 24/7.
              </p>
              <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-slate-500">
                 <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-cyan-400" /> Proprietary RAG Pipelines</li>
                 <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-cyan-400" /> Autonomous Decision Engines</li>
                 <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-cyan-400" /> Vector Database Optimization</li>
              </ul>
           </motion.div>
        </section>

        <section className="mb-32">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center">
              <div>
                 <div className="text-5xl font-black text-white mb-4">-70%</div>
                 <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Operational Overhead</div>
              </div>
              <div className="h-px bg-white/10 hidden md:block" />
              <div>
                 <div className="text-5xl font-black text-white mb-4">24/7</div>
                 <div className="text-xs font-mono uppercase tracking-widest text-slate-500">Autonomous Execution</div>
              </div>
           </div>
        </section>

        <section className="pt-32 pb-12 text-center">
           <Link href="/contact" className="px-12 py-5 bg-cyan-400 text-black font-mono font-black text-xl hover:bg-white transition-colors uppercase tracking-tighter">INITIATE_AI_PROTOCOL</Link>
        </section>
      </motion.div>
      <Footer suffix="AI.AGENT.PROT" />
    </main>
  );
}
