# North Assurance Website

Modern, high-tech insurance website built with React, TypeScript, and Vite.

## Features

- ✅ React 18 + TypeScript
- ✅ Vite for blazing fast development
- ✅ Tailwind CSS for styling
- ✅ Dark mode with theme toggle
- ✅ Framer Motion animations
- ✅ React Router for navigation
- ✅ Swiper for carousels
- ✅ React Hook Form + Zod for forms
- ✅ Responsive mobile-first design
- ✅ SEO optimized
- ✅ Google Maps integration

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Add your Google Maps API key to .env
# VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Type check
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
north-assurance/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── common/      # Reusable components
│   │   ├── layout/      # Layout components
│   │   ├── home/        # Home page components
│   │   └── ...          # Other feature components
│   ├── pages/           # Page components
│   ├── context/         # React contexts
│   ├── hooks/           # Custom hooks
│   ├── types/           # TypeScript types
│   ├── data/            # Static data
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite 5** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **React Router v6** - Routing
- **Swiper** - Carousels
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **React Icons** - Icons
- **Google Maps API** - Maps integration

## Company Information

- **Name:** North Assurance s.a.l.
- **Established:** 1973
- **Phone:** +961 1 511 995
- **Email:** info@northassurance.com
- **Address:** Sin el-Fil Blvd, Freeway Tower, Beirut, Lebanon

## License

© 2026 North Assurance s.a.l. All rights reserved.
