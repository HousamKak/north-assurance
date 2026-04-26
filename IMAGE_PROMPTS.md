# North Assurance Image Prompt Audit

This file lists every image place found in the repo that is missing, using fallbacks, reused, or currently represented by gradients/icons.

## Generation Notes

- Brand colors: primary `#015FC9`, secondary `#0DD3F1`, dark navy/charcoal accents.
- Preferred image style: premium corporate insurance, modern Lebanese context, realistic lighting, polished but not stock-like.
- Avoid readable text in generated photos unless the asset is specifically a logo. AI-generated text is often unreliable.
- Keep space for UI overlays on hero/header images, usually darker or calmer on the left side.
- For named people, use real approved headshots whenever possible. Synthetic portraits should only be used as placeholders and should not imply the person is real.

## Reused Image Replacements Applied

The site was reusing `public/images/services/insurance-protection.jpg` for three service cards in `src/data/services.ts`: Medical Insurance, Life Insurance, and Property Insurance. The Medical card keeps the original general protection image. The Life and Property cards now use the unique assets below.

### Life Insurance Service Card

- New file: `public/images/services/life-insurance.jpg`
- Replaced reference: `src/data/services.ts`, Life Insurance service card.

Prompt used:

```text
Use case: photorealistic-natural
Asset type: service card image for Life Insurance on the North Assurance website, final crop 4:3.
Primary request: Create a unique Life Insurance service image that is clearly different from general insurance protection imagery.
Scene/backdrop: Warm modern Lebanese home interior with subtle Beirut residential context through a window, natural daylight, clean and premium but lived-in.
Subject: A multigenerational family seated with a professional insurance advisor reviewing a tablet and an unreadable policy folder, expressing long-term family financial security and care.
Composition: Horizontal 4:3 corporate editorial photo, medium-wide framing, balanced negative space for card overlays, sharp focus, realistic faces and hands.
Style: Premium corporate insurance photography, polished but authentic, deep blue #015FC9 and cyan #0DD3F1 accents only as subtle clothing or decor details.
Avoid: no readable text, no logos, no fake brand marks, no literal shields, no exaggerated smiles, no clutter, no reused composition from home/car/business protection scenes.
```

### Property Insurance Service Card

- New file: `public/images/services/property-insurance.jpg`
- Replaced reference: `src/data/services.ts`, Property Insurance service card.

Prompt used:

```text
Use case: photorealistic-natural
Asset type: service card image for Property Insurance on the North Assurance website, final crop 4:3.
Primary request: Create a unique Property Insurance service image that is distinct from family, car, and general protection imagery.
Scene/backdrop: Modern Beirut apartment entrance and bright interior, with a refined view of residential architecture and Mediterranean daylight.
Subject: A homeowner and professional insurance advisor inspecting the property together using a tablet, with subtle visual cues like keys, a floor plan without readable text, and well-maintained home details.
Composition: Horizontal 4:3 corporate editorial photo, medium-wide framing, natural eye-level perspective, enough clean space for service-card overlay, sharp realistic details.
Style: Premium real-estate and insurance photography, calm secure mood, clean architecture, subtle deep blue #015FC9 and cyan #0DD3F1 accents.
Avoid: no readable text, no logos, no fake brand marks, no literal shields, no construction-site drama, no water/fire damage, no clutter, no duplicated composition from general insurance protection assets.
```

### Cyber Attack Insurance Product Image

- Replaced file: `public/images/products/cyber-insurance.jpg`
- Reason: the previous file was a 12-bit JPEG that did not decode reliably in local image tooling; the replacement is a standard 8-bit 800x600 JPG.

Prompt used:

```text
Use case: photorealistic-natural
Asset type: Cyber Attack Insurance product image for the North Assurance website, final crop 4:3 at 800x600.
Primary request: Create a polished, unique image for a corporate cyber attack insurance product covering cyber security breaches, ransomware, data breach response, forensic investigation, legal expenses, and business interruption.
Scene/backdrop: Modern Beirut business office or security operations room with Lebanese corporate context, professional but not theatrical, subtle city lights or office glass in the background.
Subject: Cyber risk consultant and business executive reviewing a secure dashboard on a laptop and tablet; abstract cybersecurity visuals on screens are blurred and unreadable, with a calm sense of protection and fast response.
Composition: Horizontal 4:3 corporate editorial photo, medium-wide framing, clean negative space for product-card overlay, sharp realistic people and hands, premium insurance brand feel.
Style: Realistic high-end corporate photography, deep blue #015FC9 and cyan #0DD3F1 accents, modern technology, trustworthy and calm rather than hacker-drama.
Avoid: no readable text, no logos, no fake brand names, no hooded hackers, no binary rain cliches, no alarmist red lighting, no literal shields, no clutter, no repeated composition from other product/service images.
```

