"use client"

import { useEffect } from 'react'

export function Analytics() {
  useEffect(() => {
    // Google Analytics 4
    const gtag = window.gtag
    if (gtag) {
      gtag('config', 'G-XXXXXXXXXX') // Replace with your GA4 ID
    }

    // Track page views
    const handleRouteChange = () => {
      if (gtag) {
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href
        })
      }
    }

    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      
      if (scrollPercent > 25 && scrollPercent <= 50) {
        gtag?.('event', 'scroll_depth', { depth: '25%' })
      } else if (scrollPercent > 50 && scrollPercent <= 75) {
        gtag?.('event', 'scroll_depth', { depth: '50%' })
      } else if (scrollPercent > 75) {
        gtag?.('event', 'scroll_depth', { depth: '75%' })
      }
    }

    // Track engagement
    const trackEngagement = () => {
      gtag?.('event', 'user_engagement', {
        engagement_time_msec: 1000
      })
    }

    window.addEventListener('scroll', trackScrollDepth)
    window.addEventListener('beforeunload', trackEngagement)

    return () => {
      window.removeEventListener('scroll', trackScrollDepth)
      window.removeEventListener('beforeunload', trackEngagement)
    }
  }, [])

  return null
}

// Add Google Analytics script to head
export function GoogleAnalyticsScript() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
    </>
  )
}
