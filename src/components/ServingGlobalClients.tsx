import { motion } from 'framer-motion';

export function ServingGlobalClients() {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-orange-500/20 blur-[120px] rounded-[100%] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-8 tracking-tight"
        >
          Serving <span className="text-white drop-shadow-[0_0_40px_rgba(249,115,22,0.8)] glow-orange" style={{ textShadow: "0 0 30px rgba(249,115,22,0.8), 0 0 60px rgba(249,115,22,0.5)"}}>Pakistan & Global</span> Clients
        </motion.h2>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="space-y-4 text-base md:text-lg lg:text-xl text-white/70 font-medium max-w-4xl mx-auto"
        >
          <p>
            We provide AI, web, and app development services in Pakistan and work with
            <br className="hidden md:block" /> clients worldwide.
          </p>
          <p>
            Whether you're in Karachi, Lahore, or anywhere globally — we help you build
            <br className="hidden md:block" /> world-class digital products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
