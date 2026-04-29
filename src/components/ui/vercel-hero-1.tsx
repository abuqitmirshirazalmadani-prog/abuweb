"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Hero3DWrapper } from './hero-3d-wrapper';

const stats = [
  { emoji: "🚀", label: "Project Completed", value: "410 +" },
  { emoji: "⭐", label: "5 Star Rating", value: "290 +" },
  { emoji: "🏆", label: "Years of Experience", value: "5" },
  { emoji: "😊", label: "Happy customers", value: "357 +" },
];

function StatsMarquee() {
  return (
    <div className="relative border-white/10 border-y bg-black/30 py-2 backdrop-blur-sm overflow-hidden flex w-full">
      <div className="flex animate-marquee min-w-max">
        {[...stats, ...stats, ...stats, ...stats].map((stat, idx) => (
          <div
            className="flex items-center gap-3 whitespace-nowrap mx-8"
            key={`${stat.label}-${idx}`}
          >
            <span className="font-bold font-mono text-primary text-sm tracking-wide">
              {stat.value}
            </span>
            <span className="font-medium font-mono text-sm text-white/70 uppercase tracking-[0.15em]">
              {stat.label}
            </span>
            <span className="text-base">{stat.emoji}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <Hero3DWrapper 
      className="h-screen w-full flex-col !justify-end pb-0"
      contentClassName="w-full flex-col pb-0 mb-0"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      
      <div className="w-full max-w-4xl px-4 text-white sm:px-8 lg:px-16 mb-8 mt-auto">
        <StatsMarquee />
      </div>
      <div className="w-full px-4 pb-16 sm:px-8 sm:pb-24 lg:px-16 lg:pb-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
          <div className="w-full space-y-4 sm:w-1/2">
            <h1 className="font-medium text-4xl text-white leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Web Development
              <br />
              <span className="text-primary">Services in Pakistan</span>
            </h1>
            <Link to="/contact" className="inline-flex rounded-none py-4 font-normal text-black text-lg bg-primary items-center">
              <span className="px-6">Start Your Web Project Today</span>
              <span className="border-black/20 border-l p-3 px-4">
                <ArrowRight />
              </span>
            </Link>
          </div>
          <div className="w-full sm:w-1/2 pb-4">
            <p className="text-base text-gray-300 sm:text-right md:text-xl">
              <strong className="text-white block mb-2 font-semibold">Business-Driven Web Development. Fast, Secure & Scalable.</strong>
              Your website is your best salesperson. At Abuqitmir Tech, we build high-performance business websites, dynamic web applications, and eCommerce platforms that rank well on Google and convert visitors into active customers.
            </p>
          </div>
        </div>
      </div>
    </Hero3DWrapper>
  );
}
