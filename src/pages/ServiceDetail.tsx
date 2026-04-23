import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, MessageCircle, Briefcase, Cloud, Bot, Network, Settings, TrendingUp, Zap, Trophy } from 'lucide-react';
import SEO from '../components/SEO';
import { AccordionCustomSoftware } from '../components/ui/accordion-custom-software';
import { AccordionWebDevelopment } from '../components/ui/accordion-web-development';
import { AccordionMobileApp } from '../components/ui/accordion-mobile-app';
import BackgroundScene from '../components/ui/aurora-section-hero';
import { CategoryList } from '../components/ui/category-list';
import { ProcessSection } from '../components/ui/how-we-do-it-process-overview';
import { ProcessTimeline } from '../components/ui/process-timeline';
import { TextRoll } from '../components/ui/text-roll';
import { ParallaxText } from '../components/ui/parallax-text-scroll';
import CornerFrameScrambleText from '../components/ui/corner-frame-scramble-text';
import { AnimatedText } from '../components/ui/animated-text';
import { GlitchText } from '../components/ui/animated-glitch-text';
import { GooeyMarquee } from '../components/ui/gooey-marquee';
import { MinimalistTextEffect } from '../components/ui/reveal-text';

const whyChooseAbuQitmirTech = [
  "Affordable pricing",
  "Tailored solutions",
  "Fast delivery",
  "Scalable architecture",
  "Long-term support"
];

const customSoftwareTargets = [
  "Startups",
  "SMEs",
  "Enterprises"
];

const ourDevelopmentProcess = [
  {
    id: 1,
    title: "Discovery & Planning",
    description: ""
  },
  {
    id: 2,
    title: "Architecture Design",
    description: ""
  },
  {
    id: 3,
    title: "Agile Development",
    description: ""
  },
  {
    id: 4,
    title: "Testing & Deployment",
    description: ""
  }
];

const whyCustomSoftwareItems = [
  {
    icon: Settings,
    title: "Full Control",
    description: "You decide features, design, and functionality."
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Your software grows with your business."
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "Automate repetitive tasks and save time."
  },
  {
    icon: Trophy,
    title: "Competitive Advantage",
    description: "Stand out with unique solutions."
  }
];

const customSoftwareSolutions = [
  {
    id: "business-management",
    title: "Business Management Systems",
    description: "ERP systems • CRM software • Inventory management systems • HR management tools",
    icon: <Briefcase size={24} />,
    href: "/contact"
  },
  {
    id: "saas-product",
    title: "SaaS Product Development",
    description: "Turn your idea into a scalable software product. Multi-tenant architecture • Subscription systems • Admin dashboards • API integrations",
    icon: <Cloud size={24} />,
    href: "/contact"
  },
  {
    id: "automation",
    title: "Automation Software",
    description: "Reduce manual work and increase efficiency. Workflow automation • Data processing tools • Reporting dashboards",
    icon: <Bot size={24} />,
    href: "/contact"
  },
  {
    id: "api-integrations",
    title: "API & System Integrations",
    description: "Connect all your tools into one seamless system. Payment gateways • Third-party APIs • Cloud integrations",
    icon: <Network size={24} />,
    href: "/contact"
  }
];

