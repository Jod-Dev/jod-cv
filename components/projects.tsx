"use client"

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Globe } from 'lucide-react'
import { TranslatedH2, TranslatedP } from './translated-text'
import { useTranslations } from '@/hooks/useTranslations'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'Modern, responsive portfolio built with Next.js, TypeScript, and Framer Motion. Features interactive animations, 3D effects, and optimal performance.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Three.js'],
    image: '/api/placeholder/400/250',
    liveUrl: 'https://jodlouis.com',
    githubUrl: 'https://github.com/Jod-Dev/jod-cv',
    featured: true
  },
  {
    id: 'healthcare-system',
    title: 'Healthcare Support System',
    description: 'Technical support and system administration for healthcare software. Implemented troubleshooting procedures and user training programs.',
    technologies: ['Healthcare Software', 'Windows', 'SQL', 'Customer Support', 'ITSM'],
    image: '/api/placeholder/400/250',
    featured: true
  },
  {
    id: 'payment-platform',
    title: 'Payment Processing Platform',
    description: 'Provided technical support for PayPal\'s payment processing platform. Resolved complex payment issues and maintained security protocols.',
    technologies: ['Payment Processing', 'Security', 'Customer Support', 'ITSM'],
    image: '/api/placeholder/400/250',
    featured: false
  },
  {
    id: 'manufacturing-support',
    title: 'Manufacturing IT Support',
    description: 'IT support for manufacturing systems and office infrastructure. Maintained software systems and provided user training.',
    technologies: ['Manufacturing Systems', 'Windows', 'Network Support', 'Security'],
    image: '/api/placeholder/400/250',
    featured: false
  }
]

export function Projects() {
  const { t } = useTranslations()
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TranslatedH2 
            translationKey="projects.title"
            fallback="Projects & Work"
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          />
          <TranslatedP 
            translationKey="projects.subtitle"
            fallback="Here are some of the projects and systems I've worked on. Each represents a unique challenge and learning opportunity."
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
                project.featured ? 'md:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <Code className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Project Preview</p>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work or discussing a potential collaboration?
          </p>
          <motion.button
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
