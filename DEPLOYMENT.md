# Deployment Guide - Care on Call Home Healthcare

## 🚀 Quick Deployment to Vercel

### Prerequisites
- Vercel account (free tier available)
- Yahoo Business Mail SMTP credentials
- GitHub repository (recommended)

### Step 1: Prepare Environment Variables
Before deployment, gather these credentials:

```env
SMTP_HOST=smtp.bizmail.yahoo.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@care-on-call.com
SMTP_PASS=your-yahoo-app-password
MAIL_TO=info@care-on-call.com
MAIL_FROM=no-reply@care-on-call.com
SITE_URL=https://your-domain.com
```

### Step 2: Yahoo Business Mail Setup
1. **Enable 2FA**: Go to Yahoo Account Settings → Security
2. **Generate App Password**: 
   - Go to "Manage app passwords"
   - Select "Mail" and generate a password
   - Use this password for `SMTP_PASS` (not your regular password)

### Step 3: Deploy to Vercel

#### Option A: GitHub Integration (Recommended)
1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Care on Call website"
   git branch -M main
   git remote add origin https://github.com/yourusername/care-on-call.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository
   - Framework will auto-detect as "Next.js"

#### Option B: Direct Deployment
```bash
npx vercel
# Follow the prompts to deploy
```

### Step 4: Configure Environment Variables in Vercel
1. Go to your project dashboard on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable from your `.env.local`:
   - `SMTP_HOST`
   - `SMTP_PORT` 
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `MAIL_TO`
   - `MAIL_FROM`
   - `SITE_URL`

### Step 5: Domain Configuration
1. **Add Custom Domain** (in Vercel dashboard):
   - Go to **Settings** → **Domains**
   - Add `care-on-call.com` and `www.care-on-call.com`
   - Follow DNS configuration instructions

2. **Update DNS Records**:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Step 6: Test Deployment
1. **Check Website**: Visit your deployed URL
2. **Test Forms**: 
   - Submit contact form
   - Try career application
   - Test client referral
3. **Check Email Delivery**: Verify emails are received at `info@care-on-call.com`

## 📊 Post-Deployment Monitoring

### Analytics Setup
1. **Vercel Analytics** (Recommended):
   - Enable in project settings
   - Privacy-focused, GDPR compliant

2. **Google Analytics** (Optional):
   - Add GA tracking code if needed
   - Configure conversion tracking for form submissions

### Performance Monitoring
- Use Vercel's built-in performance metrics
- Monitor Core Web Vitals
- Check form submission success rates

### Email Monitoring
- Monitor SMTP connection health
- Check email delivery rates
- Review bounce/error rates

## 🔧 Maintenance Tasks

### Weekly
- [ ] Check form submissions are working
- [ ] Review website performance metrics
- [ ] Monitor email delivery success

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Review and update content as needed
- [ ] Check for broken links
- [ ] Monitor security alerts

### Quarterly
- [ ] Rotate SMTP credentials
- [ ] Review and optimize performance
- [ ] Update contact information if changed
- [ ] Backup form submission data

## 🆘 Troubleshooting

### Common Issues

**Forms not sending emails:**
1. Check SMTP credentials in Vercel environment variables
2. Verify Yahoo app password (not regular password)
3. Check function logs in Vercel dashboard

**Website not loading:**
1. Check DNS configuration
2. Verify domain settings in Vercel
3. Check build logs for errors

**Performance issues:**
1. Review Core Web Vitals in Vercel
2. Optimize images if needed
3. Check for JavaScript errors

### Support Contacts
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Yahoo Business Mail**: 1-844-958-6023
- **Domain Registrar**: Contact your DNS provider

## 📋 Deployment Checklist

Pre-deployment:
- [ ] All forms tested locally
- [ ] SMTP credentials validated
- [ ] Content reviewed and approved
- [ ] SEO meta tags configured
- [ ] Mobile responsiveness verified

Post-deployment:
- [ ] SSL certificate active
- [ ] Forms sending emails successfully  
- [ ] All pages loading correctly
- [ ] Contact information accurate
- [ ] Analytics tracking (if configured)
- [ ] Sitemap submitted to Google

## 🔄 Updates and Changes

### Content Updates
Most content can be updated by editing the relevant page files and deploying. Changes are automatic with GitHub integration.

### Form Modifications
To modify forms:
1. Update validation schemas
2. Modify form components
3. Update email templates if needed
4. Test thoroughly before deploying

### Adding New Pages
1. Create new page in `src/app/`
2. Add to navigation if needed
3. Update sitemap configuration
4. Deploy and test

---

## 📞 Emergency Contacts

**Website Issues:**
- Development Team: [Create issue in repository]
- Vercel Status: [status.vercel.com](https://status.vercel.com)

**Email Issues:**
- Yahoo Business Mail Support
- Alternative: Switch to backup email service

**Care on Call Contacts:**
- Phone: (954) 358-5001
- Email: info@care-on-call.com
- Emergency: 1-877-255-9090

*This deployment is configured for high availability and should handle typical healthcare website traffic with ease.*