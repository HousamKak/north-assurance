# Deployment Guide

This guide covers deployment options for the North Assurance website.

## Prerequisites

- Node.js 18+ installed
- npm or pnpm installed
- Git repository set up
- Domain name configured (optional)

## Build for Production

```bash
# Install dependencies
npm install

# Run type check
npm run type-check

# Build for production
npm run build
```

The production build will be created in the `dist/` folder.

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel offers the easiest deployment for Vite applications.

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Configure Environment Variables:**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add `VITE_GOOGLE_MAPS_API_KEY`

4. **Custom Domain:**
   - Go to Vercel Dashboard → Project Settings → Domains
   - Add your domain (e.g., northassurance.com)

**vercel.json** (optional):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Option 2: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

3. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Environment Variables:**
   - Netlify Dashboard → Site Settings → Environment Variables
   - Add `VITE_GOOGLE_MAPS_API_KEY`

**netlify.toml**:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: Traditional Web Hosting (cPanel, etc.)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Upload all files from the `dist/` folder to your web server
   - Use FTP, SFTP, or cPanel File Manager

3. **Configure `.htaccess` (for Apache):**
   Create `.htaccess` in the root directory:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Environment Variables:**
   - Replace the `.env` variables at build time
   - OR use a `.env.production` file before building

### Option 4: AWS S3 + CloudFront

1. **Build:**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket:**
   - Create bucket with public access
   - Enable static website hosting

3. **Upload files:**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name
   ```

4. **Create CloudFront Distribution:**
   - Origin: Your S3 bucket
   - Default root object: `index.html`
   - Error pages: 404 → /index.html (for SPA routing)

5. **Configure DNS:**
   - Point your domain to CloudFront distribution

### Option 5: Docker

**Dockerfile**:
```dockerfile
# Build stage
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf**:
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Build and run:**
```bash
docker build -t north-assurance .
docker run -p 80:80 north-assurance
```

## Environment Variables

Ensure these are set in your deployment environment:

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps API key | Yes |

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify dark mode works
- [ ] Test navigation and routing
- [ ] Verify forms submit correctly
- [ ] Check Google Maps loads
- [ ] Test responsive design on mobile
- [ ] Run Lighthouse audit (target score: 90+)
- [ ] Verify SEO meta tags
- [ ] Test all links work
- [ ] Check browser console for errors
- [ ] Verify SSL certificate (HTTPS)
- [ ] Configure domain DNS

## Performance Optimization

### Before Deployment

1. **Optimize images:**
   ```bash
   # Install image optimization tools
   npm i -D imagemin imagemin-webp
   ```

2. **Check bundle size:**
   ```bash
   npm run build
   # Review dist/ folder size
   ```

3. **Enable compression** on your server:
   - Gzip or Brotli compression
   - Most hosting providers enable this by default

### CDN Configuration

For best performance, use a CDN:
- Cloudflare (free)
- AWS CloudFront
- Vercel Edge Network (automatic)

## SSL/HTTPS

Most modern hosting providers offer free SSL:
- **Vercel/Netlify**: Automatic SSL with Let's Encrypt
- **cPanel**: AutoSSL or Let's Encrypt
- **CloudFront**: AWS Certificate Manager (ACM)

## Monitoring

Set up monitoring after deployment:
- **Google Analytics**: Add tracking ID
- **Sentry**: Error tracking (optional)
- **Uptime monitoring**: UptimeRobot, Pingdom

## Troubleshooting

### Routes not working (404 on refresh)

**Solution**: Configure server to redirect all routes to `index.html`
- See `.htaccess` for Apache
- See `nginx.conf` for Nginx
- Vercel/Netlify handle this automatically

### Environment variables not working

**Solution**:
- Ensure variables start with `VITE_`
- Rebuild after changing .env
- Set variables in hosting dashboard

### Build fails

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Updating the Site

```bash
# Pull latest changes
git pull

# Install any new dependencies
npm install

# Build
npm run build

# Deploy (method depends on hosting)
vercel --prod  # or netlify deploy --prod
```

## Custom Domain Setup

1. **Purchase domain** (e.g., Namecheap, GoDaddy)

2. **Configure DNS:**
   - A Record: Point to server IP
   - OR CNAME: Point to hosting provider

3. **Example DNS Settings:**
   ```
   Type    Name    Value
   A       @       76.76.21.21 (your server IP)
   CNAME   www     your-site.vercel.app
   ```

4. **Wait for DNS propagation** (up to 48 hours)

## Support

For deployment issues:
- Check hosting provider documentation
- Review build logs for errors
- Ensure Node.js version matches (18+)
