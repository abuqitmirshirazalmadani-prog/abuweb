import React from 'react';
import { cn } from "../utils/cn";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}

export default function Marquee({
  children,
  direction = "left",
  speed = "normal",
  className,
}: MarqueeProps) {
  return (
    <div className={cn("flex w-full overflow-hidden [--gap:2rem]", className)}>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          direction === "right" && "animate-marquee-reverse",
          speed === "fast" && "[animation-duration:15s]",
          speed === "normal" && "[animation-duration:30s]",
          speed === "slow" && "[animation-duration:45s]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          direction === "right" && "animate-marquee-reverse",
          speed === "fast" && "[animation-duration:15s]",
          speed === "normal" && "[animation-duration:30s]",
          speed === "slow" && "[animation-duration:45s]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
