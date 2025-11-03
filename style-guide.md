# Framer Clone - Style Guide

## Typography

### Font Families

- **Primary**: Inter (sans-serif)
  - Weights: 400 (Regular), 500 (Medium), 600 (Semi Bold), 700 (Bold)
  - Use for body text, UI elements, and most content

### Font Sizes

- **Hero/Display**: 72px - 96px (4.5rem - 6rem)
- **H1**: 48px - 64px (3rem - 4rem)
- **H2**: 36px - 48px (2.25rem - 3rem)
- **H3**: 24px - 32px (1.5rem - 2rem)
- **Body Large**: 18px - 20px (1.125rem - 1.25rem)
- **Body**: 16px (1rem)
- **Body Small**: 14px (0.875rem)
- **Caption**: 12px (0.75rem)

### Line Heights

- **Headings**: 1.1 - 1.2
- **Body**: 1.5 - 1.6
- **UI Elements**: 1.4

## Colors

### Primary Colors

- **Background**: `#000000` (Black)
- **Surface**: `#111111` (Dark Gray)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#999999` (Medium Gray)
- **Text Muted**: `#666666` (Dark Gray)

### Accent Colors

- **Primary**: `#0099FF` (Bright Blue)
- **Primary Hover**: `#0088EE` (Darker Blue)
- **Success**: `#00CC88` (Green)
- **Warning**: `#FFAA00` (Orange)
- **Error**: `#FF3366` (Red)

### Gradient Colors

- **Hero Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Card Gradient**: `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`

## Spacing

### Base Unit: 8px (0.5rem)

- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)
- **4xl**: 96px (6rem)

### Section Spacing

- **Section Padding Y**: 80px - 120px (5rem - 7.5rem)
- **Section Padding X**: 24px - 48px (1.5rem - 3rem)
- **Container Max Width**: 1280px (80rem)

## Borders

### Border Radius

- **Small**: 8px (0.5rem)
- **Medium**: 12px (0.75rem)
- **Large**: 16px (1rem)
- **XLarge**: 24px (1.5rem)
- **Full**: 9999px (rounded-full)

### Border Colors

- **Default**: `rgba(255, 255, 255, 0.1)`
- **Hover**: `rgba(255, 255, 255, 0.2)`
- **Focus**: `#0099FF`

## Shadows

- **Small**: `0 1px 2px rgba(0, 0, 0, 0.1)`
- **Medium**: `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Large**: `0 10px 20px rgba(0, 0, 0, 0.15)`
- **XLarge**: `0 20px 40px rgba(0, 0, 0, 0.2)`
- **Glow**: `0 0 20px rgba(0, 153, 255, 0.3)`

## Components

### Buttons

#### Primary Button
- **Background**: `#0099FF`
- **Text**: `#FFFFFF`
- **Padding**: `12px 24px`
- **Border Radius**: `12px`
- **Font Weight**: `600`
- **Hover**: Scale 1.02, brightness 1.1

#### Secondary Button
- **Background**: `rgba(255, 255, 255, 0.1)`
- **Text**: `#FFFFFF`
- **Padding**: `12px 24px`
- **Border Radius**: `12px`
- **Border**: `1px solid rgba(255, 255, 255, 0.2)`
- **Hover**: Background `rgba(255, 255, 255, 0.15)`

#### Ghost Button
- **Background**: `transparent`
- **Text**: `#FFFFFF`
- **Padding**: `12px 24px`
- **Hover**: Background `rgba(255, 255, 255, 0.05)`

### Cards

- **Background**: `rgba(255, 255, 255, 0.05)`
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`
- **Border Radius**: `16px`
- **Padding**: `24px - 32px`
- **Backdrop Filter**: `blur(10px)`

### Navigation

- **Height**: `72px`
- **Background**: `rgba(0, 0, 0, 0.8)`
- **Backdrop Filter**: `blur(20px)`
- **Border Bottom**: `1px solid rgba(255, 255, 255, 0.1)`
- **Sticky Position**: `top: 0`

## Animations

### Transitions

- **Fast**: `150ms ease-in-out`
- **Medium**: `250ms ease-in-out`
- **Slow**: `400ms ease-in-out`

### Transform Properties

- **Hover Scale**: `scale(1.02)` - `scale(1.05)`
- **Active Scale**: `scale(0.98)`

### Keyframe Animations

```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

## Breakpoints

- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`
- **Large Desktop**: `> 1280px`

## Effects

### Blur Effects

- **Glassmorphism**: `backdrop-filter: blur(20px)`
- **Background Blur**: `backdrop-filter: blur(10px)`

### Opacity

- **Disabled**: `0.4`
- **Muted**: `0.6`
- **Hover**: `0.8`
- **Active**: `1.0`

## Grid System

- **Columns**: 12-column grid
- **Gap**: 24px (1.5rem)
- **Container Padding**: 24px - 48px responsive

## Accessibility

- **Focus Ring**: `2px solid #0099FF` with `2px offset`
- **Minimum Touch Target**: `44px x 44px`
- **Minimum Contrast Ratio**: `4.5:1` for body text, `3:1` for large text
