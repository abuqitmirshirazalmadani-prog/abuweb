import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ParticlesComponent from './particles-bg';

export function AiSolutionsHero() {
  return (
    <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Particles */}
      <ParticlesComponent />

      {/* Content overlay */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-20 text-center text-white mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-bold tracking-tighter mb-4"
        >
          AI Development Services <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            in Pakistan
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl md:text-3xl font-semibold mb-8 text-neutral-200"
        >
          Build Intelligent Systems That Automate, Predict, and Scale Your Business
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-base md:text-lg text-neutral-300 space-y-4 leading-relaxed mb-10 text-left md:text-center"
        >
          <p>
            Artificial Intelligence is no longer the future — it's the present.
          </p>
          <p>
            At Abuqitmir Tech, we provide advanced AI development services in Pakistan designed to help startups and businesses automate processes, reduce costs, and unlock new growth opportunities.
          </p>
          <p>
            Whether you want to build a smart chatbot, automate workflows, or integrate AI into your existing system, our team delivers scalable and high-performance solutions tailored to your needs.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(92,230,92,0.4)] ring-2 ring-primary/50 ring-offset-2 ring-offset-black hover:ring-primary"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/30" />
            </div>
            <span className="relative z-10 flex items-center gap-2">
              Start your AI project today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
