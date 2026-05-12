"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  Activity, 
  Shield, 
  Cpu, 
  Zap, 
  Globe, 
  Layers,
  Database,
  Code2,
  CheckCircle2,
  ChevronRight,
  Play,
  Quote
} from "lucide-react";
import Link from "next/link";
import Hero from "../Hero";
import Marquee from "../Marquee";
import Footer from "../Footer";

export default function HomeContent() {
  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="overflow-x-hidden">
      <Hero />

      {/* 2. Highlights Marquee */}
      <Marquee text="⚡ SUB-SECOND LOAD TIMES • 🤖 AUTONOMOUS AI AGENTS • 📈 SEMANTIC SEO DOMINANCE • 📱 NATIVE APP EXPERIENCES • 🔒 ENTERPRISE-GRADE SECURITY • " speed={30} />

      {/* 3. Trust & Partners */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">
              COMMANDING TRUST<br/>ACROSS THE GLOBE
            </h2>
            <p className="text-slate-400 font-light leading-relaxed max-w-lg">
              Trusted by aggressive startups and established enterprises. Verified Google Business entity. E-E-A-T compliant architectures. We operate at the intersection of extreme speed and verifiable data security.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 opacity-40 grayscale contrast-125">
             {/* Mock Logo placeholders with text */}
             {['AMZ.CORE', 'NEXUS.7', 'GLOBAL.IT', 'VERTEX', 'DATA.PRO', 'STELLAR'].map(logo => (
               <div key={logo} className="h-12 flex items-center justify-center border border-white/10 font-mono text-[10px] tracking-widest">{logo}</div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Approach */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-8">04 // STRATEGY</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-10 uppercase">
            THE BRUTALIST PHILOSOPHY: FUNCTION DICTATES FORM
          </h3>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Most agencies hide bad code behind flashy graphics. We expose the raw power of our engineering. Our approach is brutally simple: eliminate friction, optimize every byte, and build semantic topical authority that search engines cannot ignore. We solve complex operational bottlenecks with clean mathematics and precise code.
          </p>
        </div>
      </section>

      {/* 5. Differentiators */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-16">05 // DIFFERENTIATORS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10">
            {[
              { title: "No Cookie-Cutter", desc: "100% bespoke, cloud-native architectures.", icon: Layers },
              { title: "AI-Native", desc: "We integrate LLMs directly into your workflows.", icon: Cpu },
              { title: "Semantic Precision", desc: "We map digital entities for SEO dominance.", icon: Zap },
              { title: "Direct Access", desc: "Speak directly to lead architects, no middle-men.", icon: Terminal },
            ].map((item, id) => (
              <div key={id} className="bg-[#020617] p-10 hover:bg-white/[0.03] transition-colors group">
                <item.icon className="w-8 h-8 text-cyan-400 mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Impact Metrics */}
      <section className="py-32 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase">DATA DOES NOT LIE</h2>
            <div className="h-px flex-grow bg-white/10 mx-8 hidden md:block" />
            <Activity className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: "-70%", label: "Manual Workload Reduction" },
              { val: "< 0.8s", label: "Average LCP Performance" },
              { val: "+315%", label: "Organic Local Traffic" },
              { val: "99.99%", label: "System Uptime Guarantee" },
            ].map((metric, id) => (
              <div key={id} className="border-l-2 border-cyan-400 pl-8">
                <div className="text-5xl font-black text-white mb-2">{metric.val}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-slate-500">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Core Services */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-20 uppercase">OUR DEPLOYMENT CAPABILITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Custom Software", desc: "Scalable MVPs, SaaS architectures, and legacy modernization.", icon: Code2, href: "/custom-software" },
              { title: "Mobile Apps", desc: "High-fidelity React Native & Flutter deployments.", icon: Globe, href: "/mobile-app-development" },
              { title: "Web Engineering", desc: "Headless CMS & Jamstack portals.", icon: Layers, href: "/web-development" },
              { title: "AI Agents", desc: "Custom LLM workflow automation.", icon: Cpu, href: "/ai-agent-development" },
              { title: "SEO Mastery", desc: "Entity-based local and global ranking strategies.", icon: Zap, href: "/seo-mastery" },
              { title: "Creative & Copy", desc: "Conversion-centric UX and technical writing.", icon: Terminal, href: "/content-writing" },
            ].map((service, id) => (
              <div key={id} className="p-8 border border-white/5 bg-white/[0.02] hover:border-cyan-400/50 transition-all group">
                <service.icon className="w-6 h-6 text-cyan-400 mb-6" />
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{service.title}</h4>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">{service.desc}</p>
                <Link href={service.href} className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest hover:text-white transition-colors">
                  _VIEW_SPEC <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Market Coverage Marquee */}
      <Marquee text="🇺🇸 UNITED STATES • 🇬🇧 UNITED KINGDOM • 🇨🇦 CANADA • 🇵🇱 POLAND • 🇵🇰 PAKISTAN • GLOBAL DEPLOYMENT • " speed={40} reverse />

      {/* 9. Process */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-20 uppercase">THE DEPLOYMENT PROTOCOL</h2>
          <div className="space-y-4">
            {[
              { step: "01", title: "Reconnaissance", desc: "Deep technical audit and workflow mapping." },
              { step: "02", title: "Architecture", desc: "Blueprinting databases, AI vectors, and SEO entity silos." },
              { step: "03", title: "Engineering", desc: "Clean, modular, test-driven development (TDD)." },
              { step: "04", title: "QA & Stress Testing", desc: "Breaking the system before the public does." },
              { step: "05", title: "Launch & Scale", desc: "Zero-downtime deployment and continuous iteration." },
            ].map((item, id) => (
              <div key={id} className="flex gap-8 p-8 border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                <div className="text-sm font-mono text-cyan-400">{item.step}</div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2 uppercase tracking-tighter">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Tech Stack */}
      <section className="py-32 px-6 bg-cyan-400 text-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-16 uppercase">WE WEAPONIZE MODERN TECHNOLOGY</h2>
          <div className="flex flex-wrap gap-x-12 gap-y-8 justify-center font-mono font-black text-xl md:text-3xl opacity-80 uppercase">
            <span>Next.js</span> <span>React</span> <span>Flutter</span> <span>Python</span> <span>Node.js</span> <span>AWS</span> <span>Firebase</span> <span>LangChain</span> <span>Pinecone</span>
          </div>
        </div>
      </section>

      {/* 11. Portfolio */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-20 uppercase">RECENT INFRASTRUCTURE BUILDS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-video bg-white/5 border border-white/10 relative group overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 z-10 p-12">
                   <div className="text-center">
                      <div className="text-3xl font-black text-white mb-4 uppercase">Project {i}.SYS</div>
                      <div className="text-cyan-400 font-mono text-xs mb-8">+315% CONVERSION INCREASE</div>
                      <Link href="#" className="px-6 py-2 bg-white text-black font-mono font-bold text-xs uppercase">_READ_LOG</Link>
                   </div>
                </div>
                <div className="absolute top-4 right-4 text-[10px] font-mono text-white/30 lowercase">sys.v7.build_{i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Video Breakdown */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-20 uppercase text-center">ARCHITECTURE UNDER THE HOOD</h2>
          <div className="max-w-5xl mx-auto aspect-video bg-black border border-white/10 relative group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-20 h-20 rounded-full border-2 border-cyan-400 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  <Play className="w-8 h-8 fill-current translate-x-1" />
               </div>
            </div>
            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
               <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                  DECRYPTING: JAMSTACK_PIPELINE.EXE<br/>
                  AI_INTEGRATION_OVERVIEW
               </div>
               <div className="text-cyan-400 font-mono text-xs">40% CONVERSION SPIKE CASE</div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-20 uppercase">UNFILTERED CLIENT INTELLIGENCE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="p-12 border border-white/5 bg-white/[0.01] relative">
                <Quote className="w-12 h-12 text-cyan-400/20 absolute top-12 left-12" />
                <p className="text-2xl text-white font-light leading-relaxed mb-8 relative z-10">
                  &quot;AbuQitmir doesn&apos;t just write code; they reconstructed our entire business logic. Our mobile app handles 10x the traffic with zero latency.&quot;
                </p>
                <div className="font-mono text-xs tracking-widest text-cyan-400 uppercase">_SECURE_SOURCE // CTO, NEXUS.7</div>
             </div>
             <div className="p-12 border border-white/5 bg-white/[0.01] relative flex items-center justify-center">
                <div className="text-center">
                   <div className="text-sm font-mono text-slate-500 mb-4 uppercase tracking-[0.3em]">REPUTATION SCORE</div>
                   <div className="text-7xl font-black text-white">100<span className="text-cyan-400">/</span>100</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ Snippet (Selected) */}
      <section id="faq" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-16 text-center uppercase">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="space-y-6">
            {[
              { q: "What is a 'Brutalist' tech agency?", a: "We prioritize extreme performance, rapid load times, and clear UI over useless aesthetic fluff." },
              { q: "How do custom AI agents save money?", a: "They automate complex, repetitive tasks 24/7 without human error, drastically reducing payroll overhead." },
              { q: "What makes your SEO different?", a: "We use Semantic Entity Optimization, focusing on building E-E-A-T topical authority rather than spamming keywords." },
            ].map((faq, id) => (
              <div key={id} className="p-6 border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-lg font-bold text-white mb-4 uppercase flex items-center gap-3">
                   <span className="text-cyan-400 font-mono text-xs">Q.</span> {faq.q}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
