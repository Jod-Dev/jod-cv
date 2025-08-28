"use client"

import { motion } from 'framer-motion'
import { resumeData } from '@/lib/data'
import { ChevronDown } from 'lucide-react'
import { generateCVPDF } from './cv-generator'
import { Logo } from './logo'
import { TranslatedText, TranslatedButton, TranslatedP } from './translated-text'

export function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-background"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
        >
          <Logo size="lg" showText={false} />
        </motion.div>

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <TranslatedText 
            translationKey="hero.available" 
            fallback="Available for opportunities"
            className="text-sm font-medium"
          />
        </motion.div>

        {/* Main heading */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <TranslatedText 
              translationKey="hero.greeting" 
              fallback="Hi, I'm"
              className="text-foreground block"
            />
            <span className="text-primary block">{resumeData.basics.name}</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <TranslatedP 
            translationKey="hero.title" 
            fallback={resumeData.basics.label}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <TranslatedP 
            translationKey="hero.summary" 
            fallback={resumeData.basics.summary}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
          >
            <TranslatedText 
              translationKey="hero.getInTouch"
              fallback="Get In Touch"
            />
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors text-sm sm:text-base"
          >
            <TranslatedText 
              translationKey="hero.viewWork"
              fallback="View My Work"
            />
          </button>
        </motion.div>


      </div>
    </section>
  )
}