const serviceData = {
  "custom-software": {
    title: "Custom Software Development Services in Pakistan",
    description: "Build Scalable, Tailored Software Solutions for Your Business. Off-the-shelf software can only take you so far. If your business needs flexibility, scalability, and a competitive edge, custom software development is the solution. At Abuqitmir Tech, we provide professional custom software development services in Pakistan to help businesses streamline operations, automate processes, and build powerful digital systems tailored to their exact needs.",
    overview: "We build robust, scalable, and secure custom software solutions that streamline your operations and drive growth. Our engineering team leverages modern architectures and best practices to deliver enterprise-grade applications.",
    benefits: ["Increased operational efficiency", "Enhanced data security", "Scalable architecture for future growth", "Seamless integration with existing systems"],
    process: ["Discovery & Planning", "Architecture Design", "Agile Development", "Testing & QA", "Deployment", "Maintenance & Support"],
    tech: ["Node.js", "Python", "Java", "PostgreSQL", "AWS", "Docker"]
  },
  "web-development": {
    title: "Web Development",
    description: "Modern, responsive, and SEO-optimized web applications built with Next.js and React.",
    overview: "We craft high-performance, responsive web applications that deliver exceptional user experiences. Utilizing the latest frameworks like Next.js and React, we ensure your web presence is fast, secure, and scalable.",
    benefits: ["Lightning-fast load times", "SEO-optimized architecture", "Responsive design for all devices", "High conversion rates"],
    process: ["Requirements Gathering", "UI/UX Prototyping", "Frontend Development", "Backend Integration", "Performance Testing", "Launch"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "GraphQL"]
  },
  "mobile-app": {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that engage users and drive growth.",
    overview: "We develop engaging, high-performance mobile applications for iOS and Android. Whether you need a native app or a cross-platform solution, we deliver seamless experiences that your users will love.",
    benefits: ["Wider audience reach", "Enhanced user engagement", "Offline capabilities", "Push notifications for retention"],
    process: ["Concept & Strategy", "Wireframing", "UI Design", "App Development", "Beta Testing", "App Store Launch"],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"]
  },
  "ui-ux": {
    title: "UI/UX Design",
    description: "Intuitive, user-centric interfaces designed to maximize conversion and brand loyalty.",
    overview: "Our design team creates intuitive, visually stunning interfaces that put the user first. We combine aesthetic appeal with functional design to maximize user satisfaction and business conversions.",
    benefits: ["Higher user retention", "Increased conversion rates", "Stronger brand identity", "Reduced development costs through prototyping"],
    process: ["User Research", "Information Architecture", "Wireframing", "Visual Design", "Prototyping", "Usability Testing"],
    tech: ["Figma", "Adobe XD", "Framer", "Sketch", "InVision", "Zeplin"]
  },
  "ai-solutions": {
    title: "Technology Solutions & AI",
    description: "Intelligent automation and AI integrations to future-proof your business operations.",
    overview: "We integrate cutting-edge AI technologies to automate processes, gain insights, and create intelligent applications. From machine learning models to NLP, we help you leverage AI for a competitive edge.",
    benefits: ["Automated repetitive tasks", "Data-driven decision making", "Personalized user experiences", "Predictive analytics"],
    process: ["Data Assessment", "Model Selection", "Training & Validation", "Integration", "Monitoring", "Continuous Improvement"],
    tech: ["TensorFlow", "PyTorch", "OpenAI API", "Python", "Scikit-Learn", "Hugging Face"]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description: "Data-driven strategies to increase visibility, traffic, and revenue across digital channels.",
    overview: "Our digital marketing strategies are designed to increase your online visibility, drive targeted traffic, and maximize ROI. We use data-driven approaches across SEO, PPC, and social media.",
    benefits: ["Increased brand awareness", "Higher quality leads", "Measurable ROI", "Targeted audience reach"],
    process: ["Market Research", "Strategy Development", "Campaign Setup", "Execution", "Analytics & Tracking", "Optimization"],
    tech: ["Google Analytics", "SEMrush", "Ahrefs", "Facebook Ads", "Google Ads", "HubSpot"]
  },
  "seo": {
    title: "SEO & Local SEO",
    description: "Dominate search rankings and attract high-intent local and global customers to your business.",
    overview: "We implement advanced Search Engine Optimization strategies to improve your organic visibility. From technical SEO to local map pack optimization, we ensure your business is found by customers actively searching for your services.",
    benefits: ["Higher organic traffic", "Dominant local presence", "Improved domain authority", "Long-term sustainable growth"],
    process: ["Technical Audit", "Keyword Research", "On-Page Optimization", "Local Citations", "Link Building", "Performance Tracking"],
    tech: ["Google Search Console", "Google Business Profile", "Ahrefs", "Screaming Frog", "Moz Local", "Schema Markup"]
  },
  "graphics-design": {
    title: "Graphics Design",
    description: "Compelling visual identities and marketing materials that resonate with your target audience.",
    overview: "We create compelling visual identities and marketing materials that communicate your brand's message effectively. From logos to full brand guidelines, we ensure your visual presence is strong and consistent.",
    benefits: ["Professional brand image", "Consistent visual identity", "Memorable marketing materials", "Higher engagement rates"],
    process: ["Brand Discovery", "Concept Generation", "Design Iteration", "Refinement", "Final Delivery", "Brand Guidelines"],
    tech: ["Adobe Illustrator", "Adobe Photoshop", "InDesign", "CorelDRAW", "After Effects", "Canva"]
  },
  "content-writing": {
    title: "Content Writing",
    description: "SEO-optimized, persuasive copy that tells your brand story and converts visitors.",
    overview: "Our expert writers craft SEO-optimized, persuasive content that tells your brand story and engages your audience. We provide high-quality copy for websites, blogs, and marketing campaigns.",
    benefits: ["Improved search engine rankings", "Established thought leadership", "Higher conversion rates", "Clear brand messaging"],
    process: ["Topic Research", "Keyword Optimization", "Drafting", "Editing & Proofreading", "SEO Formatting", "Publishing"],
    tech: ["Grammarly", "Surfer SEO", "Yoast", "Hemingway", "Google Docs", "WordPress"]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = serviceData[id as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-heading font-bold">Service Not Found</h1>
      </div>
    );
  }

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
    },{
      "@type": "ListItem",
      "position": 3,
      "name": service.title,
      "item": `https://abuqitmir.tech/services/${id}`
    }]
  };

  return (
    <>
      <SEO 
        title={`${service.title} Services in Pakistan | Abu Qitmir`}
        description={`${service.description} Serving clients in Pakistan, USA, and UK.`}
        canonical={`https://abuqitmir.tech/services/${id}/`}
        schema={breadcrumbSchema}
      />

      {/* Hero */}
      {id === 'custom-software' ? (
        <section className="pt-48 pb-40 lg:pt-56 lg:pb-48 relative overflow-hidden flex flex-col items-center justify-center min-h-[75vh] md:min-h-[85vh]">
          <BackgroundScene beamCount={60} />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex flex-col items-center justify-center gap-4"
            >
              <GlitchText 
                text="Custom Software Development" 
                textClassName="text-[clamp(2.5rem,6vw,4.5rem)] font-heading font-bold text-center leading-tight"
                className="min-h-0 p-0"
              />
              <span className="text-3xl md:text-5xl lg:text-6xl text-gradient font-heading font-bold">Services in Pakistan</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10 space-y-6"
            >
              <p className="font-semibold text-white text-xl md:text-2xl">
                Build Scalable, Tailored Software Solutions for Your Business
              </p>
              <p>Off-the-shelf software can only take you so far.</p>
              <p>If your business needs flexibility, scalability, and a competitive edge, custom software development is the solution.</p>
              <p>At Abuqitmir Tech, we provide professional custom software development services in Pakistan to help businesses streamline operations, automate processes, and build powerful digital systems tailored to their exact needs.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                to="/contact"
                className="inline-block px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(92,230,92,0.4)]"
              >
                Get Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient"
            >
              {service.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 leading-relaxed"
            >
              {service.description}
            </motion.p>
          </div>
        </section>
      )}

      {id === 'custom-software' && (
        <section className="relative w-full flex min-h-[50vh] py-24 flex-col items-center justify-center overflow-hidden border-t border-white/5 bg-transparent z-10">
          <div className="w-full relative h-[150px] md:h-[250px] mb-8 mt-[-40px]">
            <MinimalistTextEffect 
              text="What is Custom Software Development?"
              viewBox="0 0 350 50"
              fontSize={18}
            />
          </div>

          <div className="max-w-3xl text-center md:text-left text-lg md:text-xl text-white/70 leading-relaxed font-medium space-y-6 px-6 relative z-10">
            <p className="text-white/90">
              Custom software is built specifically for your business — not a generic solution.
            </p>
            <p>
              Unlike ready-made tools, custom software:
            </p>
            <ul className="list-disc text-left list-inside space-y-3 font-semibold text-white/80 max-w-xl mx-auto md:mx-0 pl-4">
              <li>Matches your workflow</li>
              <li>Scales with your business</li>
              <li>Offers better performance and security</li>
            </ul>
          </div>
        </section>
      )}

      {id === 'custom-software' && (
        <section className="py-24 relative z-10 overflow-hidden border-t border-white/5 bg-transparent">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-64 bg-primary/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                Our Custom Software Solutions
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mt-6">
                We partner with forward-thinking businesses to deliver unparalleled digital growth with speed, precision, and strategic foresight.
              </p>
            </div>
            
            <CategoryList items={customSoftwareSolutions} />
          </div>
        </section>
      )}

      {id === 'custom-software' && (
        <section className="py-24 relative z-10 px-6 md:px-12 border-t border-white/5 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <ProcessSection
              subtitle="Advantages"
              title="Why Choose Custom Software?"
              description="Pre-packaged software forces you to adapt your business to the tool. Custom software adapts to your business, scaling and integrating exactly as you need."
              buttonText="Discuss Your Needs"
              buttonLink="https://wa.me/923233260859"
              items={whyCustomSoftwareItems}
            />
          </div>
        </section>
      )}

      {id === 'custom-software' && (
        <section className="relative z-10 border-t border-white/5 bg-transparent overflow-hidden">
          <ProcessTimeline 
            title="Our Process" 
            items={ourDevelopmentProcess} 
          />
        </section>
      )}

      {id === 'custom-software' && (
        <section className="py-24 relative z-10 border-t border-white/5 bg-black/40">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-10">
              Custom Software for Businesses in Pakistan
            </h2>
            <p className="text-xl text-white/50 mb-12">We work with:</p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16">
              {customSoftwareTargets.map((item, index) => (
                <div key={index} className="relative flex cursor-pointer flex-col items-center overflow-visible group">
                  <TextRoll
                    center
                    className="text-4xl md:text-5xl leading-[0.8] font-extrabold tracking-[-0.03em] uppercase text-white/80 group-hover:text-primary transition-colors duration-500"
                  >
                    {item}
                  </TextRoll>
                </div>
              ))}
            </div>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium">
              Providing affordable custom software development in Pakistan without compromising quality.
            </p>
          </div>
        </section>
      )}

      {id === 'custom-software' && (
        <section className="py-24 relative overflow-hidden bg-black border-t border-white/5">
          <div className="absolute inset-0 pointer-events-none opacity-20">
             <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 blur-[100px]" />
             <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/10 blur-[120px]" />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              We deliver cutting-edge digital solutions tailored to the unique goals and compliance needs of various sectors.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-6 -mx-8">
            <ParallaxText baseVelocity={-2}>E-COMMERCE • HEALTHCARE • EDUCATION • FINANCE • LOGISTICS • </ParallaxText>
            <ParallaxText baseVelocity={2}>HEALTHCARE • EDUCATION • FINANCE • LOGISTICS • E-COMMERCE • </ParallaxText>
            <ParallaxText baseVelocity={-2}>FINANCE • LOGISTICS • E-COMMERCE • HEALTHCARE • EDUCATION • </ParallaxText>
          </div>
        </section>
      )}

      {id === 'custom-software' && (
        <section className="py-24 relative overflow-hidden bg-transparent border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-20">
              <AnimatedText 
                text="Why Choose Abuqitmir Tech?" 
                fontSize="clamp(2rem, 5vw, 4.5rem)"
                className="font-heading font-bold"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseAbuQitmirTech.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel p-6 rounded-2xl flex items-center gap-5 group hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                  </div>
                  <span className="text-xl font-medium text-white/90 group-hover:text-white transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Overview & Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold mb-6 text-white">Service Overview</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              {service.overview}
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-black font-semibold hover:scale-105 transition-transform glow-primary"
            >
              Discuss Your Project <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-3xl border border-white/10"
          >
            <h3 className="text-2xl font-heading font-bold mb-8 text-white">Key Benefits</h3>
            <ul className="space-y-6">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                  <span className="text-lg text-white/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process & Tech */}
      {id !== 'custom-software' && (
        <section className="py-20 bg-elevated border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-heading font-bold mb-10 text-white">Our Process</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {service.process.map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-card shadow-[0_0_0_8px_#050505] text-white/50 group-hover:text-primary group-hover:border-primary/50 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {i + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl glass-panel border border-white/5 group-hover:border-primary/20 transition-colors">
                      <h4 className="text-lg font-heading font-semibold text-white">{step}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-heading font-bold mb-10 text-white">Technology Stack</h3>
              <div className="flex flex-wrap gap-4">
                {service.tech.map((tech, i) => (
                  <span key={i} className="px-6 py-3 rounded-full glass-panel border border-white/10 text-white/80 font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {(id === 'custom-software' || id === 'web-development' || id === 'mobile-app') && (
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                {id === 'custom-software' 
                  ? "Everything you need to know about our custom software development process."
                  : id === 'web-development'
                  ? "Everything you need to know about our web development process."
                  : "Everything you need to know about our mobile app development process."}
              </p>
            </div>
            {id === 'custom-software' && <AccordionCustomSoftware />}
            {id === 'web-development' && <AccordionWebDevelopment />}
            {id === 'mobile-app' && <AccordionMobileApp />}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          {id === 'custom-software' ? (
            <>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Ready to build custom software that transforms your business?</h2>
              <p className="text-xl text-white/60 mb-8">Contact Qitmir Tech Solutions today for a free consultation.</p>
            </>
          ) : id === 'web-development' ? (
            <>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Ready to build a powerful web platform?</h2>
              <p className="text-xl text-white/60 mb-8">Contact Qitmir Tech Solutions for a free consultation.</p>
            </>
          ) : id === 'mobile-app' ? (
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-white">Ready to start your mobile app development project?</h2>
          ) : (
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-white">Ready to start your {service.title.toLowerCase()} project?</h2>
          )}
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link 
              to="/contact" 
              className="px-10 py-5 rounded-full bg-primary text-black font-semibold text-lg hover:scale-105 transition-transform glow-primary"
            >
              Get a Quote
            </Link>
            <a 
              href="https://wa.me/923233260859" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full glass-panel text-white font-medium text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <MessageCircle size={20} className="text-primary" />
              WhatsApp Us
            </a>
          </div>

          {(id === 'custom-software' || id === 'web-development' || id === 'mobile-app') && (
            <p className="text-sm text-white/40">
              Serving: Karachi, Lahore, Islamabad (Pakistan) | New York (USA) | London (UK) | Berlin (Germany) | Warsaw (Poland)
            </p>
          )}
        </div>
      </section>
    </>
  );
}
