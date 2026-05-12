"use client";
 
import { useEffect } from "react";
import { Terminal, AlertTriangle, RotateCcw } from "lucide-react";
import Link from "next/link";
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
 
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 font-sans">
      <div className="max-w-xl w-full border border-white/10 p-12 bg-white/[0.02] text-center relative overflow-hidden">
        {/* Matrix-like glitch effect background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[10px] break-all">
          {Array(20).fill("SYSTEM_CRITICAL_FAILURE_CODE_0x1E").join(" ")}
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase">
            SYSTEM CRASH
          </h1>

          <div className="bg-black/50 border border-white/5 p-4 mb-8 font-mono text-left">
            <div className="flex items-center gap-2 text-cyan-400 text-xs mb-2">
              <Terminal className="w-3 h-3" />
              <span>ERROR_LOG_V1.0</span>
            </div>
            <p className="text-red-400 text-xs break-all leading-relaxed">
              {error.message || "An unexpected runtime exception has occurred within the core logic."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto px-8 py-4 bg-cyan-400 text-black font-mono font-black text-xs uppercase hover:bg-white transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> REBOOT_SYSTEM
            </button>
            <Link 
              href="/"
              className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white font-mono font-black text-xs uppercase hover:bg-white/5 transition-all"
            >
              ESC_TO_ROOT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
