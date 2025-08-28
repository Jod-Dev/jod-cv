"use client"

import { motion } from 'framer-motion'
import { resumeData } from '@/lib/data'
import { TranslatedH2 } from './translated-text'
import { useTranslations } from '@/hooks/useTranslations'
import { 
  FlatSection, 
  FlatCard, 
  FlatHeading, 
  FlatText, 
  FlatBadge, 
  FlatGrid,
  flatAnimations 
} from './flat-design-system'

export function Education() {
  const { t } = useTranslations()
  
  return (
    <FlatSection id="education" background="none">
      <motion.div
        {...flatAnimations.fadeIn}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <TranslatedH2 
          translationKey="education.title"
          fallback="Education"
          className="mb-4"
        />
        <FlatText variant="muted" centered>
          Academic background and professional development
        </FlatText>
      </motion.div>

      <FlatGrid cols={2} gap="lg">
        {resumeData.education.map((edu, index) => (
          <motion.div
            key={`${edu.institution}-${edu.startDate}`}
            {...flatAnimations.fadeIn}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FlatCard>
              <FlatHeading level={3} className="mb-2">
                {edu.institution}
              </FlatHeading>
              <FlatText variant="muted" className="font-medium mb-2">
                {edu.studyType} in {edu.area}
              </FlatText>
              <FlatText variant="small" className="mb-4">
                {edu.startDate} - {edu.endDate} • GPA: {edu.score}
              </FlatText>
              
              <div>
                <FlatText variant="caption" className="mb-3 font-semibold">
                  {t('education.keyCourses', 'Key Courses:')}
                </FlatText>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <FlatBadge key={i} variant="primary">
                      {course}
                    </FlatBadge>
                  ))}
                </div>
              </div>
            </FlatCard>
          </motion.div>
        ))}
      </FlatGrid>
    </FlatSection>
  )
}
