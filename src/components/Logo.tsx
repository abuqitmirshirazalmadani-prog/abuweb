import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <span className="flex items-center text-xl sm:text-2xl">
          {/* Opening Bracket */}
          <span 
            className="text-[#5CE65C] font-mono font-medium" 
            style={{ textShadow: '0 0 12px rgba(92, 230, 92, 0.5)' }}
          >
            &lt;
          </span>
          
          {/* Main Text */}
          <span className="text-white font-sans font-bold tracking-tight mx-1">
            Abuqitmir.Tech
          </span>
          
          {/* Closing Bracket */}
          <span 
            className="text-[#5CE65C] font-mono font-medium ml-1" 
            style={{ textShadow: '0 0 12px rgba(92, 230, 92, 0.5)' }}
          >
            /&gt;
          </span>
          
          {/* Terminal Cursor */}
          <span 
            className="inline-block w-[2px] h-[0.9em] bg-[#5CE65C] ml-2 animate-pulse" 
            style={{ boxShadow: '0 0 8px rgba(92, 230, 92, 0.6)' }}
          />
        </span>
    </div>
  );
};
