"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown } from 'lucide-react'
import { trackLanguageChange } from '@/components/analytics'

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷'
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸'
  },
  {
    code: 'ht',
    name: 'Haitian Creole',
    nativeName: 'Kreyòl Ayisyen',
    flag: '🇭🇹'
  }
]

interface LanguageSwitcherProps {
  currentLanguage: string
  onLanguageChange: (language: string) => void
  className?: string
}

export function LanguageSwitcher({ 
  currentLanguage, 
  onLanguageChange, 
  className = '' 
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0]

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border"
      >
        <Globe className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium">{currentLang.flag}</span>
        <span className="text-sm font-medium hidden sm:block">{currentLang.nativeName}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50"
          >
            <div className="py-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    onLanguageChange(language.code)
                    trackLanguageChange(language.code)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-muted transition-colors ${
                    currentLanguage === language.code ? 'bg-primary/10 text-primary' : 'text-foreground'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{language.nativeName}</span>
                    <span className="text-xs text-muted-foreground">{language.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
