import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Brain, LineChart, PenTool, Globe, Briefcase, CheckCircle2, Star, MessageCircle, Search } from 'lucide-react';
import WebGLHero from '../components/WebGLHero';
import SEO from '../components/SEO';
import Marquee from '../components/Marquee';
import { cn } from '../utils/cn';
import { useMotionValue } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { CardPattern, generateRandomString } from '../components/ui/evervault-card';
import { SparklesCore } from '../components/ui/sparkles';
import { CTAButtons } from '../components/ui/cta-buttons';
import { Accordion05, faqItems } from '../components/ui/accordion-05';
import { Boxes } from '../components/ui/background-boxes';
import { DottedSurface } from '../components/ui/dotted-surface';
import { AnimatedText } from '../components/ui/animated-underline-text-one';
import { GradientMeshBackground } from '../components/ui/gradient-mesh-background';
import { StaggerTestimonials } from '../components/ui/stagger-testimonials';

const services = [
  {
    title: "Enterprise Architecture",
    description: "Bespoke, high-availability software systems built to scale infinitely without technical debt.",
    icon: <Code size={24} />,
    link: "/services/custom-software"
  },
  {
    title: "Modern Web Platforms",
    description: "Lightning-fast, SEO-optimized web applications engineered with Next.js and React.",
    icon: <Globe size={24} />,
    link: "/services/web-development"
  },
  {
    title: "Native Mobile Apps",
    description: "Award-winning iOS and Android experiences that engage users and drive retention.",
    icon: <Smartphone size={24} />,
    link: "/services/mobile-app"
  },
  {
    title: "Conversion-Led UI/UX",
    description: "Data-backed interface design focused on cognitive ease and maximizing user conversion.",
    icon: <Palette size={24} />,
    link: "/services/ui-ux"
  },
  {
    title: "AI & Automation",
    description: "Custom LLM integrations and intelligent workflows to multiply your workforce's output.",
    icon: <Brain size={24} />,
    link: "/services/ai-solutions"
  },
  {
    title: "Growth Marketing",
    description: "Precision-targeted digital campaigns that lower CAC and drive measurable ROI.",
    icon: <LineChart size={24} />,
    link: "/services/digital-marketing"
  },
  {
    title: "Search Dominance",
    description: "Technical and content-driven SEO strategies to capture high-intent organic traffic.",
    icon: <Search size={24} />,
    link: "/services/seo"
  },
  {
    title: "Brand Identity",
    description: "Striking visual systems and marketing materials that command attention and build trust.",
    icon: <PenTool size={24} />,
    link: "/services/graphics-design"
  },
  {
    title: "Strategic Copywriting",
    description: "Persuasive, authoritative content that tells your story and converts visitors into buyers.",
    icon: <Briefcase size={24} />,
    link: "/services/content-writing"
  }
];

function TrustStrip() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      onMouseMove={onMouseMove}
      className="group/card absolute bottom-0 left-0 right-0 border-t border-white/10 bg-background/80 backdrop-blur-md py-4 overflow-hidden"
    >
      <CardPattern
        mouseX={mouseX}
        mouseY={mouseY}
        randomString={randomString}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
      <div className="max-w-7xl mx-auto flex items-center relative z-10">
        <p className="text-xs font-mono text-white/40 uppercase tracking-widest px-6 shrink-0 border-r border-white/10 hidden md:block">
          Powering industry leaders across
        </p>
        <Marquee speed="slow" className="flex-1 px-6 [--gap:4rem]">
          <span className="text-lg font-heading font-bold text-white/50 px-8">🇵🇰 Pakistan</span>
          <span className="text-lg font-heading font-bold text-white/50 px-8">🇺🇸 USA</span>
          <span className="text-lg font-heading font-bold text-white/50 px-8">🇬🇧 UK</span>
          <span className="text-lg font-heading font-bold text-white/50 px-8">🇪🇺 Europe</span>
          <span className="text-lg font-heading font-bold text-white/50 px-8">🇦🇪 UAE</span>
          <span className="text-lg font-heading font-bold text-white/50 px-8">🇨🇦 Canada</span>
          <span className="text-lg font-heading font-bold text-white/50 px-8">🇦🇺 Australia</span>
        </Marquee>
      </div>
    </motion.div>
  );
}

