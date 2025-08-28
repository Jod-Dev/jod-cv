"use client"

import { useEffect, useRef } from 'react'
import { trackSectionView } from '@/components/analytics'

interface SectionTrackerProps {
  sectionId: string
  children: React.ReactNode
  className?: string
}

export function SectionTracker({ sectionId, children, className = '' }: SectionTrackerProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const hasTracked = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackSectionView(sectionId)
            hasTracked.current = true
          }
        })
      },
      {
        threshold: 0.3, // Track when 30% of the section is visible
        rootMargin: '-50px 0px -50px 0px' // Offset for header
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [sectionId])

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  )
}
