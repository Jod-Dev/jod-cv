"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  typewriter?: boolean
}

export function AnimatedText({ text, className = "", delay = 0, typewriter = false }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!typewriter) {
      setDisplayText(text)
      return
    }

    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [currentIndex, text, typewriter])

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
    >
      <span className="relative z-10">
        {displayText}
        {typewriter && currentIndex < text.length && (
          <motion.span
            className="inline-block w-0.5 h-6 bg-yellow-400 ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </span>
      
      {/* Glowing effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay }}
      />
    </motion.div>
  )
}

export function GlowingText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.span
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {text}
      </motion.span>
      
      {/* Multiple glow layers */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-lg opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-xl opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
    </div>
  )
}
