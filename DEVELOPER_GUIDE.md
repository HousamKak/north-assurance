# Developer Guide

Quick reference for developers working on the North Assurance website.

## Quick Start

```bash
# Clone and install
git clone <repository-url>
cd north-assurance
npm install

# Create environment file
cp .env.example .env
# Add your Google Maps API key to .env

# Start development
npm run dev
# Open http://localhost:3000
```

## Common Tasks

### Adding a New Page

1. **Create page component:**
   ```tsx
   // src/pages/NewPage.tsx
   import React from 'react';
   import { Section } from '@/components/common/Section';
   import { SEO } from '@/components/common/SEO';

   export const NewPage: React.FC = () => {
     return (
       <div>
         <SEO
           title="Page Title"
           description="Page description"
         />
         <Section>
           {/* Your content */}
         </Section>
       </div>
     );
   };
   ```

2. **Add route:**
   ```tsx
   // src/utils/constants.ts
   export const ROUTES = {
     // ... existing routes
     NEW_PAGE: '/new-page',
   };

   // src/App.tsx
   import { NewPage } from '@/pages/NewPage';

   <Route path={ROUTES.NEW_PAGE} element={<NewPage />} />
   ```

3. **Add to navigation:**
   ```tsx
   // src/components/layout/Navbar.tsx
   <Link to={ROUTES.NEW_PAGE}>New Page</Link>
   ```

### Adding a New Component

```tsx
// src/components/feature/ComponentName.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ComponentNameProps {
  title: string;
  // ... other props
}

export const ComponentName: React.FC<ComponentNameProps> = ({ title }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
};
```

### Adding Dark Mode Support

All new components should support dark mode:

```tsx
<div className="bg-white dark:bg-dark-lighter">
  <p className="text-gray-900 dark:text-white">Text</p>
  <p className="text-gray-600 dark:text-gray-400">Secondary text</p>
</div>
```

**Color Guide:**
- Background: `bg-white dark:bg-dark-lighter`
- Text (primary): `text-gray-900 dark:text-white`
- Text (secondary): `text-gray-600 dark:text-gray-400`
- Borders: `border-gray-300 dark:border-dark-light`

### Adding Animations

```tsx
import { AnimatedSection } from '@/components/common/AnimatedSection';

<AnimatedSection animation="slide-up" delay={0.1}>
  {/* Your content */}
</AnimatedSection>
```

**Available animations:**
- `fade` - Fade in
- `slide-up` - Slide from bottom
- `slide-down` - Slide from top
- `scale` - Scale up

### Working with Forms

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Invalid email'),
});

type FormData = z.infer<typeof schema>;

export const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}
      {/* ... */}
    </form>
  );
};
```

### Adding New Product

```tsx
// src/data/products.ts
export const individualProducts: Product[] = [
  // ... existing products
  {
    id: 'new-product',
    name: 'New Product',
    category: 'individual',
    description: 'Full description',
    shortDescription: 'Short description',
    icon: 'FaShieldAlt',
    features: [
      'Feature 1',
      'Feature 2',
    ],
    coverage: [
      'Coverage item 1',
      'Coverage item 2',
    ],
    price: 'From $100/month',
  },
];
```

## Project Conventions

### File Naming
- Components: PascalCase (e.g., `ProductCard.tsx`)
- Utilities: camelCase (e.g., `helpers.ts`)
- Types: PascalCase (e.g., `Product.ts`)
- Constants: UPPER_SNAKE_CASE in file

### Import Order
1. React imports
2. Third-party libraries
3. Components (@/components)
4. Hooks (@/hooks)
5. Types (@/types)
6. Utils (@/utils)
7. Data (@/data)
8. Styles (if any)

### Component Structure
```tsx
// 1. Imports
import React from 'react';

// 2. Types/Interfaces
interface Props {
  // ...
}

// 3. Component
export const Component: React.FC<Props> = (props) => {
  // 4. Hooks
  const [state, setState] = useState();

  // 5. Event handlers
  const handleClick = () => {};

  // 6. Effects
  useEffect(() => {}, []);

  // 7. Render
  return <div />;
};
```

### TypeScript Tips

```tsx
// Always type component props
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

// Use type inference for state
const [count, setCount] = useState(0); // inferred as number

// Type data structures
const products: Product[] = [];

