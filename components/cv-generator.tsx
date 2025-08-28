"use client"

import { resumeData } from '@/lib/data'
import { trackCvDownload } from '@/components/analytics'

export async function generateCVPDF() {
  try {
    // Dynamic import to avoid SSR issues
    const jsPDF = (await import('jspdf')).default
    
    const doc = new jsPDF()
    
    // Set font
    doc.setFont('helvetica')
    
    // Header
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.text(resumeData.basics.name, 20, 30)
    
    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.text(resumeData.basics.label, 20, 40)
    
    // Contact Info
    doc.setFontSize(10)
    doc.text(`Email: ${resumeData.basics.email}`, 20, 55)
    doc.text(`Phone: ${resumeData.basics.phone}`, 20, 62)
    doc.text(`Location: ${resumeData.basics.location.city}, ${resumeData.basics.location.region}`, 20, 69)
    doc.text(`Website: ${resumeData.basics.url}`, 20, 76)
    
    // Summary
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('Professional Summary', 20, 90)
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    const summaryLines = doc.splitTextToSize(resumeData.basics.summary, 170)
    doc.text(summaryLines, 20, 100)
    
    // Work Experience
    let yPosition = 120
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('Work Experience', 20, yPosition)
    yPosition += 10
    
    resumeData.work.forEach((job, index) => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }
      
      doc.setFontSize(11)
      doc.setFont('helvetica', 'bold')
      doc.text(job.position, 20, yPosition)
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text(job.name, 20, yPosition + 5)
      
      const dateText = `${job.startDate} - ${job.endDate || 'Present'}`
      doc.text(dateText, 20, yPosition + 10)
      
      const descriptionLines = doc.splitTextToSize(job.summary, 170)
      doc.text(descriptionLines, 20, yPosition + 17)
      
      yPosition += 25 + (descriptionLines.length * 5)
      
      // Key responsibilities
      if (job.highlights && job.highlights.length > 0) {
        doc.setFontSize(9)
        doc.text('Key Responsibilities:', 20, yPosition)
        yPosition += 5
        
        job.highlights.forEach(highlight => {
          const highlightLines = doc.splitTextToSize(`• ${highlight}`, 160)
          doc.text(highlightLines, 25, yPosition)
          yPosition += highlightLines.length * 4
        })
        yPosition += 5
      }
      
      // Technologies
      if (job.technologies && job.technologies.length > 0) {
        doc.setFontSize(9)
        doc.text(`Technologies: ${job.technologies.join(', ')}`, 20, yPosition)
        yPosition += 8
      }
      
      yPosition += 5
    })
    
    // Education
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('Education', 20, yPosition)
    yPosition += 10
    
    resumeData.education.forEach(edu => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }
      
      doc.setFontSize(11)
      doc.setFont('helvetica', 'bold')
      doc.text(edu.institution, 20, yPosition)
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text(`${edu.studyType} in ${edu.area}`, 20, yPosition + 5)
      
      const dateText = `${edu.startDate} - ${edu.endDate} • GPA: ${edu.score}`
      doc.text(dateText, 20, yPosition + 10)
      
      yPosition += 20
    })
    
    // Skills
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('Skills & Technologies', 20, yPosition)
    yPosition += 10
    
    resumeData.skills.forEach(skill => {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.text(`${skill.name} (${skill.level})`, 20, yPosition)
      
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      doc.text(skill.keywords.join(', '), 20, yPosition + 5)
      
      yPosition += 12
    })
    
    // Languages
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }
    
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('Languages', 20, yPosition)
    yPosition += 10
    
    resumeData.languages.forEach(lang => {
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text(`${lang.language}: ${lang.fluency}`, 20, yPosition)
      yPosition += 7
    })
    
    // Awards
    if (resumeData.awards && resumeData.awards.length > 0) {
      if (yPosition > 250) {
        doc.addPage()
        yPosition = 20
      }
      
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.text('Awards & Recognition', 20, yPosition)
      yPosition += 10
      
      resumeData.awards.forEach(award => {
        doc.setFontSize(10)
        doc.setFont('helvetica', 'bold')
        doc.text(award.title, 20, yPosition)
        
        doc.setFontSize(9)
        doc.setFont('helvetica', 'normal')
        doc.text(`${award.awarder} - ${award.date}`, 20, yPosition + 5)
        
        const summaryLines = doc.splitTextToSize(award.summary, 170)
        doc.text(summaryLines, 20, yPosition + 10)
        
        yPosition += 15 + (summaryLines.length * 4)
      })
    }
    
    // Save the PDF
    doc.save(`${resumeData.basics.name.replace(' ', '-')}-CV.pdf`)
    trackCvDownload() // Track CV download
    
  } catch (error) {
    console.error('Error generating PDF:', error)
    
    // Fallback: Create a simple text-based CV
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
    
    // Create and download text file as fallback
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${resumeData.basics.name.replace(' ', '-')}-CV.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }
}
