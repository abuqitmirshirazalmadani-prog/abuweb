"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { SparklesCore } from "./sparkles";

interface GradientMeshBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const GradientMeshBackground = ({ className, children }: GradientMeshBackgroundProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Animated Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: ["0%", "50%", "0%", "-50%", "0%"],
            y: ["0%", "30%", "-20%", "10%", "0%"],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-primary blur-[100px] opacity-20"
        />
        <motion.div
          animate={{
            x: ["0%", "-40%", "20%", "40%", "0%"],
            y: ["0%", "-30%", "40%", "-10%", "0%"],
            scale: [1, 0.9, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] rounded-full bg-emerald-500 blur-[100px] opacity-20"
        />
        <motion.div
          animate={{
            x: ["0%", "30%", "-30%", "20%", "0%"],
            y: ["0%", "40%", "10%", "-30%", "0%"],
            scale: [1, 1.1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/3 w-[45vw] h-[45vw] rounded-full bg-teal-500 blur-[100px] opacity-20"
        />
        <motion.div
          animate={{
            x: ["0%", "-20%", "40%", "-30%", "0%"],
            y: ["0%", "-40%", "20%", "30%", "0%"],
            scale: [1, 1.3, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/3 right-1/3 w-[30vw] h-[30vw] rounded-full bg-green-400 blur-[100px] opacity-20"
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore
          id="tsparticles-mesh"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#ffffff"
        />
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 z-0 backdrop-blur-[4px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};