function ServiceCard({ service, index }: { service: any; index: number; key?: React.Key }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className="group/card relative p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
    >
      <CardPattern
        mouseX={mouseX}
        mouseY={mouseY}
        randomString={randomString}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover/card:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <h3 className="text-xl font-heading font-semibold mb-3 text-white group-hover/card:text-primary transition-colors">{service.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed mb-6 flex-grow">{service.description}</p>
        <Link to={service.link} className="inline-flex items-center text-sm font-medium text-white/70 group-hover/card:text-primary transition-colors mt-auto">
          Explore Service <ArrowRight size={16} className="ml-2 group-hover/card:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Abuqitmir.tech",
    "url": "https://abuqitmir.tech",
    "logo": "https://abuqitmir.tech/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923233260859",
      "contactType": "customer service",
      "email": "abuqitmirshirazalmadani@gmail.com",
      "areaServed": ["PK", "US", "GB", "EU"],
      "availableLanguage": ["English", "Urdu"]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61583768706452",
      "https://x.com/AbuQitmir",
      "https://www.instagram.com/abuqitmirshirazalmadani/",
      "https://www.tiktok.com/@abuqitmirmohammadshiraz",
      "https://www.linkedin.com/in/abu-qitmir-697423390/"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Abuqitmir.tech",
    "image": "https://abuqitmir.tech/logo.png",
    "@id": "https://abuqitmir.tech",
    "url": "https://abuqitmir.tech",
    "telephone": "+923233260859",
    "email": "abuqitmirshirazalmadani@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pakistan",
      "addressCountry": "PK"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
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
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.content
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://abuqitmir.tech/"
    }]
  };

  return (
    <>
      <SEO 
        title="Scalable, Secure Tech Solutions" 
        description="We design, build, and scale secure high-performance software, websites, mobile apps, and AI systems for ambitious global businesses."
        canonical="https://abuqitmir.tech"
        schema={[organizationSchema, localBusinessSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-start overflow-hidden pt-32 pb-32">
        <WebGLHero />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center my-auto w-full">
          
          {/* Trust Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-white/80 mb-8 bg-white/5 border border-white/10 px-4 sm:px-6 py-2 rounded-full backdrop-blur-md"
          >
            <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" /> 4.9/5 Client Rating</span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="hidden sm:inline">410+ Products Shipped</span>
            <span className="text-white/30 hidden md:inline">•</span>
            <span className="hidden md:inline">350+ Scaling Businesses</span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6 max-w-5xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-heading font-bold tracking-tight leading-[1.1] text-white mb-6"
            >
              Scalable, Secure Tech Solutions
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-medium text-gradient"
            >
              N e x t - g e n e r a t i o n s o f t w a r e . E n g i n e e r e d f o r s c a l e .
            </motion.h2>
          </div>
          
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mb-10 leading-relaxed font-light"
          >
            We transform complex business challenges into elegant, high-performance digital products. No bloat, no friction—just pure execution.
          </motion.p>
          
          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mb-10 text-left"
          >
            {[
              { title: "Rapid execution", desc: "MVPs shipped in weeks, not months" },
              { title: "Unified workflow", desc: "Seamless design-to-code pipeline" },
              { title: "Zero technical debt", desc: "Clean architecture from day one" },
              { title: "Global standards", desc: "Powering teams across US, UK, EU & PK" }
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium text-sm">{benefit.title}</div>
                  <div className="text-white/50 text-xs mt-1">{benefit.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto p-4 sm:p-8 rounded-3xl"
          >
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1.5}
                particleDensity={150}
                className="w-full h-full"
                particleColor="#FFFFFF"
                speed={0.5}
              />
            </div>
            <CTAButtons />
          </motion.div>
        </div>

        {/* Trust Strip */}
        <TrustStrip />
      </section>

      {/* Technology Stack Marquee */}
      <section className="py-20 border-t border-white/5 overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
            speed={1}
          />
        </div>
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-sm font-mono text-white/40 uppercase tracking-widest">Powered by Modern Architecture</h2>
        </div>
        <div className="flex flex-col gap-8 relative z-10">
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
      <section className="relative border-t border-white/5">
        <GradientMeshBackground className="py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20 flex flex-col items-center">
              <AnimatedText 
                text="Elite Digital Services"
                textClassName="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient"
                underlineClassName="text-primary"
              />
              <p className="text-lg text-white/60 max-w-2xl mx-auto mt-6">We build the infrastructure that ambitious companies use to dominate their markets.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </GradientMeshBackground>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative overflow-hidden bg-background z-0">
        <DottedSurface className="size-full opacity-50 z-0" />
        <div className="absolute inset-0 bg-background/50 z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 blur-[120px] -translate-y-1/2 pointer-events-none z-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">The Engineering Partner You've Been Looking For</h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                We don't just write code. We build scalable digital assets that solve real business problems. Our approach combines elite engineering with strategic product vision.
              </p>
              <ul className="space-y-6">
                {[
                  "Enterprise-grade security & architecture",
                  "AI-forward development methodologies",
                  "Transparent, agile delivery cycles",
                  "Conversion-optimized UI/UX design"
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
                  <div className="absolute inset-0 z-0">
                    <SparklesCore
                      background="transparent"
                      minSize={0.4}
                      maxSize={1}
                      particleDensity={100}
                      className="w-full h-full"
                      particleColor="#FFFFFF"
                      speed={1}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
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
                  <div className="absolute inset-0 z-0">
                    <SparklesCore
                      background="transparent"
                      minSize={0.4}
                      maxSize={1}
                      particleDensity={100}
                      className="w-full h-full"
                      particleColor="#FFFFFF"
                      speed={1}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  <div className="relative z-10">
                    <Code className="text-white/40 mb-4" size={24} />
                    <div>
                      <div className="text-2xl font-heading font-bold text-white mb-1">Clean</div>
                      <div className="text-xs font-mono text-white/40 uppercase tracking-wider">Architecture</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass-panel p-6 rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className="absolute inset-0 z-0">
                    <SparklesCore
                      background="transparent"
                      minSize={0.4}
                      maxSize={1}
                      particleDensity={100}
                      className="w-full h-full"
                      particleColor="#FFFFFF"
                      speed={1}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  <div className="relative z-10">
                    <Smartphone className="text-white/40 mb-4" size={24} />
                    <div>
                      <div className="text-2xl font-heading font-bold text-white mb-1">Native</div>
                      <div className="text-xs font-mono text-white/40 uppercase tracking-wider">Performance</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden bg-background border-t border-white/5">
        <StaggerTestimonials />
      </section>

      {/* AI-Optimized FAQ */}
      <section className="py-32 bg-elevated border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient">Frequently Asked Questions</h2>
            <p className="text-lg text-white/60">Everything you need to know about working with us.</p>
          </div>
          
          <Accordion05 />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-background flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-20">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white">Ready to outpace the competition?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Stop settling for average. Let's build something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-black font-semibold text-lg shadow-[0_0_30px_rgba(92,230,92,0.4)] hover:scale-105 transition w-full sm:w-auto"
            >
              Book a Discovery Call
              <ArrowRight size={20} />
            </Link>
            <a 
              href="https://wa.me/923233260859" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white text-lg hover:bg-white/10 transition w-full sm:w-auto"
            >
              <MessageCircle size={18} className="text-primary" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
