import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0B0B0B] border-t border-white/10 pt-24 pb-12 overflow-hidden">
      {/* Soft Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-32 bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* About */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          <p className="text-sm text-white/60 leading-relaxed">
            We design, build, and scale secure high-performance software, websites, mobile apps, and AI systems for ambitious global businesses.
          </p>
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61583768706452" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white">
              <Facebook size={18} />
            </a>
            <a href="https://x.com/AbuQitmir" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white">
              <Twitter size={18} />
            </a>
            <a href="https://www.instagram.com/abuqitmirshirazalmadani/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/abu-qitmir-697423390/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h4 className="text-lg font-heading font-semibold text-white">All Services</h4>
          <ul className="space-y-3">
            <li><Link to="/services/custom-software" className="text-sm text-white/60 hover:text-primary transition-colors">Custom Software Development</Link></li>
            <li><Link to="/services/web-development" className="text-sm text-white/60 hover:text-primary transition-colors">Web Development</Link></li>
            <li><Link to="/services/mobile-app" className="text-sm text-white/60 hover:text-primary transition-colors">Mobile App Development</Link></li>
            <li><Link to="/services/ui-ux" className="text-sm text-white/60 hover:text-primary transition-colors">UI/UX Design</Link></li>
            <li><Link to="/services/ai-solutions" className="text-sm text-white/60 hover:text-primary transition-colors">Technology Solutions & AI</Link></li>
            <li><Link to="/services/digital-marketing" className="text-sm text-white/60 hover:text-primary transition-colors">Digital Marketing</Link></li>
            <li><Link to="/services/seo" className="text-sm text-white/60 hover:text-primary transition-colors">SEO & Local SEO</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-heading font-semibold text-white">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-sm text-white/60 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/work" className="text-sm text-white/60 hover:text-white transition-colors">Our Work</Link></li>
            <li><Link to="/process" className="text-sm text-white/60 hover:text-white transition-colors">Our Process</Link></li>
            <li><Link to="/contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</Link></li>
            <li><a href="https://www.google.com/search?q=Abuqitmir.tech" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">Google Business Profile</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-lg font-heading font-semibold text-white">Contact Details</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-white/60 leading-relaxed">Serving clients globally across Pakistan, USA, UK & Europe</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-primary shrink-0" />
              <a href="tel:+923233260859" className="text-sm text-white/60 hover:text-white transition-colors">+92 323 3260859</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-primary shrink-0" />
              <a href="mailto:abuqitmirshirazalmadani@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors break-all">abuqitmirshirazalmadani@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs text-white/40 mb-4 md:mb-0">
          © {new Date().getFullYear()} Abuqitmir.tech. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link to="/privacy" className="text-xs text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-xs text-white/40 hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
