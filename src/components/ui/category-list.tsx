"use client";
import React, { useState } from 'react';
import { cn } from '../../lib/utils';

// Define the type for a single category item
export interface Category {
  id: string | number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  featured?: boolean;
}

// Define the props for the CategoryList component
export interface CategoryListProps {
  title?: string;
  subtitle?: string;
  categories: Category[];
  headerIcon?: React.ReactNode;
  className?: string;
}

export const CategoryList = ({
  title,
  subtitle,
  categories,
  headerIcon,
  className,
}: CategoryListProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | number | null>(null);

  return (
    <div className={cn("w-full bg-[#050505] text-white p-8", className)}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        {(title || subtitle || headerIcon) && (
          <div className="text-center mb-12 md:mb-16">
            {headerIcon && (
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/80 to-primary mb-6 text-black">
                {headerIcon}
              </div>
            )}
            {title && <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">{title}</h2>}
            {subtitle && (
              <h3 className="text-xl md:text-2xl font-medium text-white/60 mt-4">{subtitle}</h3>
            )}
          </div>
        )}

        {/* Categories List */}
        <div className="space-y-3">
          {categories && categories.map((category) => (
            <div
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={category.onClick}
            >
              <div
                className={cn(
                  "relative overflow-hidden border transition-all duration-300 ease-in-out cursor-pointer rounded-lg bg-[#0a0a0a]",
                  // Hover state styles
                  hoveredItem === category.id
                    ? 'h-32 border-[#3cff9d] shadow-lg shadow-[#3cff9d]/10 bg-[#3cff9d]/5'
                    : 'h-24 border-white/10 hover:border-white/20'
                )}
              >
                {/* Corner brackets that appear on hover */}
                {hoveredItem === category.id && (
                  <>
                    <div className="absolute top-3 left-3 w-6 h-6">
                      <div className="absolute top-0 left-0 w-4 h-0.5 bg-[#3cff9d]" />
                      <div className="absolute top-0 left-0 w-0.5 h-4 bg-[#3cff9d]" />
                    </div>
                    <div className="absolute bottom-3 right-3 w-6 h-6">
                      <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-[#3cff9d]" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-[#3cff9d]" />
                    </div>
                  </>
                )}

                {/* Content */}
                <div className="flex items-center justify-between h-full px-6 md:px-8">
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "font-bold transition-colors duration-300",
                        category.featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl',
                        hoveredItem === category.id ? 'text-[#3cff9d]' : 'text-white'
                      )}
                    >
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p
                        className={cn(
                          "mt-1 transition-colors duration-300 text-sm md:text-base",
                           hoveredItem === category.id ? 'text-white/90' : 'text-white/50'
                        )}
                      >
                        {category.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Icon appears on the right on hover */}
                  {category.icon && hoveredItem === category.id && (
                    <div className="text-[#3cff9d] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.icon}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
