"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "../../utils/cn"

interface AnimatedTextProps {
  text: string
  className?: string
  fontSize?: number | string
  minWeight?: number
  maxWeight?: number
  animationDuration?: number
  delayMultiplier?: number
}

export function AnimatedText({
  text,
  className,
  fontSize = 150,
  minWeight = 100,
  maxWeight = 900,
  animationDuration = 1.5,
  delayMultiplier = 0.25,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const spans = containerRef.current.querySelectorAll("span")
    const numLetters = spans.length

    spans.forEach((span, i) => {
      const mappedIndex = i - numLetters / 2
      span.style.animationDelay = mappedIndex * delayMultiplier + "s"
    })
  }, [text, delayMultiplier])

  const characters = text.split("").map((char, index) => (
    <span
      key={index}
      aria-hidden="true"
      style={{
        animation: `breath ${animationDuration}s alternate cubic-bezier(0.37, 0, 0.63, 1) infinite`,
        animationFillMode: "both",
        fontVariationSettings: `"wght" ${minWeight}`,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))

  return (
    <div className={cn("flex justify-center items-center w-full", className)}>
      <p
        ref={containerRef}
        aria-label={text}
        className="font-sans m-0 text-center text-white"
        style={{
          fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,    
          fontFeatureSettings: '"wght"',
          lineHeight: 1.1,
          wordWrap: 'break-word',
          maxWidth: '100%'
        }}
      >
        {characters}
        <style>{`
          @keyframes breath {
            0% {
              font-variation-settings: "wght" ${minWeight};
            }
            100% {
              font-variation-settings: "wght" ${maxWeight};
            }
          }
        `}</style>
      </p>
    </div>
  )
}
