import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmail, createCareerEmailTemplate } from '@/lib/email'

const careerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  position: z.string().min(2, 'Please select a position'),
  experience: z.string().min(1, 'Please specify your years of experience'),
  availability: z.string().min(2, 'Please specify your availability'),
  message: z.string().optional(),
  resume: z.string().optional(), // Base64 encoded file
  resumeFileName: z.string().optional(),
  resumeFileType: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request data
    const validatedData = careerSchema.parse(body)
    
    // Check environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Prepare resume attachment if provided
    const attachments = []
    if (validatedData.resume && validatedData.resumeFileName) {
      try {
        const resumeBuffer = Buffer.from(validatedData.resume, 'base64')
        attachments.push({
          filename: validatedData.resumeFileName,
          content: resumeBuffer,
          contentType: validatedData.resumeFileType || 'application/pdf',
        })
      } catch (error) {
        console.error('Error processing resume attachment:', error)
      }
    }

    // Create email templates
    const { html, text } = createCareerEmailTemplate({
      ...validatedData,
      resumeAttached: attachments.length > 0,
    })
    
    // Send email
    const result = await sendEmail({
      to: process.env.MAIL_TO || 'info@care-on-call.com',
      from: process.env.MAIL_FROM || 'no-reply@care-on-call.com',
      subject: `Career Application: ${validatedData.position} - ${validatedData.firstName} ${validatedData.lastName}`,
      html,
      text,
      attachments,
    })

    if (!result.success) {
      console.error('Email sending failed:', result.error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Log submission (anonymized)
    console.log(`Career application submitted: ${validatedData.email} for ${validatedData.position}`)

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Career application error:', error)
    
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