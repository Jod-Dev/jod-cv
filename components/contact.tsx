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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information - Flat Design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">{t('contact.contactInformation', 'Contact Information')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('contact.availableMessage', 'I\'m currently available for new opportunities and would love to hear from you. Whether you have a question or just want to say hi, I\'ll try my best to get back to you!')}
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.div
                className="group flex items-center gap-4 py-3 border-b border-border/50"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t('contact.form.email', 'Email')}</p>
                  <p className="text-foreground font-medium">{resumeData.basics.email}</p>
                </div>
              </motion.div>
              
              <motion.div
                className="group flex items-center gap-4 py-3 border-b border-border/50"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t('contact.phone', 'Phone')}</p>
                  <p className="text-foreground font-medium">{resumeData.basics.phone}</p>
                </div>
              </motion.div>
              
              <motion.div
                className="group flex items-center gap-4 py-3 border-b border-border/50"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t('contact.location', 'Location')}</p>
                  <p className="text-foreground font-medium">
                    {resumeData.basics.location.city}, {resumeData.basics.location.region}
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="group flex items-center gap-4 py-3 border-b border-border/50"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t('footer.website', 'Website')}</p>
                  <p className="text-foreground font-medium">{resumeData.basics.url}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form - Flat Design */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{t('contact.letsConnect', 'Let\'s Connect')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ready to start a conversation? Send me a message and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
