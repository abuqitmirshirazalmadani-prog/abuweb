"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Lock, Activity, Server, Database } from "lucide-react";
import { useState, useEffect } from "react";

export default function AdminPageContent() {
  const [isLocked, setIsLocked] = useState(true);
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (isLocked) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full p-12 border-2 border-white/20 bg-black/80 backdrop-blur-xl text-center"
        >
          <Lock className="w-12 h-12 text-cyan-400 mx-auto mb-8" />
          <h1 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">SECURE OPERATIONAL ACCESS</h1>
          <input 
            type="password" 
            placeholder="ENTER AUTHORIZATION KEY" 
            className="w-full bg-white/5 border border-white/10 p-4 font-mono text-xs text-center text-cyan-400 outline-none focus:border-cyan-400/50 mb-8"
          />
          <button 
            onClick={() => setIsLocked(false)}
            className="w-full py-4 bg-cyan-400 text-black font-black font-mono text-sm uppercase tracking-widest hover:bg-white transition-colors"
          >
            _AUTHENTICATE
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-8 font-mono section-bg selection:bg-cyan-400 selection:text-black">
      <header className="mb-12 flex justify-between items-center border-b border-white/10 pb-8">
        <div className="flex items-center gap-4">
          <Terminal className="w-6 h-6 text-cyan-400" />
          <h1 className="text-xl font-black tracking-tighter">ABUQITMIR_DASHBOARD_v1.0.4</h1>
        </div>
        <div className="text-[10px] text-slate-500 uppercase tracking-widest">
           SYSTEM_TIME: {time || "_CALIBRATING"}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { icon: Activity, label: "CPU_LOAD", val: "12.4%", color: "text-green-500" },
          { icon: Server, label: "LATENCY", val: "0.02ms", color: "text-cyan-400" },
          { icon: Database, label: "DB_QUERIES", val: "4.1k/min", color: "text-yellow-500" },
          { icon: Shield, label: "SECURITY", val: "ACTIVE", color: "text-cyan-400" },
        ].map((stat, i) => (
          <div key={i} className="p-6 border border-white/5 bg-white/[0.01]">
             <stat.icon className={`w-5 h-5 ${stat.color} mb-4`} />
             <div className="text-[10px] text-slate-500 mb-2">{stat.label}</div>
             <div className="text-2xl font-black">{stat.val}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 border border-white/5 bg-white/[0.01]">
           <h3 className="text-sm font-black mb-8 border-b border-white/10 pb-4">CORE_LOGS</h3>
           <div className="space-y-4 text-[10px] text-slate-400 leading-relaxed uppercase">
              <p className="text-cyan-400/50">[ 09:24:12 ] INCOMING_LEAD: PROJECT_MIGRATION_US</p>
              <p>[ 09:22:04 ] PIPELINE_AUTO_DEPLOY: REPO_MASTER -&gt; PROD</p>
              <p>[ 09:18:55 ] CACHE_INVALIDATION_COMPLETE: REGION_GLOBAL</p>
              <p className="text-red-500/50">[ 09:15:33 ] UNAUTHORIZED_ACCESS_ATTEMPT: BLOCKED_IP_XX.1</p>
           </div>
        </div>
        <div className="p-8 border border-white/5 bg-white/[0.01]">
           <h3 className="text-sm font-black mb-8 border-b border-white/10 pb-4">SYSTEM_CONTROLS</h3>
           <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border border-white/10 text-[10px] hover:bg-red-500/20 transition-colors uppercase">_FLUSH_CACHE</button>
              <button className="p-4 border border-white/10 text-[10px] hover:bg-cyan-400/20 transition-colors uppercase">_PULL_ANALYTICS</button>
              <button className="p-4 border border-white/10 text-[10px] hover:bg-white/10 transition-colors uppercase">_REBOT_NODES</button>
              <button onClick={() => setIsLocked(true)} className="p-4 border border-white/10 text-[10px] hover:bg-white text-black transition-colors bg-white/10 uppercase">_LOGOUT</button>
           </div>
        </div>
      </div>
    </div>
  );
}
