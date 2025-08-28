import { resumeData } from './data'

export const seoConfig = {
  title: `${resumeData.basics.name} - ${resumeData.basics.label}`,
  description: resumeData.basics.summary,
  keywords: [
    'IT Support',
    'Web Development',
    'Technical Support',
    'System Administration',
    'Customer Support',
    'Troubleshooting',
    'React',
    'Next.js',
    'TypeScript',
    'Healthcare IT',
    'Payment Processing',
    'Network Support',
    'Windows Administration',
    'SQL',
    'ITSM'
  ].join(', '),
  author: resumeData.basics.name,
  url: resumeData.basics.url,
  image: `${resumeData.basics.url}/og-image.jpg`,
  twitterHandle: '@jodlouis',
  linkedinUrl: 'https://linkedin.com/in/jodlouis',
  githubUrl: 'https://github.com/Jod-Dev'
}

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": resumeData.basics.name,
  "jobTitle": resumeData.basics.label,
  "email": resumeData.basics.email,
  "telephone": resumeData.basics.phone,
  "url": resumeData.basics.url,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": resumeData.basics.location.address,
    "addressLocality": resumeData.basics.location.city,
    "addressRegion": resumeData.basics.location.region,
    "postalCode": resumeData.basics.location.postalCode,
    "addressCountry": resumeData.basics.location.countryCode
  },
  "description": resumeData.basics.summary,
  "knowsLanguage": resumeData.languages.map(lang => lang.language),
  "alumniOf": resumeData.education.map(edu => ({
    "@type": "EducationalOrganization",
    "name": edu.institution
  })),
  "worksFor": resumeData.work.filter(job => !job.endDate).map(job => ({
    "@type": "Organization",
    "name": job.name
  })),
  "sameAs": [
    seoConfig.linkedinUrl,
    seoConfig.githubUrl
  ]
}
