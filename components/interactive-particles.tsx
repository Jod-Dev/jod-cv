"use client"

import { motion } from 'framer-motion'

export function InteractiveParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        style={{
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
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-sm"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              background: `radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(251, 191, 36, 0.1) 50%, transparent 100%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  )
}
