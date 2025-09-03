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
import { MapPin, Phone, Mail, Clock, Loader2 } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const officeHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
  { day: 'Sunday', hours: 'On-call for emergencies' },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
        toast.success('Thank you for your message! We\'ll get back to you soon.')
      } else {
        setSubmitStatus('error')
        toast.error('There was an error sending your message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      toast.error('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[hsl(var(--brand))]/5 to-[hsl(var(--brand))]/10 section-spacing">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We're here to help with all your home healthcare needs
            </p>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
              Contact Care on Call Home Healthcare today to learn more about our services 
              or to discuss your specific healthcare needs. Our team is ready to provide 
              the quality care you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="mb-6">Get in Touch</h2>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <Card className="border border-black/10 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-[hsl(var(--brand))] mr-2" />
                      <CardTitle className="text-lg">Address</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic text-[hsl(var(--muted-foreground))]">
                      Care on Call Home Healthcare<br />
                      211 East Prospect Road, NE 44th St.<br />
                      Fort Lauderdale, FL 33334
                    </address>
                  </CardContent>
                </Card>

                <Card className="border border-black/10 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-[hsl(var(--brand))] mr-2" />
                      <CardTitle className="text-lg">Phone</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <div className="font-medium text-gray-900">Local</div>
                      <a href="tel:+19543585001" className="text-[hsl(var(--brand))] hover:underline transition-colors duration-200">
                        (954) 358-5001
                      </a>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Fax</div>
                      <span className="text-[hsl(var(--muted-foreground))]">(954) 358-5008</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-black/10 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-[hsl(var(--brand))] mr-2" />
                      <CardTitle className="text-lg">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:info@care-on-call.com" className="text-[hsl(var(--brand))] hover:underline transition-colors duration-200">
                      info@care-on-call.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="border border-black/10 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-[hsl(var(--brand))] mr-2" />
                      <CardTitle className="text-lg">Office Hours</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {officeHours.map((schedule) => (
                        <div key={schedule.day} className="flex justify-between">
                          <span className="font-medium text-gray-900">{schedule.day}</span>
                          <span className="text-[hsl(var(--muted-foreground))]">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="text-sm text-[hsl(var(--muted-foreground))] pt-4 bg-[hsl(var(--brand))]/5 p-4 rounded-lg border border-[hsl(var(--brand))]/20">
                  <p className="font-medium text-[hsl(var(--brand))]">Florida License # 299993274</p>
                  <p className="mt-1">ACHC Accredited Home Healthcare Provider</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border border-black/10 shadow-lg">
                <CardHeader className="border-b border-black/10">
                  <CardTitle className="text-2xl text-[hsl(var(--brand))]">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800">There was an error sending your message. Please try again or call us directly.</p>
                    </div>
                  )}

                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          {...form.register('name')}
                          className="mt-1"
                        />
                        {form.formState.errors.name && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
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
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone</Label>
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

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        {...form.register('subject')}
                        className="mt-1"
                      />
                      {form.formState.errors.subject && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        {...form.register('message')}
                        className="mt-1"
                        placeholder="Please tell us how we can help you..."
                      />
                      {form.formState.errors.message && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-8 text-center">Our Location</h2>
            
            {/* Map Container with Placeholder */}
            <div className="bg-white rounded-2xl border border-black/10 shadow-lg overflow-hidden">
              <div className="relative">
                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-96 flex flex-col items-center justify-center text-center p-8">
                  <div className="bg-[hsl(var(--brand))]/10 rounded-full p-6 mb-6">
                    <MapPin className="h-12 w-12 text-[hsl(var(--brand))]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--brand))] mb-2">
                    Interactive Map Coming Soon
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] mb-4 max-w-md">
                    We're working on adding an interactive map to help you find our location easily.
                  </p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p className="font-medium">Care on Call Home Healthcare</p>
                    <p>211 East Prospect Road, NE 44th St.</p>
                    <p>Fort Lauderdale, FL 33334</p>
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=211+East+Prospect+Road+Fort+Lauderdale+FL+33334" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        Open in Google Maps
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href="tel:+19543585001" className="inline-flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Call for Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Area Information */}
            <div className="mt-8 text-center">
              <div className="bg-white rounded-2xl border border-black/10 shadow-sm p-8">
                <h3 className="text-lg font-semibold text-[hsl(var(--brand))] mb-4">
                  Serving Broward County & Surrounding Areas
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] mb-6">
                  We provide comprehensive home healthcare services throughout Broward County, 
                  including Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, and surrounding communities.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div>Fort Lauderdale</div>
                  <div>Hollywood</div>
                  <div>Pembroke Pines</div>
                  <div>Coral Springs</div>
                  <div>Davie</div>
                  <div>Plantation</div>
                  <div>Sunrise</div>
                  <div>Weston</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}