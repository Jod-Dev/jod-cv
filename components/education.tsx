"use client"

import { motion } from 'framer-motion'
import { resumeData } from '@/lib/data'
import { TranslatedH2 } from './translated-text'
import { useTranslations } from '@/hooks/useTranslations'

export function Education() {
  const { t } = useTranslations()
  
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TranslatedH2 
            translationKey="education.title"
            fallback="Education"
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${edu.startDate}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
              <p className="text-primary font-medium mb-2">{edu.studyType} in {edu.area}</p>
              <p className="text-sm text-muted-foreground mb-4">
                {edu.startDate} - {edu.endDate} • GPA: {edu.score}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium">{t('education.keyCourses', 'Key Courses:')}</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {course}
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
