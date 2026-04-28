import { motion, useMotionValue } from 'framer-motion';
import { Link } from 'react-router';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Smartphone, Palette, Brain, LineChart, PenTool, Globe, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';
import { CardPattern, generateRandomString } from '../components/ui/evervault-card';
import { Hero3DWrapper } from '../components/ui/hero-3d-wrapper';

const services = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Scalable, secure, and high-performance enterprise solutions tailored to your complex business needs.",
    icon: <Code size={32} />,
    features: ["Enterprise Architecture", "API Integration", "Legacy Modernization", "Cloud Infrastructure"]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern, responsive, and SEO-optimized web applications built with Next.js and React.",
    icon: <Globe size={32} />,
    features: ["Next.js/React SPAs", "E-commerce Platforms", "CMS Integration", "Performance Optimization"]
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that engage users and drive growth.",
    icon: <Smartphone size={32} />,
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Intuitive, user-centric interfaces designed to maximize conversion and brand loyalty.",
    icon: <Palette size={32} />,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    id: "ai-solutions",
    title: "Technology Solutions & AI",
    description: "Intelligent automation and AI integrations to future-proof your business operations.",
    icon: <Brain size={32} />,
    features: ["Machine Learning", "NLP Integration", "Process Automation", "Data Analytics"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven strategies to increase visibility, traffic, and revenue across digital channels.",
    icon: <LineChart size={32} />,
    features: ["SEO Optimization", "PPC Campaigns", "Social Media Strategy", "Conversion Rate Optimization"]
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    description: "Compelling visual identities and marketing materials that resonate with your target audience.",
    icon: <PenTool size={32} />,
    features: ["Brand Identity", "Marketing Collateral", "Social Media Graphics", "Illustration"]
  },
  {
    id: "content-writing",
    title: "Content Writing",
    description: "SEO-optimized, persuasive copy that tells your brand story and converts visitors.",
    icon: <Briefcase size={32} />,
    features: ["Website Copywriting", "Blog Posts", "Technical Writing", "Email Campaigns"]
  }
];

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
      className="group/card p-10 rounded-3xl bg-transparent border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
    >
      <CardPattern
        mouseX={mouseX}
        mouseY={mouseY}
        randomString={randomString}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-8 group-hover/card:scale-110 transition-transform duration-500">
          {service.icon}
        </div>
        
        <h2 className="text-2xl font-heading font-bold mb-4 text-white group-hover/card:text-primary transition-colors">
          {service.title}
        </h2>
        
        <p className="text-white/60 leading-relaxed mb-8 flex-grow">
          {service.description}
        </p>
        
        <ul className="space-y-3 mb-10">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-center text-sm text-white/50">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Link 
          to={`/services/${service.id}`} 
          className="inline-flex items-center font-medium text-white hover:text-primary transition-colors mt-auto"
        >
          View Details <ArrowRight size={18} className="ml-2 group-hover/card:translate-x-2 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://abuqitmir.tech/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://abuqitmir.tech/services"
    }]
  };

  return (
    <>
      <SEO 
        title="Our Services in Pakistan | Abu Qitmir" 
        description="Comprehensive technology solutions designed to accelerate your business growth. Serving clients in Pakistan, USA, and UK."
        canonical="https://abuqitmir.tech/services/"
        schema={breadcrumbSchema}
      />

      <Hero3DWrapper className="pt-48 pb-40 lg:pt-56 lg:pb-48 min-h-[75vh]">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center justify-center gap-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white drop-shadow-2xl"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Comprehensive technology solutions designed to accelerate your business growth and dominate your market.
          </motion.p>
        </div>
      </Hero3DWrapper>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
