import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import AwwwardsButton from '../components/AwwwardsButton';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('https://formsubmit.co/ajax/abuqitmirshirazalmadani@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`
        })
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', service: '', message: '' });
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <>
      <SEO 
        title="Contact Us | abuqitmir.tech" 
        description="Get in touch with abuqitmir.tech for scalable, secure tech solutions. We serve clients globally across Pakistan, USA, UK & Europe."
        canonical="https://qitmirtechsolution.com/contact"
      />

      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient"
          >
            Let's Build Together
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to scale your business? Contact us today for a free consultation and project estimate.
          </motion.p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-white">Contact Information</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                We are available for remote collaboration worldwide. Reach out to us via email, phone, or WhatsApp.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">Service Areas</h3>
                  <p className="text-white/60 leading-relaxed">Pakistan, USA, UK, Europe<br />(Remote-first collaboration)</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+923233260859" className="text-white/60 hover:text-primary transition-colors">+92 323 3260859</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:abuqitmirshirazalmadani@gmail.com" className="text-white/60 hover:text-primary transition-colors break-all">abuqitmirshirazalmadani@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <a 
                href="https://wa.me/923233260859" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle size={20} className="mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <h3 className="text-2xl font-heading font-bold mb-8 text-white">Send us a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-white/80">Service of Interest</label>
                <select 
                  id="service" 
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="custom-software">Custom Software Development</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="seo">SEO & Local SEO</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">Project Details</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell us about your project goals, timeline, and budget..."
                ></textarea>
              </div>

              <AwwwardsButton isSubmitting={isSubmitting} isSuccess={isSuccess} />
            </form>
          </motion.div>

        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14479747.886043135!2d60.33967839999999!3d27.6989669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1709320000000!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
