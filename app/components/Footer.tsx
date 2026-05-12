"use client";

import { useEffect, useState } from "react";

export default function Footer({ suffix = "" }: { suffix?: string }) {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 border-t border-white/5 px-6 text-center">
      <div className="font-mono text-[10px] tracking-[0.5em] text-slate-600 uppercase">
        © {year || "...."} ABUQITMIR.TECH // {suffix || "ALL RIGHTS RESERVED"}
      </div>
      <div className="mt-8">
        <a 
          href="https://github.com/abuqitmirshirazalmadani-prog/abuweb" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[9px] font-mono text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-[0.3em] inline-block border border-white/5 px-4 py-2"
        >
          _DATA_SOURCE: GITHUB.REPOSITORIES[abuweb]
        </a>
      </div>
    </footer>
  );
}
