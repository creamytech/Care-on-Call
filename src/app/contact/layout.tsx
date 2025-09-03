import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Care on Call Home Healthcare | Fort Lauderdale, FL',
  description: 'Contact Care on Call Home Healthcare in Fort Lauderdale, FL. Call (954) 358-5001 for quality home healthcare services. Located at 211 East Prospect Road, NE 44th St.',
  keywords: 'contact Care on Call, Fort Lauderdale healthcare, home healthcare contact, Florida healthcare provider contact',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}