"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updateMousePosition)
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.6,
          stiffness: 400,
          damping: 30
        }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-80" />
      </motion.div>

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 200,
          damping: 20
        }}
      >
        <div className="w-full h-full bg-yellow-400 rounded-full opacity-60 blur-sm" />
      </motion.div>

      {/* Particle trail */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9997]"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 0.1
          }}
        >
          <div className="w-full h-full bg-orange-400 rounded-full" />
        </motion.div>
      )}
    </>
  )
}
