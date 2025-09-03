import nodemailer from 'nodemailer'

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.bizmail.yahoo.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true' || true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export interface EmailOptions {
  to: string
  from: string
  subject: string
  html: string
  text: string
  attachments?: Array<{
    filename: string
    content: Buffer
    contentType: string
  }>
}

export async function sendEmail(options: EmailOptions) {
  try {
    await transporter.sendMail(options)
    return { success: true }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Email templates
export function createContactEmailTemplate(data: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}) {
  const html = `
    <h2>New Contact Form Submission - Care on Call Home Healthcare</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, '<br>')}</p>
    
    <hr>
    <p><small>This message was sent from the Care on Call website contact form.</small></p>
  `

  const text = `
New Contact Form Submission - Care on Call Home Healthcare

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
Subject: ${data.subject}

Message:
${data.message}

---
This message was sent from the Care on Call website contact form.
  `

  return { html, text }
}

export function createCareerEmailTemplate(data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  position: string
  experience: string
  availability: string
  message?: string
  resumeAttached: boolean
}) {
  const html = `
    <h2>New Career Application - Care on Call Home Healthcare</h2>
    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Position Applied For:</strong> ${data.position}</p>
    <p><strong>Years of Experience:</strong> ${data.experience}</p>
    <p><strong>Availability:</strong> ${data.availability}</p>
    ${data.message ? `<p><strong>Additional Information:</strong></p><p>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
    <p><strong>Resume Attached:</strong> ${data.resumeAttached ? 'Yes' : 'No'}</p>
    
    <hr>
    <p><small>This application was submitted through the Care on Call website careers page.</small></p>
  `

  const text = `
New Career Application - Care on Call Home Healthcare

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Position Applied For: ${data.position}
Years of Experience: ${data.experience}
Availability: ${data.availability}
${data.message ? `Additional Information:\n${data.message}` : ''}
Resume Attached: ${data.resumeAttached ? 'Yes' : 'No'}

---
This application was submitted through the Care on Call website careers page.
  `

  return { html, text }
}

export function createReferralEmailTemplate(data: {
  referrerName: string
  referrerEmail: string
  referrerPhone?: string
  patientName: string
  patientPhone: string
  patientAddress: string
  servicesNeeded: string
  urgency: string
  insuranceInfo: string
  additionalInfo?: string
}) {
  const html = `
    <h2>New Client Referral - Care on Call Home Healthcare</h2>
    
    <h3>Referring Party Information</h3>
    <p><strong>Name:</strong> ${data.referrerName}</p>
    <p><strong>Email:</strong> ${data.referrerEmail}</p>
    ${data.referrerPhone ? `<p><strong>Phone:</strong> ${data.referrerPhone}</p>` : ''}
    
    <h3>Patient Information</h3>
    <p><strong>Patient Name:</strong> ${data.patientName}</p>
    <p><strong>Patient Phone:</strong> ${data.patientPhone}</p>
    <p><strong>Patient Address:</strong> ${data.patientAddress.replace(/\n/g, '<br>')}</p>
    
    <h3>Care Details</h3>
    <p><strong>Services Needed:</strong> ${data.servicesNeeded}</p>
    <p><strong>Urgency:</strong> ${data.urgency}</p>
    <p><strong>Insurance Information:</strong> ${data.insuranceInfo}</p>
    ${data.additionalInfo ? `<p><strong>Additional Information:</strong></p><p>${data.additionalInfo.replace(/\n/g, '<br>')}</p>` : ''}
    
    <hr>
    <p><small>This referral was submitted through the Care on Call website referral form.</small></p>
  `

  const text = `
New Client Referral - Care on Call Home Healthcare

Referring Party Information
Name: ${data.referrerName}
Email: ${data.referrerEmail}
${data.referrerPhone ? `Phone: ${data.referrerPhone}` : ''}

Patient Information
Patient Name: ${data.patientName}
Patient Phone: ${data.patientPhone}
Patient Address: ${data.patientAddress}

Care Details
Services Needed: ${data.servicesNeeded}
Urgency: ${data.urgency}
Insurance Information: ${data.insuranceInfo}
${data.additionalInfo ? `Additional Information:\n${data.additionalInfo}` : ''}

---
This referral was submitted through the Care on Call website referral form.
  `

  return { html, text }
}