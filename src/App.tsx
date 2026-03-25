import React, { useEffect, useRef } from 'react';

const RainCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    interface Particle {
      x: number;
      y: number;
      speed: number;
      char: string;
      color: string;
      fontSize: number;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}|:"<>?-=[]\\;\',./~';

    const initParticles = () => {
      particles = [];
      // Adjust number of particles based on screen width for consistent density
      const numParticles = Math.floor((window.innerWidth * window.innerHeight) / 6000);
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          speed: Math.random() * 1.5 + 0.5,
          char: chars.charAt(Math.floor(Math.random() * chars.length)),
          // Faint grays and whites to match the image
          color: `rgba(255, 255, 255, ${Math.random() * 0.25 + 0.05})`,
          fontSize: Math.random() * 16 + 10
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const draw = () => {
      // Clear the canvas completely each frame for distinct scattered characters (no long trails)
      ctx.fillStyle = '#050505'; // Very dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.font = `${p.fontSize}px monospace`;
        ctx.fillText(p.char, p.x, p.y);

        p.y += p.speed;
        
        // Occasionally flicker/change the character
        if (Math.random() < 0.02) {
          p.char = chars.charAt(Math.floor(Math.random() * chars.length));
        }

        // Reset particle to top when it falls off screen
        if (p.y > canvas.height + p.fontSize) {
          p.y = -p.fontSize;
          p.x = Math.random() * canvas.width;
          p.speed = Math.random() * 1.5 + 0.5;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />;
};

export default function App() {
  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden font-mono selection:bg-white/20">
      {/* Background Rain Animation */}
      <RainCanvas />
      
      {/* Centered Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          It's RAINING
        </h1>
      </div>
    </div>
  );
}
