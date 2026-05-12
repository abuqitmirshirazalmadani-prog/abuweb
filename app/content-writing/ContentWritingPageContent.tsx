"use client";

import { motion } from "motion/react";
import { 
  Type, 
  FileText, 
  Database, 
  Search, 
  Globe, 
  Zap,
  Activity
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function ContentWritingPageContent() {
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
          <motion.h1 variants={item} className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">{`// SEMANTIC COPYWRITING`}</motion.h1>
          <motion.h2 variants={item} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-12 uppercase">
            CONVERSION COPY.<br/>TECHNICAL E-E-A-T.
          </motion.h2>
          <motion.p variants={item} className="text-xl md:text-2xl font-light text-slate-400 max-w-2xl leading-relaxed">
            Content designed for both humans and machines. We write technical copy that builds trust with your audience and informs search engines of your topical expertise.
          </motion.p>
        </section>

        <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { tile: "Technical Writing", desc: "Documentation, whitepapers, and deep-dive technical articles." },
              { tile: "Conversion Copy", desc: "Landing pages that turn technical specifications into revenue." },
              { tile: "E-E-A-T Optimization", desc: "Building Experience, Expertise, Authoritativeness, and Trust through content." },
              { tile: "Semantic Silos", desc: "Strategically linked content clusters that dominate topical search." },
            ].map((cap, id) => (
              <motion.div key={id} variants={item} className="p-10 border border-white/5 bg-white/[0.01]">
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{cap.tile}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
        </section>

        <section className="pt-32 pb-12 text-center">
           <Link href="/contact" className="px-12 py-5 bg-cyan-400 text-black font-mono font-black text-xl hover:bg-white transition-colors uppercase tracking-tighter">INITIATE_CONTENT_SPRINT</Link>
        </section>
      </motion.div>
      <Footer suffix="CONTENT.WRITE.PROT" />
    </main>
  );
}
