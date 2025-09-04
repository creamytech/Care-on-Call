import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Award, Users, Heart, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Care on Call Home Healthcare | Licensed Florida Healthcare Provider',
  description: 'Learn about Care on Call Home Healthcare, a licensed, locally-owned provider of quality in-home healthcare services in Broward County, Florida. Professional excellence since 1995.',
  keywords: 'about Care on Call, licensed healthcare provider, home healthcare Fort Lauderdale, Florida healthcare services',
}

const qualityFeatures = [
  {
    icon: Shield,
    title: 'Licensed & Credentialed',
    description: 'Licensed by the State of Florida with extensive screening of all healthcare professionals.'
  },
  {
    icon: Award,
    title: 'Professional Excellence',
    description: 'Licensure verification, criminal background checks, and competency testing for all staff.'
  },
  {
    icon: Users,
    title: 'Locally Owned & Operated',
    description: 'A Fort Lauderdale-based company committed to serving our local community.'
  },
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Providing dependable, accessible home healthcare services tailored to individual needs.'
  }
]

const screeningProcess = [
  'Licensure verification for all healthcare professionals',
  'Comprehensive criminal background checks',
  'Professional reference verification',
  'Competency testing and skills assessment',
  'Ongoing training and education requirements',
  'Regular performance evaluations'
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-50 to-brand-100 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
              About Care on Call Home Healthcare
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Care You Can Trust
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Care on Call Home Healthcare is a provider of quality in-home care services 
              in Broward County, Florida. We offer care ranging from a few hours to 24/7 assistance, 
              with credentialed healthcare professionals who are committed to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
                Serving Broward County with Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Located in Fort Lauderdale, Florida, Care on Call Home Healthcare 
                provides comprehensive in-home healthcare services throughout Broward County. 
                Our locally owned and operated company understands the unique needs of our community.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We offer live-in assistance with credentialed aides who provide full-time, 
                ongoing care at reduced daily rates. Our services accept Medicare, private, 
                and custodial payments, making quality healthcare accessible to all.
              </p>
              <Button size="lg" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand rounded-full mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To provide professional, dependable, and accessible home healthcare 
                  services that exceed expectations while maintaining the highest standards 
                  of care and compassion in the comfort of your own home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
              Why Choose Care on Call?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality, safety, and professional excellence sets us apart 
              in the home healthcare industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature) => (
              <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screening Process */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-brand/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-700 mb-6">
                License & Accreditation
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <Award className="h-8 w-8 text-gray-700 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-700">State of Florida Licensed</div>
                    <div className="text-sm text-gray-600">License # 299993274</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <Users className="h-8 w-8 text-gray-700 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-700">Locally Owned & Operated</div>
                    <div className="text-sm text-gray-600">Fort Lauderdale, Florida</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <Heart className="h-8 w-8 text-gray-700 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-700">Medicare Certified</div>
                    <div className="text-sm text-gray-600">Accepting Medicare & Private Pay</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Extensive Staff Screening
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We maintain the highest standards for our healthcare professionals through 
                our comprehensive screening and verification process:
              </p>
              <ul className="space-y-3">
                {screeningProcess.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Care on Call Difference
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Contact us today to learn how our professional, compassionate healthcare 
              team can provide the quality care you or your loved one deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:954-358-5001">Call (954) 358-5001</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-700" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}