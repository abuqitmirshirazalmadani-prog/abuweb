import React from 'react';
import { cn } from '../../utils/cn';
import { Button } from './button';
import { ArrowUpRight } from 'lucide-react';
import { HolographicCard } from './holographic-card';

// Interface for individual process card props
export interface ProcessCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

// Reusable Process Card Component
const ProcessCard: React.FC<ProcessCardProps> = ({ icon: Icon, title, description, className }) => (
  <HolographicCard className={cn("group relative w-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all cursor-pointer duration-300 hover:border-primary/60 hover:bg-white/10 overflow-hidden", className)}>
    {/* Decorative Line - Visible on larger screens */}
    <div className="absolute -left-[1px] top-1/2 hidden h-1/2 w-px -translate-y-1/2 bg-white/10 transition-colors group-hover:bg-primary/60 md:block" />
    <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-white/10 transition-colors group-hover:bg-primary/60 md:hidden" />


    {/* Icon Container */}
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl duration-300 border border-white/10 bg-white/5 text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-black">
      <Icon className="h-6 w-6" />
    </div>

    {/* Content */}
    <div className="flex flex-col relative z-10">
      <h3 className="mb-2 text-xl font-heading font-semibold text-white group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  </HolographicCard>
);

// Interface for the main section props
export interface ProcessSectionProps {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  items: ProcessCardProps[];
}

// Main Process Section Component
export const ProcessSection: React.FC<ProcessSectionProps> = ({
  subtitle,
  title,
  description,
  buttonText,
  buttonLink,
  items,
}) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center text-center md:col-span-1 md:text-left">
          <span className="mb-4 text-sm font-mono uppercase tracking-widest text-primary">
            {subtitle}
          </span>
          <h2 className="mb-6 text-3xl font-heading font-bold tracking-tight text-white md:text-4xl text-gradient">
            {title}
          </h2>
          <p className="mb-8 text-lg text-white/60 leading-relaxed max-w-xl mx-auto md:mx-0">
            {description}
          </p>
          {buttonLink ? (
            <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="hidden md:block w-fit">
              <Button size="lg" className="rounded-full bg-primary text-black font-semibold hover:scale-105 duration-300 transition-all cursor-pointer flex items-center">
                {buttonText}
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          ) : (
            <Button size="lg" className="rounded-full bg-primary text-black font-semibold hover:scale-105 duration-300 transition-all cursor-pointer hidden md:flex items-center">
              {buttonText}
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Right Content - Grid of Process Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-2">
          {items.map((item, index) => (
            <ProcessCard key={index} {...item} />
          ))}
        </div>
        
        {/* Mobile Button Fallback */}
        <div className="md:hidden flex justify-center w-full mt-4">
          {buttonLink ? (
            <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="w-fit">
              <Button size="lg" className="rounded-full bg-primary text-black font-semibold hover:scale-105 duration-300 transition-all cursor-pointer flex items-center">
                  {buttonText}
                  <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          ) : (
            <Button size="lg" className="rounded-full bg-primary text-black font-semibold hover:scale-105 duration-300 transition-all cursor-pointer flex items-center">
                {buttonText}
                <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
