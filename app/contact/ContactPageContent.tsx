"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import Footer from "../components/Footer";

export default function ContactPageContent() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

  return (
    <main className="pt-32 pb-24 px-6 overflow-x-hidden min-h-screen flex flex-col bg-[#020617]">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto w-full flex-grow">
        <section className="mb-32">
          <motion.h1 variants={item} className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">{`// COMMUNICATIONS CHANNEL`}</motion.h1>
          <motion.h2 variants={item} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-12 uppercase">
            INITIATE<br/>CONTACT.
          </motion.h2>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
           <motion.div variants={item}>
              <h3 className="text-3xl font-black text-white mb-12 uppercase">TRANSMISSION DATA</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                 <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">_FULL_NAME</label>
                    <input type="text" className="w-full bg-white/[0.02] border-b border-white/20 p-4 focus:border-cyan-400 outline-none transition-colors text-white placeholder:text-slate-700" placeholder="ENTER NAME" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">_EMAIL_ADDRESS</label>
                    <input type="email" className="w-full bg-white/[0.02] border-b border-white/20 p-4 focus:border-cyan-400 outline-none transition-colors text-white placeholder:text-slate-700" placeholder="ENTER EMAIL" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">_MISSION_OBJECTIVE</label>
                    <textarea rows={4} className="w-full bg-white/[0.02] border-b border-white/20 p-4 focus:border-cyan-400 outline-none transition-colors text-white resize-none placeholder:text-slate-700" placeholder="DESCRIBE PROJECT" />
                 </div>
                 <button className="w-full py-5 bg-cyan-400 text-black font-black font-mono text-xl hover:bg-white transition-colors flex items-center justify-center gap-4">
                    _SEND_TRANSMISSION <Send className="w-5 h-5" />
                 </button>
              </form>
           </motion.div>
           <motion.div variants={item} className="space-y-16">
              <div>
                 <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4 italic">DIRECT_LINES</h3>
                 <div className="space-y-4">
                    <div className="flex items-center gap-6 group">
                       <Mail className="w-6 h-6 text-cyan-400" />
                       <span className="text-xl md:text-2xl text-white font-bold tracking-tight group-hover:text-cyan-400 transition-colors">HELLO@ABUQITMIR.TECH</span>
                    </div>
                    <div className="flex items-center gap-6 group">
                       <Phone className="w-6 h-6 text-cyan-400" />
                       <span className="text-xl md:text-2xl text-white font-bold tracking-tight group-hover:text-cyan-400 transition-colors">+1 [XXX] XXX-XXXX</span>
                    </div>
                 </div>
              </div>
              <div className="p-8 bg-white/[0.02] border border-white/5 space-y-4">
                 <h4 className="text-sm font-mono text-cyan-400 uppercase italic">OPERATIONAL_HOURS</h4>
                 <div className="text-xs text-slate-500 font-mono space-y-2">
                    <p>MON-FRI: 0900 - 1800 EST</p>
                    <p>SAT-SUN: CLOSED [SUPPORT ONLY]</p>
                 </div>
              </div>
           </motion.div>
        </section>
      </motion.div>
      <Footer suffix="CONTACT.PORTAL.PROT" />
    </main>
  );
}
