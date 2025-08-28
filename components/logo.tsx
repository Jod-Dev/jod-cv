"use client"

import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
  onClick?: () => void
}

export function Logo({ size = 'md', showText = false, className = '', onClick }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  }

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* SVG Logo - Simple Flat Design */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Simple Background */}
          <rect
            width="100"
            height="100"
            rx="20"
            fill="hsl(var(--primary) / 0.1)"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="2"
          />
          
          {/* Letter J - Simple and Clean */}
          <path
            d="M25 25 L25 65 Q25 75 35 75 L45 75 Q55 75 55 65 L55 60"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Letter L - Simple and Clean */}
          <path
            d="M65 25 L65 75 L70 75"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Simple Accent Dot */}
          <circle
            cx="30"
            cy="30"
            r="2"
            fill="hsl(var(--primary))"
            opacity="0.6"
          />
        </svg>
      </div>
      
      {/* Text (Optional) */}
      {showText && (
        <motion.span
          className={`font-bold text-foreground ${textSizes[size]}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          JL
        </motion.span>
      )}
    </motion.div>
  )
}

// PWA Icon Component
export function PWAIcon() {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="512" height="512" rx="128" fill="hsl(var(--primary))" />
      
      {/* Letter J */}
      <path
        d="M128 128 L128 320 Q128 352 160 352 L192 352 Q224 352 224 320 L224 288"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Letter L */}
      <path
        d="M288 128 L288 352 L320 352"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Decorative Elements */}
      <circle
        cx="160"
        cy="160"
        r="12"
        fill="hsl(var(--primary-foreground))"
        opacity="0.8"
      />
      <circle
        cx="352"
        cy="160"
        r="12"
        fill="hsl(var(--primary-foreground))"
        opacity="0.8"
      />
    </svg>
  )
}
