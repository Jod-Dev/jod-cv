import { useLanguage } from '@/contexts/language-context'

export function useTranslations() {
  const { messages } = useLanguage()
  
  const t = (key: string, fallback?: string) => {
    const keys = key.split('.')
    let value = messages
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return fallback || key
      }
    }
    
    return value || fallback || key
  }
  
  return { t, messages }
}