## Priority 1: Missing Files Referenced By The Running Site

### 1. Browser Favicon

- Needed file: `public/favicon.ico`
- Referenced by: `index.html`
- Current state: missing, browser tab icon will 404.
- Suggested source: derive from the final logo mark.

Prompt:

```text
Create a clean favicon for an insurance company named North Assurance. Use an abstract north-star compass mark integrated with a protective shield, simple geometric shapes, strong silhouette, brand colors deep blue #015FC9 and cyan #0DD3F1, transparent background, readable at 16x16 and 32x32, flat vector icon style, no small text, no photo realism.
```

### 2. Logo And Social Preview Image

- Needed files: `public/images/logos/logo.png`, `public/images/logos/logo.svg`
- Referenced by: `index.html`, `src/components/common/SEO.tsx`
- Current state: missing, Open Graph/Twitter image points to a 404.
- Also useful for replacing the `NA` text logo placeholders in `src/components/layout/Navbar.tsx` and `src/components/layout/Footer.tsx`.

Prompt:

```text
Design a premium vector logo for "North Assurance s.a.l.", a trusted Lebanese insurance company founded in 1973. Combine a north-star compass, shield, and subtle horizon line into a distinctive corporate mark. Use deep blue #015FC9, bright cyan #0DD3F1, and a restrained dark navy accent. The design should feel stable, protective, modern, and high-trust. Include a clean sans-serif wordmark for "North Assurance" with balanced spacing. White or transparent background, SVG-ready, no mockup, no 3D, no extra slogans.
```

### 3. Logo Variants For Dark And Light Backgrounds

- Needed files: `public/images/logos/logo-white.svg`, `public/images/logos/logo-dark.svg`
- Referenced by: `public/images/logos/README.md`, `ASSETS_GUIDE.md`
- Current state: missing, required before replacing navbar/footer placeholders robustly.

Prompt:

```text
Create two production-ready logo variants based on the North Assurance compass-shield mark: one all-white version for dark backgrounds and one dark navy version for light backgrounds. Preserve the exact same proportions and wordmark layout as the primary logo. Flat vector style, transparent background, high contrast, no shadows, no mockups, no gradients that reduce legibility.
```

### 4. PWA And Mobile App Icons

- Needed files: `public/images/logos/logo-192.png`, `public/images/logos/logo-512.png`
- Referenced by: `index.html`, `public/manifest.json`
- Current state: missing, app icons and Apple touch icon will 404.

Prompt:

```text
Create a square app icon for North Assurance using only the compass-shield logo mark, centered with generous padding. Deep blue background #015FC9, cyan accent #0DD3F1, crisp flat vector geometry, maskable icon safe area, no wordmark, no tiny details, no shadows outside the icon, clean professional insurance brand feel. Export as 192x192 and 512x512 PNG.
```

### 5. Home About Preview Image

- Needed file: `public/images/hero/about-preview.jpg`
- Referenced by: `src/components/home/AboutPreview.tsx`
- Current state: missing, this is a real broken image in the home page About section.
- Target size: about `800x600`, also works at the current `500px` display height.

Prompt:

```text
Photorealistic editorial image for a premium insurance company in Beirut: modern office interior with a professional insurance advisor reviewing a policy folder with a client, subtle Lebanese city context through a window, confident and warm atmosphere, blue and cyan brand accents, natural daylight, clean desk, no readable documents, no visible logos, high-end corporate photography, 4:3 composition, sharp focus, realistic people, no exaggerated smiles, no clutter.
```

### 6. Team Member Photos

- Needed files: `public/images/team/team-1.jpg`, `team-2.jpg`, `team-3.jpg`, `team-4.jpg`
- Referenced by: `src/data/team.ts`, displayed by `src/components/about/TeamGrid.tsx`
- Current state: missing; the UI falls back to generated initials from UI Avatars.
- Best source: real approved employee headshots.

Prompt for approved synthetic placeholders:

```text
Create four consistent professional corporate headshots for an insurance leadership team, square 400x400 portraits, neutral light gray office background, soft studio lighting, business formal attire, approachable but serious expression, Lebanese/Mediterranean professional appearance, consistent framing from chest up, realistic skin texture, no name badges, no logos, no text, no exaggerated retouching. Generate as a coherent set with matching lighting and camera angle.
```

Suggested assignment if placeholders are acceptable:

