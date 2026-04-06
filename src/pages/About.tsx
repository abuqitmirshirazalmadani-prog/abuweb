import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO 
        title="About Abu Qitmir | Software & App Developer in Pakistan" 
        description="Learn about Abu Qitmir — an experienced custom software and mobile app developer serving clients in Pakistan, USA, UK and Europe."
        canonical="https://abuqitmir.tech/about/"
      />

      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient"
          >
            About Abu Qitmir — Software Developer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 leading-relaxed"
          >
            Learn about Abu Qitmir — an experienced custom software and mobile app developer serving clients in Pakistan, USA, UK and Europe.
          </motion.p>
        </div>
      </section>
    </>
  );
}
