"use client"

import { motion } from 'framer-motion'
import { resumeData } from '@/lib/data'
import { useLanguage } from '@/contexts/language-context'

export function About() {
  const { messages } = useLanguage()
  
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {messages.about?.title || 'About Me'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {messages.about?.description || resumeData.basics.summary}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              {messages.about?.description || "I am a dedicated IT Support professional with extensive experience in technical support, system administration, and customer service. My expertise includes troubleshooting complex technical issues, providing user training, and maintaining system documentation. I have worked with various technologies and platforms, always focusing on delivering excellent user experiences and efficient problem resolution."}
            </p>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">{messages.languages?.title || 'Languages'}</h3>
            <div className="space-y-3">
              {resumeData.languages.map((language, index) => (
                <motion.div
                  key={language.language}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center p-3 bg-background rounded-lg border border-border"
                >
                  <span className="font-medium">{language.language}</span>
                  <span className="text-sm text-muted-foreground">{language.fluency}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
