"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "../../utils/cn";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  initialDelay?: number;
  framerProps?: Variants;
  className?: string;
}

function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  initialDelay = 0,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  let charIndex = 0;
  return (
    <div className="flex justify-center flex-wrap">
      <AnimatePresence>
        {text.split(" ").map((word, i, words) => (
          <div key={i} className="inline-flex whitespace-nowrap">
            {word.split("").map((char) => {
              const currentDelay = initialDelay + charIndex * delayMultiple;
              charIndex++;
              return (
                <motion.span
                  key={charIndex}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={framerProps}
                  transition={{ duration, delay: currentDelay }}
                  className={cn("drop-shadow-sm", className)}
                >
                  {char}
                </motion.span>
              );
            })}
            {i < words.length - 1 && (() => {
              const currentDelay = initialDelay + charIndex * delayMultiple;
              charIndex++;
              return (
                <motion.span
                  key={`space-${i}`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={framerProps}
                  transition={{ duration, delay: currentDelay }}
                  className={cn("drop-shadow-sm", className)}
                >
                  <span className="w-[0.3em] inline-block">&nbsp;</span>
                </motion.span>
              );
            })()}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export { GradualSpacing };
