# Cuarzo SPA - Design Tokens

This document outlines the design system and tokens used in the Cuarzo SPA project.

## Color Palette

### Primary Colors

The primary color palette is based on a blue theme, perfect for professional and modern applications.

```css
primary: {
  50: '#f0f9ff',   /* Lightest blue - backgrounds */
  100: '#e0f2fe',  /* Very light blue - subtle backgrounds */
  200: '#bae6fd',  /* Light blue - hover states */
  300: '#7dd3fc',  /* Medium light blue - borders */
  400: '#38bdf8',  /* Medium blue - secondary actions */
  500: '#0ea5e9',  /* Main primary color - primary actions */
  600: '#0284c7',  /* Darker blue - active states */
  700: '#0369a1',  /* Dark blue - text on light backgrounds */
  800: '#075985',  /* Very dark blue - headings */
  900: '#0c4a6e',  /* Darkest blue - high contrast text */
  950: '#082f49',  /* Maximum contrast - important text */
}
```

### Secondary Colors

Neutral grays for text, borders, and subtle elements.

```css
secondary: {
  50: '#f8fafc',   /* Lightest gray - page backgrounds */
  100: '#f1f5f9',  /* Very light gray - card backgrounds */
  200: '#e2e8f0',  /* Light gray - borders */
  300: '#cbd5e1',  /* Medium light gray - disabled states */
  400: '#94a3b8',  /* Medium gray - placeholder text */
  500: '#64748b',  /* Base gray - secondary text */
  600: '#475569',  /* Dark gray - primary text */
  700: '#334155',  /* Very dark gray - headings */
  800: '#1e293b',  /* Darkest gray - high contrast */
  900: '#0f172a',  /* Maximum contrast */
  950: '#020617',  /* Pure dark */
}
```

### Accent Colors

Yellow/gold accent colors for highlights and call-to-actions.

```css
accent: {
  50: '#fefce8',   /* Lightest yellow - subtle highlights */
  100: '#fef9c3',  /* Very light yellow - backgrounds */
  200: '#fef08a',  /* Light yellow - hover states */
  300: '#fde047',  /* Medium light yellow - borders */
  400: '#facc15',  /* Medium yellow - secondary accents */
  500: '#eab308',  /* Main accent color - primary accents */
  600: '#ca8a04',  /* Darker yellow - active states */
  700: '#a16207',  /* Dark yellow - text on light */
  800: '#854d0e',  /* Very dark yellow - headings */
  900: '#713f12',  /* Darkest yellow - high contrast */
  950: '#422006',  /* Maximum contrast */
}
```

## Typography

### Font Families

```css
fontFamily: {
  sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],     /* Primary font */
  serif: ['Georgia', 'serif'],                    /* Accent font */
  mono: ['JetBrains Mono', 'monospace'],          /* Code font */
}
```

### Font Sizes (Tailwind Defaults)

- `text-xs` - 12px (0.75rem)
- `text-sm` - 14px (0.875rem)
- `text-base` - 16px (1rem)
- `text-lg` - 18px (1.125rem)
- `text-xl` - 20px (1.25rem)
- `text-2xl` - 24px (1.5rem)
- `text-3xl` - 30px (1.875rem)
- `text-4xl` - 36px (2.25rem)
- `text-5xl` - 48px (3rem)
- `text-6xl` - 60px (3.75rem)

### Font Weights

- `font-thin` - 100
- `font-extralight` - 200
- `font-light` - 300
- `font-normal` - 400
- `font-medium` - 500
- `font-semibold` - 600
- `font-bold` - 700
- `font-extrabold` - 800
- `font-black` - 900

## Spacing System

### Custom Spacing Values

```css
spacing: {
  '18': '4.5rem',    /* 72px - Custom large spacing */
  '88': '22rem',     /* 352px - Custom extra large spacing */
  '128': '32rem',    /* 512px - Custom maximum spacing */
}
```

### Standard Spacing Scale

- `space-0` - 0px
- `space-1` - 4px (0.25rem)
- `space-2` - 8px (0.5rem)
- `space-3` - 12px (0.75rem)
- `space-4` - 16px (1rem)
- `space-5` - 20px (1.25rem)
- `space-6` - 24px (1.5rem)
- `space-8` - 32px (2rem)
- `space-10` - 40px (2.5rem)
- `space-12` - 48px (3rem)
- `space-16` - 64px (4rem)
- `space-20` - 80px (5rem)
- `space-24` - 96px (6rem)
- `space-32` - 128px (8rem)

## Animations

### Custom Animations

```css
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'slide-down': 'slideDown 0.5s ease-out',
  'scale-in': 'scaleIn 0.3s ease-out',
}
```

### Keyframes

```css
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { transform: 'translateY(20px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  slideDown: {
    '0%': { transform: 'translateY(-20px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  scaleIn: {
    '0%': { transform: 'scale(0.95)', opacity: '0' },
    '100%': { transform: 'scale(1)', opacity: '1' },
  },
}
```

## Responsive Breakpoints

### Default Tailwind Breakpoints

- `sm` - 640px and up (small tablets)
- `md` - 768px and up (tablets)
- `lg` - 1024px and up (laptops)
- `xl` - 1280px and up (desktops)
- `2xl` - 1536px and up (large desktops)

### Mobile-First Approach

All styles are mobile-first by default. Use breakpoint prefixes to apply styles at larger screen sizes:

```css
/* Mobile first */
.text-sm {
  font-size: 0.875rem;
}

/* Tablet and up */
.md:text-base {
  font-size: 1rem;
}

/* Desktop and up */
.lg:text-lg {
  font-size: 1.125rem;
}
```

## Component Usage Examples

### Buttons

```jsx
// Primary button
<button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
  Primary Action
</button>

// Secondary button
<button className="bg-secondary-100 hover:bg-secondary-200 text-secondary-800 px-6 py-3 rounded-lg font-medium transition-colors">
  Secondary Action
</button>

// Accent button
<button className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
  Accent Action
</button>
```

### Cards

```jsx
<div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-2">Card Title</h3>
  <p className="text-gray-600">Card content goes here</p>
</div>
```

### Gradients

```jsx
<div className="bg-gradient-to-br from-primary-50 to-secondary-50">
  {/* Gradient background */}
</div>
```

## Accessibility Considerations

### Color Contrast

- Primary colors meet WCAG AA standards
- Text on light backgrounds uses darker shades (700-900)
- Text on dark backgrounds uses lighter shades (50-300)

### Focus States

```css
.focus-visible {
  @apply outline-none ring-2 ring-primary-500 ring-offset-2;
}
```

### Custom Scrollbar

```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400;
}
```

## Usage Guidelines

1. **Consistency**: Always use the defined color palette and spacing system
2. **Responsive**: Design mobile-first, then enhance for larger screens
3. **Accessibility**: Ensure sufficient color contrast and proper focus states
4. **Performance**: Use Tailwind's utility classes for optimal bundle size
5. **Maintainability**: Document any custom additions to the design system

## Future Updates

When the PDF mockup is analyzed in detail, this design system will be updated to match the exact colors, typography, and spacing defined in the design specifications.
