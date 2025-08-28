"use client"

import { useTranslations } from '@/hooks/useTranslations'

interface TranslatedTextProps {
  translationKey: string
  fallback?: string
  className?: string
  children?: React.ReactNode
}

export function TranslatedText({ 
  translationKey, 
  fallback, 
  className = '',
  children
}: TranslatedTextProps) {
  const { t } = useTranslations()
  
  return (
    <span className={className}>
      {children || t(translationKey, fallback)}
    </span>
  )
}

// Shorthand components for common elements
export function TranslatedH1({ translationKey, fallback, className = '' }: TranslatedTextProps) {
  return <h1 className={className}>{useTranslations().t(translationKey, fallback)}</h1>
}

export function TranslatedH2({ translationKey, fallback, className = '' }: TranslatedTextProps) {
  return <h2 className={className}>{useTranslations().t(translationKey, fallback)}</h2>
}

export function TranslatedH3({ translationKey, fallback, className = '' }: TranslatedTextProps) {
  return <h3 className={className}>{useTranslations().t(translationKey, fallback)}</h3>
}

export function TranslatedP({ translationKey, fallback, className = '' }: TranslatedTextProps) {
  return <p className={className}>{useTranslations().t(translationKey, fallback)}</p>
}

export function TranslatedButton({ translationKey, fallback, className = '', ...props }: TranslatedTextProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { t } = useTranslations()
  return (
    <button className={className} {...props}>
      {t(translationKey, fallback)}
    </button>
  )
}
