import React from 'react';
import { cn } from '../../utils/cn';

export function IlluminatedHero() {
  return (
    <div className="relative w-full flex min-h-[70vh] py-32 flex-wrap items-center justify-center overflow-hidden text-[calc(var(--size)*0.022)] text-white [--factor:min(1000px,100vh)] [--size:min(var(--factor),100vw)] border-t border-white/5">
      <div className="z-10 flex flex-col items-center justify-center gap-8 px-4 w-full">
        <div className="text-center text-4xl md:text-5xl lg:text-7xl font-heading font-bold" aria-hidden="true">
          Serving <br className="md:hidden" />
          <span
            className={cn(
              'relative inline-block',
              'before:absolute before:animate-[onloadopacity_1s_ease-out_forwards] before:opacity-0 before:content-[attr(data-text)]',
              'before:bg-[linear-gradient(0deg,#dfe5ee_0%,#fffaf6_50%)] before:bg-clip-text before:text-[#fffaf6]',
              'filter-[url(#glow-4)] text-primary',
            )}
            data-text="Pakistan & Global"
          >
            Pakistan & Global
          </span>
          <br className="md:hidden" /> Clients
        </div>

        <p className="max-w-3xl text-center text-lg md:text-xl text-white/70 leading-relaxed font-medium">
          We provide AI, web, and app development services in Pakistan and work with clients worldwide.
          <br className="hidden md:block" />
          <br className="md:hidden" />
          <span className="relative inline-block font-bold mt-2 text-white/90">
            Whether you&apos;re in Karachi, Lahore, or anywhere globally — we help you build world-class digital products.
          </span>
        </p>
      </div>

      <svg
        className="absolute -z-10 h-0 w-0 pointer-events-none"
        width="1440px"
        height="300px"
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="glow-4"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-200%"
            width="200%"
            height="500%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              data-target-blur="4"
              stdDeviation="4"
              result="blur4"
            />
            <feGaussianBlur
              in="SourceGraphic"
              data-target-blur="19"
              stdDeviation="19"
              result="blur19"
            />
            <feGaussianBlur
              in="SourceGraphic"
              data-target-blur="9"
              stdDeviation="9"
              result="blur9"
            />
            <feGaussianBlur
              in="SourceGraphic"
              data-target-blur="30"
              stdDeviation="30"
              result="blur30"
            />
            <feColorMatrix
              in="blur4"
              result="color-0-blur"
              type="matrix"
              values="1 0 0 0 0
                      0 0.9803921568627451 0 0 0
                      0 0 0.9647058823529412 0 0
                      0 0 0 0.8 0"
            />
            <feOffset
              in="color-0-blur"
              result="layer-0-offsetted"
              dx="0"
              dy="0"
              data-target-offset-y="0"
            />
            <feColorMatrix
              in="blur19"
              result="color-1-blur"
              type="matrix"
              values="0.8156862745098039 0 0 0 0
                      0 0.49411764705882355 0 0 0
                      0 0 0.2627450980392157 0 0
                      0 0 0 1 0"
            />
            <feOffset
              in="color-1-blur"
              result="layer-1-offsetted"
              dx="0"
              dy="2"
              data-target-offset-y="2"
            />
            <feColorMatrix
              in="blur9"
              result="color-2-blur"
              type="matrix"
              values="1 0 0 0 0
                      0 0.6666666666666666 0 0 0
                      0 0 0.36470588235294116 0 0
                      0 0 0 0.65 0"
            />
            <feOffset
              in="color-2-blur"
              result="layer-2-offsetted"
              dx="0"
              dy="2"
              data-target-offset-y="2"
            />
            <feColorMatrix
              in="blur30"
              result="color-3-blur"
              type="matrix"
              values="1 0 0 0 0
                      0 0.611764705882353 0 0 0
                      0 0 0.39215686274509803 0 0
                      0 0 0 1 0"
            />
            <feOffset
              in="color-3-blur"
              result="layer-3-offsetted"
              dx="0"
              dy="2"
              data-target-offset-y="2"
            />
            <feColorMatrix
              in="blur30"
              result="color-4-blur"
              type="matrix"
              values="0.4549019607843137 0 0 0 0
                      0 0.16470588235294117 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
            />
            <feOffset
              in="color-4-blur"
              result="layer-4-offsetted"
              dx="0"
              dy="16"
              data-target-offset-y="16"
            />
            <feColorMatrix
              in="blur30"
              result="color-5-blur"
              type="matrix"
              values="0.4235294117647059 0 0 0 0
                      0 0.19607843137254902 0 0 0
                      0 0 0.11372549019607843 0 0
                      0 0 0 1 0"
            />
            <feOffset
              in="color-5-blur"
              result="layer-5-offsetted"
              dx="0"
              dy="64"
              data-target-offset-y="64"
            />
            <feColorMatrix
              in="blur30"
              result="color-6-blur"
              type="matrix"
              values="0.21176470588235294 0 0 0 0
                      0 0.10980392156862745 0 0 0
                      0 0 0.07450980392156863 0 0
                      0 0 0 1 0"
            />
            <feOffset
              in="color-6-blur"
              result="layer-6-offsetted"
              dx="0"
              dy="64"
              data-target-offset-y="64"
            />
            <feColorMatrix
              in="blur30"
              result="color-7-blur"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0.68 0"
            />
            <feOffset
              in="color-7-blur"
              result="layer-7-offsetted"
              dx="0"
              dy="64"
              data-target-offset-y="64"
            />
            <feMerge>
              <feMergeNode in="layer-0-offsetted" />
              <feMergeNode in="layer-1-offsetted" />
              <feMergeNode in="layer-2-offsetted" />
              <feMergeNode in="layer-3-offsetted" />
              <feMergeNode in="layer-4-offsetted" />
              <feMergeNode in="layer-5-offsetted" />
              <feMergeNode in="layer-6-offsetted" />
              <feMergeNode in="layer-7-offsetted" />
              <feMergeNode in="layer-0-offsetted" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
