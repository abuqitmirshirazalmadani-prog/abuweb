import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const serviceData = {
  "custom-software": {
    title: "Custom Software Development",
    description: "Scalable, secure, and high-performance enterprise solutions tailored to your complex business needs.",
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

  return (
    <>
      <SEO 
        title={`${service.title} | Abu Qitmir`}
        description={service.description}
        canonical={`https://qitmirtechsolution.com/services/${id}`}
      />

      {/* Hero */}
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
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-card text-white/50 group-hover:text-primary group-hover:border-primary/50 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#050505]">
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

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-white">Ready to start your {service.title.toLowerCase()} project?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
        </div>
      </section>
    </>
  );
}
