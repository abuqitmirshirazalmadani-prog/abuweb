"use client"

import { cn } from "../../utils/cn"

interface GooeyMarqueeProps {
  text: string
  className?: string
  textClassName?: string
  speed?: number
}

export function GooeyMarquee({ text, className = "", textClassName = "", speed = 16 }: GooeyMarqueeProps) {
  return (
    <div className={cn("relative w-full h-32 md:h-48 text-4xl md:text-6xl flex items-center justify-center overflow-hidden", className)}>
      {/* Blur layer with gooey effect */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          backgroundColor: "#000",
          backgroundImage: `
            linear-gradient(to right, #000, 1rem, transparent 50%),
            linear-gradient(to left, #000, 1rem, transparent 50%)
          `,
          filter: "contrast(15)",
        }}
      >
        <p
          className={cn("absolute min-w-full whitespace-nowrap animate-marquee text-white font-heading font-bold", textClassName)}
          style={{
            filter: "blur(0.04em)", // Reduced blur slightly for better readability
            animation: `marquee ${speed}s infinite linear`,
          }}
        >
          {text}
        </p>
      </div>

      {/* Clear text layer on top */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className={cn("absolute min-w-full whitespace-nowrap animate-marquee text-white font-heading font-bold", textClassName)}
          style={{
            animation: `marquee ${speed}s infinite linear`,
          }}
        >
          {text}
        </p>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(30%); }
          to { transform: translateX(-30%); }
        }
        .animate-marquee {
          animation: marquee ${speed}s infinite linear;
        }
      `}</style>
    </div>
  )
}
