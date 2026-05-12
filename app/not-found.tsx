"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 font-sans selection:bg-cyan-400 selection:text-black">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 max-w-2xl w-full"
      >
        <div className="border-4 border-white p-8 md:p-16 bg-black relative">
          {/* Corner Decors */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400 border-2 border-white" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-cyan-400 border-2 border-white" />

          <div className="flex items-center gap-4 mb-12">
            <div className="bg-red-500 p-2 border-2 border-white">
              <AlertTriangle className="w-6 h-6 text-black" />
            </div>
            <div className="font-mono text-[10px] tracking-[0.4em] text-red-500 uppercase">
              CRITICAL_SYSTEM_ERROR // ADDR_RESOLUTION_FAILED
            </div>
          </div>

          <h2 className="text-sm font-mono tracking-[0.5em] text-cyan-400 uppercase mb-4">
            [ ERROR_CODE: 404 ]
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase mb-8 leading-none">
            NODE_NOT_FOUND
          </h1>

          <p className="text-slate-400 font-mono text-xs uppercase tracking-widest leading-relaxed mb-12 max-w-md">
            The requested resource segment at this URI does not exist in the current architectural registry. 
            Verification of path integrity completed with 0 results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="/" 
              className="group relative px-8 py-4 bg-cyan-400 text-black border-2 border-white font-mono font-black text-sm uppercase flex items-center justify-center gap-3 hover:translate-x-1 hover:-translate-y-1 transition-transform"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              SYSTEM_REBOOT
              <div className="absolute inset-0 bg-black translate-x-1.5 translate-y-1.5 -z-10 border border-white/20" />
            </Link>

            <Link 
              href="/blog" 
              className="px-8 py-4 bg-black text-white border-2 border-white font-mono font-bold text-sm uppercase text-center hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3"
            >
              <Terminal className="w-4 h-4" />
              DATABANK_ARCHIVE
            </Link>
          </div>
        </div>

        {/* Decorative metadata */}
        <div className="mt-8 flex justify-between font-mono text-[9px] text-slate-600 uppercase tracking-[0.3em]">
          <span>IP_ADDR: 127.0.0.1</span>
          <span>TIMESTAMP: {new Date().toISOString().split('T')[0].replace(/-/g, '.')}</span>
        </div>
      </motion.div>
    </div>
  );
}
