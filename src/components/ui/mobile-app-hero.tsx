import React from 'react';
import { Link } from 'react-router-dom';
import { Hero3DWrapper } from './hero-3d-wrapper';

export const MobileAppHero = () => {
  return (
    <Hero3DWrapper 
      className="pt-48 pb-40 lg:pt-56 lg:pb-48 min-h-[85vh] md:min-h-[95vh]"
      contentClassName="max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center gap-6"
    >
      <h1 className="hero-text-element text-[clamp(2rem,5vw,4.5rem)] font-heading font-extrabold text-center leading-tight text-white mb-2 tracking-tight drop-shadow-2xl">
        Mobile App Development Services <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400">in Pakistan</span>
      </h1>
      
      <h2 className="hero-text-element text-2xl md:text-3xl lg:text-4xl text-white/90 font-heading font-bold mb-4 drop-shadow-xl">
        Build High-Performance Apps for Android & iOS
      </h2>
      
      <p className="hero-text-element text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-md">
        Mobile apps are essential for modern businesses. At Abuqitmir Tech, we provide expert mobile app development services in Pakistan to help startups and businesses build powerful, scalable, and user-friendly apps.
      </p>
      
      <div className="hero-text-element mt-4 transform translate-z-[50px]">
        <Link 
          to="/contact"
          className="inline-block px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-transform hover:scale-105 shadow-[0_0_30px_rgba(92,230,92,0.6)]"
        >
          Get a Free Proposal
        </Link>
      </div>
    </Hero3DWrapper>
  );
};
