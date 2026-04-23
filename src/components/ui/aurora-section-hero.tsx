import React, { useState, useEffect, CSSProperties } from 'react'

export interface BackgroundSceneProps {
  /** Number of animated light beams */
  beamCount?: number
}

const BACKGROUND_BEAM_COUNT = 60

const BackgroundScene: React.FC<BackgroundSceneProps> = ({
  beamCount = BACKGROUND_BEAM_COUNT,
}) => {
  const [beams, setBeams] = useState<
    Array<{ id: number; style: CSSProperties }>
  >([])

  useEffect(() => {
    const generated = Array.from({ length: beamCount }).map((_, i) => {
      const riseDur = Math.random() * 2 + 4    // 4–6s rise
      const fadeDur = riseDur                  // sync fade
      const dropDur = Math.random() * 3 + 3    // 3–6s drop

      return {
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          width: `${Math.floor(Math.random() * 3) + 1}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${riseDur}s, ${fadeDur}s, ${dropDur}s`,
        },
      }
    })
    setBeams(generated)
  }, [beamCount])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[var(--bg-color)]" role="img" aria-label="Animated digital data background">
      <div 
        className="absolute bottom-[-20px] left-0 w-full h-[150px] blur-[20px] opacity-70" 
        style={{ 
          background: 'radial-gradient(ellipse at center, var(--glow-color-1) 0%, transparent 70%)',
          animation: 'floorGlow 4s alternate infinite'
        }} 
      />
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-full blur-[25px] opacity-60" 
        style={{ 
          background: 'radial-gradient(ellipse at bottom, var(--glow-color-2) 0%, transparent 60%)',
          animation: 'mainGlow 4s alternate infinite'
        }} 
      />
      <div className="absolute inset-0 overflow-hidden">
        {beams.map((beam) => (
          <div 
            key={beam.id} 
            className="absolute bottom-[-20%] h-[60%] opacity-0 blur-[2px]" 
            style={{
              ...beam.style,
              background: 'linear-gradient(to top, transparent, var(--light-color) 80%, transparent)',
              animationName: 'rise, fade',
              animationTimingFunction: 'linear, ease-in-out',
              animationIterationCount: 'infinite, infinite'
            }} 
          />
        ))}
      </div>
    </div>
  )
}

export default BackgroundScene
