import { FC } from "react";
import { HolographicCard } from "./holographic-card";

// Types
export interface iCardItem {
  title: string;
  description: string;
  tag?: string;
  src: string;
  link?: string;
  color?: string;
  textColor?: string;
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
  i: number;
  src: string;
}

// Components
const Card: FC<iCardProps> = ({
  title,
  description,
  color,
  textColor,
  i,
  src,
}) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4 pt-16 md:pt-0 pb-16 md:pb-0 z-10 w-full">
      <HolographicCard
        className="relative flex flex-col h-[60vh] md:h-[600px] w-full max-w-[900px] py-12 px-6 md:px-16
        rotate-0 items-center justify-center mx-auto 
        shadow-2xl rounded-[40px] overflow-hidden group border border-white/10 mx-4"
      >
        {/* Make background black to match original setup, we'll implement color via overlay if needed or within card */}
        <div className="absolute inset-0 z-0 bg-[#0f0f0f]" style={{ backgroundColor: color || '#0f0f0f' }} />
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            src={src}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center mt-auto">
          <h3 
            className="font-bold relative text-4xl md:text-6xl lg:text-7xl mb-6 font-heading tracking-tight drop-shadow-lg scale-95 group-hover:scale-100 transition-transform duration-500"
            style={{ color: textColor || 'white' }}
          >
            {title}
          </h3>
          <p
            className="text-lg md:text-2xl lg:text-3xl font-medium text-center z-50 text-white/90 leading-relaxed max-w-2xl drop-shadow-md translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
            style={{ color: textColor || 'white' }}
          >
            {description}
          </p>
        </div>
      </HolographicCard>
    </div>
  );
};

export interface iCardSlideProps {
  items: iCardItem[];
}

export const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
  return (
    <div className="w-full relative pb-[10vh] pt-16">
      {items.map((project, i) => {
        return <Card key={`p_${i}`} {...project} i={i} />;
      })}
    </div>
  );
};
