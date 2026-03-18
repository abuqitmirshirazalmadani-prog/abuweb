"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Abuqitmir delivered our MVP in half the expected time. The code quality is exceptional and the architecture is flawless.",
    by: "Alex M., CTO at FinScale",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=120&fit=crop&q=80"
  },
  {
    tempId: 1,
    testimonial: "Our conversion rate doubled after their UI/UX overhaul. They don't just design; they understand user psychology.",
    by: "Sarah J., VP Product at Nexa",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=120&fit=crop&q=80"
  },
  {
    tempId: 2,
    testimonial: "The custom AI automation they built saves our operations team 40 hours a week. Absolute game-changers.",
    by: "David R., Operations Director",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=120&fit=crop&q=80"
  },
  {
    tempId: 3,
    testimonial: "We needed an enterprise-grade platform that could handle millions of requests. They executed perfectly.",
    by: "Elena K., Founder at DataFlow",
    imgSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=120&fit=crop&q=80"
  },
  {
    tempId: 4,
    testimonial: "Their engineering team feels like an extension of our own. Transparent, fast, and incredibly reliable.",
    by: "Usman T., CTO at CloudEdge",
    imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=120&fit=crop&q=80"
  },
  {
    tempId: 5,
    testimonial: "From complex backend integrations to a stunning frontend, Abuqitmir handled everything seamlessly.",
    by: "Zara L., Project Lead at DevSphere",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=120&fit=crop&q=80"
  },
  {
    tempId: 6,
    testimonial: "They modernized our legacy systems with zero downtime. The ROI on their work has been massive.",
    by: "Bilal H., VP Engineering",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=120&fit=crop&q=80"
  },
  {
    tempId: 7,
    testimonial: "Their strategic approach to SEO and digital marketing drove a 300% increase in our high-intent organic traffic.",
    by: "Hina S., Marketing Head at GrowthLab",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=120&fit=crop&q=80"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-500 ease-in-out rounded-2xl",
        isCenter 
          ? "z-10 bg-primary text-black border-primary" 
          : "z-0 bg-card text-white border-white/10 hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(255,255,255,0.05)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-primary" : "bg-white/10"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-6 w-[140px] h-[160px] bg-white/5 object-cover object-top rounded-lg"
        style={{
          boxShadow: "4px 4px 0px rgba(0,0,0,0.5)"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-heading font-medium leading-snug",
        isCenter ? "text-black" : "text-white"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm font-medium",
        isCenter ? "text-black/70" : "text-white/50"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = React.useCallback((steps: number) => {
    setTestimonialsList((prev) => {
      const newList = [...prev];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = newList.shift();
          if (!item) return prev;
          newList.push({ ...item, tempId: Math.random() });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = newList.pop();
          if (!item) return prev;
          newList.unshift({ ...item, tempId: Math.random() });
        }
      }
      return newList;
    });
  }, []);

  useEffect(() => {
    // Auto-advance the carousel every 4 seconds
    const timer = setInterval(() => {
      handleMove(1);
    }, 4000);
    
    // Clear the interval if the user manually clicks or the component unmounts
    return () => clearInterval(timer);
  }, [handleMove, testimonialsList]);

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gradient">Client Success Stories</h2>
        <p className="text-lg text-white/60">Don't just take our word for it. Here's what our clients have to say.</p>
      </div>
      <div
        className="relative w-full overflow-hidden bg-transparent"
        style={{ height: 600 }}
      >
        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-4 z-20">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300 rounded-full",
              "bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-black hover:border-primary hover:scale-110",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-12 w-12 items-center justify-center text-xl transition-all duration-300 rounded-full",
              "bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-black hover:border-primary hover:scale-110",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
