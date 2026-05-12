"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const mainLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT US", href: "/contact" },
  { name: "ADMIN", href: "/admin" },
];

const serviceLinks = [
  { name: "CUSTOM SOFTWARE", href: "/custom-software" },
  { name: "MOBILE APPS", href: "/mobile-app-development" },
  { name: "WEB DEVELOPMENT", href: "/web-development" },
  { name: "AI AGENTS", href: "/ai-agent-development" },
  { name: "SEO MASTERY", href: "/seo-mastery" },
  { name: "GRAPHICS DESIGN", href: "/graphics-design" },
  { name: "CONTENT WRITING", href: "/content-writing" },
];

const marketLinks = [
  { name: "US MARKET", href: "/us-market" },
  { name: "UK MARKET", href: "/uk-market" },
  { name: "CANADA MARKET", href: "/canada-market" },
  { name: "POLAND MARKET", href: "/poland-market" },
  { name: "PAKISTAN MARKET", href: "/pakistan-market" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span className="font-mono font-bold tracking-tighter text-lg group-hover:text-cyan-400 transition-colors">
              ABUQITMIR.TECH
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 font-mono text-xs tracking-widest text-slate-400 hover:text-cyan-400 transition-colors uppercase"
            >
              [ MENU ] <Menu className="w-4 h-4" />
            </button>
            <Link 
              href="/contact" 
              className="hidden sm:block bg-cyan-400 text-black px-4 py-1.5 font-mono text-xs font-bold hover:bg-white transition-colors"
            >
              _INITIATE_PROTOCOL
            </Link>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#020617] p-8 md:p-24 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto h-full">
              <div className="flex justify-between items-start mb-20">
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.5em]">
                  NAVIGATION_PORTAL_v1.2
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-4 border border-white/10 hover:bg-white/5 transition-colors group"
                >
                  <X className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
                {/* Main Links */}
                <div className="space-y-8">
                  <h3 className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase border-b border-white/5 pb-4">CORE_SYSTEM</h3>
                  <div className="flex flex-col gap-4">
                    {mainLinks.map((link) => (
                      <Link 
                        key={link.href} 
                        href={link.href}
                        className={`text-4xl font-black tracking-tighter flex items-center gap-4 transition-all hover:translate-x-4 ${pathname === link.href ? "text-cyan-400" : "text-white hover:text-cyan-400/50"}`}
                      >
                        {link.name} <ChevronRight className="w-6 h-6 opacity-0 hover:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="space-y-8">
                  <h3 className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase border-b border-white/5 pb-4">SERVICES_ARRAY</h3>
                  <div className="flex flex-col gap-4">
                    {serviceLinks.map((link) => (
                      <Link 
                        key={link.href} 
                        href={link.href}
                        className={`text-xl font-bold tracking-tight uppercase flex items-center gap-4 transition-all hover:translate-x-2 ${pathname === link.href ? "text-cyan-400" : "text-slate-400 hover:text-white"}`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Regional Markets */}
                <div className="space-y-8">
                  <h3 className="text-sm font-mono text-cyan-400 tracking-[0.3em] uppercase border-b border-white/5 pb-4">GLOBAL_REGIONS</h3>
                  <div className="flex flex-col gap-4">
                    {marketLinks.map((link) => (
                      <Link 
                        key={link.href} 
                        href={link.href}
                        className={`text-xl font-bold tracking-tight uppercase flex items-center gap-4 transition-all hover:translate-x-2 ${pathname === link.href ? "text-cyan-400" : "text-slate-400 hover:text-white"}`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
