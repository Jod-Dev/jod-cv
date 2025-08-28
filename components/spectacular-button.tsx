"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

interface SpectacularButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'glow'
}

export function SpectacularButton({ 
  children, 
  onClick, 
  className = "", 
  variant = 'primary' 
}: SpectacularButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
      border: '2px solid transparent',
      boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)'
    },
    secondary: {
      background: 'transparent',
      border: '2px solid #fbbf24',
      boxShadow: '0 5px 15px rgba(251, 191, 36, 0.2)'
    },
    glow: {
      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      border: '2px solid transparent',
      boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
    }
  }

  return (
    <motion.button
      className={`relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 ${className}`}
      style={variants[variant]}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'glow' 
          ? '0 0 50px rgba(251, 191, 36, 0.8)' 
          : '0 15px 40px rgba(251, 191, 36, 0.4)'
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Floating particles */}
      {isHovered && (
        <>
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              initial={{ 
                x: '50%', 
                y: '50%', 
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 1,
                delay: i * 0.1
              }}
            />
          ))}
        </>
      )}
      
      {/* Text with glow effect */}
      <motion.span
        className="relative z-10"
        animate={{ 
          textShadow: isHovered 
            ? '0 0 10px rgba(255, 255, 255, 0.8)' 
            : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
      
      {/* Border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-yellow-400/50"
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
