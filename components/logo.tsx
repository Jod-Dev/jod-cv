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
      className={`flex items-center justify-center ${className}`}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.05 } : {}}
      whileTap={onClick ? { scale: 0.95 } : {}}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* SVG Logo - Elegant Initials */}
      <div className={`${sizeClasses[size]} flex-shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Letter J - Elegant Style */}
          <path
            d="M30 20 L30 70 Q30 80 40 80 L50 80 Q60 80 60 70 L60 65"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Letter L - Elegant Style */}
          <path
            d="M70 20 L70 80 L80 80"
            stroke="hsl(var(--primary))"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Elegant Flourish */}
          <path
            d="M25 25 Q35 15 45 25"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          
          <path
            d="M75 25 Q85 15 95 25"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
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
