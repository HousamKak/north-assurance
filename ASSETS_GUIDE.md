# Assets Migration Guide

This guide explains how to add images and assets to the North Assurance website.

## Directory Structure

```
public/
└── images/
    ├── hero/           # Hero carousel images
    ├── services/       # Service and feature images
    ├── team/           # Team member photos
    ├── logos/          # Company logos and icons
    └── README.md       # General images guide
```

## Required Assets

### 1. Logos (`public/images/logos/`)

**Files needed:**
- `logo.svg` - Main color logo
- `logo-white.svg` - White version for dark backgrounds
- `logo-dark.svg` - Dark version for light backgrounds
- `favicon.ico` - Browser favicon (16x16, 32x32, 48x48)
- `logo-192.png` - PWA icon 192x192
- `logo-512.png` - PWA icon 512x512

**Specifications:**
- Format: SVG (vector) preferred for logos
- PNG with transparent background for icons
- Colors: Primary #015FC9, Secondary #0DD3F1

**Usage:**
```tsx
<img src="/images/logos/logo.svg" alt="North Assurance" />
```

### 2. Hero Images (`public/images/hero/`)

**Files needed:**
- `hero-1.jpg` - Main hero image (insurance/protection theme)
- `hero-2.jpg` - Secondary hero image (trust/legacy theme)

**Specifications:**
- Dimensions: 1920x1080px (Full HD)
- Format: JPG or WebP
- File size: < 500KB (optimized)
- Aspect ratio: 16:9

**Where used:**
- Home page HeroCarousel component

**Optimization:**
```bash
# Use tools like imagemagick or online services
# Target quality: 85%
# Enable progressive JPEG
```

### 3. Service Images (`public/images/services/`)

**Files needed:**
- `insurance-protection.jpg`
- `claims-process.jpg`
- `customer-service.jpg`
- `team-collaboration.jpg`

**Specifications:**
- Dimensions: 800x600px
- Format: JPG or WebP
- File size: < 200KB
- Aspect ratio: 4:3

**Where used:**
- Service sections throughout the website
- Feature showcases
- About page

### 4. Team Photos (`public/images/team/`)

**Files needed:**
- Named by person: `firstname-lastname.jpg`
- Example: `john-doe.jpg`, `jane-smith.jpg`

**Specifications:**
- Dimensions: 400x400px (square)
- Format: JPG or WebP
- File size: < 100KB
- Style: Professional headshots with neutral background

**Where used:**
- About page TeamGrid component

**Fallback:**
The application uses UI Avatars API as fallback:
```tsx
https://ui-avatars.com/api/?name=${firstName}+${lastName}&size=400&background=015FC9&color=fff
```

## Image Optimization Checklist

### Before Adding Images

- [ ] Resize to required dimensions
- [ ] Compress to target file size
- [ ] Convert to modern formats (WebP) if possible
- [ ] Ensure proper naming convention
- [ ] Check image quality

### Tools for Optimization

**Online Tools:**
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Modern formats, WebP
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

**Command Line:**
```bash
# ImageMagick - Resize and compress
convert input.jpg -resize 1920x1080 -quality 85 output.jpg

# cwebp - Convert to WebP
cwebp -q 85 input.jpg -o output.webp

# SVGO - Optimize SVG
npx svgo input.svg -o output.svg
```

## Adding New Images

### Step 1: Prepare the image
```bash
# Resize to correct dimensions
# Compress to target size
# Name appropriately
```

### Step 2: Add to appropriate folder
```bash
cp your-image.jpg public/images/hero/hero-1.jpg
```

### Step 3: Update references in code (if needed)

**Example for hero images:**
```tsx
// src/components/home/HeroCarousel.tsx
const slides = [
  {
    id: 1,
    image: '/images/hero/hero-1.jpg',
    title: 'Your Title',
  },
];
```

### Step 4: Test in development
```bash
npm run dev
# Check if images load correctly
```

## Replacing Placeholder Images

Currently, the site uses:
- **UI Avatars** for team member photos
- **Gradient backgrounds** for hero sections
- **Icon-based placeholders** for services

### To replace with real images:

1. **Hero Carousel:**
   - Update `src/components/home/HeroCarousel.tsx`
   - Replace gradient backgrounds with images
   ```tsx
   style={{
     backgroundImage: 'url(/images/hero/hero-1.jpg)',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
   }}
   ```

2. **Team Photos:**
   - Add photos to `public/images/team/`
   - Update `src/data/team.ts`
   ```tsx
   {
     name: 'John Doe',
     photo: '/images/team/john-doe.jpg',  // Add this line
   }
   ```

3. **Service Images:**
   - Add to component backgrounds
   - Or use `<img>` tags in components

## Responsive Images

For better performance, consider using responsive images:

```tsx
<picture>
  <source
    srcSet="/images/hero/hero-1.webp"
    type="image/webp"
  />
  <source
    srcSet="/images/hero/hero-1.jpg"
    type="image/jpeg"
  />
  <img
    src="/images/hero/hero-1.jpg"
    alt="Hero"
    loading="lazy"
  />
</picture>
```

## Lazy Loading

Images are already set up with lazy loading where appropriate:

```tsx
<img
  src="/path/to/image.jpg"
  loading="lazy"  // Lazy load below the fold
  alt="Description"
/>
```

## Testing

After adding images:

1. **Visual check:**
   ```bash
   npm run dev
   ```
   - Visit all pages
   - Check images load correctly
   - Verify responsive behavior

2. **Performance check:**
   - Use Lighthouse in Chrome DevTools
   - Check "Largest Contentful Paint" (LCP)
   - Aim for LCP < 2.5s

3. **Build check:**
   ```bash
   npm run build
   npm run preview
   ```
   - Ensure images are included in build
   - Check production bundle size

## Current Assets Status

### ✅ Ready (Using Fallbacks)
- Team photos (UI Avatars API)
- Icons (React Icons library)
- Gradients and colors

### ⚠️ Need Real Assets
- [ ] Company logo (all variants)
- [ ] Favicon
- [ ] Hero carousel images (2 images)
- [ ] Service showcase images
- [ ] Team member photos (optional - fallback works)

## Best Practices

1. **Always include alt text:**
   ```tsx
   <img src="/image.jpg" alt="Descriptive text" />
   ```

2. **Use appropriate formats:**
   - Photos: JPG or WebP
   - Graphics/Logos: SVG or PNG
   - Icons: SVG preferred

3. **Optimize for web:**
   - Target 85% quality for JPG
   - Keep file sizes reasonable
   - Use progressive JPEGs

4. **Consider CDN:**
   - For production, use a CDN
   - Cloudflare, AWS CloudFront, etc.
   - Improves load times globally

5. **Version control:**
   - Commit optimized images only
   - Keep originals outside of repo
   - Document image sources

## Next Steps

1. Gather all required images
2. Optimize according to specifications
3. Add to appropriate folders
4. Update component references if needed
5. Test in development
6. Run build and performance audit
7. Deploy to production

## Questions?

Refer to component files for specific image usage:
- `src/components/home/HeroCarousel.tsx` - Hero images
- `src/components/about/TeamGrid.tsx` - Team photos
- `src/data/team.ts` - Team member data
