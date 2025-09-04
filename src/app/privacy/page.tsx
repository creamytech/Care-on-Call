export default function PrivacyPage() {
  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-700 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg mb-8">
            Last updated: {new Date().getFullYear()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              Care on Call Home Healthcare collects information necessary to provide quality healthcare services. 
              This may include personal information, medical information, and contact details provided by clients 
              and their families.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use your information solely for the purpose of providing healthcare services, coordinating care 
              with your healthcare providers, and maintaining our professional obligations under healthcare 
              regulations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Information Protection</h2>
            <p className="text-gray-700 mb-4">
              We maintain strict confidentiality and security measures to protect your personal health 
              information in accordance with HIPAA regulations and Florida state laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this privacy policy or how we handle your information, 
              please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Care on Call Home Healthcare</p>
              <p className="text-gray-700">211 East Prospect Road, NE 44th St.</p>
              <p className="text-gray-700">Fort Lauderdale, FL 33334</p>
              <p className="text-gray-700">Phone: (954) 358-5001</p>
              <p className="text-gray-700">Email: info@care-on-call.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}