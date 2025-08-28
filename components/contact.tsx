"use client"

import { motion } from 'framer-motion'
import { resumeData } from '@/lib/data'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { ContactForm } from './contact-form'
import { TranslatedText, TranslatedH2, TranslatedP } from './translated-text'
import { useTranslations } from '@/hooks/useTranslations'

export function Contact() {
  const { t } = useTranslations()
  
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TranslatedH2 
            translationKey="contact.title"
            fallback="Get In Touch"
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          />
          <TranslatedP 
            translationKey="contact.subtitle"
            fallback="I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to connect!"
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">{t('contact.contactInformation', 'Contact Information')}</h3>
            
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-4 p-4 bg-background rounded-lg border border-border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">{t('contact.form.email', 'Email')}</p>
                  <p className="text-muted-foreground">{resumeData.basics.email}</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-4 p-4 bg-background rounded-lg border border-border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">{t('contact.phone', 'Phone')}</p>
                  <p className="text-muted-foreground">{resumeData.basics.phone}</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-4 p-4 bg-background rounded-lg border border-border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">{t('contact.location', 'Location')}</p>
                  <p className="text-muted-foreground">
                    {resumeData.basics.location.city}, {resumeData.basics.location.region}
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-4 p-4 bg-background rounded-lg border border-border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Globe className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">{t('footer.website', 'Website')}</p>
                  <p className="text-muted-foreground">{resumeData.basics.url}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-lg p-6"
          >
            <h3 className="text-2xl font-semibold mb-6">{t('contact.letsConnect', 'Let\'s Connect')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('contact.availableMessage', 'I\'m currently available for new opportunities and would love to hear from you. Whether you have a question or just want to say hi, I\'ll try my best to get back to you!')}
            </p>
            
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
