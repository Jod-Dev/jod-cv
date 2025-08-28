export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'gmail_smtp',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_gmail',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'd2flKGackRIKN71dF',
  toEmail: process.env.NEXT_PUBLIC_TO_EMAIL || 'jodlouis.dev@gmail.com'
}

export const isEmailConfigured = () => {
  return !!(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  )
}
