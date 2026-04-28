"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

interface WordData {
  text: string;
  duration: number;
  delay: number;
  blur: number;
  scale?: number;
  isNewline?: boolean;
}

interface BlurTextAnimationProps {
  text?: string;
  words?: WordData[];
  className?: string;
  fontSize?: string;
  fontFamily?: string;
  textColor?: string;
  animationDelay?: number;
}

export const BlurTextAnimation = ({
  text = "Elegant blur animation that brings your words to life with cinematic transitions.",
  words,
  className = "",
  fontSize = "text-4xl md:text-5xl lg:text-6xl",
  fontFamily = "font-['Avenir_Next',_'Avenir',_system-ui,_sans-serif]",
  textColor = "text-white",
  animationDelay = 4000
}: BlurTextAnimationProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout>();
  const resetTimeoutRef = useRef<NodeJS.Timeout>();

  const textWords = useMemo(() => {
    if (words) return words;
    
    // Split by spaces and newlines, preserving newlines
    const splitTokens: string[] = [];
    text.split(/(\n)/).forEach(part => {
      if (part === '\n') {
        splitTokens.push('\n');
      } else {
        part.split(' ').forEach(word => {
          if (word !== '') {
            splitTokens.push(word);
          }
        });
      }
    });

    let wordIndex = 0;
    const totalWords = splitTokens.filter(t => t !== '\n').length;

    return splitTokens.map((token, index) => {
      if (token === '\n') {
        return {
          isNewline: true,
          text: '\n',
          duration: 0,
          delay: 0,
          blur: 0,
          scale: 1
        };
      }

      const progress = wordIndex / totalWords;
      
      const exponentialDelay = Math.pow(progress, 0.8) * 0.5;
      
      const baseDelay = wordIndex * 0.06;
      
      const pseudoRandom1 = (Math.sin(wordIndex * 12.9898 + 1) * 43758.5453) % 1;
      const normalizedRandom1 = pseudoRandom1 < 0 ? pseudoRandom1 + 1 : pseudoRandom1;
      
      const pseudoRandom2 = (Math.sin(wordIndex * 12.9898 + 2) * 43758.5453) % 1;
      const normalizedRandom2 = pseudoRandom2 < 0 ? pseudoRandom2 + 1 : pseudoRandom2;

      const microVariation = (normalizedRandom1 - 0.5) * 0.05;
      
      const result = {
        isNewline: false,
        text: token,
        duration: Number((2.2 + Math.cos(wordIndex * 0.3) * 0.3).toFixed(2)),
        delay: Number((baseDelay + exponentialDelay + microVariation).toFixed(3)),
        blur: 12 + Math.floor(normalizedRandom2 * 8),
        scale: Number((0.9 + Math.sin(wordIndex * 0.2) * 0.05).toFixed(3))
      };

      wordIndex++;
      return result;
    });
  }, [text, words]);

  useEffect(() => {
    const startAnimation = () => {
      setTimeout(() => {
        setIsAnimating(true);
      }, 200);
      
      let maxTime = 0;
      textWords.forEach(word => {
        const totalTime = word.delay + word.duration;
        maxTime = Math.max(maxTime, totalTime);
      });
      
      animationTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        
        resetTimeoutRef.current = setTimeout(() => {
          startAnimation();
        }, animationDelay);
      }, (maxTime + 1) * 1000);
    };

    startAnimation();

    return () => {
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, [textWords, animationDelay]);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="max-w-5xl px-8">
        <p className={`${textColor} ${fontSize} ${fontFamily} font-light leading-relaxed tracking-wide whitespace-pre-wrap`}>
          {textWords.map((word, index) => (
            word.isNewline ? (
              <br key={index} />
            ) : (
              <span
                key={index}
                className={`inline-block transition-all ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  transitionDuration: `${word.duration}s`,
                  transitionDelay: `${word.delay}s`,
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  filter: isAnimating 
                    ? 'blur(0px) brightness(1)' 
                    : `blur(${word.blur}px) brightness(0.6)`,
                  transform: isAnimating 
                    ? 'translateY(0) scale(1) rotateX(0deg)' 
                    : `translateY(20px) scale(${word.scale || 1}) rotateX(-15deg)`,
                  marginRight: '0.35em',
                  willChange: 'filter, transform, opacity',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  textShadow: isAnimating 
                    ? '0 2px 8px rgba(255,255,255,0.1)' 
                    : '0 0 40px rgba(255,255,255,0.4)'
                }}
              >
                {word.text}
              </span>
            )
          ))}
        </p>
      </div>
    </div>
  );
}

export default BlurTextAnimation;
