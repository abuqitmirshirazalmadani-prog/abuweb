import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Hero3DWrapper } from '../components/ui/hero-3d-wrapper';
import RainingLetters from '../components/ui/modern-animated-hero-section';
import { HolographicCard } from '../components/ui/holographic-card';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, MapPin, Code, Laptop, ArrowRight, Zap, Target, Star } from 'lucide-react';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  const textVariant = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const certifications = [
    { title: "Technology Solutions & AI", issuer: "DigiSkills.pk", year: "2025" },
    { title: "Custom Software Development", issuer: "DigiSkills.pk", year: "2024" },
    { title: "SEO & Local SEO", issuer: "DigiSkills.pk", year: "2023" },
    { title: "Graphics Design", issuer: "DIP", year: "2023" },
    { title: "Content Writing", issuer: "DigiSkills.pk", year: "2023" },
    { title: "Mobile App Development", issuer: "DigiSkills.pk", year: "2022" },
    { title: "UI/UX Design", issuer: "DigiSkills.pk", year: "2022" },
    { title: "Digital Marketing", issuer: "IDM Pakistan", year: "2021" },
    { title: "Web Development", issuer: "DigiSkills.pk", year: "2021" },
  ];

  return (
    <>
      <SEO 
        title="About Abu Qitmir | Software & App Developer in Pakistan" 
        description="Learn about Abu Qitmir — an experienced custom software and mobile app developer serving clients in Pakistan, USA, UK and Europe."
        canonical="https://abuqitmir.tech/about/"
      />

      <Hero3DWrapper className="pt-48 pb-32 lg:pt-56 lg:pb-40 min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center justify-center gap-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 text-white drop-shadow-2xl tracking-tight"
          >
            About Abu Qitmir
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-xl md:text-2xl text-primary font-medium tracking-wide">
              Full Stack Developer & Custom Software Specialist
            </p>
            <div className="flex items-center gap-2 text-white/70 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin size={18} className="text-primary" />
              <span>Based in Pakistan · Serving clients across USA, UK & worldwide</span>
            </div>
          </motion.div>
        </div>
      </Hero3DWrapper>

      {/* Main Content Sections */}
      <section className="py-20 relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32">
            {/* Who I Am */}
            <motion.div {...fadeIn} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white flex items-center gap-4">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                Who I Am
              </h2>
              <div className="space-y-4 text-lg text-white/70 leading-relaxed">
                <p>
                  I'm Abu Qitmir — a self-employed Full Stack Web Developer and Custom Software specialist with over a decade of continuous learning and hands-on development. I don't just build websites; I engineer complete digital experiences, from the first wireframe to live deployment and beyond.
                </p>
                <p>
                  With an M.B.A. in Commerce from Karachi University and nine industry certifications spanning web development, mobile apps, AI, UI/UX design, SEO, and more — I combine strategic business thinking with deep technical expertise to deliver solutions that genuinely move the needle for clients.
                </p>
              </div>
            </motion.div>

            {/* What I Do */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white flex items-center gap-4">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                What I Do
              </h2>
              <div className="space-y-4 text-lg text-white/70 leading-relaxed">
                <p>
                  I specialize in building modern, high-performance custom websites and AI-powered platforms tailored to real business goals. Every project I take on is handled end-to-end — strategy, design, development, and deployment — so you get a unified, cohesive product without the overhead of juggling multiple vendors.
                </p>
                <p>
                  Whether you need a conversion-focused business website, a scalable web application, or a custom AI-integrated solution, I bring the same commitment to clean code, fast load times, and exceptional user experience.
                </p>
              </div>
            </motion.div>
          </div>

          {/* At A Glance */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">At a glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <HolographicCard className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[200px]">
                <Code size={40} className="text-primary mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2 font-heading">6+</h3>
                <p className="text-white/60">Years of learning & building</p>
              </HolographicCard>
              
              <HolographicCard className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[200px]">
                <Award size={40} className="text-primary mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2 font-heading">9</h3>
                <p className="text-white/60">Industry certifications earned</p>
              </HolographicCard>

              <HolographicCard className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[200px]">
                <Laptop size={40} className="text-primary mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2 font-heading">100%</h3>
                <p className="text-white/60">End-to-end project ownership</p>
              </HolographicCard>
            </div>
          </motion.div>

          {/* Education & Certs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
            {/* Education */}
            <motion.div {...fadeIn} className="lg:col-span-1 border-white/5 border rounded-3xl p-8 bg-white/[0.02]">
              <div className="flex items-center gap-3 border-b border-white/10 pb-6 mb-8">
                <GraduationCap className="text-primary" size={28} />
                <h2 className="text-2xl font-heading font-bold text-white">Education</h2>
              </div>
              
              <div className="relative pl-6 before:absolute before:left-[7px] before:top-2 before:bottom-0 before:w-px before:bg-white/10">
                <div className="relative mb-8">
                  <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-black border-2 border-primary rounded-full"></div>
                  <h3 className="text-xl font-bold text-white mb-1">M.B.A. — Commerce</h3>
                  <p className="text-primary/90 mb-1">University of Karachi, Pakistan</p>
                  <p className="text-sm text-white/50">Graduated 2010</p>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:col-span-2 border-white/5 border rounded-3xl p-8 bg-white/[0.02]">
              <div className="flex items-center gap-3 border-b border-white/10 pb-6 mb-8">
                <Award className="text-primary" size={28} />
                <h2 className="text-2xl font-heading font-bold text-white">Certifications</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    variants={textVariant}
                    className="flex flex-col border border-white/5 p-4 rounded-xl bg-black/40 hover:border-primary/30 transition-colors"
                  >
                    <h3 className="font-semibold text-white/90 mb-2">{cert.title}</h3>
                    <div className="flex items-center justify-between text-sm text-white/50 mt-auto pt-2 border-t border-white/5">
                      <span>{cert.issuer}</span>
                      <span className="text-primary/70">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* My Approach */}
          <motion.div {...fadeIn} className="max-w-4xl mx-auto mb-32 border border-white/10 p-8 md:p-12 pl-8 md:pl-16 relative bg-gradient-to-r from-primary/[0.03] to-transparent rounded-3xl overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary"></div>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">My approach</h2>
            
            <div className="space-y-6 text-lg text-white/80 leading-relaxed md:pr-8 relative z-10">
              <p>
                I believe great digital products are built on three pillars: <strong className="text-white font-semibold">performance, purpose, and precision</strong>. Every website I deliver is fast by design, focused on your goals, and crafted with attention to detail that sets it apart from template-built competition.
              </p>
              <p>
                I'm particularly passionate about the intersection of modern web technology and AI — building smart, scalable solutions that give businesses a real competitive edge. If you're ready to turn your vision into a product that works as hard as you do.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 relative z-10 text-primary">
              <span className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium"><Zap size={16}/> Performance</span>
              <span className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium"><Target size={16}/> Purpose</span>
              <span className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium"><Star size={16}/> Precision</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            {...fadeIn} 
            className="text-center bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Your business deserves <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 italic">more than a template.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                I design and develop custom websites, mobile-ready web apps, and AI-integrated platforms — built from scratch, built to perform.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(92,230,92,0.3)]"
              >
                Let's Build Something Great <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
