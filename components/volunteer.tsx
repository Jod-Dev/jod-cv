"use client"

import { motion } from 'framer-motion'
import { resumeData } from '@/lib/data'

export function Volunteer() {
  return (
    <section id="volunteer" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Volunteer Work
          </h2>
        </motion.div>

        <div className="space-y-8">
          {resumeData.volunteer.map((vol, index) => (
            <motion.div
              key={`${vol.organization}-${vol.startDate}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{vol.position}</h3>
                  <p className="text-primary font-medium">{vol.organization}</p>
                </div>
                <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                  {vol.startDate} - {vol.endDate || 'Present'}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{vol.summary}</p>
              
              <div className="space-y-2">
                <h4 className="font-medium">Key Activities:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {vol.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
