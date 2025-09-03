import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmail, createReferralEmailTemplate } from '@/lib/email'

const referralSchema = z.object({
  // Referrer information
  referrerName: z.string().min(2, 'Name must be at least 2 characters'),
  referrerEmail: z.string().email('Please enter a valid email address'),
  referrerPhone: z.string().optional(),
  
  // Patient information
  patientName: z.string().min(2, 'Patient name must be at least 2 characters'),
  patientPhone: z.string().min(10, 'Please enter a valid phone number'),
  patientAddress: z.string().min(10, 'Please enter a complete address'),
  
  // Care details
  servicesNeeded: z.string().min(5, 'Please specify services needed'),
  urgency: z.enum(['immediate', 'within_week', 'within_month', 'flexible']),
  insuranceInfo: z.string().min(5, 'Please provide insurance information'),
  additionalInfo: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request data
    const validatedData = referralSchema.parse(body)
    
    // Check environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create email templates
    const { html, text } = createReferralEmailTemplate(validatedData)
    
    // Send email
    const result = await sendEmail({
      to: process.env.MAIL_TO || 'info@care-on-call.com',
      from: process.env.MAIL_FROM || 'no-reply@care-on-call.com',
      subject: `New Client Referral: ${validatedData.patientName}`,
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
    console.log(`Referral submitted: ${validatedData.referrerEmail} referring ${validatedData.patientName}`)

    return NextResponse.json(
      { message: 'Referral submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Referral form error:', error)
    
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