- `team-1.jpg`: senior male CEO, navy suit, confident executive portrait.
- `team-2.jpg`: senior female COO, navy or charcoal blazer, calm operations leader.
- `team-3.jpg`: senior male claims leader, professional blazer, practical and approachable.
- `team-4.jpg`: female customer relations manager, polished business attire, warm client-facing expression.

## Priority 2: Planned Assets In Repo Documentation

These files are listed as needed in `ASSETS_GUIDE.md` and the public image folder READMEs, but the current components mostly use icons/gradients until these are wired in.

### 7. Home Hero Slide 1

- Needed file: `public/images/hero/hero-1.jpg`
- Intended use: `src/components/home/HeroCarousel.tsx`
- Current state: carousel uses gradient backgrounds instead of image backgrounds.
- Target size: `1920x1080`.

Prompt:

```text
Wide cinematic hero image for North Assurance insurance website, theme "Protecting Lebanon's Future". A Lebanese family and small business owner standing confidently in a modern Beirut setting, subtle protective visual mood without literal shields, calm city skyline and Mediterranean light, premium insurance brand atmosphere, deep blue and cyan color accents, realistic corporate photography, left side darker and uncluttered for white headline overlay, no text, no logos, no policy documents with readable text, 16:9, high detail, polished but authentic.
```

### 8. Home Hero Slide 2

- Needed file: `public/images/hero/hero-2.jpg`
- Intended use: `src/components/home/HeroCarousel.tsx`
- Current state: carousel uses gradient backgrounds instead of image backgrounds.
- Target size: `1920x1080`.

Prompt:

```text
Wide premium insurance service hero image, theme "Your Trusted Insurance Partner". A professional insurance advisor helping a client in a modern office after hours, laptop and claim documents visible but unreadable, subtle sense of 24/7 support and reliability, Beirut night city lights softly blurred in background, deep navy atmosphere with cyan highlights, realistic photography, left side has clean negative space for headline overlay, no readable text, no fake logos, 16:9.
```

### 9. General Insurance Protection Image

- Needed file: `public/images/services/insurance-protection.jpg`
- Intended use: service showcase sections and insurance overview content.
- Current state: missing; service cards currently use React icons.
- Target size: `800x600`.

Prompt:

```text
Photorealistic 4:3 image representing comprehensive insurance protection in Lebanon: family home, car, and small business storefront suggested in one cohesive scene, professional insurance advisor in the foreground with tablet, calm secure mood, blue and cyan accents, warm daylight, no readable text, no logos, realistic architecture, premium corporate editorial style.
```

### 10. Claims Process Image

- Needed file: `public/images/services/claims-process.jpg`
- Intended use: claims/process feature sections, product detail support visuals.
- Current state: missing.
- Target size: `800x600`.

Prompt:

```text
Photorealistic corporate insurance claims scene: claims specialist reviewing vehicle damage photos and a claim file on a tablet with a client, modern office or garage reception environment, supportive and efficient mood, blue-cyan brand accents, documents intentionally blurred and unreadable, realistic lighting, professional Lebanese context, 4:3 composition, no logos.
```

### 11. Customer Service Image

- Needed file: `public/images/services/customer-service.jpg`
- Intended use: support/contact sections and features.
- Current state: missing.
- Target size: `800x600`.

Prompt:

```text
Premium customer service image for an insurance company: professional support agent wearing a discreet headset, speaking with a client while viewing policy details on a screen, modern Beirut office, warm human service, clean desk, blue and cyan brand accents, soft natural light, no readable screen text, no logos, realistic corporate photography, 4:3.
```

### 12. Team Collaboration Image

- Needed file: `public/images/services/team-collaboration.jpg`
- Intended use: about/careers/team culture sections.
- Current state: missing.
- Target size: `800x600`.

Prompt:

```text
Photorealistic image of an insurance team collaborating around a conference table, diverse Lebanese professionals reviewing risk and policy strategy, modern office, subtle charts on screens with no readable text, confident teamwork, blue and cyan accents, natural daylight, premium corporate editorial style, realistic faces and hands, 4:3 composition.
```

## Priority 3: Visible Placeholder Sections Worth Upgrading

These are not broken at runtime, but they are clear image opportunities if the site should feel less template-like.

### 13. About Page Company Overview Visual

- Current place: `src/pages/About.tsx`
- Current state: gradient panel with `NA` text placeholder.
- Suggested file: `public/images/hero/company-overview.jpg`

Prompt:

```text
High-end editorial photo for the About page of North Assurance: elegant insurance company office or building reception in Beirut, professional staff welcoming a client, subtle heritage detail showing long-standing company trust since 1973 without readable text, polished corporate environment, blue and cyan accents, realistic photography, 4:3 or 3:2 composition, no visible logos unless using the real approved logo.
```

### 14. Common Page Headers

