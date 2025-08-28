"use client"

import { motion } from 'framer-motion'
import { resumeData } from '@/lib/data'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'

export function Contact() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations. 
            Feel free to reach out if you&apos;d like to connect!
          </p>
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
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-4 p-4 bg-background rounded-lg border border-border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
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
                  <p className="font-medium">Phone</p>
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
                  <p className="font-medium">Location</p>
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
                  <p className="font-medium">Website</p>
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
            <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m currently available for new opportunities and would love to hear from you. 
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            
            <motion.button
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(`mailto:${resumeData.basics.email}`, '_blank')}
            >
              Send Email
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
