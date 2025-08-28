import { useLanguage } from '@/contexts/language-context'

export function useTranslations() {
  const { messages } = useLanguage()
  
  const t = (key: string, fallback?: string, variables?: Record<string, any>) => {
    const keys = key.split('.')
    let value = messages
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return fallback || key
      }
    }
    
    let result = value || fallback || key
    
    // Replace variables in the translation
    if (variables && typeof result === 'string') {
      Object.entries(variables).forEach(([varKey, varValue]) => {
        result = result.replace(new RegExp(`{${varKey}}`, 'g'), String(varValue))
      })
    }
    
    return result
  }
  
  return { t, messages }
}
