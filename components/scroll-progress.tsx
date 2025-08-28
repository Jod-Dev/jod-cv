"use client"

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 origin-left z-[9999]"
      style={{ scaleX }}
    >
      {/* Glowing effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 via-orange-500/50 to-red-500/50 blur-sm"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Particle effect at the end */}
      <motion.div
        className="absolute right-0 top-0 w-4 h-4 bg-yellow-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  )
}
