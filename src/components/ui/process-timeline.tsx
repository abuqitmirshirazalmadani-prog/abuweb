"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { cn } from "../../utils/cn";

interface TimelineItem {
  id: string | number;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  title: string;
  items: TimelineItem[];
  className?: string;
}

export const ProcessTimeline = ({ title, items, className }: ProcessTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className={cn("w-full py-10", className)} ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-left text-white mb-16">
          {title}
        </h2>
        
        <div className="relative mt-8">
          {/* Default Line background */}
          <div className="absolute left-[48px] md:left-1/2 top-4 bottom-4 w-px bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-12">
            {items.map((item, index) => {
              return (
                <TimelineNode 
                  key={item.id} 
                  item={item} 
                  index={index} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineNode = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50% 0px -50% 0px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center justify-start md:justify-center">
      {/* Content wrapper */}
      <div className={cn(
        "ml-20 md:ml-0 md:w-1/2 flex relative w-full", 
        isEven ? "md:justify-end md:pr-12 md:text-right" : "md:justify-start md:pl-12 md:text-left"
      )}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={cn(
            "border bg-[#0a0a0a]/80 p-6 md:p-8 rounded-2xl flex-1 relative transition-colors duration-500",
            isInView ? "border-primary/30" : "border-white/5"
          )}
        >
          <h3 className="text-xl md:text-2xl font-heading font-bold text-white tracking-wide">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-white/60 leading-relaxed mt-2 text-sm md:text-base">
              {item.description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};
