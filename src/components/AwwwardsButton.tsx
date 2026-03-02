import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, Send } from 'lucide-react';
import { cn } from '../utils/cn';

interface AwwwardsButtonProps {
  isSubmitting: boolean;
  isSuccess: boolean;
  defaultText?: string;
}

export default function AwwwardsButton({ 
  isSubmitting, 
  isSuccess, 
  defaultText = "Send Message"
}: AwwwardsButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      type="submit"
      disabled={isSubmitting || isSuccess}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative w-full py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-500 flex items-center justify-center gap-2 group",
        isSuccess ? "bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]" : "bg-primary text-black glow-primary"
      )}
    >
      {/* Background Fill Effect */}
      <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-xl" />

      <AnimatePresence mode="wait">
        {isSubmitting ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 relative z-10"
          >
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </motion.div>
        ) : isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex items-center gap-2 relative z-10"
          >
            <CheckCircle2 size={20} />
            Message Sent!
          </motion.div>
        ) : (
          <motion.div
            key="default"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 relative z-10 overflow-hidden h-6"
          >
            <div className="relative flex items-center gap-2">
              <div className="relative overflow-hidden h-6 flex flex-col justify-start">
                <motion.span
                  animate={{ y: isHovered ? -24 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="block leading-6 h-6"
                >
                  {defaultText}
                </motion.span>
                <motion.span
                  animate={{ y: isHovered ? -24 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="block leading-6 h-6 absolute top-6 left-0 w-full"
                >
                  {defaultText}
                </motion.span>
              </div>
              
              <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
                <motion.div
                  animate={{ x: isHovered ? 20 : 0, y: isHovered ? -20 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Send size={20} />
                </motion.div>
                <motion.div
                  initial={{ x: -20, y: 20 }}
                  animate={{ x: isHovered ? 0 : -20, y: isHovered ? 0 : 20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute"
                >
                  <Send size={20} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
