import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '../../utils/cn';

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

interface CategoryListProps {
  items: CategoryItem[];
}

export function CategoryList({ items }: CategoryListProps) {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto divide-y divide-white/10 border-y border-white/10">
      {items.map((item, idx) => (
        <CategoryListItem key={item.id} item={item} index={idx} />
      ))}
    </div>
  );
}

function CategoryListItem({ item, index }: { item: CategoryItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={item.href}
      className="group relative flex items-center justify-between py-6 px-4 md:px-8 hover:bg-white/5 transition-colors overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4 md:gap-8 z-10 relative w-full">
        <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shrink-0">
           {item.icon}
        </div>
        <div className="flex flex-col justify-center flex-grow">
          <h3 className="text-xl md:text-3xl font-heading font-semibold text-white group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <p className="text-white/60 text-sm md:text-lg max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <div className="z-10 relative opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary shrink-0 ml-4">
        <ArrowRight size={28} />
      </div>

      {/* Hover background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Link>
  );
}
