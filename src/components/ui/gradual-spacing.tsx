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
  return (
    <div className="flex justify-center flex-wrap">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: initialDelay + i * delayMultiple }}
            className={cn("drop-shadow-sm", className)}
          >
            {char === " " ? <span className="w-[0.3em] inline-block">&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}

export { GradualSpacing };
