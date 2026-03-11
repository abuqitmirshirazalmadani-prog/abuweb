import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Brain, LineChart, PenTool, Globe, Briefcase, CheckCircle2, Star, MessageCircle, Search } from 'lucide-react';
import WebGLHero from '../components/WebGLHero';
import SEO from '../components/SEO';
import Marquee from '../components/Marquee';
import { cn } from '../utils/cn';

const services = [
  {
    title: "Custom Software Development",
    description: "Scalable, secure, and high-performance enterprise solutions tailored to your complex business needs.",
    icon: <Code size={24} />,
    link: "/services/custom-software"
  },
  {
    title: "Web Development",
    description: "Modern, responsive, and SEO-optimized web applications built with Next.js and React.",
    icon: <Globe size={24} />,
    link: "/services/web-development"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that engage users and drive growth.",
    icon: <Smartphone size={24} />,
    link: "/services/mobile-app"
  },
  {
    title: "UI/UX Design",
    description: "Intuitive, user-centric interfaces designed to maximize conversion and brand loyalty.",
    icon: <Palette size={24} />,
    link: "/services/ui-ux"
  },
  {
    title: "Technology Solutions & AI",
    description: "Intelligent automation and AI integrations to future-proof your business operations.",
    icon: <Brain size={24} />,
    link: "/services/ai-solutions"
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to increase visibility, traffic, and revenue across digital channels.",
    icon: <LineChart size={24} />,
    link: "/services/digital-marketing"
  },
  {
    title: "SEO & Local SEO",
    description: "Dominate search rankings and attract high-intent local and global customers to your business.",
    icon: <Search size={24} />,
    link: "/services/seo"
  },
  {
    title: "Graphics Design",
    description: "Compelling visual identities and marketing materials that resonate with your target audience.",
    icon: <PenTool size={24} />,
    link: "/services/graphics-design"
  },
  {
    title: "Content Writing",
    description: "SEO-optimized, persuasive copy that tells your brand story and converts visitors.",
    icon: <Briefcase size={24} />,
    link: "/services/content-writing"
  }
];

