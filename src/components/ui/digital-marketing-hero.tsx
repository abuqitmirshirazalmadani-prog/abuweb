import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Megaphone, Share2 } from 'lucide-react';
import { HolographicCard } from './holographic-card';

export function DigitalMarketingHero() {
  return (
    <>
      <style>{`
        .seo-glow {
          box-shadow: 0 0 40px rgba(92, 230, 92, 0.15), inset 0 0 20px rgba(92, 230, 92, 0.1);
        }
      `}</style>
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative text-white min-h-[90vh] flex items-center justify-center font-sans tracking-tight">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute text-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-bold opacity-10 blur-sm mix-blend-overlay pointer-events-none select-none">GROW</div>
          <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] mix-blend-screen overflow-hidden"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen overflow-hidden"></div>
        </div>

        <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center flex flex-col items-center">
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-bold tracking-tighter max-w-5xl mx-auto"
            >
              Digital Marketing Services<br/>
              <span className="text-gradient">in Pakistan</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl text-neutral-300 flex flex-col gap-4 leading-relaxed"
            >
              <strong className="text-white text-xl md:text-2xl font-semibold">Grow Your Business Online and Reach the Right Audience</strong>
              <p>Digital marketing is the key to online success. At Abuqitmir Tech, we provide result-driven digital marketing services in Pakistan to help businesses grow, generate leads, and increase revenue.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row mt-10 gap-4 items-center justify-center"
            >
              <Link to="/contact">
                <button className="relative overflow-hidden group px-8 py-4 bg-primary text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(92,230,92,0.3)]">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Growing Today
                    <TrendingUp className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </button>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 lg:mt-32 w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
          >
            {/* Card 1 */}
            <HolographicCard className="seo-glow bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 transition-transform duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20">
                <Megaphone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">What is Digital Marketing?</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Digital marketing includes strategies to promote your business online through search engines, social media, and paid ads, often supported by strong web development services for landing pages.
              </p>
            </HolographicCard>

            {/* Card 2 */}
            <HolographicCard className="seo-glow bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 transition-transform duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <Share2 className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Complete Marketing Approach</h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-4">
                We utilize across-the-board digital channels to maximize your reach.
              </p>
              <ul className="space-y-2">
                {['Social Media Marketing', 'Search Engine Marketing', 'Email Campaigns & Nurturing'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-neutral-300 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </HolographicCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
