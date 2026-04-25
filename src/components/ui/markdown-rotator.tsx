"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Markdown from "react-markdown"

interface MarkdownRotatorProps {
  texts: string[]
  rotationInterval?: number
}

export function MarkdownRotator({
  texts,
  rotationInterval = 8000,
}: MarkdownRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, rotationInterval)
    return () => clearInterval(intervalId)
  }, [texts.length, rotationInterval])

  return (
    <div className="relative w-full h-full flex items-center min-h-[300px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          className="w-full text-white/80 font-sans text-lg md:text-xl md:leading-relaxed"
        >
          <div className="prose prose-invert prose-h3:text-2xl prose-h3:font-bold prose-h3:mb-6 prose-strong:text-white prose-p:mb-4 prose-ul:my-4 prose-li:my-1 max-w-none">
            <Markdown>{texts[currentIndex]}</Markdown>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