const faqs = [
  {
    question: "What services do you provide?",
    answer: "We provide custom software, web development, mobile app development, AI solutions, digital marketing, UI/UX design, graphics design, and content writing services."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. We serve clients across Pakistan, USA, UK, and Europe with remote-first collaboration."
  },
  {
    question: "How long does development take?",
    answer: "Timelines vary by scope. MVP projects typically take 4–8 weeks."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern stacks including Next.js, React, Node.js, Python, AI frameworks, and scalable cloud infrastructure."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes. We provide maintenance, optimization, and growth support."
  },
  {
    question: "How can I start my project?",
    answer: "Book a consultation call or contact us via WhatsApp to begin."
  }
];

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "abuqitmir.tech",
    "image": "https://qitmirtechsolution.com/logo.png",
    "@id": "https://qitmirtechsolution.com",
    "url": "https://qitmirtechsolution.com",
    "telephone": "+923233260859",
    "email": "abuqitmirshirazalmadani@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pakistan",
      "addressCountry": "PK"
    },
    "areaServed": ["Pakistan", "USA", "UK", "Europe"],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61583768706452",
      "https://x.com/AbuQitmir",
      "https://www.instagram.com/abuqitmirshirazalmadani/",
      "https://www.tiktok.com/@abuqitmirmohammadshiraz",
      "https://www.linkedin.com/in/abu-qitmir-697423390/"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Scalable, Secure Tech Solutions" 
        description="We design, build, and scale secure high-performance software, websites, mobile apps, and AI systems for ambitious global businesses."
        canonical="https://qitmirtechsolution.com"
        schema={[localBusinessSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden pt-20">
        <WebGLHero />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-[80px] font-heading font-bold tracking-tight leading-[1.1] mb-6 max-w-5xl text-gradient"
          >
            Build Future-Ready <br className="hidden md:block" />
            Digital Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mb-10 leading-relaxed font-light"
          >
            We design, build, and scale secure high-performance software, websites, mobile apps, and AI systems for ambitious global businesses.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-black font-semibold text-lg hover:scale-105 transition-transform glow-primary flex items-center justify-center gap-2"
            >
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
            <a 
              href="tel:+923233260859" 
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white font-medium text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Book Call
            </a>
            <a 
              href="https://wa.me/923233260859" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white font-medium text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} className="text-primary" />
              WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Trust Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#050505]/80 backdrop-blur-md py-4"
        >
          <div className="max-w-7xl mx-auto flex items-center">
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest px-6 shrink-0 border-r border-white/10 hidden md:block">
              Trusted Across
            </p>
            <Marquee speed="slow" className="flex-1 px-6 [--gap:4rem]">
              <span className="text-lg font-heading font-bold text-white/50 px-8">Pakistan</span>
              <span className="text-lg font-heading font-bold text-white/50 px-8">USA</span>
              <span className="text-lg font-heading font-bold text-white/50 px-8">UK</span>
              <span className="text-lg font-heading font-bold text-white/50 px-8">Europe</span>
              <span className="text-lg font-heading font-bold text-white/50 px-8">UAE</span>
              <span className="text-lg font-heading font-bold text-white/50 px-8">Canada</span>
              <span className="text-lg font-heading font-bold text-white/50 px-8">Australia</span>
            </Marquee>
          </div>
        </motion.div>
      </section>

      {/* Technology Stack Marquee */}
      <section className="py-20 border-t border-white/5 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-sm font-mono text-white/40 uppercase tracking-widest">Powered by Modern Technologies</h2>
        </div>
        <div className="flex flex-col gap-8">
          <Marquee speed="normal" className="[--gap:4rem]">
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">Next.js</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">React</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">Node.js</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">Python</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">TypeScript</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">TailwindCSS</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">AWS</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">Docker</span>
          </Marquee>
          <Marquee speed="normal" direction="right" className="[--gap:4rem]">
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">TensorFlow</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">PyTorch</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">OpenAI</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">Figma</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">PostgreSQL</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">MongoDB</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">GraphQL</span>
            <span className="text-2xl font-heading font-bold text-white/20 hover:text-primary transition-colors">Vercel</span>
          </Marquee>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative bg-elevated border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">Elite Digital Services</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">Comprehensive technology solutions designed to accelerate your business growth and dominate your market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-6">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center text-sm font-medium text-white/70 group-hover:text-primary transition-colors">
                    Explore Service <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">Why Choose abuqitmir.tech</h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                We don't just write code; we build scalable digital assets. Our approach combines engineering excellence with strategic business acumen.
              </p>
              <ul className="space-y-6">
                {[
                  "Enterprise-grade security and performance",
                  "AI-forward development methodologies",
                  "Transparent communication and agile delivery",
                  "Global standard UI/UX design principles"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="col-span-2 glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="text-5xl font-heading font-bold text-white mb-2">99.9%</div>
                    <div className="text-sm font-mono text-primary uppercase tracking-wider mb-4">Uptime SLA</div>
                    <p className="text-white/60 text-sm">Enterprise-grade reliability for mission-critical applications.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="glass-panel p-6 rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Code className="text-white/40 mb-4" size={24} />
                  <div>
                    <div className="text-2xl font-heading font-bold text-white mb-1">Clean</div>
                    <div className="text-xs font-mono text-white/40 uppercase tracking-wider">Architecture</div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass-panel p-6 rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Smartphone className="text-white/40 mb-4" size={24} />
                  <div>
                    <div className="text-2xl font-heading font-bold text-white mb-1">Native</div>
                    <div className="text-xs font-mono text-white/40 uppercase tracking-wider">Performance</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Optimized FAQ */}
      <section className="py-32 bg-elevated border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient">Frequently Asked Questions</h2>
            <p className="text-white/60">Everything you need to know about working with us.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group glass-panel rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-white/90 hover:text-primary transition-colors">
                  {faq.question}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white">Ready to scale your business?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your next phase of growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-10 py-5 rounded-full bg-primary text-black font-semibold text-lg hover:scale-105 transition-transform glow-primary"
            >
              Start Your Project
            </Link>
            <a 
              href="https://wa.me/923233260859" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full glass-panel text-white font-medium text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <MessageCircle size={20} className="text-primary" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
