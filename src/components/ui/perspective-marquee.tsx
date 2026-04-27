import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { Player } from "@remotion/player";

export interface PerspectiveMarqueeProps {
  items?: string[];
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  pixelsPerFrame?: number;
  rotateY?: number;
  rotateX?: number;
  perspective?: number;
  fadeColor?: string;
  background?: string;
  speed?: number;
  className?: string;
}

const FONT_FAMILY =
  "var(--font-heading), var(--font-sans), -apple-system, BlinkMacSystemFont, sans-serif";

const DEFAULT_ITEMS = [
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "AI Development Services",
  "SEO & Local SEO Services"
];

export function PerspectiveMarquee({
  items = DEFAULT_ITEMS,
  fontSize = 84,
  color = "#ffffff",
  fontWeight = 700,
  pixelsPerFrame = 2,
  rotateY = -28,
  rotateX = 8,
  perspective = 1200,
  fadeColor = "transparent",
  background = "transparent",
  speed = 1,
  className,
}: PerspectiveMarqueeProps) {
  const frame = useCurrentFrame() * speed;
  const { width } = useVideoConfig();

  const itemPadding = fontSize * 0.9;
  const approxItemWidth = items.reduce(
    (acc, item) => acc + item.length * fontSize * 0.6 + itemPadding,
    0,
  );

  const offset = -((frame * pixelsPerFrame) % approxItemWidth);
  const rendered = [...items, ...items, ...items, ...items];

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        perspective: `${perspective}px`,
      }}
    >
      <div
        style={{
          width: "150%",
          marginLeft: "-25%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            transform: `translateX(${offset}px)`,
          }}
        >
          {rendered.map((item, i) => {
            const itemCenter =
              i * (approxItemWidth / items.length) +
              approxItemWidth / items.length / 2 +
              offset;
            const norm = (itemCenter - (width / 2)) / (width / 2);
            // increase the viewable area by reducing normalization impact
            const distance = Math.min(1, Math.abs(norm));
            const blurPx = distance * 4; // reduced blur slightly
            const opacity = 1 - distance * 0.2; // increased opacity slightly

            return (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  fontFamily: FONT_FAMILY,
                  fontSize,
                  fontWeight,
                  color,
                  letterSpacing: "-0.03em",
                  paddingRight: itemPadding,
                  filter: `blur(${blurPx}px)`,
                  opacity,
                }}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: fadeColor && fadeColor !== "transparent" ? `linear-gradient(90deg, ${fadeColor} 0%, transparent 18%, transparent 82%, ${fadeColor} 100%)` : undefined,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: fadeColor && fadeColor !== "transparent" ? `linear-gradient(180deg, ${fadeColor} 0%, transparent 25%, transparent 75%, ${fadeColor} 100%)` : undefined,
        }}
      />
    </div>
  );
}

function PerspectiveMarqueeScene() {
  return (
    <PerspectiveMarquee
      items={[
        "Custom Software Development",
        "Web Development",
        "Mobile App Development",
        "AI Development Services",
        "SEO & Local SEO Services"
      ]}
      rotateY={-28}
      rotateX={8}
      perspective={1200}
      pixelsPerFrame={3}
      background="transparent"
      fadeColor="transparent"
      color="#ffffff"
    />
  );
}

export function ServiceMarqueeSection() {
  return (
    <div className="w-full overflow-hidden bg-transparent py-6 relative z-10 opacity-70 border-y border-white/5" style={{ height: "300px" }}>
      <Player
        component={PerspectiveMarqueeScene}
        durationInFrames={2400}
        fps={30}
        compositionWidth={3840}
        compositionHeight={400}
        style={{ width: "100%", height: "100%", transform: "scaleX(1.1)" }}
        controls={false}
        autoPlay
        loop
        clickToPlay={false}
      />
    </div>
  );
}
