import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refer a Client - Care on Call Home Healthcare | Fort Lauderdale, FL',
  description: 'Refer a client to Care on Call Home Healthcare for quality in-home care services in Broward County, Florida. Easy referral process for healthcare professionals and families.',
  keywords: 'refer patient, healthcare referral, home healthcare referral, Care on Call referral, Fort Lauderdale healthcare referral',
}

export default function ReferLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}