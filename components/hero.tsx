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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <TranslatedText 
              translationKey="hero.greeting" 
              fallback="Hi, I'm"
              className="text-foreground"
            />
            <br />
            <span className="text-primary">{resumeData.basics.name}</span>
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
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <TranslatedButton 
            translationKey="hero.getInTouch"
            fallback="Get In Touch"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          />
          <TranslatedButton 
            translationKey="hero.viewWork"
            fallback="View My Work"
            className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
