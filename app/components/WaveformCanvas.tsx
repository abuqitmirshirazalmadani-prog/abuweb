"use client";

import { useEffect, useRef } from "react";

export default function WaveformCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number, height: number;
    let animationFrameId: number;

    function resizeCanvas() {
      const parent = canvas?.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.scale(dpr, dpr);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const numLines = 38;
    let time = 0;

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      ctx!.globalCompositeOperation = "screen";

      for (let i = 0; i < numLines; i++) {
        const progress = i / (numLines - 1);

        ctx!.beginPath();

        // Cool spectrum color logic
        let r, g, b, a;
        if (progress < 0.4) {
          // Top: Faint Indigo fading to transparency
          const p = progress / 0.4;
          r = 79;
          g = 70;
          b = 229;
          a = p * 0.3;
        } else if (progress < 0.7) {
          // Middle: Indigo to Bright Blue
          const p = (progress - 0.4) / 0.3;
          r = 79 * (1 - p) + 59 * p;
          g = 70 * (1 - p) + 130 * p;
          b = 229 * (1 - p) + 246 * p;
          a = 0.3 + p * 0.3;
        } else {
          // Bottom: Blue to Cyan
          const p = (progress - 0.7) / 0.3;
          r = 59 * (1 - p) + 34 * p;
          g = 130 * (1 - p) + 211 * p;
          b = 246 * (1 - p) + 238 * p;
          a = 0.6 + p * 0.4;
        }

        ctx!.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        ctx!.lineWidth = 1.2;

        // Base positioning: mid-lower section
        const startY = height * 0.45;
        const endY = height * 0.85;
        const baseY = startY + (endY - startY) * Math.pow(progress, 1.5);

        // Amplitude grows towards the foreground/bottom
        const baseAmp = 15 + Math.pow(progress, 2) * 90;

        for (let x = 0; x <= width; x += 4) {
          const nx = (x / width) * 2 - 1;

          // Perspective lift on edges creating a deep valley
          const edgeLift = Math.pow(Math.abs(nx), 2.5) * (height * 0.25);
          const dampen = 1 - Math.pow(Math.abs(nx), 3);

          // Complex interference wave
          const w1 = Math.sin(nx * 2.5 + time * 0.4 + i * 0.12) * baseAmp;
          const w2 = Math.cos(nx * 4.2 - time * 0.25 + i * 0.2) * (baseAmp * 0.4);
          const w3 = Math.sin(nx * 7.0 + time * 0.6 + i * 0.05) * (baseAmp * 0.15);

          const y = baseY - edgeLift + (w1 + w2 + w3) * dampen;

          if (x === 0) {
            ctx!.moveTo(x, y);
          } else {
            ctx!.lineTo(x, y);
          }
        }
        ctx!.stroke();
      }

      time += 0.008; // Calm drift pace
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-90 z-0"
      aria-hidden="true"
    />
  );
}
