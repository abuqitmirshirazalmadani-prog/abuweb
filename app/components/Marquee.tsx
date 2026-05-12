"use client";

import { motion } from "motion/react";

interface MarqueeProps {
  text: string;
  speed?: number;
  reverse?: boolean;
}

export default function Marquee({ text, speed = 20, reverse = false }: MarqueeProps) {
  return (
    <div className="relative flex overflow-x-hidden border-y border-white/5 bg-white/5 py-4">
      <motion.div
        animate={{ x: reverse ? [0, 1000] : [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-12 text-xs font-mono tracking-widest text-slate-500 uppercase"
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
}
