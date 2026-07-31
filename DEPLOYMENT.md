# Deployment Guide - Secure Fit LLC BK

This guide provides detailed instructions for deploying the Secure Fit LLC BK landing page to production.

## Pre-Deployment Checklist

- [ ] All code is committed to version control
- [ ] Application builds successfully (`npm run build`)
- [ ] Production build runs locally (`npm start`)
- [ ] All environment variables are documented
- [ ] Domain name is configured (if applicable)
- [ ] SSL certificate is set up (for HTTPS)

## Quick Deployment Steps

### 1. Build the Application

```bash
# Navigate to project directory
cd Next_LeapFitBK-main

# Install dependencies (if not already done)
npm install

# Create production build
npm run build
```

**Verify the build:**
- Check that `.next` directory was created
- Look for "Compiled successfully" message
- No errors should appear in the terminal

### 2. Test Production Build Locally

```bash
# Start production server
npm start
```

Visit `http://localhost:3000` to verify everything works correctly.

### 3. Deploy to Production

Choose one of the deployment options below based on your hosting platform.

---

## Deployment Options

### Option A: Vercel (Easiest - Recommended)

Vercel is the company behind Next.js and provides the best integration.

#### Using Vercel Dashboard:

1. **Sign up/Login**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Create New Project**:
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js

3. **Configure Project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (or your project root)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `your-project.vercel.app`

5. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

#### Using Vercel CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (preview)
vercel

# Deploy to production
vercel --prod
```

**Advantages:**
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on Git push
- ✅ Preview deployments for PRs
- ✅ Free tier available
- ✅ Zero configuration needed

---

### Option B: Netlify

#### Using Netlify Dashboard:

1. **Sign up/Login**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Create New Site**:
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

3. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Base directory: (leave empty if root)

4. **Deploy**:
   - Click "Deploy site"
   - Wait for build to complete

#### Using Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize (first time)
netlify init

# Deploy
netlify deploy --prod
```

---

### Option C: AWS (EC2/Elastic Beanstalk)

#### Using EC2:

1. **Launch EC2 Instance**:
   - Choose Ubuntu Server
   - Configure security group (open port 3000)
   - Launch and connect via SSH

2. **Install Node.js**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone and Setup**:
   ```bash
   git clone <your-repo-url>
   cd Next_LeapFitBK-main
   npm install
   npm run build
   ```

4. **Use PM2**:
   ```bash
   npm install -g pm2
   pm2 start npm --name "secure-fit" -- start
   pm2 save
   pm2 startup
   ```

5. **Setup Nginx** (reverse proxy):
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/default
   ```
   
   Add configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   
   ```bash
   sudo nginx -t
   sudo systemctl restart nginx
   ```

6. **Setup SSL** (Let's Encrypt):
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

### Option D: Docker Deployment

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine AS base
   
   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   COPY package.json package-lock.json ./
   RUN npm ci
   
   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build
   
   # Production image
   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production
   
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   
   USER nextjs
   EXPOSE 3000
   ENV PORT 3000
   
   CMD ["node", "server.js"]
   ```

2. **Update next.config.js** (if needed):
   ```javascript
   module.exports = {
     output: 'standalone',
   }
   ```

3. **Build and Run**:
   ```bash
   docker build -t secure-fit .
   docker run -p 3000:3000 secure-fit
   ```

4. **Deploy to Docker Hub / Container Registry**:
   ```bash
   docker tag secure-fit yourusername/secure-fit:latest
   docker push yourusername/secure-fit:latest
   ```

---

## Post-Deployment Steps

### 1. Verify Deployment

- [ ] Visit the live URL
- [ ] Check all pages load correctly
- [ ] Verify images are loading
- [ ] Test all links and buttons
- [ ] Check mobile responsiveness
- [ ] Verify HTTPS is working (if applicable)

### 2. Monitor Performance

- Use tools like:
  - Google PageSpeed Insights
  - Lighthouse (Chrome DevTools)
  - Vercel Analytics (if using Vercel)

### 3. Set Up Monitoring

- Configure error tracking (Sentry, LogRocket, etc.)
- Set up uptime monitoring
- Configure alerts for downtime

### 4. Backup Strategy

- Ensure code is in version control (Git)
- Regular database backups (if applicable)
- Document deployment process

---

## Environment Variables

If your application uses environment variables:

### For Vercel:
1. Go to Project Settings → Environment Variables
2. Add variables for:
   - Production
   - Preview
   - Development

### For Netlify:
1. Go to Site Settings → Build & Deploy → Environment
2. Add environment variables

### For Traditional Server:
Create `.env.production` file:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## Continuous Deployment (CI/CD)

### GitHub Actions Example:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Troubleshooting Production Issues

### Issue: Build fails in production

**Check:**
- Node.js version matches local environment
- All dependencies are in `package.json`
- No missing environment variables
- Build logs for specific errors

### Issue: Application crashes

**Check:**
- Server logs
- Memory usage
- Process manager status (PM2)
- Error tracking service

### Issue: Slow performance

**Optimize:**
- Enable Next.js Image Optimization
- Check bundle size
- Enable compression
- Use CDN for static assets

---

## Rollback Procedure

If you need to rollback to a previous version:

### Vercel:
- Go to Deployments
- Find previous successful deployment
- Click "..." → "Promote to Production"

### Netlify:
- Go to Deploys
- Find previous deployment
- Click "Publish deploy"

### Manual:
```bash
git checkout <previous-commit>
npm run build
npm start
```

---

## Security Checklist

- [ ] HTTPS is enabled
- [ ] Environment variables are secure
- [ ] Dependencies are up to date
- [ ] No sensitive data in code
- [ ] Security headers configured
- [ ] Regular security audits

---

## Support

For deployment issues:
1. Check platform-specific documentation
2. Review build logs
3. Verify all prerequisites are met
4. Check server/system resources

---

**Last Updated**: 2024

