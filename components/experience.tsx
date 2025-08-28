"use client"

import { motion } from 'framer-motion'
import { resumeData } from '@/lib/data'
import { TranslatedH2, TranslatedText } from './translated-text'
import { useTranslations } from '@/hooks/useTranslations'

export function Experience() {
  const { t } = useTranslations()
  
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TranslatedH2 
            translationKey="experience.title"
            fallback="Work Experience"
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          />
        </motion.div>

        <div className="space-y-8">
          {resumeData.work.map((job, index) => (
            <motion.div
              key={`${job.name}-${job.startDate}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.position}</h3>
                  <p className="text-primary font-medium">{job.name}</p>
                </div>
                <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                  {job.startDate} - {job.endDate || t('experience.current', 'Present')}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{job.summary}</p>
              
              <div className="space-y-2">
                <h4 className="font-medium">Key Responsibilities:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {job.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
