"use client"

import { motion } from 'framer-motion'
import { resumeData } from '@/lib/data'

export function Awards() {
  return (
    <section id="awards" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Awards & Recognition
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.awards.map((award, index) => (
            <motion.div
              key={`${award.title}-${award.date}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
              <p className="text-primary font-medium mb-2">{award.awarder}</p>
              <p className="text-sm text-muted-foreground mb-4">{award.date}</p>
              <p className="text-muted-foreground">{award.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
