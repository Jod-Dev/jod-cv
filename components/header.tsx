"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { resumeData } from '@/lib/data'
import { Menu, X } from 'lucide-react'
import { generateCVPDF } from './cv-generator'
import { Logo } from './logo'
import { LanguageSwitcher } from './language-switcher'
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                <TranslatedText 
                  translationKey={item.label}
                  fallback={item.label.split('.').pop() || item.label}
                />
              </a>
            ))}
            
            {/* Language Switcher */}
            <LanguageSwitcher 
              currentLanguage={currentLanguage}
              onLanguageChange={setLanguage}
            />
            
            {/* CTA Button */}
            <TranslatedButton 
              translationKey="navigation.downloadCV"
              fallback="Download CV"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              onClick={generateCVPDF}
            />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <TranslatedText 
                      translationKey={item.label}
                      fallback={item.label.split('.').pop() || item.label}
                    />
                  </a>
                ))}
                <TranslatedButton 
                  translationKey="navigation.downloadCV"
                  fallback="Download CV"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-left"
                />
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
