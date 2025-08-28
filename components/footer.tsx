"use client"

import { motion } from 'framer-motion'
import { resumeData } from '@/lib/data'
import { TranslatedText } from './translated-text'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <TranslatedText 
              translationKey="footer.copyright"
              fallback={`© ${currentYear} ${resumeData.basics.name}. All rights reserved.`}
              className="text-muted-foreground"
              variables={{ year: currentYear, name: resumeData.basics.name }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
            <a
              href={resumeData.basics.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Website
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