// Use optional properties
interface Props {
  title: string;
  subtitle?: string; // optional
}
```

## Styling Guide

### Tailwind Classes
```tsx
// Spacing: p-4, m-2, gap-4
// Typography: text-lg, font-bold, leading-tight
// Colors: bg-primary, text-white
// Responsive: md:text-xl, lg:grid-cols-3
// Dark mode: dark:bg-dark-lighter
```

### Custom Classes
Avoid custom CSS. Use Tailwind utilities. If needed:

```tsx
// tailwind.config.js
extend: {
  colors: {
    'custom': '#hexcode',
  },
}
```

## Data Management

### Static Data Location
- Products: `src/data/products.ts`
- Services: `src/data/services.ts`
- Team: `src/data/team.ts`
- Timeline: `src/data/timeline.ts`
- Testimonials: `src/data/testimonials.ts`

### Constants
```tsx
// src/utils/constants.ts
export const COMPANY_INFO = {
  name: 'North Assurance',
  phone: '+961 1 511 995',
  // ...
};
```

## Common Patterns

### Card with Hover Effect
```tsx
import { Card } from '@/components/common/Card';

<Card hover className="p-6">
  {/* Content */}
</Card>
```

### Section Wrapper
```tsx
import { Section } from '@/components/common/Section';

<Section background="light">
  {/* Content */}
</Section>

// Backgrounds: 'white', 'light', 'dark', 'gradient'
```

### Button Component
```tsx
import { Button } from '@/components/common/Button';

<Button variant="primary" size="lg" loading={isLoading}>
  Click Me
</Button>

// Variants: 'primary', 'secondary', 'outline', 'ghost'
// Sizes: 'sm', 'md', 'lg'
```

### Link with React Router
```tsx
import { Link } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';

<Link to={ROUTES.ABOUT}>About Us</Link>
```

## Debugging

### TypeScript Errors
```bash
npm run type-check
```

### Build Errors
```bash
npm run build
# Check terminal output
```

### Runtime Errors
- Check browser console (F12)
- Use React DevTools
- Check Network tab for failed requests

### Dark Mode Issues
```tsx
// Test theme in console
localStorage.setItem('theme', 'dark')
localStorage.setItem('theme', 'light')
// Refresh page
```

## Performance Tips

1. **Lazy load images:**
   ```tsx
   <img loading="lazy" src="..." alt="..." />
   ```

2. **Code splitting:**
   ```tsx
   const LazyComponent = React.lazy(() => import('./Component'));
   ```

3. **Memoize expensive calculations:**
   ```tsx
   const value = useMemo(() => expensiveFunc(), [dep]);
   ```

4. **Debounce user input:**
   ```tsx
   import { useState, useEffect } from 'react';

   const [search, setSearch] = useState('');
   const [debouncedSearch, setDebouncedSearch] = useState('');

   useEffect(() => {
     const timer = setTimeout(() => setDebouncedSearch(search), 300);
     return () => clearTimeout(timer);
   }, [search]);
   ```

## Testing Locally

### Before Committing
```bash
# Type check
npm run type-check

# Build
npm run build

# Test in production mode
npm run preview
```

### Cross-browser Testing
Test in:
- Chrome
- Firefox
- Safari (if on Mac)
- Edge
- Mobile browsers

### Responsive Testing
- Use Chrome DevTools device toolbar (Ctrl+Shift+M)
- Test breakpoints: 375px, 768px, 1024px, 1440px

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "Add feature description"

# Push to remote
git push origin feature/feature-name

# Create pull request
# After review, merge to main
```

## Environment Variables

```bash
# .env (don't commit this file)
VITE_GOOGLE_MAPS_API_KEY=your_key_here

# Access in code
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
```

**Important**: All env vars must start with `VITE_` to be accessible.

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build
npm run type-check      # Check TypeScript
npm run lint            # Lint code

# Dependencies
npm install package     # Add dependency
npm install -D package  # Add dev dependency
npm update             # Update dependencies
npm outdated           # Check outdated packages

# Cleanup
rm -rf node_modules package-lock.json
npm install            # Fresh install
```

## Resources

- **React Docs**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **React Router**: https://reactrouter.com
- **React Hook Form**: https://react-hook-form.com
- **Zod**: https://zod.dev

## Getting Help

1. Check component files for examples
2. Review existing pages for patterns
3. Read type definitions in `src/types/`
4. Check documentation files
5. Search codebase for similar implementations

## Common Issues

### Issue: Import not found
**Solution**: Check path alias `@/` maps to `src/`

### Issue: Dark mode not working
**Solution**: Ensure all colors have dark: variants

### Issue: Image not loading
**Solution**: Images must be in `public/` folder

### Issue: Type errors
**Solution**: Run `npm run type-check` for details

### Issue: Build fails
**Solution**: Check for unused imports, missing dependencies

---

**Happy coding!** 🚀
