"use client"

import { Suspense, lazy, ComponentType } from 'react'
import { motion } from 'framer-motion'

interface LazyLoadProps {
  component: () => Promise<{ default: ComponentType<any> }>
  fallback?: React.ReactNode
  className?: string
}

const defaultFallback = (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex items-center justify-center p-8"
  >
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </motion.div>
)

export function LazyLoad({ component, fallback = defaultFallback, className }: LazyLoadProps) {
  const LazyComponent = lazy(component)
  
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}

// Predefined lazy components for common use cases
export const LazyProjects = () => (
  <LazyLoad 
    component={() => import('./projects').then(module => ({ default: module.Projects }))}
    fallback={
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[400px] flex items-center justify-center"
      >
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading projects...</p>
        </div>
      </motion.div>
    }
  />
)

export const LazyContact = () => (
  <LazyLoad 
    component={() => import('./contact').then(module => ({ default: module.Contact }))}
    fallback={
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[400px] flex items-center justify-center"
      >
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading contact form...</p>
        </div>
      </motion.div>
    }
  />
)
