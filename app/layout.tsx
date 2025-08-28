import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { CustomCursor } from '@/components/custom-cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import { resumeData } from '@/lib/data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
    'TypeScript'
  ],
  authors: [{ name: resumeData.basics.name }],
  creator: resumeData.basics.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: resumeData.basics.url,
    title: `${resumeData.basics.name} - ${resumeData.basics.label}`,
    description: resumeData.basics.summary,
    siteName: `${resumeData.basics.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${resumeData.basics.name} - ${resumeData.basics.label}`,
    description: resumeData.basics.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              "worksFor": resumeData.work.filter(w => w.endDate === null).map(w => ({
                "@type": "Organization",
                "name": w.name
              }))
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
