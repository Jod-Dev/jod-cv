"use client"

import { motion } from 'framer-motion'
import { resumeData } from '@/lib/data'
import { TranslatedH2, TranslatedText } from './translated-text'
import { useTranslations } from '@/hooks/useTranslations'
import { 
  FlatSection, 
  FlatCard, 
  FlatHeading, 
  FlatText, 
  FlatBadge, 
  FlatList,
  FlatDivider,
  flatAnimations 
} from './flat-design-system'

export function Experience() {
  const { t } = useTranslations()
  
  return (
    <FlatSection id="experience" background="none">
      <motion.div
        {...flatAnimations.fadeIn}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <TranslatedH2 
          translationKey="experience.title"
          fallback="Work Experience"
          className="mb-4"
        />
        <FlatText variant="muted" centered>
          Professional journey and technical expertise
        </FlatText>
      </motion.div>

      <FlatList spacing="lg">
        {resumeData.work.map((job, index) => (
          <motion.div
            key={`${job.name}-${job.startDate}`}
            {...flatAnimations.fadeIn}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FlatCard hover={false} className="relative">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <FlatHeading level={3} className="mb-1">
                    {job.position}
                  </FlatHeading>
                  <FlatText variant="muted" className="font-medium">
                    {job.name}
                  </FlatText>
                </div>
                <div className="mt-2 md:mt-0">
                  <FlatBadge variant="secondary">
                    {job.startDate} - {job.endDate || t('experience.current', 'Present')}
                  </FlatBadge>
                </div>
              </div>
              
              <FlatDivider className="mb-6" />
              
              {/* Summary */}
              <FlatText variant="body" className="mb-6 leading-relaxed">
                {job.summary}
              </FlatText>
              
              {/* Responsibilities */}
              <div className="mb-6">
                <FlatText variant="caption" className="mb-3 font-semibold">
                  {t('experience.keyResponsibilities', 'Key Responsibilities:')}
                </FlatText>
                <FlatList spacing="sm">
                  {job.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <FlatText variant="small" className="leading-relaxed">
                        {highlight}
                      </FlatText>
                    </div>
                  ))}
                </FlatList>
              </div>
              
              {/* Technologies */}
              <div>
                <FlatText variant="caption" className="mb-3 font-semibold">
                  {t('experience.technologies', 'Technologies:')}
                </FlatText>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <FlatBadge key={i} variant="primary">
                      {tech}
                    </FlatBadge>
                  ))}
                </div>
              </div>
            </FlatCard>
          </motion.div>
        ))}
      </FlatList>
    </FlatSection>
  )
}
