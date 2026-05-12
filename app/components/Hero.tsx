"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Terminal,
  Activity,
  Cpu,
  Layers,
  Square
} from "lucide-react";
import WaveformCanvas from "./WaveformCanvas";
import Link from "next/link";

export default function Hero() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section className="bg-black min-h-screen flex items-center justify-center p-0 md:p-4 font-sans selection:bg-cyan-400 selection:text-black">
      {/* Structural Wrapper */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-[1536px] min-h-[90vh] bg-black border-y md:border-x-2 border-white/20 mx-auto overflow-hidden flex flex-col pt-24"
      >
        <WaveformCanvas />

        {/* Brutalist Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        {/* Main Content Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col flex-grow px-6 md:px-16 lg:px-24"
        >
          {/* Header Metadata Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-20 border-b-2 border-white pb-8">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="bg-cyan-400 p-2 border-2 border-white">
                <Square className="w-6 h-6 text-black fill-black" />
              </div>
              <div>
                <h2 className="text-xl font-black italic tracking-tighter text-white uppercase italic">ABU QITMIR PROTOCOL</h2>
                <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">
                   <span className="w-1.5 h-1.5 bg-cyan-400 animate-pulse"></span> SYSTEM_ONLINE
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-12 font-mono text-xs uppercase tracking-widest text-slate-500">
              <div className="hidden lg:block">
                <p className="text-white brightness-75 mb-1">LATENCY</p>
                <p className="text-cyan-400">12ms_OPTIMAL</p>
              </div>
              <div className="hidden lg:block">
                <p className="text-white brightness-75 mb-1">NODE_ID</p>
                <p className="text-cyan-400">AQ_5521_X</p>
              </div>
              <div>
                <p className="text-white brightness-75 mb-1">UPTIME</p>
                <p className="text-cyan-400">99.9997%</p>
              </div>
            </motion.div>
          </div>

          {/* Headline Section */}
          <div className="max-w-7xl">
            <motion.div variants={itemVariants} className="mb-6">
               <span className="inline-block py-1 px-3 bg-white text-black font-mono text-[10px] uppercase font-bold tracking-[0.3em] mb-4 border border-black">
                 EST_2024 // HIGH_PERFORMANCE_CORE
               </span>
               <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter text-white uppercase break-words">
                 ENGINEERING<br/>
                 <span className="text-cyan-400 underline decoration-white decoration-4 underline-offset-8">HYPER-GROWTH</span><br/>
                 IN REAL-TIME
               </h1>
            </motion.div>

            <div className="grid grid-cols-12 gap-8 items-end mt-12 pb-20">
              <motion.div variants={itemVariants} className="col-span-12 lg:col-span-6">
                <p className="text-xl md:text-2xl font-medium tracking-tight text-slate-300 leading-tight mb-8">
                  No soft strategies. No aesthetic fluff. <br/>
                  We produce technical dominance for enterprises via <span className="text-white bg-white/10 px-2 italic">AI-Agents</span>, <span className="text-white bg-white/10 px-2 italic">Semantic SEO</span>, and custom application architectures.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="group relative px-10 py-5 bg-cyan-400 text-black border-2 border-white font-mono font-black text-xl flex items-center gap-4 hover:translate-x-1 hover:-translate-y-1 transition-transform active:translate-x-0 active:translate-y-0">
                    OPEN_CHANNEL
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    {/* Shadow block for brutalist depth */}
                    <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 -z-10 border-2 border-white" />
                  </Link>
                  
                  <Link href="/custom-software" className="px-10 py-5 bg-black text-white border-2 border-white font-mono font-bold text-lg hover:bg-white hover:text-black transition-colors">
                    EXPLORE_TECH_STACK
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="hidden lg:col-span-6 lg:flex flex-col gap-6 items-end">
                 <div className="w-full max-w-sm border-l-4 border-cyan-400 pl-6 py-4 bg-white/5">
                    <p className="font-mono text-sm uppercase text-slate-500 mb-2">Primary Objective</p>
                    <p className="text-white font-bold text-lg leading-snug">
                      Eliminate digital friction. Maximize conversion entropy. Replace legacy overhead with autonomous agent logic.
                    </p>
                 </div>
                 
                 <div className="flex gap-4 items-center">
                    <div className="flex -space-x-4">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-10 h-10 border-2 border-black bg-slate-900 rounded-none overflow-hidden p-2">
                           <Layers className="w-full h-full text-cyan-400" />
                         </div>
                       ))}
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">+50 INTEGRATIONS</span>
                 </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar: Horizontal Scroller or Data Points */}
          <motion.div 
            variants={itemVariants}
            className="mt-auto border-t-2 border-white flex flex-col md:flex-row justify-between items-center py-6 gap-6"
          >
            <div className="flex items-center gap-10 font-mono text-[10px] tracking-[0.4em] text-slate-600 uppercase">
              <span className="flex items-center gap-2"><Activity className="w-3 h-3"/> MONITOR_ACTIVE</span>
              <span className="flex items-center gap-2"><Cpu className="w-3 h-3"/> CORE_V9</span>
              <span className="flex items-center gap-2"><Terminal className="w-3 h-3"/> SHELL_ENABLED</span>
            </div>
            
            <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest italic">
              COPYRIGHT_MMXXIV // 79.44.110.01 // SYSTEM_ROOT
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
