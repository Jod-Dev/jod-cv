"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-background/90 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            y: -2,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* 3D Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-tl from-background/80 to-background/40 rounded-xl" />
            
            {/* Icon with 3D effect */}
            <ChevronUp className="w-6 h-6 text-primary relative z-10 group-hover:text-primary/80 transition-colors" />
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-primary/5 rounded-xl blur-sm group-hover:bg-primary/10 transition-colors" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
