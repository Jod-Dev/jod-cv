"use client"

import { useEffect } from 'react'

export function KeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content
      if (event.key === 'Tab' && event.shiftKey) {
        const mainContent = document.querySelector('main')
        if (mainContent) {
          mainContent.focus()
        }
      }

      // Navigate sections with arrow keys
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault()
        const sections = document.querySelectorAll('section[id]')
        const currentSection = Array.from(sections).find(section => {
          const rect = section.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        })

        if (currentSection) {
          const currentIndex = Array.from(sections).indexOf(currentSection)
          let nextIndex: number

          if (event.key === 'ArrowDown') {
            nextIndex = Math.min(currentIndex + 1, sections.length - 1)
          } else {
            nextIndex = Math.max(currentIndex - 1, 0)
          }

          const nextSection = sections[nextIndex] as HTMLElement
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
            nextSection.focus()
          }
        }
      }

      // Focus management for modals and forms
      if (event.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement
        if (activeElement && activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
          activeElement.blur()
        }
      }
    }

    // Add focus indicators for keyboard navigation
    const addFocusStyles = () => {
      const style = document.createElement('style')
      style.textContent = `
        *:focus {
          outline: 2px solid #f59e0b !important;
          outline-offset: 2px !important;
        }
        
        .focus-visible:focus {
          outline: 2px solid #f59e0b !important;
          outline-offset: 2px !important;
        }
      `
      document.head.appendChild(style)
    }

    document.addEventListener('keydown', handleKeyDown)
    addFocusStyles()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null
}
