"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { trackThemeChange } from '@/components/analytics'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const currentTheme = savedTheme || systemTheme
    
    setTheme(currentTheme)
    applyTheme(currentTheme)
  }, [])

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement
    
    if (newTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
    trackThemeChange(newTheme)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="relative p-2 rounded-lg bg-muted">
        <div className="w-5 h-5" />
      </div>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-5 h-5"
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-muted-foreground" />
        ) : (
          <Sun className="w-5 h-5 text-muted-foreground" />
        )}
      </motion.div>
    </motion.button>
  )
}
