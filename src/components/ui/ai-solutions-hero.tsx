import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp } from 'lucide-react';
import { Hero3DWrapper } from './hero-3d-wrapper';

export function AiSolutionsHero() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Simple canvas drawing for the chart
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;
      const w = chartRef.current.width;
      const h = chartRef.current.height;
      
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = '#5ce65c';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, h * 0.8);
      ctx.bezierCurveTo(w * 0.2, h * 0.8, w * 0.3, h * 0.5, w * 0.5, h * 0.4);
      ctx.bezierCurveTo(w * 0.7, h * 0.3, w * 0.8, h * 0.1, w, h * 0.1);
      ctx.stroke();

      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, 'rgba(92, 230, 92, 0.2)');
      gradient.addColorStop(1, 'rgba(92, 230, 92, 0)');
      
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.fillStyle = gradient;
      ctx.fill();
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit1 {
          0% { transform: translateX(-50%) rotate(0deg) translateX(70px) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(360deg) translateX(70px) rotate(-360deg); }
        }
        @keyframes orbit2 {
          0% { transform: translateY(-50%) rotate(120deg) translateX(70px) rotate(-120deg); }
          100% { transform: translateY(-50%) rotate(480deg) translateX(70px) rotate(-480deg); }
        }
        @keyframes orbit3 {
          0% { transform: translateX(-50%) rotate(240deg) translateX(70px) rotate(-240deg); }
          100% { transform: translateX(-50%) rotate(600deg) translateX(70px) rotate(-600deg); }
        }
        .animated-button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 16px 36px;
          border: 4px solid transparent;
          font-size: 16px;
          border-radius: 100px;
          font-weight: 600;
          color: #5ce65c;
          box-shadow: 0 0 0 2px #5ce65c;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animated-button svg {
          position: absolute;
          width: 24px;
          fill: #5ce65c;
          z-index: 9;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animated-button .arr-1 { right: 16px; }
        .animated-button .arr-2 { left: -25%; }
        .animated-button .circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background-color: #5ce65c;
          border-radius: 10%;
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animated-button .text {
          position: relative;
          z-index: 1;
          transform: translateX(-12px);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animated-button:hover {
          box-shadow: 0 0 0 12px transparent;
          color: #050505;
          border-radius: 12px;
        }
        .animated-button:hover .arr-1 { right: -25%; }
        .animated-button:hover .arr-2 { left: 16px; }
        .animated-button:hover .text { transform: translateX(12px); }
        .animated-button:hover svg { fill: #050505; }
        .animated-button:active {
          transform: scale(0.95);
          box-shadow: 0 0 0 4px #5ce65c;
        }
        .animated-button:hover .circle {
          width: 250px;
          height: 250px;
          opacity: 1;
        }
        .grid-corners::before, .grid-corners::after,
        .grid-corners-bottom::before, .grid-corners-bottom::after {
          content: "";
          position: absolute;
          pointer-events: none;
          width: 80px;
          height: 80px;
        }
        .grid-corners::before { top: 0; left: 0; border-top: 1px solid rgba(255,255,255,0.08); border-left: 1px solid rgba(255,255,255,0.08); }
        .grid-corners::after { top: 0; right: 0; border-top: 1px solid rgba(255,255,255,0.08); border-right: 1px solid rgba(255,255,255,0.08); }
        .grid-corners-bottom::before { bottom: 0; left: 0; border-bottom: 1px solid rgba(255,255,255,0.08); border-left: 1px solid rgba(255,255,255,0.08); }
        .grid-corners-bottom::after { bottom: 0; right: 0; border-bottom: 1px solid rgba(255,255,255,0.08); border-right: 1px solid rgba(255,255,255,0.08); }
        @media (max-width: 768px) {
          .animated-button { padding: 12px 24px; font-size: 14px; }
          .grid-corners::before, .grid-corners::after,
          .grid-corners-bottom::before, .grid-corners-bottom::after { width: 40px; height: 40px; }
        }
      `}</style>
      <Hero3DWrapper 
        className="pt-32 pb-20 lg:pt-48 lg:pb-32 grid-corners text-white min-h-[90vh] font-sans tracking-tight"
        contentClassName="sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col items-center"
      >
        <div className="grid-corners-bottom"></div>
        <div className="text-center flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-bold tracking-tighter max-w-5xl mx-auto"
            >
              AI Development Services<br/>
              <span className="text-gradient">in Pakistan</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl text-neutral-300 flex flex-col gap-4 leading-relaxed"
            >
              <strong className="text-white text-xl md:text-2xl font-semibold">Build Intelligent Systems That Automate, Predict, and Scale Your Business</strong>
              <p>Artificial Intelligence is no longer the future — it’s the present. At Abuqitmir Tech, we provide advanced AI development services in Pakistan designed to help startups and businesses automate processes, reduce costs, and unlock new growth opportunities.</p>
              <p>Whether you want to build a smart chatbot, automate workflows, or integrate AI into your existing system, our team delivers scalable and high-performance solutions tailored to your needs.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row mt-10 gap-4 items-center justify-center"
            >
              <Link to="/contact">
                <button className="animated-button shadow-lg shadow-primary/20">
                  <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">Start Your AI Project Today</span>
                  <span className="circle"></span>
                  <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Floating Glass Orbit UI Element (Right Top) */}
          <div className="absolute top-10 right-0 lg:right-10 z-20 hidden md:block" style={{ animation: 'float 6s ease-in-out infinite' }}>
            <div className="relative w-[140px] h-[140px]">
              <div className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-md" style={{ background: 'rgba(255, 255, 255, 0.03)', animation: 'rotate 20s linear infinite' }}></div>
              <div className="flex absolute inset-0 items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-primary/30 backdrop-blur-xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(92, 230, 92, 0.15) 0%, rgba(92, 230, 92, 0.05) 100%)', boxShadow: '0 8px 32px rgba(92, 230, 92, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" style={{ filter: 'drop-shadow(0 2px 8px rgba(92, 230, 92, 0.5))' }}>
                      <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute w-3 h-3 rounded-full bg-primary/60 backdrop-blur-sm ring-1 ring-primary/40 shadow-[0_0_12px_rgba(92,230,92,_0.6)]" style={{ top: '10px', left: '50%', transform: 'translateX(-50%)', animation: 'orbit1 8s linear infinite' }}></div>
              <div className="absolute w-2.5 h-2.5 rounded-full bg-white/40 backdrop-blur-sm ring-1 ring-white/30 shadow-[0_0_8px_rgba(255,255,255,0.4)]" style={{ top: '50%', right: '10px', transform: 'translateY(-50%)', animation: 'orbit2 10s linear infinite' }}></div>
              <div className="absolute w-2 h-2 rounded-full bg-primary/50 backdrop-blur-sm ring-1 ring-primary/30 shadow-[0_0_10px_rgba(92,230,92,_0.5)]" style={{ bottom: '10px', left: '50%', transform: 'translateX(-50%)', animation: 'orbit3 12s linear infinite' }}></div>
            </div>
          </div>

          {/* Floating Glass Orbit UI Element (Left Bottom) */}
          <div className="absolute bottom-20 left-0 lg:left-10 z-20 hidden md:block" style={{ animation: 'float 6s ease-in-out infinite 1s' }}>
            <div className="relative w-[140px] h-[140px]">
              <div className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-md" style={{ background: 'rgba(255, 255, 255, 0.03)', animation: 'rotate 20s linear infinite reverse' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-primary/30 backdrop-blur-xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(92, 230, 92, 0.15) 0%, rgba(92, 230, 92, 0.05) 100%)', boxShadow: '0 8px 32px rgba(92, 230, 92, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary" style={{ filter: 'drop-shadow(0 2px 8px rgba(92, 230, 92, 0.5))' }} />
                  </div>
                </div>
              </div>
              <div className="absolute w-3 h-3 rounded-full bg-primary/60 backdrop-blur-sm ring-1 ring-primary/40 shadow-[0_0_12px_rgba(92,230,92,_0.6)]" style={{ top: '10px', left: '50%', transform: 'translateX(-50%)', animation: 'orbit1 8s linear infinite 0.5s' }}></div>
              <div className="absolute w-2.5 h-2.5 rounded-full bg-white/40 backdrop-blur-sm ring-1 ring-white/30 shadow-[0_0_8px_rgba(255,255,255,0.4)]" style={{ top: '50%', right: '10px', transform: 'translateY(-50%)', animation: 'orbit2 10s linear infinite 0.5s' }}></div>
              <div className="absolute w-2 h-2 rounded-full bg-primary/50 backdrop-blur-sm ring-1 ring-primary/30 shadow-[0_0_10px_rgba(92,230,92,_0.5)]" style={{ bottom: '10px', left: '50%', transform: 'translateX(-50%)', animation: 'orbit3 12s linear infinite 0.5s' }}></div>
            </div>
            {/* Glass info card */}
            <div className="mt-4 rounded-xl border border-white/10 backdrop-blur-md px-3 py-2 text-xs" style={{ background: 'rgba(0, 0, 0, 0.3)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-neutral-300">Intelligent Automation</span>
              </div>
            </div>
          </div>

          {/* Hero mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 md:mt-24 mb-10 w-full relative z-10"
          >
            <div className="border border-white/10 rounded-2xl p-1 relative bg-white/5 backdrop-blur-[20px]">
              <div className="p-4 sm:p-6 ring-1 ring-white/10 rounded-xl bg-black/40 backdrop-blur-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div className="aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-white/10 relative w-full h-[300px] md:h-full group">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95b3125e-9329-4d1e-a44f-a163a91e2ed6_1600w.webp" alt="AI development concept" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent mix-blend-overlay"></div>
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs ring-1 ring-white/10 bg-black/50 backdrop-blur-md text-white/90">
                      <Sparkles className="w-4 h-4 text-primary" />
                      AI Models
                    </div>
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap gap-2 z-10 justify-center w-full px-4">
                      <div className="rounded-lg border border-white/20 bg-black/40 backdrop-blur-xl px-3 py-2 text-xs shadow-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary ring-2 ring-primary/20 animate-pulse"></div>
                          <span className="text-white font-medium">Scalable Systems</span>
                        </div>
                      </div>
                      <div className="rounded-lg border border-white/20 bg-black/40 backdrop-blur-xl px-3 py-2 text-xs shadow-lg hidden sm:block">
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
                          <span className="text-white font-medium text-nowrap">High Performance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col w-full h-full justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                      Automate Workflows Faster
                    </h3>
                    <p className="mt-2 text-neutral-300 text-sm md:text-base leading-relaxed">
                      Deploy intelligent solutions that drive efficiency. From custom chatbots to robust predictive pipelines, we bring the power of AI to your fingertips.
                    </p>

                    <div className="p-4 w-full border border-white/10 rounded-xl mt-6 bg-white/5 backdrop-blur-md hover:border-primary/30 transition-colors">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm text-neutral-400">Operational Efficiency</p>
                          <p className="text-base sm:text-lg font-semibold tracking-tight text-white mb-2">Cost Reduction & Speed</p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-primary/40">
                          <TrendingUp className="w-3.5 h-3.5" />
                          Up to 80%
                        </span>
                      </div>
                      <div className="mt-4 w-full">
                        <div className="h-24 sm:h-32 w-full overflow-hidden rounded-lg ring-1 ring-white/10 bg-black/30 backdrop-blur-sm p-2 relative">
                          <canvas ref={chartRef} className="w-full h-full block" width="800" height="200"></canvas>
                        </div>
                        <p className="mt-3 text-[10px] sm:text-xs text-neutral-400 text-center">
                          Projected impact of integrating tailored AI solutions across business divisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
      </Hero3DWrapper>
    </>
  );
}
