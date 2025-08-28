"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface LanguageContextType {
  currentLanguage: string
  setLanguage: (language: string) => void
  messages: any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [messages, setMessages] = useState({})

  useEffect(() => {
    // Load language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') || 'en'
    setCurrentLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    // Load messages for current language
    const loadMessages = async () => {
      try {
        const languageMessages = await import(`../messages/${currentLanguage}.json`)
        setMessages(languageMessages.default || languageMessages)
      } catch (error) {
        console.error(`Failed to load messages for language: ${currentLanguage}`, error)
        // Fallback to English
        const englishMessages = await import('../messages/en.json')
        setMessages(englishMessages.default || englishMessages)
      }
    }

    loadMessages()
  }, [currentLanguage])

  const setLanguage = (language: string) => {
    setCurrentLanguage(language)
    localStorage.setItem('language', language)
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, messages }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
