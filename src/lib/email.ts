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
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; border: 2px solid #4A5568; border-radius: 8px; overflow: hidden; }
        .header { background-color: #4A5568; color: white; padding: 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #2D3748; margin-bottom: 5px; display: block; }
        .value { color: #4A5568; line-height: 1.5; }
        .message-box { background-color: #F7FAFC; border-left: 4px solid #4A5568; padding: 15px; margin-top: 10px; }
        .footer { text-align: center; color: #718096; font-size: 12px; padding: 20px; border-top: 1px solid #E2E8F0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Care on Call Home Healthcare, Inc.</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px;">(Contact Us Form)</p>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">Name:</span>
                <span class="value">${data.name}</span>
            </div>
            <div class="field">
                <span class="label">Email:</span>
                <span class="value">${data.email}</span>
            </div>
            ${data.phone ? `
            <div class="field">
                <span class="label">Phone:</span>
                <span class="value">${data.phone}</span>
            </div>` : ''}
            <div class="field">
                <span class="label">Subject:</span>
                <span class="value">${data.subject}</span>
            </div>
            <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">
                    ${data.message.replace(/\n/g, '<br>')}
                </div>
            </div>
        </div>
        <div class="footer">
            This message was sent from the Care on Call website contact form.
        </div>
    </div>
</body>
</html>`

  const text = `
Care on Call Home Healthcare, Inc.
(Contact Us Form)

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
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; border: 2px solid #4A5568; border-radius: 8px; overflow: hidden; }
        .header { background-color: #4A5568; color: white; padding: 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #2D3748; margin-bottom: 5px; display: block; }
        .value { color: #4A5568; line-height: 1.5; }
        .message-box { background-color: #F7FAFC; border-left: 4px solid #4A5568; padding: 15px; margin-top: 10px; }
        .footer { text-align: center; color: #718096; font-size: 12px; padding: 20px; border-top: 1px solid #E2E8F0; }
        .resume-badge { background-color: #48BB78; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; }
        .no-resume-badge { background-color: #ED8936; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Care on Call Home Healthcare, Inc.</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px;">(Career Application)</p>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">Name:</span>
                <span class="value">${data.firstName} ${data.lastName}</span>
            </div>
            <div class="field">
                <span class="label">Email:</span>
                <span class="value">${data.email}</span>
            </div>
            <div class="field">
                <span class="label">Phone:</span>
                <span class="value">${data.phone}</span>
            </div>
            <div class="field">
                <span class="label">Position Applied For:</span>
                <span class="value">${data.position}</span>
            </div>
            <div class="field">
                <span class="label">Years of Experience:</span>
                <span class="value">${data.experience}</span>
            </div>
            <div class="field">
                <span class="label">Availability:</span>
                <span class="value">${data.availability}</span>
            </div>
            ${data.message ? `
            <div class="field">
                <span class="label">Additional Information:</span>
                <div class="message-box">
                    ${data.message.replace(/\n/g, '<br>')}
                </div>
            </div>` : ''}
            <div class="field">
                <span class="label">Resume:</span>
                <span class="${data.resumeAttached ? 'resume-badge' : 'no-resume-badge'}">${data.resumeAttached ? 'Attached' : 'Not Provided'}</span>
            </div>
        </div>
        <div class="footer">
            This application was submitted through the Care on Call website careers page.
        </div>
    </div>
</body>
</html>`

  const text = `
Care on Call Home Healthcare, Inc.
(Career Application)

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
  const urgencyColors = {
    'immediate': '#DC2626',
    'within_week': '#EA580C', 
    'within_month': '#CA8A04',
    'flexible': '#059669'
  }
  
  const urgencyLabels = {
    'immediate': 'URGENT - Immediate',
    'within_week': 'Within 1 Week',
    'within_month': 'Within 1 Month', 
    'flexible': 'Flexible Timeline'
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; border: 2px solid #4A5568; border-radius: 8px; overflow: hidden; }
        .header { background-color: #4A5568; color: white; padding: 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px; }
        .section { margin-bottom: 30px; }
        .section-title { font-size: 18px; font-weight: bold; color: #2D3748; margin-bottom: 15px; border-bottom: 2px solid #4A5568; padding-bottom: 5px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2D3748; margin-bottom: 5px; display: block; }
        .value { color: #4A5568; line-height: 1.5; }
        .message-box { background-color: #F7FAFC; border-left: 4px solid #4A5568; padding: 15px; margin-top: 10px; }
        .footer { text-align: center; color: #718096; font-size: 12px; padding: 20px; border-top: 1px solid #E2E8F0; }
        .urgency-badge { color: white; padding: 6px 16px; border-radius: 20px; font-size: 14px; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Care on Call Home Healthcare, Inc.</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px;">(Client Referral)</p>
        </div>
        <div class="content">
            <div class="section">
                <div class="section-title">Referring Party Information</div>
                <div class="field">
                    <span class="label">Name:</span>
                    <span class="value">${data.referrerName}</span>
                </div>
                <div class="field">
                    <span class="label">Email:</span>
                    <span class="value">${data.referrerEmail}</span>
                </div>
                ${data.referrerPhone ? `
                <div class="field">
                    <span class="label">Phone:</span>
                    <span class="value">${data.referrerPhone}</span>
                </div>` : ''}
            </div>
            
            <div class="section">
                <div class="section-title">Patient Information</div>
                <div class="field">
                    <span class="label">Patient Name:</span>
                    <span class="value">${data.patientName}</span>
                </div>
                <div class="field">
                    <span class="label">Patient Phone:</span>
                    <span class="value">${data.patientPhone}</span>
                </div>
                <div class="field">
                    <span class="label">Patient Address:</span>
                    <span class="value">${data.patientAddress.replace(/\n/g, '<br>')}</span>
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">Care Details</div>
                <div class="field">
                    <span class="label">Services Needed:</span>
                    <span class="value">${data.servicesNeeded}</span>
                </div>
                <div class="field">
                    <span class="label">Urgency:</span>
                    <span class="urgency-badge" style="background-color: ${urgencyColors[data.urgency as keyof typeof urgencyColors] || '#6B7280'};">${urgencyLabels[data.urgency as keyof typeof urgencyLabels] || data.urgency}</span>
                </div>
                <div class="field">
                    <span class="label">Insurance Information:</span>
                    <span class="value">${data.insuranceInfo}</span>
                </div>
                ${data.additionalInfo ? `
                <div class="field">
                    <span class="label">Additional Information:</span>
                    <div class="message-box">
                        ${data.additionalInfo.replace(/\n/g, '<br>')}
                    </div>
                </div>` : ''}
            </div>
        </div>
        <div class="footer">
            This referral was submitted through the Care on Call website referral form.
        </div>
    </div>
</body>
</html>`

  const text = `
Care on Call Home Healthcare, Inc.
(Client Referral)

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
Urgency: ${urgencyLabels[data.urgency as keyof typeof urgencyLabels] || data.urgency}
Insurance Information: ${data.insuranceInfo}
${data.additionalInfo ? `Additional Information:\n${data.additionalInfo}` : ''}

---
This referral was submitted through the Care on Call website referral form.
  `

  return { html, text }
}