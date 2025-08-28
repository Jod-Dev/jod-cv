"use client"

import { useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import { useGesture } from '@use-gesture/react'

export function InteractiveParticles() {
  const [spring, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    config: { mass: 1, tension: 300, friction: 30 }
  }))

  const bind = useGesture({
    onMove: ({ xy: [x, y] }) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const deltaX = (x - centerX) / centerX
      const deltaY = (y - centerY) / centerY
      
      api.start({
        x: deltaX * 50,
        y: deltaY * 50,
        scale: 1.1
      })
    },
    onHover: ({ hovering }) => {
      api.start({
        scale: hovering ? 1.2 : 1
      })
    }
  })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <animated.div
        {...bind()}
        style={{
          ...spring,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100vw',
          height: '100vh',
          pointerEvents: 'auto'
        }}
      >
        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full blur-sm"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              background: `radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(251, 191, 36, 0.1) 50%, transparent 100%)`,
              animation: `pulse ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </animated.div>
    </div>
  )
}
