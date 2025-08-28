"use client"

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

// Flat Design System Components

interface FlatCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function FlatCard({ children, className = '', hover = true }: FlatCardProps) {
  return (
    <motion.div
      className={`mate-card bg-background/80 backdrop-blur-sm border border-border/40 rounded-xl p-6 ${className}`}
      whileHover={hover ? { 
        borderColor: 'hsl(var(--border) / 0.6)',
        backgroundColor: 'hsl(var(--background) / 0.9)',
        y: -2
      } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

interface FlatButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function FlatButton({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md' 
}: FlatButtonProps) {
  const baseClasses = 'mate-button inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg'
  
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-muted text-foreground hover:bg-muted/80 border border-border/50',
    ghost: 'text-foreground hover:bg-muted/50'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }
  
  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}

interface FlatIconProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function FlatIcon({ children, className = '', size = 'md' }: FlatIconProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }
  
  return (
    <div className={`${sizeClasses[size]} rounded-full bg-primary/10 flex items-center justify-center ${className}`}>
      {children}
    </div>
  )
}

interface FlatSectionProps {
  children: ReactNode
  className?: string
  background?: 'none' | 'muted' | 'subtle'
  id?: string
}

export function FlatSection({ children, className = '', background = 'none', id }: FlatSectionProps) {
  const backgroundClasses = {
    none: '',
    muted: 'bg-muted/20',
    subtle: 'bg-background/50 backdrop-blur-sm'
  }
  
  return (
    <section id={id} className={`py-16 ${backgroundClasses[background]} ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {children}
      </div>
    </section>
  )
}

interface FlatHeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4
  className?: string
  centered?: boolean
}

export function FlatHeading({ children, level = 2, className = '', centered = false }: FlatHeadingProps) {
  const sizeClasses = {
    1: 'text-5xl md:text-6xl font-bold',
    2: 'text-4xl md:text-5xl font-bold',
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-medium'
  }
  
  const classes = `${sizeClasses[level]} text-foreground ${centered ? 'text-center' : ''} ${className}`
  
  switch (level) {
    case 1:
      return <h1 className={classes}>{children}</h1>
    case 2:
      return <h2 className={classes}>{children}</h2>
    case 3:
      return <h3 className={classes}>{children}</h3>
    case 4:
      return <h4 className={classes}>{children}</h4>
    default:
      return <h2 className={classes}>{children}</h2>
  }
}

interface FlatTextProps {
  children: ReactNode
  className?: string
  variant?: 'body' | 'muted' | 'small' | 'caption'
  centered?: boolean
}

export function FlatText({ children, className = '', variant = 'body', centered = false }: FlatTextProps) {
  const variantClasses = {
    body: 'text-base text-foreground',
    muted: 'text-sm text-muted-foreground',
    small: 'text-sm text-foreground',
    caption: 'text-xs text-muted-foreground uppercase tracking-wider'
  }
  
  return (
    <p className={`${variantClasses[variant]} ${centered ? 'text-center' : ''} ${className}`}>
      {children}
    </p>
  )
}

interface FlatDividerProps {
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export function FlatDivider({ className = '', orientation = 'horizontal' }: FlatDividerProps) {
  const orientationClasses = {
    horizontal: 'w-full h-px bg-border/30',
    vertical: 'w-px h-full bg-border/30'
  }
  
  return (
    <div className={`${orientationClasses[orientation]} ${className}`} />
  )
}

interface FlatGridProps {
  children: ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function FlatGrid({ children, cols = 2, gap = 'md', className = '' }: FlatGridProps) {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }
  
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  }
  
  return (
    <div className={`grid ${colsClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  )
}

interface FlatListProps {
  children: ReactNode
  className?: string
  spacing?: 'sm' | 'md' | 'lg'
}

export function FlatList({ children, className = '', spacing = 'md' }: FlatListProps) {
  const spacingClasses = {
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6'
  }
  
  return (
    <div className={`${spacingClasses[spacing]} ${className}`}>
      {children}
    </div>
  )
}

interface FlatBadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'muted'
  className?: string
}

export function FlatBadge({ children, variant = 'primary', className = '' }: FlatBadgeProps) {
  const variantClasses = {
    primary: 'mate-badge bg-primary/10 text-primary border border-primary/20',
    secondary: 'mate-badge bg-muted text-foreground border border-border/50',
    muted: 'mate-badge bg-muted/50 text-muted-foreground border border-border/30'
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}

// Animation variants for consistent motion
export const flatAnimations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 }
  }
}
