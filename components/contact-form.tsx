"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'
import { emailConfig, isEmailConfigured } from '@/lib/email-config'
import { trackFormSubmission } from '@/components/analytics'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const { t } = useTranslations()
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Check if EmailJS is properly configured
      if (isEmailConfigured()) {
        const emailjs = await import('@emailjs/browser')
        
        // Initialize EmailJS with configured credentials
        emailjs.init(emailConfig.publicKey)
        
        const result = await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: emailConfig.toEmail,
            date: new Date().toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }),
            time: new Date().toLocaleTimeString('es-ES', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })
          }
        )
        
        if (result.status === 200) {
          setSubmitStatus('success')
          setFormData({ name: '', email: '', subject: '', message: '' })
          trackFormSubmission() // Track successful form submission
        } else {
          throw new Error('Email sending failed')
        }
      } else {
        // Fallback: Simulate email sending for demo purposes
        console.log('Email content that would be sent:')
        console.log('From:', formData.name, formData.email)
        console.log('Subject:', formData.subject)
        console.log('Message:', formData.message)
        
        // Simulate success for demo
        await new Promise(resolve => setTimeout(resolve, 2000))
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (error) {
      console.error('Email sending error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {t('contact.form.name', 'Name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder={t('contact.namePlaceholder', 'Your name')}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {t('contact.form.email', 'Email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder={t('contact.emailPlaceholder', 'your.email@example.com')}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          {t('contact.form.subject', 'Subject')} *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder={t('contact.subjectPlaceholder', 'What\'s this about?')}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {t('contact.form.message', 'Message')} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder={t('contact.messagePlaceholder', 'Tell me about your project or opportunity...')}
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            {t('contact.form.sending', 'Sending...')}
          </>
        ) : submitStatus === 'success' ? (
          <>
            <CheckCircle className="w-5 h-5" />
            {t('contact.form.sent', 'Message Sent!')}
          </>
        ) : submitStatus === 'error' ? (
          <>
            <AlertCircle className="w-5 h-5" />
            {t('contact.form.error', 'Try Again')}
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {t('contact.form.send', 'Send Message')}
          </>
        )}
      </button>
      
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <p className="text-green-800 text-sm">
            {t('contact.success', 'Thank you for your message! I\'ll get back to you as soon as possible.')}
          </p>
        </motion.div>
      )}
      
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-200 rounded-lg"
        >
                                <p className="text-red-800 text-sm">
                        {t('contact.error', 'There was an error sending your message. Please try again or contact me directly at jodlouis.dev@gmail.com')}
                      </p>
        </motion.div>
      )}
    </motion.form>
  )
}
