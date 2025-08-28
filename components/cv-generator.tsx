"use client"

import { resumeData } from '@/lib/data'

export function generateCVPDF() {
  // Create CV content as formatted text
  const cvContent = `
${resumeData.basics.name}
${resumeData.basics.label}

CONTACT INFORMATION
${resumeData.basics.email}
${resumeData.basics.phone}
${resumeData.basics.location.city}, ${resumeData.basics.location.region}
${resumeData.basics.url}

PROFESSIONAL SUMMARY
${resumeData.basics.summary}

WORK EXPERIENCE

${resumeData.work.map(job => `
${job.position}
${job.name} | ${job.startDate} - ${job.endDate || 'Present'}

${job.summary}

${job.highlights ? job.highlights.map(h => `• ${h}`).join('\n') : ''}
${job.technologies ? `Technologies: ${job.technologies.join(', ')}` : ''}
`).join('\n')}

EDUCATION

${resumeData.education.map(edu => `
${edu.institution}
${edu.studyType} in ${edu.area}
${edu.startDate} - ${edu.endDate} • GPA: ${edu.score}
`).join('\n')}

SKILLS & TECHNOLOGIES

${resumeData.skills.map(skill => `
${skill.name} (${skill.level})
${skill.keywords.join(', ')}
`).join('\n')}

LANGUAGES

${resumeData.languages.map(lang => `${lang.language}: ${lang.fluency}`).join('\n')}

${resumeData.awards ? `
AWARDS & RECOGNITION

${resumeData.awards.map(award => `
${award.title}
${award.awarder} | ${award.date}
${award.summary}
`).join('\n')}` : ''}

VOLUNTEER WORK

${resumeData.volunteer.map(vol => `
${vol.position}
${vol.organization} | ${vol.startDate} - ${vol.endDate || 'Present'}

${vol.summary}

${vol.highlights ? vol.highlights.map(h => `• ${h}`).join('\n') : ''}
`).join('\n')}
  `.trim()

  // Create a blob with the CV content
  const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' })
  
  // Create download link
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${resumeData.basics.name.replace(' ', '-')}-CV.txt`
  
  // Trigger download
  document.body.appendChild(link)
  link.click()
  
  // Cleanup
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
