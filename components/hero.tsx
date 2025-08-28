"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { resumeData } from '@/lib/data'
import { ParticlesBackground } from './particles-background'
import { InteractiveParticles } from './interactive-particles'
import { AnimatedText, GlowingText } from './animated-text'
import { SpectacularButton } from './spectacular-button'
import { ChevronDown, Sparkles, Zap, Star } from 'lucide-react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* 3D Particles Background */}
      <ParticlesBackground />
      
      {/* Interactive Particles */}
      <InteractiveParticles />
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-500/5 to-red-500/10"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(251, 191, 36, 0.1) 0%, rgba(251, 146, 60, 0.05) 50%, rgba(239, 68, 68, 0.1) 100%)",
            "linear-gradient(45deg, rgba(239, 68, 68, 0.1) 0%, rgba(251, 191, 36, 0.05) 50%, rgba(251, 146, 60, 0.1) 100%)",
            "linear-gradient(45deg, rgba(251, 146, 60, 0.1) 0%, rgba(239, 68, 68, 0.05) 50%, rgba(251, 191, 36, 0.1) 100%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-yellow-400/30 rounded-lg"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity },
          opacity: { duration: 3, repeat: Infinity }
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border border-orange-400/30 rounded-full"
        animate={{ 
          rotate: -360,
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity },
          opacity: { duration: 2, repeat: Infinity }
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/3 w-20 h-20 border border-red-400/30 transform rotate-45"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity },
          opacity: { duration: 4, repeat: Infinity }
        }}
      />

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 text-center relative z-10"
        style={{ y, opacity }}
      >
        {/* Icon badges */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Full Stack Developer</span>
          </motion.div>
          
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-orange-400/10 border border-orange-400/30 rounded-full text-orange-400"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Creative Problem Solver</span>
          </motion.div>
        </motion.div>

        {/* Main heading with spectacular effects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="text-white">Hi, I&apos;m </span>
            <br />
            <GlowingText 
              text={resumeData.basics.name} 
              className="text-6xl md:text-8xl lg:text-9xl font-black"
            />
          </h1>
        </motion.div>
        
        {/* Animated subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8"
        >
          <AnimatedText
            text={resumeData.basics.label}
            className="text-2xl md:text-3xl lg:text-4xl text-yellow-400 font-semibold"
            typewriter={true}
            delay={0.8}
          />
        </motion.div>
        
        {/* Description with gradient text */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            {resumeData.basics.summary}
          </span>
        </motion.p>
        
        {/* Spectacular buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <SpectacularButton
            variant="glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group"
          >
            <motion.div className="flex items-center gap-2">
              <span>Get In Touch</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Star className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </SpectacularButton>
          
          <SpectacularButton
            variant="secondary"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </SpectacularButton>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-yellow-400" />
        </motion.div>
      </motion.div>
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-yellow-400 rounded-full"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-orange-400 rounded-full"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-1 h-1 bg-red-400 rounded-full"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.4, 1, 0.4],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
      />
    </section>
  )
}
