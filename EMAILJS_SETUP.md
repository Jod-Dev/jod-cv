# EmailJS Setup Guide

## Para configurar el envío de emails reales:

### 1. Crear cuenta en EmailJS
1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar Email Service
1. En el dashboard, ve a "Email Services"
2. Agrega un nuevo servicio (Gmail, Outlook, etc.)
3. Conecta tu cuenta de email
4. Copia el **Service ID**

### 3. Crear Email Template
1. Ve a "Email Templates"
2. Crea un nuevo template
3. Usa este template básico:

```html
Subject: New message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Copia el **Template ID**

### 4. Obtener Public Key
1. Ve a "Account" → "API Keys"
2. Copia tu **Public Key**

### 5. Actualizar el código
En `components/contact-form.tsx`, reemplaza:

```typescript
emailjs.init('YOUR_PUBLIC_KEY') // Tu public key
const result = await emailjs.send(
  'YOUR_SERVICE_ID', // Tu service ID
  'YOUR_TEMPLATE_ID', // Tu template ID
  // ...
)
```

### 6. Configuración completa
```typescript
// Ejemplo con valores reales:
emailjs.init('user_abc123def456')
const result = await emailjs.send(
  'service_xyz789',
  'template_contact_form',
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'ing.jod@gmail.com'
  }
)
```

## Plan Gratuito
- 200 emails por mes
- Suficiente para un portfolio personal

## Alternativas
Si prefieres no usar EmailJS:
- **Formspree**: Más simple, solo agregar action URL
- **Netlify Forms**: Si usas Netlify para hosting
- **Custom API**: Backend propio con nodemailer

## Nota
El formulario actual tiene un fallback que simula el envío para demostración. Una vez configurado EmailJS, enviará emails reales.
