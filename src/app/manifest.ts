import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Care on Call Home Healthcare',
    short_name: 'Care on Call',
    description: 'Quality in-home healthcare services in Broward County, Florida. Licensed, trusted, and locally owned and operated.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/images/logos/care-on-call-logo.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/images/logos/care-on-call-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logos/care-on-call-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}