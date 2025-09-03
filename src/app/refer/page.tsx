'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Heart, Users, Shield, Loader2, Phone, Mail } from 'lucide-react'

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

type ReferralFormData = z.infer<typeof referralSchema>

const urgencyOptions = [
  { value: 'immediate', label: 'Immediate (within 24 hours)' },
  { value: 'within_week', label: 'Within a week' },
  { value: 'within_month', label: 'Within a month' },
  { value: 'flexible', label: 'Flexible timing' },
]

const benefitsOfReferring = [
  {
    icon: Heart,
    title: 'Quality Care',
    description: 'Professional, compassionate healthcare services in the comfort of home',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'State of Florida licensed with comprehensive screening of all staff',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: '24/7 availability with registered nurses and skilled healthcare professionals',
  },
]

export default function ReferralPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const steps = [
    { number: 1, title: 'Your Information', description: 'Tell us about yourself' },
    { number: 2, title: 'Patient Details', description: 'Provide patient information' },
    { number: 3, title: 'Care Needs', description: 'Describe care requirements' },
    { number: 4, title: 'Review & Submit', description: 'Confirm and send referral' }
  ]

  const form = useForm<ReferralFormData>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      referrerName: '',
      referrerEmail: '',
      referrerPhone: '',
      patientName: '',
      patientPhone: '',
      patientAddress: '',
      servicesNeeded: '',
      urgency: 'flexible',
      insuranceInfo: '',
      additionalInfo: '',
    },
  })

  const onSubmit = async (data: ReferralFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
        toast.success('Thank you for your referral! We\'ll contact you and the client soon.')
      } else {
        setSubmitStatus('error')
        toast.error('There was an error submitting your referral. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      toast.error('There was an error submitting your referral. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero Section with Steps */}
      <section className="bg-gradient-to-r from-[hsl(var(--brand))]/5 to-[hsl(var(--brand))]/10 section-spacing">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="mb-6">
              Refer a Client
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Help someone receive the quality home healthcare they deserve
            </p>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
              If you know someone who could benefit from our professional home healthcare services, 
              we'd be honored to help. Complete the referral form below and we'll contact them 
              promptly to discuss their care needs.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col md:flex-row items-center md:items-start">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition-colors duration-200 ${
                      currentStep >= step.number
                        ? 'bg-[hsl(var(--brand))] text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step.number}
                    </div>
                    <div className="text-center mt-2">
                      <div className={`text-sm font-medium ${
                        currentStep >= step.number
                          ? 'text-[hsl(var(--brand))]'
                          : 'text-gray-500'
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                        {step.description}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`hidden md:block w-24 h-0.5 mt-6 mx-4 ${
                      currentStep > step.number
                        ? 'bg-[hsl(var(--brand))]'
                        : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Refer Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Why Refer to Care on Call?
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              We're committed to providing exceptional care that gives families peace of mind 
              and helps patients maintain their independence at home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefitsOfReferring.map((benefit) => (
              <Card key={benefit.title} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-black/10">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-[hsl(var(--brand))]/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-[hsl(var(--brand))]" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border border-black/10 shadow-lg">
              <CardHeader className="text-center border-b border-black/10">
                <CardTitle className="text-2xl text-[hsl(var(--brand))]">Client Referral Form</CardTitle>
                <CardDescription>
                  Please provide the following information about the patient and their care needs.
                  All information will be kept confidential.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">Thank you for the referral! We'll contact the patient within 24 hours.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">There was an error submitting the referral. Please try again or call us directly.</p>
                  </div>
                )}

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Step Indicator in Form */}
                  <div className="mb-8 p-4 bg-[hsl(var(--brand))]/5 rounded-lg border border-[hsl(var(--brand))]/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-[hsl(var(--brand))]">
                          Step {currentStep}: {steps[currentStep - 1]?.title}
                        </h3>
                        <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">
                          {steps[currentStep - 1]?.description}
                        </p>
                      </div>
                      <div className="text-sm text-[hsl(var(--muted-foreground))]">
                        {currentStep} of {steps.length}
                      </div>
                    </div>
                  </div>

                  {/* Referrer Information */}
                  {currentStep === 1 && (
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--brand))] mb-4">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="referrerName">Your Name *</Label>
                        <Input
                          id="referrerName"
                          {...form.register('referrerName')}
                          className="mt-1"
                        />
                        {form.formState.errors.referrerName && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.referrerName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="referrerEmail">Your Email *</Label>
                        <Input
                          id="referrerEmail"
                          type="email"
                          {...form.register('referrerEmail')}
                          className="mt-1"
                        />
                        {form.formState.errors.referrerEmail && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.referrerEmail.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label htmlFor="referrerPhone">Your Phone (Optional)</Label>
                      <Input
                        id="referrerPhone"
                        type="tel"
                        {...form.register('referrerPhone')}
                        className="mt-1"
                      />
                      {form.formState.errors.referrerPhone && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.referrerPhone.message}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-end mt-6">
                      <Button 
                        type="button" 
                        onClick={() => setCurrentStep(2)}
                        disabled={!form.watch('referrerName') || !form.watch('referrerEmail')}
                      >
                        Next: Patient Details
                      </Button>
                    </div>
                  </div>
                  )}

                  {/* Patient Information */}
                  {currentStep === 2 && (
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--brand))] mb-4">Patient Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="patientName">Patient Name *</Label>
                        <Input
                          id="patientName"
                          {...form.register('patientName')}
                          className="mt-1"
                        />
                        {form.formState.errors.patientName && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.patientName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="patientPhone">Patient Phone *</Label>
                        <Input
                          id="patientPhone"
                          type="tel"
                          {...form.register('patientPhone')}
                          className="mt-1"
                        />
                        {form.formState.errors.patientPhone && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.patientPhone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label htmlFor="patientAddress">Patient Address *</Label>
                      <Textarea
                        id="patientAddress"
                        rows={3}
                        {...form.register('patientAddress')}
                        className="mt-1"
                        placeholder="Street address, city, state, zip code"
                      />
                      {form.formState.errors.patientAddress && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.patientAddress.message}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-between mt-6">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                      >
                        Previous
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => setCurrentStep(3)}
                        disabled={!form.watch('patientName') || !form.watch('patientPhone') || !form.watch('patientAddress')}
                      >
                        Next: Care Needs
                      </Button>
                    </div>
                  </div>
                  )}

                  {/* Care Details */}
                  {currentStep === 3 && (
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--brand))] mb-4">Care Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="servicesNeeded">Services Needed *</Label>
                        <Textarea
                          id="servicesNeeded"
                          rows={3}
                          {...form.register('servicesNeeded')}
                          className="mt-1"
                          placeholder="Please describe the type of care needed (nursing, therapy, personal care, etc.)"
                        />
                        {form.formState.errors.servicesNeeded && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.servicesNeeded.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="urgency">Timeline for Care *</Label>
                        <select
                          id="urgency"
                          {...form.register('urgency')}
                          className="mt-1 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[hsl(var(--brand))]"
                        >
                          {urgencyOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {form.formState.errors.urgency && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.urgency.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="insuranceInfo">Insurance Information *</Label>
                        <Textarea
                          id="insuranceInfo"
                          rows={2}
                          {...form.register('insuranceInfo')}
                          className="mt-1"
                          placeholder="Medicare, Medicaid, private insurance, self-pay, etc."
                        />
                        {form.formState.errors.insuranceInfo && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.insuranceInfo.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                        <Textarea
                          id="additionalInfo"
                          rows={3}
                          {...form.register('additionalInfo')}
                          className="mt-1"
                          placeholder="Any additional information that would help us provide better care"
                        />
                        {form.formState.errors.additionalInfo && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.additionalInfo.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between mt-6">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setCurrentStep(2)}
                      >
                        Previous
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => setCurrentStep(4)}
                        disabled={!form.watch('servicesNeeded') || !form.watch('insuranceInfo')}
                      >
                        Review & Submit
                      </Button>
                    </div>
                  </div>
                  )}

                  {/* Review Step */}
                  {currentStep === 4 && (
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--brand))] mb-4">Review Your Referral</h3>
                    <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-[hsl(var(--brand))] mb-2">Your Information</h4>
                        <p><strong>Name:</strong> {form.watch('referrerName') || 'Not provided'}</p>
                        <p><strong>Email:</strong> {form.watch('referrerEmail') || 'Not provided'}</p>
                        {form.watch('referrerPhone') && <p><strong>Phone:</strong> {form.watch('referrerPhone')}</p>}
                      </div>
                      <div>
                        <h4 className="font-medium text-[hsl(var(--brand))] mb-2">Patient Information</h4>
                        <p><strong>Name:</strong> {form.watch('patientName') || 'Not provided'}</p>
                        <p><strong>Phone:</strong> {form.watch('patientPhone') || 'Not provided'}</p>
                        <p><strong>Address:</strong> {form.watch('patientAddress') || 'Not provided'}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-[hsl(var(--brand))] mb-2">Care Information</h4>
                        <p><strong>Services Needed:</strong> {form.watch('servicesNeeded') || 'Not provided'}</p>
                        <p><strong>Timeline:</strong> {urgencyOptions.find(opt => opt.value === form.watch('urgency'))?.label || 'Flexible timing'}</p>
                        <p><strong>Insurance:</strong> {form.watch('insuranceInfo') || 'Not provided'}</p>
                        {form.watch('additionalInfo') && <p><strong>Additional Info:</strong> {form.watch('additionalInfo')}</p>}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setCurrentStep(3)}
                      >
                        Previous
                      </Button>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="flex-1"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Submitting Referral...
                          </>
                        ) : (
                          'Submit Referral'
                        )}
                      </Button>
                    </div>

                    <div className="text-sm text-[hsl(var(--muted-foreground))] flex items-center mt-4">
                      <Shield className="h-4 w-4 mr-1" />
                      All information is kept strictly confidential
                    </div>
                  </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing bg-[hsl(var(--brand))] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">
              Questions About Referrals?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Our team is here to help you understand our services and answer any questions 
              about the referral process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                asChild
                className="bg-white text-[hsl(var(--brand))] hover:bg-white/90"
              >
                <a href="tel:+19543585001">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (954) 358-5001
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-[hsl(var(--brand))] transition-colors duration-200" 
                asChild
              >
                <a href="mailto:info@care-on-call.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}