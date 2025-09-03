'use client'

import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2, Upload, X } from 'lucide-react'

const careerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  position: z.string().min(2, 'Please select a position'),
  experience: z.string().min(1, 'Please specify your years of experience'),
  availability: z.string().min(2, 'Please specify your availability'),
  message: z.string().optional(),
})

type CareerFormData = z.infer<typeof careerSchema>

const positions = [
  'Registered Nurse (RN)',
  'Licensed Practical Nurse (LPN)',
  'Physical Therapist',
  'Occupational Therapist',
  'Speech Therapist',
  'Certified Nursing Assistant (CNA)',
  'Home Health Aide (HHA)',
  'Medical Social Worker',
  'Other'
]

const experienceOptions = [
  'Less than 1 year',
  '1-2 years',
  '3-5 years',
  '6-10 years',
  '10+ years'
]

const availabilityOptions = [
  'Full-time',
  'Part-time',
  'Per diem/PRN',
  'Live-in care',
  'Weekend only',
  'Weekday only'
]

export function CareerApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const form = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      availability: '',
      message: '',
    },
  })

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB')
        return
      }
      
      // Check file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ]
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document')
        return
      }
      
      setResumeFile(file)
    }
  }

  const removeFile = () => {
    setResumeFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const onSubmit = async (data: CareerFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      let resumeData = null
      if (resumeFile) {
        // Convert file to base64
        const reader = new FileReader()
        resumeData = await new Promise((resolve) => {
          reader.onload = (e) => {
            const result = e.target?.result as string
            const base64 = result.split(',')[1] // Remove data:application/pdf;base64, prefix
            resolve({
              resume: base64,
              resumeFileName: resumeFile.name,
              resumeFileType: resumeFile.type,
            })
          }
          reader.readAsDataURL(resumeFile)
        })
      }

      const submitData = {
        ...data,
        ...(resumeData || {}),
      }

      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
        setResumeFile(null)
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
        toast.success('Thank you for your application! We\'ll review it and get back to you soon.')
      } else {
        setSubmitStatus('error')
        toast.error('There was an error submitting your application. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      toast.error('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="application" className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              Start Your Career with Care on Call
            </h2>
            <p className="text-lg text-gray-600">
              Complete our online application to be considered for current and future opportunities.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Career Application Form</CardTitle>
              <CardDescription>
                Please fill out all required fields. We'll review your application and contact you if there's a good fit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Thank you for your application! We'll review it and contact you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">There was an error submitting your application. Please try again or call us directly.</p>
                </div>
              )}

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-brand mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        {...form.register('firstName')}
                        className="mt-1"
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        {...form.register('lastName')}
                        className="mt-1"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register('email')}
                        className="mt-1"
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...form.register('phone')}
                        className="mt-1"
                      />
                      {form.formState.errors.phone && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Position Information */}
                <div>
                  <h3 className="text-lg font-semibold text-brand mb-4">Position Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="position">Position Applied For *</Label>
                      <select
                        id="position"
                        {...form.register('position')}
                        className="mt-1 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-brand"
                      >
                        <option value="">Select a position...</option>
                        {positions.map((position) => (
                          <option key={position} value={position}>
                            {position}
                          </option>
                        ))}
                      </select>
                      {form.formState.errors.position && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.position.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <select
                        id="experience"
                        {...form.register('experience')}
                        className="mt-1 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-brand"
                      >
                        <option value="">Select experience...</option>
                        {experienceOptions.map((exp) => (
                          <option key={exp} value={exp}>
                            {exp}
                          </option>
                        ))}
                      </select>
                      {form.formState.errors.experience && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.experience.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="availability">Availability *</Label>
                      <select
                        id="availability"
                        {...form.register('availability')}
                        className="mt-1 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-brand"
                      >
                        <option value="">Select availability...</option>
                        {availabilityOptions.map((avail) => (
                          <option key={avail} value={avail}>
                            {avail}
                          </option>
                        ))}
                      </select>
                      {form.formState.errors.availability && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.availability.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <h3 className="text-lg font-semibold text-brand mb-4">Resume</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="mt-4">
                        <Label htmlFor="resume" className="cursor-pointer">
                          <span className="text-brand font-medium">Upload your resume</span>
                          <span className="text-gray-600"> or drag and drop</span>
                        </Label>
                        <Input
                          ref={fileInputRef}
                          id="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileSelect}
                          className="hidden"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        PDF, DOC, DOCX up to 5MB
                      </p>
                    </div>
                    
                    {resumeFile && (
                      <div className="mt-4 flex items-center justify-between bg-gray-50 px-4 py-2 rounded">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            {resumeFile.name}
                          </span>
                          <span className="ml-2 text-sm text-gray-500">
                            ({(resumeFile.size / 1024 / 1024).toFixed(1)} MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <Label htmlFor="message">Additional Information (Optional)</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    {...form.register('message')}
                    className="mt-1"
                    placeholder="Tell us why you're interested in working with Care on Call Home Healthcare..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-red-600 mt-1">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </Button>

                  <div className="text-sm text-gray-600 flex items-center">
                    All applications are reviewed confidentially
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="mt-8 text-center text-gray-600">
            <p>
              Questions about employment opportunities? Call{' '}
              <a href="tel:954-358-5001" className="text-brand hover:underline">
                (954) 358-5001
              </a>{' '}
              or email{' '}
              <a href="mailto:info@care-on-call.com" className="text-brand hover:underline">
                info@care-on-call.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}