import React, { useRef, ReactNode, MouseEvent } from 'react';
import { cn } from "../../utils/cn";

interface HolographicCardProps {
    children: ReactNode;
    className?: string;
}

export const HolographicCard = ({ children, className = "" }: HolographicCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.setProperty('--x', `50%`);
        card.style.setProperty('--y', `50%`);
        card.style.setProperty('--bg-x', '50%');
        card.style.setProperty('--bg-y', '50%');
    };

    return (
        <div 
            className={cn("group relative overflow-hidden transition-all duration-200 ease-out", className)} 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
            <div className="relative z-10 w-full h-full pointer-events-none">
                <div className="pointer-events-auto w-full h-full"> 
                   {children}
                </div>
            </div>
            
            {/* Holographic Glow overlay */}
            <div 
              className="pointer-events-none absolute inset-0 z-20 mix-blend-color-dodge transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{
                background: `radial-gradient(
                  circle at var(--x, 50%) var(--y, 50%), 
                  rgba(255,255,255,0.2), 
                  transparent 50%
                )`
              }}
            />
            {/* Holographic gradient effect overlay */}
            <div 
              className="pointer-events-none absolute inset-0 z-20 mix-blend-color-dodge opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `linear-gradient(
                  115deg,
                  transparent 20%,
                  rgba(92, 230, 92, 0.4) 30%,
                  rgba(92, 230, 92, 0.1) 40%,
                  transparent 50%,
                  rgba(92, 230, 92, 0.4) 60%,
                  rgba(92, 230, 92, 0.1) 70%,
                  transparent 80%
                )`,
                backgroundPosition: 'var(--bg-x, 50%) var(--bg-y, 50%)',
                backgroundSize: '300% 300%',
              }}
            />
        </div>
    );
};

export default HolographicCard;
