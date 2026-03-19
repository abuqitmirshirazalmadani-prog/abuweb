import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Moon, Sun, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';
import { Logo } from './Logo';

const servicesList = [
  { id: "custom-software", title: "Custom Software" },
  { id: "web-development", title: "Web Development" },
  { id: "mobile-app", title: "Mobile App" },
  { id: "ui-ux", title: "UI/UX Design" },
  { id: "ai-solutions", title: "AI Solutions" },
  { id: "digital-marketing", title: "Digital Marketing" },
  { id: "seo", title: "SEO & Local SEO" },
  { id: "graphics-design", title: "Graphics Design" },
  { id: "content-writing", title: "Content Writing" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > 50 && latest > previous) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light');
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled ? "glass-panel py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-[var(--text-muted)] hover:text-primary transition-colors">
            Home
          </Link>
          
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <Link to="/services" className="flex items-center gap-1 text-sm font-medium text-[var(--text-muted)] hover:text-primary transition-colors py-2">
              Services <ChevronDown size={14} className={cn("transition-transform duration-300", isServicesDropdownOpen && "rotate-180")} />
            </Link>
            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-[var(--elevated)] rounded-xl p-2 flex flex-col gap-1 shadow-2xl border border-[var(--border)]"
                >
                  {servicesList.map(s => (
                    <Link 
                      key={s.id} 
                      to={`/services/${s.id}`} 
                      className="px-4 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--glass)] rounded-lg transition-colors"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/work" className="text-sm font-medium text-[var(--text-muted)] hover:text-primary transition-colors">
            Work
          </Link>
          <Link to="/about" className="text-sm font-medium text-[var(--text-muted)] hover:text-primary transition-colors">
            About
          </Link>
          
          <div className="flex items-center space-x-4 pl-4 border-l border-[var(--border)]">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-[var(--glass)] transition-colors">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a 
              href="https://wa.me/923233260859" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[var(--glass)] transition-colors text-primary"
            >
              <MessageCircle size={18} />
            </a>
            <Link 
              to="/contact" 
              className="px-6 py-2.5 rounded-full bg-primary text-black font-medium text-sm hover:scale-105 transition-transform glow-primary"
            >
              Get Consultation
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-[var(--glass)] transition-colors">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-[var(--bg)] border-t border-[var(--border)] p-6 flex flex-col space-y-4 md:hidden max-h-[80vh] overflow-y-auto shadow-2xl z-50"
        >
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[var(--text-muted)] hover:text-primary transition-colors">Home</Link>
          
          <div className="flex flex-col">
            <button 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} 
              className="flex items-center justify-between w-full text-lg font-medium text-[var(--text-muted)] hover:text-primary transition-colors"
            >
              Services <ChevronDown size={20} className={cn("transition-transform", isMobileServicesOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {isMobileServicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden flex flex-col gap-3 pl-4 mt-4 border-l border-[var(--border)]"
                >
                  <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-[var(--text-muted)] hover:text-primary transition-colors">All Services</Link>
                  {servicesList.map(s => (
                    <Link 
                      key={s.id} 
                      to={`/services/${s.id}`} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="text-base text-[var(--text-muted)] hover:text-primary transition-colors"
                    >
                      {s.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/work" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[var(--text-muted)] hover:text-primary transition-colors">Work</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-[var(--text-muted)] hover:text-primary transition-colors">About</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-6 py-3 rounded-full bg-primary text-black font-medium text-center hover:scale-105 transition-transform glow-primary">Get Consultation</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
