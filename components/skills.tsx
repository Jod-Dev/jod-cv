"use client"

import { motion } from 'framer-motion'
import { resumeData } from '@/lib/data'
import { TranslatedH2 } from './translated-text'
import { 
  FlatSection, 
  FlatCard, 
  FlatHeading, 
  FlatText, 
  FlatGrid,
  FlatBadge,
  flatAnimations 
} from './flat-design-system'

export function Skills() {
  return (
    <FlatSection id="skills" background="muted">
      <motion.div
        {...flatAnimations.fadeIn}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <TranslatedH2 
          translationKey="skills.title"
          fallback="Skills & Technologies"
          className="mb-4"
        />
        <FlatText variant="muted" centered>
          Technical expertise and professional competencies
        </FlatText>
      </motion.div>

      <FlatGrid cols={2} gap="lg">
        {resumeData.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            {...flatAnimations.fadeIn}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FlatCard>
              <div className="flex items-center justify-between mb-4">
                <FlatHeading level={3}>
                  {skill.name}
                </FlatHeading>
                <FlatBadge variant="primary">
                  {skill.level}
                </FlatBadge>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.keywords.map((keyword, i) => (
                  <FlatBadge key={i} variant="secondary">
                    {keyword}
                  </FlatBadge>
                ))}
              </div>
            </FlatCard>
          </motion.div>
        ))}
      </FlatGrid>
    </FlatSection>
  )
}
