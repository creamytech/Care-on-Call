# Care on Call Home Healthcare Website

A modern, responsive website rebuild for Care on Call Home Healthcare in Fort Lauderdale, Florida. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with clean, accessible UI
- **Native Forms**: Contact, career applications, and client referrals with email delivery
- **SEO Optimized**: Meta tags, sitemap, and semantic HTML
- **Accessibility**: WCAG compliance and keyboard navigation
- **Fast Performance**: Optimized images, fonts, and loading strategies

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── api/               # API routes for form handling
│   ├── careers/           # Career opportunities page
│   ├── contact/           # Contact us page
│   ├── refer/             # Client referral page
│   ├── services/          # Our services page
│   ├── survey/            # Client satisfaction survey
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── career-application-form.tsx
│   ├── footer.tsx
│   └── header.tsx
└── lib/                   # Utilities and configurations
    ├── colors.ts          # Brand color system
    ├── email.ts           # Email templates and sending
    └── utils.ts           # General utilities
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Yahoo Business Mail SMTP credentials

### Installation

1. **Clone and install dependencies**:
   ```bash
   git clone <repository-url>
   cd Call-on-care
   npm install
   ```

2. **Environment Setup**:
   ```bash
   cp .env.example .env.local
   ```

3. **Configure Environment Variables**:
   Edit `.env.local` with your SMTP settings:
   ```
   # Yahoo Business Mail SMTP Configuration
   SMTP_HOST=smtp.bizmail.yahoo.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=your-email@care-on-call.com
   SMTP_PASS=your-app-password
   
   # Email Recipients
   MAIL_TO=info@care-on-call.com
   MAIL_FROM=no-reply@care-on-call.com
   ```

4. **Yahoo Business Mail Setup**:
   - Enable 2-factor authentication on your Yahoo Business account
   - Generate an app password specifically for SMTP
   - Use the app password (not your account password) in `SMTP_PASS`

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📧 Email Configuration

The website uses Nodemailer with Yahoo Business Mail SMTP for form submissions:

### SMTP Settings
- **Host**: smtp.bizmail.yahoo.com
- **Port**: 465 (SSL) or 587 (TLS)
- **Security**: SSL/TLS required
- **Authentication**: Username and app password

### Form Handlers
- **Contact Form** (`/api/contact`): General inquiries
- **Career Applications** (`/api/careers`): Job applications with resume uploads
- **Client Referrals** (`/api/referral`): Patient referrals

### Email Templates
All forms generate both HTML and plain text emails with:
- Professional formatting
- All form field data
- Source identification
- Timestamp and submission tracking

## 🎨 Design System

### Brand Colors
- **Primary**: #004080 (Deep Blue)
- **Accent**: #0066cc (Light Blue)
- **Text**: #1f2937 (Dark Gray)
- **Background**: #ffffff (White)

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Responsive headings (text-3xl/5xl)
- **Weights**: 400, 500, 600, 700

### Components
Built with shadcn/ui for consistency:
- Buttons with brand variants
- Cards with subtle shadows
- Form inputs with proper validation
- Loading states and error handling

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect to Vercel**:
   ```bash
   npx vercel
   ```

2. **Set Environment Variables**:
   - Go to Vercel Dashboard → Settings → Environment Variables
   - Add all variables from `.env.local`
   - Ensure SMTP credentials are secure

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Environment Variables for Production
Set these in your deployment platform:
```
SMTP_HOST=smtp.bizmail.yahoo.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@care-on-call.com
SMTP_PASS=your-yahoo-app-password
MAIL_TO=info@care-on-call.com
MAIL_FROM=no-reply@care-on-call.com
```

## 📝 Content Management

### Updating Content
Most content is stored in page components and can be updated by editing:
- `src/app/page.tsx` - Homepage content
- `src/app/about/page.tsx` - About us information
- `src/app/services/page.tsx` - Service descriptions
- `src/components/footer.tsx` - Contact information

### Contact Information
Update contact details in:
- `src/components/footer.tsx`
- `src/app/contact/page.tsx`
- Ensure consistency across all locations

### Form Fields
To modify forms, update:
- Zod schemas for validation
- Form components for UI
- Email templates in `src/lib/email.ts`

## 🔧 Maintenance

### Regular Tasks
- Monitor form submissions via server logs
- Update dependencies monthly: `npm update`
- Check broken links and images
- Review and update content for accuracy
- Monitor site performance with Lighthouse

### Backup and Security
- Forms include basic spam protection
- File uploads are validated and size-limited
- Email credentials should be rotated periodically
- Regular database backups (if added later)

## 📞 Support

For technical support or questions about the website:

**Care on Call Home Healthcare**
- Phone: (954) 358-5001
- Toll Free: 1-877-255-9090
- Email: info@care-on-call.com
- Address: 211 East Prospect Road, NE 44th St., Fort Lauderdale, FL 33334

**Development Team**
- Create issues in this repository for bug reports
- Review pull requests for content updates
- Monitor performance and uptime

## 📄 License

This project is proprietary to Care on Call Home Healthcare. All rights reserved.

---

*Built with ❤️ for Care on Call Home Healthcare - Providing quality home healthcare services in Broward County, Florida since [founding year].*