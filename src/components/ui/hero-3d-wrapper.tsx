import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import WebGLHero from '../WebGLHero';

interface Hero3DWrapperProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  bottomContent?: React.ReactNode;
}

export function Hero3DWrapper({ children, className = "", contentClassName = "", bottomContent }: Hero3DWrapperProps) {
  const container = useRef<HTMLDivElement>(null);
  const textGroup = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 3D/360 mouse tracking rotation
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 2;
      const yPos = (clientY / window.innerHeight - 0.5) * 2;

      // Rotate the entire text group based on mouse position
      if (textGroup.current) {
        gsap.to(textGroup.current, {
          rotationY: xPos * 25,
          rotationX: -yPos * 25,
          ease: "power2.out",
          duration: 1
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Initial enter animation using GSAP for children with specific class or direct children
    gsap.from(textGroup.current?.children ? Array.from(textGroup.current.children) : [], {
      opacity: 0,
      y: 50,
      rotationX: -45,
      stagger: 0.15,
      duration: 1.2,
      ease: "back.out(1.7)",
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className={`relative overflow-hidden flex flex-col items-center justify-center perspective-[1000px] ${className}`}
    >
      <WebGLHero />
      <div className="absolute inset-0 bg-black/40 z-0 mix-blend-multiply pointer-events-none" />
      
      <div 
        ref={textGroup}
        className={`relative z-10 transform-style-3d ${contentClassName}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
      {bottomContent}
    </section>
  );
}
