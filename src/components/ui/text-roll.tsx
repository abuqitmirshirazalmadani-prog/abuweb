"use client"

import React from "react"
import { motion } from "framer-motion"

import { cn } from "../../utils/cn"

const STAGGER = 0.035

export function TextRoll({
  children,
  className,
  center = false,
}: {
  children: string
  className?: string
  center?: boolean
}) {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn(
        "relative block overflow-hidden text-black dark:text-white/90",
        className
      )}
      style={{
        lineHeight: 0.85,
      }}
    >
      {/* Top Text (Slides up) */}
      <span className="flex">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i

          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className={cn("inline-block", l === " " ? "w-[0.25em]" : "")}
              key={i}
            >
              {l}
            </motion.span>
          )
        })}
      </span>

      {/* Bottom Text (Slides in from bottom) */}
      <span className="absolute inset-0 flex">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className={cn("inline-block", l === " " ? "w-[0.25em]" : "")}
              key={i}
            >
              {l}
            </motion.span>
          )
        })}
      </span>
    </motion.span>
  )
}
