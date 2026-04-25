import { useParams, Link } from 'react-router';
import { motion, LayoutGroup } from 'framer-motion';
import { CheckCircle2, ArrowRight, MessageCircle, Briefcase, Cloud, Bot, Network, Settings, TrendingUp, Zap, Trophy, Smartphone, Code, Link2, Database, ShieldCheck, Target, Search, Globe, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { AccordionCustomSoftware } from '../components/ui/accordion-custom-software';
import { AccordionWebDevelopment } from '../components/ui/accordion-web-development';
import { AccordionMobileApp } from '../components/ui/accordion-mobile-app';
import { AccordionAiSolutions } from '../components/ui/accordion-ai-solutions';
import { AccordionSeo } from '../components/ui/accordion-seo';
import { AiSolutionsHero } from '../components/ui/ai-solutions-hero';
import { SeoHero } from '../components/ui/seo-hero';
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
import { WebServicesScroll } from '../components/ui/web-services-scroll';
import { Separator } from '../components/ui/separator';
import { CardsParallax, type iCardItem } from '../components/ui/scroll-cards';
import { TextGlitch } from '../components/ui/text-glitch-effect';
import { WavyBlock, WavyBlockItem } from '../components/ui/wavy-text-block';
import { MarkdownRotator } from '../components/ui/markdown-rotator';
import { AetherFlowHero } from '../components/ui/aether-flow-hero';
import { CTAWithVerticalMarquee } from '../components/ui/cta-with-text-marquee';

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

const webDevTechStackRotations = [
  "### Frontend Technologies\n\n**React:** The default framework used for generating web interfaces.\n\n**Angular:** Officially supported as an alternative framework for rapid application generation.\n\n**Next.js:** Supported for developers building more complex, server-side rendered applications.\n\n**Modern Web Tools:** Includes support for styling and animation libraries like Framer Motion.",
  "### Backend & Infrastructure\n\n**Node.js Runtime:** Powers the server-side logic, allowing for secure API calls and database connections.\n\n**Firebase Integration:** Automatically handles backend essentials including:\n* **Firebase Authentication:** For secure user sign-in flows.\n* **Firestore:** A NoSQL cloud database for persistent data storage.\n\n**Cloud Run:** Used as the primary deployment target for scalable, serverless application hosting.\n\n**Antigravity Agent:** A specialized coding agent that manages dependencies, installs npm packages, and verifies code execution.",
  "### AI & Core Capabilities\n\n**Gemini API:** Provides large language model (LLM) capabilities for the generated apps.\n\n**Multi-language Support:** Supports coding languages including Python, JavaScript, Go, and TypeScript.\n\n**Secrets Management:** Built-in tools securely store and access API keys."
];

const mobileAppServicesData = [
  {
    title: "Android App Development",
    features: ["Native Android apps", "Business apps", "Startup MVP apps"],
    icon: Smartphone
  },
  {
    title: "iOS App Development",
    features: ["High-performance iOS apps", "Secure architecture", "Premium UI/UX"],
    icon: Smartphone
  },
  {
    title: "Cross-Platform Development",
    features: ["Flutter apps", "Cost-effective solutions", "Faster deployment"],
    icon: Code
  }
];

const mobileAppFeatures = [
  "User authentication",
  "Real-time chat",
  "Payment integration",
  "Push notifications",
  "Offline support"
];

const mobileAppWhyNeed = [
  "Direct Customer Engagement",
  "Brand Visibility",
  "Increased Revenue",
  "Better User Experience"
];

const mobileAppStartupReasons = [
  "Build MVP apps",
  "Launch quickly",
  "Scale efficiently"
];

const mobileAppWhyChoose = [
  "Affordable app development",
  "Startup-focused solutions",
  "Scalable architecture",
  "Fast delivery"
];

const mobileAppProcessSteps = [
  { id: 1, title: "Idea Validation", description: "Deep dive into user needs, business goals, and market opportunities. Define the problem before solutions." },
  { id: 2, title: "UI/UX Design", description: "Create high-fidelity designs and interactive prototypes. Test early and often to validate assumptions." },
  { id: 3, title: "Development", description: "Ship fast, build robust architecture. Our engineers write clean, scalable code." },
  { id: 4, title: "Testing", description: "Stringent quality assurance testing across multiple devices to ensure a flawless experience." },
  { id: 5, title: "Launch & Support", description: "Deploy to app stores, provide continuous maintenance and iterate based on feedback." },
];

const aiSolutionsWhatWeOffer = [
  {
    title: "Custom AI Solutions",
    description: "We design AI systems specifically for your business model.",
    features: ["Machine learning models", "Natural language processing (NLP)", "Computer vision systems", "Recommendation engines"],
    icon: Settings
  },
  {
    title: "AI Chatbots & Virtual Assistants",
    description: "Enhance customer engagement with intelligent automation.",
    features: ["Website chatbots", "WhatsApp AI bots", "Customer support automation", "Lead generation bots"],
    icon: MessageCircle
  },
  {
    title: "AI Automation for Businesses",
    description: "Reduce manual work and increase efficiency.",
    features: ["Workflow automation", "Data processing automation", "AI-driven CRM integrations", "Smart reporting systems"],
    icon: Zap
  },
  {
    title: "AI Integration Services",
    description: "Already have a system? We make it smarter.",
    features: ["AI API integration", "Automation tools integration", "SaaS AI upgrades", "Custom dashboards"],
    icon: Link2
  }
];

const aiSolutionsWhyNeed = [
  {
    title: "Save Time & Reduce Costs",
    description: "Automation eliminates repetitive tasks."
  },
  {
    title: "Make Data-Driven Decisions",
    description: "AI helps you predict trends and customer behavior."
  },
  {
    title: "Improve Customer Experience",
    description: "Personalization and faster responses increase satisfaction."
  },
  {
    title: "Scale Faster",
    description: "AI systems grow with your business."
  }
];

const aiSolutionsProcessSteps = [
  { id: 1, title: "Discovery & Strategy", description: "We understand your business goals and identify AI opportunities." },
  { id: 2, title: "Data Analysis & Planning", description: "We analyze your data and define the right AI model." },
  { id: 3, title: "Development & Training", description: "We build and train AI systems using modern frameworks." },
  { id: 4, title: "Testing & Optimization", description: "We ensure accuracy, speed, and reliability." },
  { id: 5, title: "Deployment & Scaling", description: "We launch and continuously improve your AI system." },
];

const aiSolutionsIndustries = [
  "E-commerce (recommendation engines)",
  "Healthcare (AI diagnostics support)",
  "Finance (fraud detection & analytics)",
  "Education (personalized learning systems)",
  "Real estate (predictive pricing models)"
];

const aiSolutionsStartups = [
  "Startup MVP AI solutions",
  "Cost-effective AI systems",
  "Scalable AI architecture"
];

const seoServicesData = [
  {
    title: "On-Page SEO",
    description: "Keyword optimization • Meta tags • Content optimization • Internal linking",
    icon: Search
  },
  {
    title: "Technical SEO",
    description: "Website speed optimization • Mobile responsiveness • Fixing errors • Sitemap & indexing",
    icon: Settings
  },
  {
    title: "Off-Page SEO",
    description: "Backlink building • Guest posting • Authority building",
    icon: Link2
  },
  {
    title: "Local SEO",
    description: "Google Business Profile optimization • Local citations • Map ranking strategies • Location-based keywords",
    icon: MapPin
  }
];

const seoImportanceData = [
  "Increase Website Traffic",
  "Generate Leads",
  "Build Brand Authority",
  "Long-Term Results"
];

const seoProcessSteps = [
  { id: 1, title: "Website Audit", description: "Comprehensive analysis of your existing site to identify technical errors and opportunities." },
  { id: 2, title: "Keyword Research", description: "Identifying high-intent search terms your potential customers are actively using." },
  { id: 3, title: "Optimization", description: "Applying on-page and technical fixes to align with Google's best practices." },
  { id: 4, title: "Content Creation", description: "Developing authoritative, SEO-rich content that engages visitors and builds trust." },
  { id: 5, title: "Monitoring & Growth", description: "Continuous tracking, backlink building, and strategy refinement for sustained rankings." }
];

const seoTargetBusinesses = ["Local businesses", "Startups", "E-commerce stores"];

const seoWhyChooseUs = [
  "Affordable SEO services",
  "Data-driven strategy",
  "Long-term growth",
  "Transparent reporting"
];

const aiSolutionsWhyChoose = [
  "Affordable AI development in Pakistan",
  "Startup-focused approach",
  "Fast delivery cycles",
  "Scalable and secure systems",
  "Long-term support"
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

const developmentCardsData: iCardItem[] = [
  {
    title: "1. Strategy & Planning",
    description: "We understand your business and target audience.",
    src: "https://images.pexels.com/photos/7278606/pexels-photo-7278606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "2. UI/UX Design",
    description: "We design modern, user-friendly interfaces.",
    src: "https://images.pexels.com/photos/7964490/pexels-photo-7964490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "3. Development",
    description: "We build fast and scalable websites.",
    src: "https://images.pexels.com/photos/36706460/pexels-photo-36706460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "4. Testing",
    description: "We ensure performance and compatibility.",
    src: "https://images.pexels.com/photos/7988218/pexels-photo-7988218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "5. Launch",
    description: "We deploy and optimize your website.",
    src: "https://images.pexels.com/photos/7698746/pexels-photo-7698746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
      ) : id === 'mobile-app' ? (
        <AetherFlowHero />
      ) : id === 'seo' ? (
        <SeoHero />
      ) : id === 'web-development' ? (
        <section className="pt-48 pb-40 lg:pt-56 lg:pb-48 relative overflow-hidden flex flex-col items-center justify-center min-h-[75vh] md:min-h-[85vh]">
          <BackgroundScene beamCount={60} />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex flex-col items-center justify-center gap-4"
            >
              <GlitchText 
                text="Web Development" 
                textClassName="text-[clamp(2.5rem,6vw,4.5rem)] font-heading font-bold text-center leading-tight"
                className="min-h-0 p-0"
              />
              <span className="text-3xl md:text-5xl lg:text-6xl text-white/50 font-heading font-bold">Services in Pakistan</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10 space-y-6"
            >
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Fast, Modern, and SEO-Optimized Websites That Convert</h2>
              <p>Your website is your digital storefront — and first impressions matter.</p>
              <p>At Abuqitmir Tech, we offer professional web development services in Pakistan designed to help businesses build fast, responsive, and high-converting websites.</p>
              <p>Whether you need a business website, SaaS platform, or e-commerce store, we create solutions that are built for performance, scalability, and SEO.</p>
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
      ) : id !== 'ai-solutions' && id !== 'seo' ? (
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
      ) : null}

      {id === 'web-development' && (
        <section className="py-24 relative overflow-hidden bg-transparent border-t border-white/5 z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <AnimatedText 
                text="Our Web Development Services" 
                fontSize="clamp(2rem, 5vw, 4.5rem)"
                className="font-heading font-bold"
                as="h3"
              />
            </div>

            <WebServicesScroll />
          </div>
        </section>
      )}

      {id === 'web-development' && (
        <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5 z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* Left Column */}
              <div className="lg:w-1/3 flex flex-col items-start pt-4 lg:pt-8">
                <span className="text-[#3cff9d] font-bold text-xs tracking-widest uppercase mb-6 drop-shadow-[0_0_8px_rgba(60,255,157,0.5)]">FEATURES</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                  SEO-Optimized Development
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-10">
                  We don’t just build websites — we build search engine-friendly platforms.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#5ce65c] text-black font-bold rounded-2xl hover:bg-[#5ce65c]/90 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(92,230,92,0.3)] hover:shadow-[0_0_30px_rgba(92,230,92,0.5)] group"
                >
                  Discuss Your Needs
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>

              {/* Right Column */}
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Fast Loading Speed", icon: Zap, desc: "Optimized for performance and core web vitals." },
                  { title: "Mobile Responsive Design", icon: Smartphone, desc: "Flawless experience across all devices and screen sizes." },
                  { title: "Clean Code Structure", icon: Code, desc: "W3C compliant, semantic HTML5 for better crawling." },
                  { title: "SEO-Friendly URLs", icon: Link2, desc: "Clean, readable, and keyword-rich routing." },
                  { title: "Schema Markup Integration", icon: Database, desc: "Rich snippets to enhance your search visibility." },
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-[#0f0f0f] border border-white/5 rounded-3xl p-8 flex flex-col hover:border-white/10 transition-colors group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                      <feature.icon className="w-32 h-32 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-[#1a1a1a] border border-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:border-white/20 transition-colors relative z-10">
                       <feature.icon className="w-6 h-6 text-[#5ce65c]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">{feature.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed relative z-10">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {id === 'web-development' && (
        <section className="py-24 relative z-10 overflow-hidden border-t border-white/5 bg-transparent">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-64 bg-[#5ce65c]/10 blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative z-10 px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                Why a Professional Website Matters
              </h2>
            </div>
            
            <div className="flex flex-col w-full divide-y divide-white/10 border-y border-white/10">
              {[
                { title: "Build Trust & Credibility", desc: "A modern website increases customer confidence.", icon: ShieldCheck },
                { title: "Generate Leads", desc: "Optimized websites convert visitors into customers.", icon: Target },
                { title: "Improve Visibility", desc: "SEO-friendly structure helps you rank on Google.", icon: Search },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex items-center py-8 px-4 md:px-8 hover:bg-white/5 transition-colors overflow-hidden"
                >
                  <div className="flex items-center gap-6 md:gap-8 z-10 relative w-full">
                    <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1a1a1a] border border-white/5 text-[#5ce65c] group-hover:scale-110 group-hover:bg-[#5ce65c]/20 group-hover:border-[#5ce65c]/30 transition-all duration-300 shrink-0">
                       <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div className="flex flex-col justify-center flex-grow">
                      <h3 className="text-xl md:text-2xl font-heading font-semibold text-white group-hover:text-[#5ce65c] transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-base md:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}



      {id === 'web-development' && (
        <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5 z-10 min-h-[60vh] flex items-center justify-center">
            {/* Dark background with random floating characters to match photo */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden font-mono text-[12px] md:text-xl text-white/10 flex flex-wrap justify-between content-between p-4 opacity-40 select-none">
              {Array.from({ length: 150 }).map((_, i) => (
                <span 
                  key={i} 
                  className="animate-pulse" 
                  style={{ 
                    animationDelay: `${Math.random() * 5}s`, 
                    animationDuration: `${Math.random() * 3 + 2}s`,
                    opacity: Math.random() * 0.5 + 0.1,
                    marginLeft: `${Math.random() * 20}px`,
                    marginTop: `${Math.random() * 20}px`
                  }}
                >
                  {String.fromCharCode(33 + Math.floor(Math.random() * 90))}
                </span>
              ))}
            </div>
            
            {/* Intense Central Glow behind text similar to photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-32 bg-[#ff7b00]/30 blur-[100px] pointer-events-none rounded-full mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[80px] bg-white/20 blur-[50px] pointer-events-none rounded-full mix-blend-screen" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-10 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
               📈 Why Choose Abuqitmir Tech?
             </h2>
             <div className="flex flex-col items-center justify-center gap-4 text-base md:text-xl lg:text-2xl font-medium text-white/90">
                {[
                  "Affordable web development in Pakistan",
                  "SEO-first approach",
                  "High-performance websites",
                  "Modern UI/UX design",
                  "Ongoing support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 w-full justify-center">
                    <span className="text-[#5ce65c] font-bold text-xl drop-shadow-[0_0_8px_rgba(92,230,92,0.5)]">✔</span>
                    <span className="drop-shadow-md text-center">{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>
      )}

      {id === 'web-development' && (
        <section className="py-12 md:py-16 relative overflow-hidden bg-transparent border-t border-white/5 z-10">
          <div className="max-w-4xl mx-auto px-6 relative z-10 mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white text-center">
              Our Development Process
            </h2>
          </div>
          <CardsParallax items={developmentCardsData} />
        </section>
      )}

      {id === 'web-development' && (
        <section className="py-12 md:py-16 relative overflow-hidden bg-[#050505] border-t border-white/5 z-10 flex flex-col items-center justify-center min-h-[20vh]">
          <div className="w-full overflow-hidden flex justify-center px-4">
             <TextGlitch 
                text="WEB DEVELOPMENT" 
                hoverText="FOR BUSINESSES IN PAKISTAN" 
                delay={0}
             />
          </div>
        </section>
      )}

      {id === 'web-development' && (
        <section className="py-12 md:py-20 relative overflow-hidden bg-transparent border-t border-white/5 z-10 min-h-[40vh] flex flex-col items-center justify-center">
          <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row md:items-start gap-12 md:gap-24">
            <div className="md:w-1/3 pt-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 opacity-90">
                We help:
              </h2>
            </div>
            <div className="md:w-2/3 h-[50vh] min-h-[400px] relative overflow-hidden flex items-center">
              <WavyBlock className="flex flex-col justify-center items-start gap-8 w-full">
                {[
                  'Local businesses',
                  'Startups',
                  'International clients'
                ].map((title, index) => (
                  <WavyBlockItem 
                    key={title} 
                    index={index}
                    config={{
                      baseOffsetFactor: 0.01,
                      baseExtra: 0,
                      baseAmplitude: 40,
                      lengthEffect: 0.6,
                      frequency: 35,
                      progressScale: 4,
                      phaseShiftDeg: -180,
                      spring: { damping: 22, stiffness: 300 },
                    }}
                    className="max-w-[100vw] pr-4 md:pr-12"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5vw] xl:text-5xl font-bold leading-tight tracking-tighter uppercase whitespace-normal break-words flex flex-wrap text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                      {title}
                    </h3>
                  </WavyBlockItem>
                ))}
              </WavyBlock>
            </div>
          </div>
        </section>
      )}

      {id === 'web-development' && (
        <section className="py-12 md:py-16 relative overflow-hidden bg-[#050505] border-t border-white/5 z-10 flex flex-col items-center justify-center">
          <div className="max-w-5xl w-full px-6 flex justify-center">
            <LayoutGroup>
              <div className="text-white/80 font-mono text-lg md:text-xl md:leading-relaxed bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 w-full min-h-[350px] flex items-center">
                <MarkdownRotator
                  texts={webDevTechStackRotations}
                  rotationInterval={8000}
                />
              </div>
            </LayoutGroup>
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
            
            <CategoryList 
              categories={customSoftwareSolutions.map(item => ({
                id: item.id,
                title: item.title,
                subtitle: item.description,
                icon: item.icon
              }))} 
            />
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
      {id !== 'ai-solutions' && id !== 'seo' && (
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
      )}

      {id === 'mobile-app' && (
        <section className="py-24 relative overflow-hidden bg-transparent border-t border-white/5 z-10">
          <CategoryList 
            title="Our App Development Services"
            categories={mobileAppServicesData.map((item, idx) => ({
              id: idx,
              title: item.title,
              subtitle: item.features.join(' • '),
              icon: <item.icon className="w-8 h-8" />
            }))}
          />
        </section>
      )}

      {id === 'mobile-app' && (
        <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5 z-10 flex flex-col items-center justify-center">
          <CTAWithVerticalMarquee
            title="💡 Features We Build"
            items={mobileAppFeatures}
          />
        </section>
      )}

      {id === 'mobile-app' && (
        <section className="py-24 relative overflow-hidden bg-transparent border-t border-white/5 z-10 w-full flex items-center justify-center px-4">
          <div className="flex flex-col h-fit w-full max-w-[1400px] mx-auto lg:px-12 selection:bg-primary selection:text-black overflow-hidden transition-all duration-500 group bg-gray-950/60 z-20 border-white/10 border rounded-3xl ring-white/5 ring-1 relative shadow-2xl backdrop-blur-xl py-12 px-6 sm:px-12 justify-between">
            
            {/* Ambient Backgrounds */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] opacity-50"></div>
              <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-primary/10 blur-[120px] rounded-[100%] mix-blend-screen opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-[100%] mix-blend-screen opacity-40"></div>
            </div>

            {/* Pilled Label */}
            <div className="flex w-full justify-start relative z-10 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20 hover:border-primary/30 transition-colors cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] animate-pulse"></div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-sans">Business Value</span>
              </div>
            </div>

            <div className="relative z-10 mb-12">
              <h2 className="leading-[1.1] select-none transition-all duration-700 text-4xl font-medium tracking-tighter md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                <span className="font-semibold text-white drop-shadow-lg">Why Your Business Needs a Mobile App</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {mobileAppWhyNeed.map((reason, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-primary/50 hover:bg-white/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 group-hover:border-primary/30 text-white/50 group-hover:text-primary transition-all duration-300 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors">{reason}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}



      {id === 'mobile-app' && (
        <section className="py-12 md:py-20 relative overflow-hidden bg-transparent border-t border-white/5 z-10 min-h-[40vh] flex flex-col items-center justify-center">
          <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row md:items-start gap-12 md:gap-24">
            <div className="md:w-1/3 pt-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 opacity-90">
                🌍 App Development for Startups
              </h2>
              <p className="text-xl text-white/70">We help startups: </p>
            </div>
            <div className="md:w-2/3 h-[50vh] min-h-[400px] relative overflow-hidden flex items-center">
              <WavyBlock className="flex flex-col justify-center items-start gap-8 w-full">
                {mobileAppStartupReasons.map((title, index) => (
                  <WavyBlockItem 
                    key={title} 
                    index={index}
                    config={{
                      baseOffsetFactor: 0.01,
                      baseExtra: 0,
                      baseAmplitude: 40,
                      lengthEffect: 0.6,
                      frequency: 35,
                      progressScale: 4,
                      phaseShiftDeg: -180,
                      spring: { damping: 22, stiffness: 300 },
                    }}
                    className="max-w-[100vw] pr-4 md:pr-12"
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5vw] xl:text-5xl font-bold leading-tight tracking-tighter uppercase whitespace-normal break-words flex flex-wrap text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                       {title}
                    </h3>
                  </WavyBlockItem>
                ))}
              </WavyBlock>
            </div>
          </div>
        </section>
      )}

      {id === 'mobile-app' && (
        <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5 z-10 min-h-[50vh] flex items-center justify-center">
           <div className="absolute inset-0 pointer-events-none overflow-hidden font-mono text-[12px] md:text-xl text-white/10 flex flex-wrap justify-between content-between p-4 opacity-40 select-none">
              {Array.from({ length: 150 }).map((_, i) => (
                <span 
                  key={i} 
                  className="animate-pulse" 
                  style={{ 
                    animationDelay: `${Math.random() * 5}s`, 
                    animationDuration: `${Math.random() * 3 + 2}s`,
                    opacity: Math.random() * 0.5 + 0.1,
                    marginLeft: `${Math.random() * 20}px`,
                    marginTop: `${Math.random() * 20}px`
                  }}
                >
                  {String.fromCharCode(33 + Math.floor(Math.random() * 90))}
                </span>
              ))}
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-32 bg-[#ff7b00]/30 blur-[100px] pointer-events-none rounded-full mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[80px] bg-white/20 blur-[50px] pointer-events-none rounded-full mix-blend-screen" />
            
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-10 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
               📈 Why Choose Abuqitmir Tech?
             </h2>
             <div className="flex flex-col items-center justify-center gap-4 text-base md:text-xl lg:text-2xl font-medium text-white/90">
                {mobileAppWhyChoose.map((reason, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                     <span className="text-[#ff7b00]">✔</span>
                     <span>{reason}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>
      )}

      {/* AI Solutions Specific Blocks */}
      {id === 'ai-solutions' && <AiSolutionsHero />}

      {id === 'ai-solutions' && (
        <section className="py-24 relative overflow-hidden bg-transparent border-t border-white/5 z-10">
          <CategoryList 
            title="What We Offer in AI Development"
            categories={aiSolutionsWhatWeOffer.map((item, idx) => ({
              id: idx,
              title: item.title,
              subtitle: item.description + ' ' + item.features.join(' • '),
              icon: <item.icon className="w-8 h-8" />
            }))}
          />
        </section>
      )}

      {id === 'ai-solutions' && (
        <section className="py-24 relative overflow-hidden bg-transparent border-t border-white/5 z-10 w-full flex items-center justify-center px-4">
          <div className="flex flex-col h-fit w-full max-w-[1400px] mx-auto lg:px-12 selection:bg-primary selection:text-black overflow-hidden transition-all duration-500 group bg-gray-950/60 z-20 border-white/10 border rounded-3xl ring-white/5 ring-1 relative shadow-2xl backdrop-blur-xl py-12 px-6 sm:px-12 justify-between">
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] opacity-50"></div>
              <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-primary/10 blur-[120px] rounded-[100%] mix-blend-screen opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-[100%] mix-blend-screen opacity-40"></div>
            </div>

            <div className="flex w-full justify-start relative z-10 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20 hover:border-primary/30 transition-colors cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] animate-pulse"></div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-sans">Business Value</span>
              </div>
            </div>

            <div className="relative z-10 mb-12">
              <h2 className="leading-[1.1] select-none transition-all duration-700 text-4xl font-medium tracking-tighter md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                <span className="font-semibold text-white drop-shadow-lg">Why Your Business Needs AI</span>
              </h2>
              <p className="text-xl text-white/70 mt-6 max-w-2xl">Businesses that adopt AI early gain a massive advantage.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {aiSolutionsWhyNeed.map((reason, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-primary/50 hover:bg-white/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="flex flex-col gap-2 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-primary/30 text-white/50 group-hover:text-primary transition-all duration-300 shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors">{reason.title}</span>
                    </div>
                    <p className="mt-2 pl-11 text-white/60">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {id === 'ai-solutions' && (
        <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5 z-10">
          <div className="max-w-4xl mx-auto px-6 relative z-10 mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Our AI Development Process
            </h2>
          </div>
          
          <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
            <div className="relative h-auto">
              <div className="flex flex-col items-center">
                {aiSolutionsProcessSteps.map((step, idx) => (
                  <article 
                    key={idx}
                    className={`text-center bg-gradient-to-br from-white/10 to-white/5 w-full border-white/20 border rounded-2xl relative shadow-xl backdrop-blur-xl px-6 py-8 sm:px-10 sm:py-10 transition-all duration-300 hover:-translate-y-2 group ${idx > 0 ? 'mt-[-2rem]' : ''}`}
                    style={{
                      zIndex: 10 + idx,
                      width: `calc(100% - ${idx * 4}%)`
                    }}
                  >
                    <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <div className="space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-neutral-300/90 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                        {step.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-black bg-primary border-primary/20 border rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(60,255,157,0.3)]">
                        Step {step.id}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {id === 'ai-solutions' && (
        <section className="relative overflow-hidden bg-[#050505] border-t border-white/5 z-10 py-24 md:py-32 font-sans">
          {/* External Dependencies inline style simulation */}
          <style>{`
            .ai-startups-title { font-family: 'Rajdhani', sans-serif; }
            .ai-startups-code { font-family: 'JetBrains Mono', monospace; }
          `}</style>
          
          {/* Technical Background Layers */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]">
            </div>
            <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:12rem_12rem]">
            </div>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 10%, #050505 100%)' }}>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Header Section */}
            <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="overflow-hidden max-w-2xl">
                <h2 className="text-4xl md:text-5xl lg:text-7xl uppercase tracking-tighter text-white leading-none font-bold">
                  AI Development for Startups
                </h2>
              </div>
              <p className="text-white/50 text-sm max-w-xs leading-relaxed ai-startups-code">
                // Pakistan is rapidly growing in the AI space, and startups have a unique opportunity to leverage AI early. We specialize in:
              </p>
            </div>

            {/* Interactive Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-none relative">

              {aiSolutionsStartups.map((title, idx) => (
                <div key={idx} className="bg-[#050505] p-8 md:p-12 flex flex-col gap-10 hover:bg-white/[0.03] transition-all duration-500 group">
                  <div className="flex items-center justify-between">
                    <div className="text-primary text-xs font-bold tracking-[0.2em] ai-startups-code">
                      [{String(idx + 1).padStart(2, '0')}]
                    </div>
                    {/* Placeholder for iconify since we use lucide */}
                    <Settings className="w-8 h-8 text-white/20 group-hover:text-primary group-hover:rotate-12 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl tracking-tight uppercase mb-4 text-white font-bold">
                      {title}
                    </h3>
                  </div>
                </div>
              ))}

              {/* Corner Registration Marks */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 -translate-x-[1px] -translate-y-[1px] pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 translate-x-[1px] -translate-y-[1px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 -translate-x-[1px] translate-y-[1px] pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 translate-x-[1px] translate-y-[1px] pointer-events-none"></div>
            </div>

            {/* Footer Status Line */}
            <div className="mt-12 flex items-center gap-4 opacity-20">
              <div className="h-px flex-1 bg-white"></div>
              <span className="text-[10px] tracking-[0.4em] uppercase whitespace-nowrap text-white ai-startups-code">System Nominal // Build 2.0.4</span>
              <div className="h-px w-12 bg-white"></div>
            </div>
          </div>
        </section>
      )}

      {id === 'ai-solutions' && (
        <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5 z-10 flex flex-col items-center justify-center">
          <CTAWithVerticalMarquee
            title="Industries We Serve"
            items={aiSolutionsIndustries}
          />
        </section>
      )}

      {id === 'ai-solutions' && (
        <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5 z-10 min-h-[50vh] flex items-center justify-center">
           <div className="absolute inset-0 pointer-events-none overflow-hidden font-mono text-[12px] md:text-xl text-white/10 flex flex-wrap justify-between content-between p-4 opacity-40 select-none">
              {Array.from({ length: 150 }).map((_, i) => (
                <span 
                  key={i} 
                  className="animate-pulse" 
                  style={{ 
                    animationDelay: `${Math.random() * 5}s`, 
                    animationDuration: `${Math.random() * 3 + 2}s`,
                    opacity: Math.random() * 0.5 + 0.1,
                    marginLeft: `${Math.random() * 20}px`,
                    marginTop: `${Math.random() * 20}px`
                  }}
                >
                  {String.fromCharCode(33 + Math.floor(Math.random() * 90))}
                </span>
              ))}
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-32 bg-primary/30 blur-[100px] pointer-events-none rounded-full mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[80px] bg-white/20 blur-[50px] pointer-events-none rounded-full mix-blend-screen" />
            
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-10 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
               Why Choose Abuqitmir Tech?
             </h2>
             <div className="flex flex-col items-center justify-center gap-4 text-base md:text-xl lg:text-2xl font-medium text-white/90">
                {aiSolutionsWhyChoose.map((reason, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                     <span className="text-primary">✔</span>
                     <span>{reason}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>
      )}

      {/* SEO Blocks */}
      {id === 'seo' && (
        <section className="py-24 relative overflow-hidden bg-transparent border-t border-white/5 z-10">
          <CategoryList 
            title="Our SEO Services"
            categories={seoServicesData.map((item, idx) => ({
              id: idx,
              title: item.title,
              subtitle: item.description,
              icon: <item.icon className="w-8 h-8" />
            }))}
          />
        </section>
      )}

      {id === 'seo' && (
        <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5 z-10 flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-6 tracking-tight">
              Why SEO is Important
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
            {seoImportanceData.map((reason, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors">
                <CheckCircle2 className="w-10 h-10 text-primary" />
                <h3 className="text-xl font-bold text-white">{reason}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {id === 'seo' && (
        <section className="py-24 relative overflow-hidden bg-transparent border-t border-white/5 z-10">
          <div className="max-w-4xl mx-auto px-6 relative z-10 mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Our SEO Process
            </h2>
          </div>
          <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
            <div className="relative h-auto">
              <div className="flex flex-col items-center">
                {seoProcessSteps.map((step, idx) => (
                  <article 
                    key={idx}
                    className={`text-center bg-gradient-to-br from-white/10 to-white/5 w-full border-white/20 border rounded-2xl relative shadow-xl backdrop-blur-xl px-6 py-8 sm:px-10 sm:py-10 transition-all duration-300 hover:-translate-y-2 group ${idx > 0 ? 'mt-[-2rem]' : ''}`}
                    style={{
                      zIndex: 10 + idx,
                      width: `calc(100% - ${idx * 4}%)`
                    }}
                  >
                    <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <div className="space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-neutral-300/90 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                        {step.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-black bg-primary border-primary/20 border rounded-full px-4 py-1.5 shadow-[0_0_15px_rgba(60,255,157,0.3)]">
                        Step {step.id}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {id === 'seo' && (
        <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5 z-10 flex flex-col items-center justify-center">
          <CTAWithVerticalMarquee
            title="SEO Services in Pakistan for All Businesses"
            items={seoTargetBusinesses}
          />
        </section>
      )}

      {id === 'seo' && (
        <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5 z-10 min-h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 pointer-events-none overflow-hidden font-mono text-[12px] md:text-xl text-white/10 flex flex-wrap justify-between content-between p-4 opacity-40 select-none">
            {Array.from({ length: 150 }).map((_, i) => (
              <span 
                key={i} 
                className="animate-pulse" 
                style={{ 
                  animationDelay: `${Math.random() * 5}s`, 
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  opacity: Math.random() * 0.5 + 0.1,
                  marginLeft: `${Math.random() * 20}px`,
                  marginTop: `${Math.random() * 20}px`
                }}
              >
                {String.fromCharCode(33 + Math.floor(Math.random() * 90))}
              </span>
            ))}
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-32 bg-primary/30 blur-[100px] pointer-events-none rounded-full mix-blend-screen" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[80px] bg-white/20 blur-[50px] pointer-events-none rounded-full mix-blend-screen" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-10 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              Why Choose Abuqitmir Tech?
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 text-base md:text-xl lg:text-2xl font-medium text-white/90">
              {seoWhyChooseUs.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3">
                   <span className="text-primary">✔</span>
                   <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process & Tech */}
      {id !== 'custom-software' && id !== 'mobile-app' && id !== 'ai-solutions' && id !== 'seo' && (
        <section className="py-20 bg-elevated border-y border-white/5">
          <div className={`max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 gap-16 ${id === 'web-development' ? '' : 'lg:grid-cols-2'}`}>
            {id !== 'web-development' && (
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
            )}

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
      {(id === 'custom-software' || id === 'web-development' || id === 'mobile-app' || id === 'ai-solutions' || id === 'seo') && (
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">Frequently Asked Questions</h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                {id === 'custom-software' 
                  ? "Everything you need to know about our custom software development process."
                  : id === 'web-development'
                  ? "Everything you need to know about our web development process."
                  : id === 'ai-solutions'
                  ? "Everything you need to know about our AI development process."
                  : id === 'seo'
                  ? "Everything you need to know about our SEO and Local SEO services."
                  : "Everything you need to know about our mobile app development process."}
              </p>
            </div>
            {id === 'custom-software' && <AccordionCustomSoftware />}
            {id === 'web-development' && <AccordionWebDevelopment />}
            {id === 'mobile-app' && <AccordionMobileApp />}
            {id === 'ai-solutions' && <AccordionAiSolutions />}
            {id === 'seo' && <AccordionSeo />}
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
            <>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Start Your App Today</h2>
              <p className="text-xl text-white/60 mb-8">Contact Abuqitmir Tech and turn your idea into a powerful mobile app.</p>
            </>
          ) : id === 'ai-solutions' ? (
            <>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Ready to build intelligent systems that transform your business?</h2>
              <p className="text-xl text-white/60 mb-8">Contact Abuqitmir Tech today and bring your AI idea to life.</p>
            </>
          ) : id === 'seo' ? (
            <>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Start Ranking Today</h2>
              <p className="text-xl text-white/60 mb-8">Contact Abuqitmir Tech and grow your business with SEO.</p>
            </>
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

          {(id === 'custom-software' || id === 'web-development' || id === 'mobile-app' || id === 'seo') && (
            <p className="text-sm text-white/40">
              Serving: Karachi, Lahore, Islamabad (Pakistan) | New York (USA) | London (UK) | Berlin (Germany) | Warsaw (Poland)
            </p>
          )}
        </div>
      </section>
    </>
  );
}
