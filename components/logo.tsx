"use client"

import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg'
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} rounded-lg flex items-center justify-center relative overflow-hidden`}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
        whileHover={{ 
          scale: 1.05,
          rotate: 5
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
        
        {/* JL text */}
        <span className={`${textSizes[size]} font-bold text-white relative z-10`}>
          JL
        </span>
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] animate-pulse" />
      </motion.div>
      
      {showText && (
        <motion.span 
          className="text-xl font-bold text-foreground"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Jod
        </motion.span>
      )}
    </div>
  )
}
