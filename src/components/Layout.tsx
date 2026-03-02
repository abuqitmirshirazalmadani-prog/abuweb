import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-bg text-text font-sans selection:bg-primary/30 selection:text-white">
      <Preloader />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex-grow relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-panel border-t border-white/10 p-4 flex gap-4 safe-area-pb">
        <a 
          href="tel:+923233260859" 
          className="flex-1 py-3 rounded-xl bg-white/10 text-white font-medium text-sm text-center active:scale-95 transition-transform"
        >
          Consultation
        </a>
        <a 
          href="https://wa.me/923233260859" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 py-3 rounded-xl bg-primary text-black font-medium text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform glow-primary"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