- Current place: `src/components/common/PageHeader.tsx`
- Used by: About, Individual Products, Corporate Products, Motor Repair, Contact, Careers.
- Current state: shared gradient header with decorative grid.
- Suggested approach: keep the gradient overlay but add page-specific background images.

Prompt set:

```text
About header: Wide realistic image of a trusted Lebanese insurance office, professional team in subtle motion, Beirut context, premium corporate tone, dark blue overlay-friendly left/center area, no text, 16:9.

Individual products header: Wide realistic image showing a family, car, home, and travel cues in a tasteful insurance protection composition, warm Lebanon/Mediterranean light, blue-cyan accents, no text, overlay-friendly negative space, 16:9.

Corporate products header: Wide realistic image of business owners and insurance advisors in a modern boardroom, risk planning and employee protection theme, premium corporate style, no readable charts, 16:9.

Motor repair header: Wide realistic photo of a clean professional auto repair facility in Lebanon, repaired cars, certified technicians, bright organized workshop, insurance claims support mood, no visible brand logos, 16:9.

Contact header: Wide realistic image of a modern reception desk or customer support office, welcoming insurance staff, Beirut office context, calm and approachable, no text, 16:9.

Careers header: Wide realistic image of a professional team walking through a modern office or collaborating in a meeting, growth and career opportunity mood, diverse Lebanese staff, no text, 16:9.
```

### 15. Testimonial Portraits

- Current place: `src/data/testimonials.ts`, `src/components/home/TestimonialCarousel.tsx`
- Current state: external UI Avatars URLs for clients.
- Best source: real customer-approved portraits. If unavailable, keep initials or use clearly generic testimonial imagery.

Prompt for generic non-identifying portraits:

```text
Create three realistic but generic customer portrait placeholders for an insurance website testimonial carousel, square 400x400, professional Lebanese/Mediterranean adults, natural office or clinic/business background, friendly credible expression, soft lighting, no logos, no name badges, no text, not celebrity-like, consistent style across the set.
```

### 16. Product Card And Product Detail Visuals

- Current places: `src/components/products/ProductCard.tsx`, `src/pages/ProductDetail.tsx`
- Current state: icon-only product cards and icon-only product detail hero.
- Suggested path if adding images: `public/images/products/`

Prompt set:

```text
Medical insurance: Realistic image of a medical professional and family discussing health coverage in a modern clinic, caring and secure mood, blue-cyan accents, no readable text, 4:3.

Motor insurance: Realistic image of a protected modern car near a clean repair/service setting, insurance support mood, Lebanon context, blue-cyan accents, no license plate text, 4:3.

Life insurance: Warm realistic image of a family at home with a subtle sense of financial security and protection, premium but natural, no text, 4:3.

Travel insurance: Realistic image of a traveler preparing documents and luggage at an airport or bright home setting, worry-free travel mood, no readable passport text, 4:3.

Property insurance: Realistic image of a modern apartment/home exterior and interior detail, safety and protection mood, Mediterranean/Lebanese context, 4:3.

Personal accident insurance: Realistic image of an active adult with subtle safety/support theme, no injury dramatization, positive protection mood, 4:3.

Group medical: Corporate employee health benefits scene with HR and employees in a meeting, modern office, no readable charts, 4:3.

Group life: Corporate workforce protection scene, professional employees in a calm modern office, stability and care mood, 4:3.

Professional indemnity: Professional consultant or engineer reviewing documents with client, risk management mood, no readable text, 4:3.

Property all-risk: Commercial building and business assets protected, modern Lebanese business setting, no logos, 4:3.

Cyber attack insurance: Professional cybersecurity operations scene with abstract dashboards blurred, business protection mood, no readable interface text, 4:3.

Directors and officers insurance: Executive boardroom scene with leadership team in discussion, corporate accountability and trust mood, no readable documents, 4:3.
```

## Asset Checklist

- `public/favicon.ico`
- `public/images/logos/logo.png`
- `public/images/logos/logo.svg`
- `public/images/logos/logo-white.svg`
- `public/images/logos/logo-dark.svg`
- `public/images/logos/logo-192.png`
- `public/images/logos/logo-512.png`
- `public/images/hero/hero-1.jpg`
- `public/images/hero/hero-2.jpg`
- `public/images/hero/about-preview.jpg`
- `public/images/services/insurance-protection.jpg`
- `public/images/services/claims-process.jpg`
- `public/images/services/customer-service.jpg`
- `public/images/services/team-collaboration.jpg`
- `public/images/team/team-1.jpg`
- `public/images/team/team-2.jpg`
- `public/images/team/team-3.jpg`
- `public/images/team/team-4.jpg`
