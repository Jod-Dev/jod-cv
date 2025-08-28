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
      {/* SVG Logo - Flat 3D Design */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* 3D Background Circle with Depth */}
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary) / 0.15)" />
              <stop offset="50%" stopColor="hsl(var(--primary) / 0.25)" />
              <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
            </linearGradient>
            <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary) / 0.3)" />
              <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="hsl(var(--primary) / 0.3)" />
            </filter>
          </defs>
          
          {/* Shadow Layer */}
          <circle
            cx="52"
            cy="52"
            r="45"
            fill="url(#shadowGradient)"
            opacity="0.6"
          />
          
          {/* Main Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="url(#bgGradient)"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            filter="url(#shadow)"
          />
          
          {/* 3D Letter J with Depth */}
          <path
            d="M30 25 L30 60 Q30 70 40 70 L50 70 Q60 70 60 60 L60 55"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#shadow)"
          />
          
          {/* 3D Letter L with Depth */}
          <path
            d="M70 25 L70 70 L75 70"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#shadow)"
          />
          
          {/* 3D Decorative Elements */}
          <circle
            cx="35"
            cy="35"
            r="3"
            fill="hsl(var(--primary))"
            opacity="0.8"
            filter="url(#shadow)"
          />
          <circle
            cx="65"
            cy="35"
            r="3"
            fill="hsl(var(--primary))"
            opacity="0.8"
            filter="url(#shadow)"
          />
          
          {/* Highlight Effect */}
          <circle
            cx="35"
            cy="33"
            r="1"
            fill="hsl(var(--primary-foreground))"
            opacity="0.9"
          />
          <circle
            cx="65"
            cy="33"
            r="1"
            fill="hsl(var(--primary-foreground))"
            opacity="0.9"
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
