"use client"

import { useEffect } from 'react'
import Script from 'next/script'

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

interface AnalyticsProps {
  gaId?: string
}

export function Analytics({ gaId }: AnalyticsProps) {
  useEffect(() => {
    if (gaId && typeof window !== 'undefined') {
      // Initialize Google Analytics
      window.gtag = window.gtag || function() {
        (window.gtag as any).q = (window.gtag as any).q || []
        ;(window.gtag as any).q.push(arguments)
      }
      
      window.gtag('js', new Date())
      window.gtag('config', gaId, {
        page_title: 'Jod Louis - Portfolio',
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'language',
          'custom_parameter_2': 'section'
        }
      })

      // Track page views
      const handleRouteChange = () => {
        if (window.gtag) {
          window.gtag('config', gaId, {
            page_path: window.location.pathname,
            page_title: document.title
          })
        }
      }

      // Track custom events
      const trackEvent = (action: string, category: string, label?: string) => {
        if (window.gtag) {
          window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: 1
          })
        }
      }

      // Track section visibility
      const trackSectionView = (sectionId: string) => {
        trackEvent('section_view', 'engagement', sectionId)
      }

      // Track form submissions
      const trackFormSubmission = () => {
        trackEvent('form_submit', 'contact', 'contact_form')
      }

      // Track CV downloads
      const trackCvDownload = () => {
        trackEvent('file_download', 'engagement', 'cv_pdf')
      }

      // Track language changes
      const trackLanguageChange = (language: string) => {
        trackEvent('language_change', 'preferences', language)
      }

      // Track theme changes
      const trackThemeChange = (theme: string) => {
        trackEvent('theme_change', 'preferences', theme)
      }

      // Add event listeners
      document.addEventListener('section_view', (e: any) => {
        trackSectionView(e.detail.sectionId)
      })

      document.addEventListener('form_submit', () => {
        trackFormSubmission()
      })

      document.addEventListener('cv_download', () => {
        trackCvDownload()
      })

      document.addEventListener('language_change', (e: any) => {
        trackLanguageChange(e.detail.language)
      })

      document.addEventListener('theme_change', (e: any) => {
        trackThemeChange(e.detail.theme)
      })

      // Track scroll depth
      let maxScroll = 0
      const trackScrollDepth = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent
          if (maxScroll % 25 === 0) { // Track every 25%
            trackEvent('scroll_depth', 'engagement', `${maxScroll}%`)
          }
        }
      }

      window.addEventListener('scroll', trackScrollDepth)

      // Track time on page
      let startTime = Date.now()
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000)
        if (timeSpent % 30 === 0 && timeSpent > 0) { // Track every 30 seconds
          trackEvent('time_on_page', 'engagement', `${timeSpent}s`)
        }
      }

      const timeInterval = setInterval(trackTimeOnPage, 30000)

      return () => {
        window.removeEventListener('scroll', trackScrollDepth)
        clearInterval(timeInterval)
      }
    }
  }, [gaId])

  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: 'Jod Louis - Portfolio',
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'language',
              'custom_parameter_2': 'section'
            }
          });
        `}
      </Script>
    </>
  )
}

// Utility functions to trigger custom events
export const trackSectionView = (sectionId: string) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('section_view', { 
      detail: { sectionId } 
    }))
  }
}

export const trackFormSubmission = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('form_submit'))
  }
}

export const trackCvDownload = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cv_download'))
  }
}

export const trackLanguageChange = (language: string) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('language_change', { 
      detail: { language } 
    }))
  }
}

export const trackThemeChange = (theme: string) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('theme_change', { 
      detail: { theme } 
    }))
  }
}
