import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmail, createContactEmailTemplate } from '@/lib/email'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request data
    const validatedData = contactSchema.parse(body)
    
    // Check environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create email templates
    const { html, text } = createContactEmailTemplate(validatedData)
    
    // Send email
    const result = await sendEmail({
      to: process.env.MAIL_TO || 'info@care-on-call.com',
      from: process.env.MAIL_FROM || 'no-reply@care-on-call.com',
      subject: `Website Contact: ${validatedData.subject}`,
      html,
      text,
    })

    if (!result.success) {
      console.error('Email sending failed:', result.error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Log submission (anonymized)
    console.log(`Contact form submitted: ${validatedData.email} - ${validatedData.subject}`)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}