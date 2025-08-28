"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { resumeData } from '@/lib/data'
import { Menu, X } from 'lucide-react'
import { generateCVPDF } from './cv-generator'
import { Logo } from './logo'
import { LanguageSwitcher } from './language-switcher'
import { ThemeToggle } from './theme-toggle'
import { useLanguage } from '@/contexts/language-context'
import { TranslatedText, TranslatedButton } from './translated-text'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { currentLanguage, setLanguage, messages } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'navigation.about' },
    { href: '#experience', label: 'navigation.experience' },
    { href: '#skills', label: 'navigation.skills' },
    { href: '#education', label: 'navigation.education' },
    { href: '#projects', label: 'navigation.projects' },
    { href: '#contact', label: 'navigation.contact' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="md" showText={true} />

          {/* Desktop Navigation - Minimalist */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Main Navigation */}
            <div className="flex items-center gap-6">
              {navItems.slice(0, 3).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm"
                >
                  <TranslatedText 
                    translationKey={item.label}
                    fallback={item.label.split('.').pop() || item.label}
                  />
                </a>
              ))}
            </div>
            
            {/* Separator */}
            <div className="w-px h-6 bg-border" />
            
            {/* Controls Group */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher 
                currentLanguage={currentLanguage}
                onLanguageChange={setLanguage}
              />
              <TranslatedButton 
                translationKey="navigation.downloadCV"
                fallback="CV"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
                onClick={generateCVPDF}
              />
            </div>
          </nav>

          {/* Mobile Menu Button - Modern */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="flex flex-col gap-1"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 }
                }}
                className="w-5 h-0.5 bg-current"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="w-5 h-0.5 bg-current"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 }
                }}
                className="w-5 h-0.5 bg-current"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Modern Mobile Menu - Side Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Side Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-background border-l border-border lg:hidden z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Navigation */}
                <nav className="flex-1 p-6">
                  <div className="space-y-6">
                    {/* Main Navigation */}
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                        Navigation
                      </h3>
                      <div className="space-y-3">
                        {navItems.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <TranslatedText 
                              translationKey={item.label}
                              fallback={item.label.split('.').pop() || item.label}
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    {/* Controls */}
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                        Settings
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Theme</span>
                          <ThemeToggle />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Language</span>
                          <LanguageSwitcher 
                            currentLanguage={currentLanguage}
                            onLanguageChange={setLanguage}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <div className="pt-4 border-t border-border">
                      <TranslatedButton 
                        translationKey="navigation.downloadCV"
                        fallback="Download CV"
                        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                        onClick={() => {
                          generateCVPDF()
                          setIsMobileMenuOpen(false)
                        }}
                      />
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
