/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://care-on-call.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://care-on-call.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const priorities = {
      '/': 1.0,
      '/about': 0.9,
      '/services': 0.9,
      '/contact': 0.8,
      '/careers': 0.7,
      '/refer': 0.8,
      '/survey': 0.5,
      '/privacy': 0.3,
      '/nondiscrimination': 0.3,
    }

    const changeFreqs = {
      '/': 'daily',
      '/about': 'monthly',
      '/services': 'monthly',
      '/contact': 'monthly',
      '/careers': 'weekly',
      '/refer': 'monthly',
      '/survey': 'monthly',
      '/privacy': 'yearly',
      '/nondiscrimination': 'yearly',
    }

    return {
      loc: path,
      changefreq: changeFreqs[path] || 'monthly',
      priority: priorities[path] || 0.5,
      lastmod: new Date().toISOString(),
    }
  },
}