"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { cn } from "../../utils/cn";
import { ArrowRight } from "lucide-react";

interface SpotlightCTAProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * The main container component that provides the interactive spotlight effect.
 * Adapted for Abuqitmir Tech dark theme.
 */
const SpotlightCTA = React.forwardRef<HTMLDivElement, SpotlightCTAProps>(
  ({ className, children, ...props }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if (containerRef.current && event.touches.length > 0) {
            const touch = event.touches[0];
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
        }
    };
    
    React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    return (
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: -200, y: -200 })}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchMove}
        onTouchEnd={() => setMousePosition({ x: -200, y: -200 })}
        className={cn(
          "group/spotlight relative w-full max-w-5xl mx-auto p-10 md:p-16 overflow-hidden rounded-[2.5rem]",
          "bg-white/5 backdrop-blur-xl",
          "shadow-2xl transition-shadow duration-300 ease-in-out",
          "hover:shadow-primary/10",
          className
        )}
        role="region"
        {...props}
      >
        <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover/spotlight:opacity-100 opacity-50"
            style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(92, 230, 92, 0.15), transparent 40%)`
            }}
        />
        <div className="absolute inset-[-1px] border border-white/10 rounded-[2.5rem] pointer-events-none"></div>
        <div className="relative z-10">
            {children}
        </div>
      </div>
    );
  }
);
SpotlightCTA.displayName = "SpotlightCTA";


interface SpotlightCTAContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SpotlightCTAContent = React.forwardRef<HTMLDivElement, SpotlightCTAContentProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("flex flex-col lg:flex-row items-center justify-between gap-12", className)}
                {...props}
            />
        );
    }
);
SpotlightCTAContent.displayName = "SpotlightCTAContent";


interface SpotlightCTATextProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: React.ReactNode;
}

const SpotlightCTAText = React.forwardRef<HTMLDivElement, SpotlightCTATextProps>(
    ({ title, description, className, ...props }, ref) => {
        return (
            <div ref={ref} className={cn("text-center lg:text-left flex-1", className)} {...props}>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-6">
                    {title}
                </h2>
                <div className="mt-4 text-lg text-white/70 max-w-2xl mx-auto lg:mx-0 space-y-4">
                    {description}
                </div>
            </div>
        );
    }
);
SpotlightCTAText.displayName = "SpotlightCTAText";


interface SpotlightCTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SpotlightCTAButton = React.forwardRef<HTMLButtonElement, SpotlightCTAButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "group/button flex-shrink-0 inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-black bg-primary rounded-full transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_20px_rgba(92,230,92,0.3)] hover:shadow-[0_0_30px_rgba(92,230,92,0.5)] cursor-pointer",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black",
                    className
                )}
                {...props}
            >
                {children}
                <ArrowRight className="ml-2 h-6 w-6 transform transition-transform duration-300 ease-in-out group-hover/button:translate-x-1" />
            </button>
        );
    }
);
SpotlightCTAButton.displayName = "SpotlightCTAButton";


export { SpotlightCTA, SpotlightCTAContent, SpotlightCTAText, SpotlightCTAButton };
