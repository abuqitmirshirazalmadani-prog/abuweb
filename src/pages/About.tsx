import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Hero3DWrapper } from '../components/ui/hero-3d-wrapper';

export default function About() {
  return (
    <>
      <SEO 
        title="About Abu Qitmir | Software & App Developer in Pakistan" 
        description="Learn about Abu Qitmir — an experienced custom software and mobile app developer serving clients in Pakistan, USA, UK and Europe."
        canonical="https://abuqitmir.tech/about/"
      />

      <Hero3DWrapper className="pt-48 pb-40 lg:pt-56 lg:pb-48 min-h-[75vh]">
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center justify-center gap-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white drop-shadow-2xl"
          >
            About Abu Qitmir — Software Developer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 leading-relaxed drop-shadow-md"
          >
            Learn about Abu Qitmir — an experienced custom software and mobile app developer serving clients in Pakistan, USA, UK and Europe.
          </motion.p>
        </div>
      </Hero3DWrapper>
    </>
  );
}
