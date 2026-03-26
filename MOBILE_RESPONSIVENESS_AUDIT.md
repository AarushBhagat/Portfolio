# Mobile Responsiveness Audit - 3D Portfolio

## Executive Summary

This comprehensive audit identifies mobile responsiveness issues and opportunities across the 3D portfolio codebase. The portfolio has good foundational responsive design with Tailwind CSS and mobile detection, but has several critical issues affecting mobile UX, particularly around hardcoded dimensions, desktop-centric animations, and missing viewport configuration.

**Overall Assessment:** 
- ✅ Good: Mobile detection implemented
- ✅ Good: Section-specific mobile states
- ⚠️ Needs Work: Multiple hardcoded pixel values
- ⚠️ Needs Work: Desktop-biased animations
- ❌ Critical: Missing viewport meta tag

---

## 1. VIEWPORT & META CONFIGURATION

### Current State

**File:** [src/app/layout.tsx](src/app/layout.tsx)

**Issues:**
- ❌ **Missing Viewport Meta Tag** - No viewport configuration in metadata
  - The layout uses Next.js `Metadata` object but doesn't include `viewport` property
  - No `<meta name="viewport">` tag set
  - This means mobile browsers may not properly scale the page

**Impact:** High
- Mobile browsers won't properly set viewport scale
- May cause layout issues on initial load
- Affects touch interactions and zoom behavior

**Recommendation:**
Add viewport metadata to layout.tsx:
```typescript
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
```

---

## 2. HARDCODED PIXEL VALUES & NON-RESPONSIVE SIZING

### 2.1 Projects Section

**File:** [src/components/sections/projects.tsx](src/components/sections/projects.tsx#L22)

**Issues:**
```tsx
// Line 22: w-[400px] - HARDCODED WIDTH
<div className="relative w-[400px] h-auto rounded-lg overflow-hidden"
  style={{ aspectRatio: "3/2" }}>
```

**Problems:**
- ❌ Fixed 400px width for project cards
- Image won't fit on mobile devices (most phones < 320-428px viewport width)
- Creates horizontal overflow or squished layout
- No responsive scaling between breakpoints

**Impact:** High - Projects section unusable on mobile

**Recommendation:**
Replace with responsive sizing:
```tsx
<div className="relative w-full sm:max-w-[400px] h-auto rounded-lg overflow-hidden"
```

---

### 2.2 Projects Page (Archive)

**File:** [src/app/projects/page.tsx](src/app/projects/page.tsx#L66-L96)

**Issues:**
```tsx
// Line 66: Hardcoded padding values
<div className="container mx-auto md:px-[50px] xl:px-[150px]">

// Line 71: Fixed card dimensions
<li className="w-[300px] h-[400px] border-[.5px]">

// Line 75: Fixed height
<div className="h-[200px]">

// Line 94: Hardcoded image dimensions
<Image
  className="w-[300px] h-[200px]"
  width={300}
  height={400}
/>
```

**Problems:**
- ❌ 300px card width exceeds mobile viewport
- No responsive padding for sm/md breaks
- Fixed heights prevent content adaptation
- Image aspect ratio mismatch (300x200 display, 300x400 actual)

**Impact:** High - Projects archive page broken on mobile

**Recommendation:**
```tsx
// Responsive container with mobile-first design
<div className="container mx-auto px-4 sm:px-6 md:px-[50px] xl:px-[150px]">

// Responsive card grid
<li className="w-full sm:w-[300px] h-auto sm:h-[400px]">

// Responsive image
<Image
  className="w-full h-auto"
  width={300}
  height={200}
/>
```

---

### 2.3 Hackathons Section

**File:** [src/components/sections/hackathons.tsx](src/components/sections/hackathons.tsx#L137)

**Issues:**
```tsx
// Line 137: Hardcoded desktop card dimensions
<div className="relative h-[400px] w-[600px] flex-shrink-0">
```

**Problems:**
- ❌ 600px width on desktop, no mobile alternative
- ❌ Only shown on desktop (md:hidden on mobile view exists, good!)
- Mobile view has good responsive design, but desktop scroll cards are not adaptable

**Impact:** Medium - Only affects landscape/large tablets

**Recommendation:**
Add responsive scaling to desktop view:
```tsx
<div className="relative h-[300px] sm:h-[400px] w-[400px] sm:w-[600px] flex-shrink-0">
```

---

### 2.4 Certificates Section

**File:** [src/components/sections/certificates.tsx](src/components/sections/certificates.tsx#L149)

**Issues:**
```tsx
// Line 149: Hardcoded dimensions
<div className="certificate-card relative h-[400px] w-[600px] flex-shrink-0">

// Line 165: Hardcoded sidespace
<div className="w-[50vw] flex-shrink-0" />
```

**Problems:**
- ❌ Same 600px width issue as hackathons
- ❌ 50vw sidespace excessive on tablets
- Desktop-only scroll animation doesn't scale gracefully

**Impact:** Medium

---

### 2.5 Hero Section

**File:** [src/components/sections/hero.tsx](src/components/sections/hero.tsx#L27-L32)

**Issues:**
```tsx
// Line 27: Calculated heights with hardcoded remainders
"h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",

// Line 31: Fixed padding across sizes
"pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"

// Line 53: Negative margin hack
"-ml-[6px]"

// Line 149: Fixed scroll-down icon position
<div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
```

**Problems:**
- ⚠️ Height calculations assume 3rem/4rem header (index.tsx header design dependent)
- Padding sequence not optimal for xs devices
- Negative margin is fragile for responsive text
- Hardcoded bottom-10 position

**Impact:** Medium - Works but could be more flexible

---

### 2.6 About Section

**File:** [src/components/sections/about.tsx](src/components/sections/about.tsx#L69)

**Issues:**
```tsx
// Line 69: Fixed minimum height for image container
<CardContent className="p-0 flex-1 relative min-h-[400px]">
```

**Problems:**
- ⚠️ 400px minimum height on mobile creates large empty space
- Image may not load/display properly on small screens
- No max-height cap can cause layout issues

**Impact:** Medium - Wastes vertical space on mobile

---

## 3. 3D ANIMATIONS - MOBILE OPTIMIZATION

### 3.1 Spline 3D Keyboard

**File:** [src/components/animated-background.tsx](src/components/animated-background.tsx#L1-L400)

**Positive Aspects:**
- ✅ Mobile detection implemented (`useMediaQuery("(max-width: 767px)")`)
- ✅ Mobile-specific keyboard keycaps (`keycap-mobile` vs `keycap-desktop`)
- ✅ Mobile/desktop state configuration in animated-background-config.ts
- ✅ Mobile-specific text visibility handling

**Issues:**
- ⚠️ Mobile keyboard uses `scale: 0.30` which may still be large on sm devices
- ⚠️ Keyboard remains visible on mobile but takes viewport space
- ⚠️ No touch event handling documented (only mouseHover/keyDown/keyUp)
- ⚠️ Keyboard position at `y: -200` on mobile may overlap content
- ⚠️ 3D animations may cause performance issues on low-end mobile devices

**File:** [src/components/animated-background-config.ts](src/components/animated-background-config.ts)

**Mobile States Analysis:**
```typescript
hero: {
  mobile: { scale: 0.30, position: { x: 0, y: -200, z: 0 } }
},
skills: {
  mobile: { scale: 0.30, position: { x: 0, y: -40, z: 0 } }
},
contact: {
  mobile: { scale: 0.25, position: { x: 0, y: 150, z: 0 } }
}
```

**Problems:**
- ⚠️ Fixed scale values don't adapt to very small devices (< 320px)
- ⚠️ `getScaleOffset()` uses fixed reference widths (390px for mobile)
- ⚠️ No optimization for tablet landscape orientation
- ⚠️ Keyboard interactions on mobile unclear (mainly desktop-focused)

**Impact:** Medium - Works but could cause jank on older phones

**Recommendation:**
1. Add touch event listeners alongside keyboard events
2. Implement viewport-based scale adjustment for extra-small devices
3. Add performance flags to disable 3D animations on low-end devices
4. Test keyboard sizing on actual mobile devices

---

## 4. GSAP ANIMATION ISSUES

### 4.1 Scroll Pinning on Mobile

**Files:** 
- [src/components/sections/hackathons.tsx](src/components/sections/hackathons.tsx#L50-L70)
- [src/components/sections/certificates.tsx](src/components/sections/certificates.tsx#L38-L70)

**Issues:**
```tsx
const isDesktop = window.innerWidth > 768;

if (isDesktop && amountToScroll > 0) {
  // Pin logic only on desktop
  gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      pin: true,
      scrub: 1,
      // ...
    },
  });
}
```

**Problems:**
- ✅ Good: Desktop-only pinning prevents mobile issues
- ⚠️ But: Mobile fallback view is different component logic
- ⚠️ Mobile grid layout (`grid grid-cols-1`) works, but could be better optimized

**Impact:** Low - Actually handled well with separate mobile views

---

### 4.2 Parallax & Transform Issues

**File:** [src/components/sections/hackathons.tsx](src/components/sections/hackathons.tsx#L65-L75)

**Issues:**
```tsx
gsap.to(titleElement, {
  x: 200,  // Fixed parallax movement
  ease: "none",
  scrollTrigger: {
    trigger: triggerElement,
    start: "top top",
    end: `+=${amountToScroll}`,
    scrub: 1,
  },
});
```

**Problems:**
- ⚠️ 200px parallax assumes large screen
- Not responsive to viewport width
- May cause text overflow on tablets

**Impact:** Medium - Can cause text cutoff

---

## 5. ELASTIC CURSOR COMPONENT

**File:** [src/components/ui/ElasticCursor.tsx](src/components/ui/ElasticCursor.tsx#L1-L100)

**Current Implementation:**
```tsx
const isMobile = useMediaQuery("(max-width: 768px)");

useLayoutEffect(() => {
  if (isMobile) return;  // Completely disabled on mobile
  // Cursor animation code...
}, [isMobile]);
```

**Analysis:**
- ✅ Good: Mobile users don't get unnecessary cursor code
- ✅ Good: Prevents touch issues
- ⚠️ But: Consider tablet with mouse as desktop

**Impact:** Low - Appropriate behavior

---

## 6. MODAL & INTERACTIVE ELEMENTS

### 6.1 Animated Modal

**File:** [src/components/ui/animated-modal.tsx](src/components/ui/animated-modal.tsx#L100-L130)

**Issues:**
```tsx
className={cn(
  "min-h-[50%] max-h-[90%] md:max-w-[40%]",  // Desktop-heavy sizing
  className
)}
```

**Problems:**
- ❌ `md:max-w-[40%]` leaves 40% width on mobile (could be larger)
- ❌ Mobile modal takes full viewport height but limited in width
- ⚠️ `min-h-[50%]` may waste space on short-content modals
- ⚠️ `max-h-[90%]` leaves no padding for keyboard on mobile

**Impact:** Medium - Modal content may not display optimally

**Recommendation:**
```tsx
className={cn(
  "min-h-[40%] max-h-[85%] w-[95vw] sm:w-auto md:max-w-[40%]",
  className
)}
```

---

### 6.2 Button Component

**File:** [src/components/ui/button.tsx](src/components/ui/button.tsx#L1-L50)

**Current Sizing:**
```tsx
size: {
  default: "h-10 px-4 py-2",  // 40px height
  sm: "h-9 rounded-md px-3",   // 36px height
  lg: "h-11 rounded-md px-8",  // 44px height
  icon: "h-10 w-10",
},
```

**Issues:**
- ⚠️ `default: h-10` (40px) is minimum touch target size (Apple: 44px, Google: 48px)
- ✅ `lg: h-11` (44px) is acceptable
- ❌ `sm: h-9` (36px) is below minimum touch target
- ⚠️ No responsive size variants (e.g., sm:h-10 on mobile)

**Impact:** Medium - Touch accuracy issues on mobile

**Recommendation:**
```tsx
size: {
  default: "h-11 sm:h-10 px-4 py-2",      // 44px mobile, 40px desktop
  sm: "h-10 sm:h-9 px-3",                 // 40px mobile, 36px desktop
  lg: "h-12 sm:h-11 px-8",                // 48px mobile, 44px desktop
  icon: "h-11 sm:h-10 w-11 sm:w-10",      // 44px mobile, 40px desktop
},
```

---

## 7. TOUCH EVENT HANDLING

### Current Implementation

**Findings:**
- ❌ **No explicit touch event handlers** in interactive components
- ❌ No `touch-*` utilities in Tailwind usage
- ❌ Spline keyboard relies on `keyDown`/`keyUp` events (not touch-compatible)
- ⚠️ Hover states may not translate to touch appropriately

**Affected Components:**
- AnimatedBackground (keyboard interaction)
- FloatingDock (if used on mobile)
- Project/Certificate cards (modal triggers)

**Impact:** High - Mobile users can't interact with keyboard skills section

**Recommendation:**
Add touch event handlers:
```tsx
const handleTouchStart = (e: TouchEvent) => {
  // Handle touch interaction with Spline
};

const handleTouchEnd = (e: TouchEvent) => {
  // Reset state
};

splineApp.addEventListener("touchStart", handleTouchStart);
splineApp.addEventListener("touchEnd", handleTouchEnd);
```

---

## 8. CONTACT FORM

**File:** [src/components/ContactForm.tsx](src/components/ContactForm.tsx)

**Issues:**
```tsx
<form className="min-w-7xl mx-auto sm:mt-4">
```

**Problems:**
- ❌ `min-w-7xl` (80rem/1280px) creates horizontal scroll on mobile
- Form is constrained to desktop width
- Should be `w-full` on mobile

**Impact:** High - Form unusable on mobile

**Recommendation:**
```tsx
<form className="w-full sm:min-w-7xl mx-auto sm:mt-4">
```

---

## 9. HEADER NAVIGATION

**File:** [src/components/header/header.tsx](src/components/header/header.tsx) + [style.module.scss](src/components/header/style.module.scss)

**Mobile State:**
```tsx
<div className="relative hidden md:flex items-center">
  <motion.p>Menu</motion.p>
  <motion.p>Close</motion.p>
</div>
```

**Issues:**
- ✅ "Menu/Close" text hidden on mobile (good)
- ⚠️ Burger icon visible but size unclear
- ⚠️ Navigation menu animation may be slow on mobile

**Impact:** Low - Generally well-handled

---

## 10. FLOATING DOCK

**File:** [src/components/ui/floating-dock.tsx](src/components/ui/floating-dock.tsx#L30-L60)

**Current State:**
```tsx
const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      // Mobile implementation exists but is commented out
    </div>
  );
};
```

**Issues:**
- ⚠️ Mobile floating dock is implemented but functionality is commented
- ❌ Mobile dock toggle button is also commented
- Mobile users don't have access to floating dock

**Impact:** Low - Only if dock is meant to be visible on mobile

---

## 11. SECTION HEIGHT & VIEWPORT ISSUES

### Issues with Full-Height Sections

**Files:**
- [src/components/sections/skills.tsx](src/components/sections/skills.tsx#L9) - `h-screen md:h-[150dvh]`
- [src/components/sections/projects.tsx](src/components/sections/projects.tsx) - `md:h-[130vh]`

**Problems:**
- ⚠️ `h-screen` = 100vh (can include browser chrome on mobile, causing overflow)
- ⚠️ `dvh` (Dynamic Viewport Height) is better but not supported in older browsers
- ⚠️ Height assumptions don't account for mobile keyboard

**Impact:** Medium - May cause layout jank when mobile keyboard appears

**Recommendation:**
```tsx
// Skills section
<SectionWrapper id="skills" className="w-full min-h-screen md:h-[150dvh]">

// Projects section - change from md:h-[130vh] to min-h
<SectionWrapper id="projects" className="min-h-screen md:h-[130vh]">
```

---

## 12. FONT SIZING & TEXT RESPONSIVENESS

**File:** [src/components/sections/hero.tsx](src/components/sections/hero.tsx#L58)

**Issues:**
```tsx
<h1 className="text-7xl md:text-7xl lg:text-8xl xl:text-9xl">
```

**Problems:**
- ❌ No text sizing for `sm:` or base (< 640px) breakpoint
- Base: 7xl (3.5rem) - likely too large for 375px mobile
- ✅ Good that there are responsive variants for larger screens

**Recommendation:**
```tsx
<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
```

---

## 13. PARTICLESCOMPONENT

**File:** [src/components/Particles.tsx](src/components/Particles.tsx)

**Current Implementation:**
```tsx
const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
}: ParticlesProps) {
```

**Analysis:**
- ✅ Accounts for devicePixelRatio
- ✅ Default quantity reasonable
- ⚠️ No performance optimization for mobile
- ⚠️ Could reduce quality on low-end devices

**Recommendation:**
```tsx
const isMobileDevice = isMobile;
const quantity = isMobileDevice ? 15 : 30;  // Half particles on mobile
const ease = isMobileDevice ? 30 : 50;      // Less responsive on mobile
```

---

## 14. RESPONSIVE BREAKPOINTS ANALYSIS

**Tailwind Breakpoints Being Used:**
- `sm:` (640px)
- `md:` (768px)
- `lg:` (1024px)
- `xl:` (1280px)

**Issues:**
- ❌ No explicit `xs` (<640px) optimizations
- ⚠️ Many components skip `sm:` breakpoint
- ⚠️ Gap between `md` (768px) and `lg` (1024px) is large (256px)

**Devices Not Well Optimized:**
- iPhone SE / Small phones: 375px
- iPhone X/11/12: 390px
- iPhone 13/14: 390-410px
- Foldables: 344px-600px range

**Recommendation:**
Add explicit small screen consideration throughout components.

---

## 15. ANIMATION PERFORMANCE ON MOBILE

**Risky Components:**
- 3D Spline keyboard (continuous animations)
- Elastic cursor with GSAP (lots of calculations)
- Particles canvas (CPU intensive)
- Multiple Framer Motion animations in sections

**Potential Issues:**
- ⚠️ Battery drain from continuous 60fps animations
- ⚠️ Frame drops on budget smartphones
- ⚠️ Overheating on sustained.usage

**Recommendation:**
```tsx
const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
const isMobileDevice = useMediaQuery("(max-width: 768px)");

const shouldReduceAnimations = prefersReducedMotion || (isMobileDevice && isBatteryLow());
```

---

## ISSUE SEVERITY SUMMARY

### 🔴 CRITICAL (Fix Immediately)
1. **Missing viewport meta tag** - [layout.tsx](src/app/layout.tsx)
2. **Project cards hardcoded 400px width** - [projects.tsx](src/components/sections/projects.tsx)
3. **Projects archive page 300px cards** - [/projects/page.tsx](src/app/projects/page.tsx)
4. **Contact form min-w-7xl** - [ContactForm.tsx](src/components/ContactForm.tsx)

### 🟠 HIGH (Should Fix Soon)
1. **No touch event handling for 3D keyboard**
2. **Button sizes below recommended touch targets** - [button.tsx](src/components/ui/button.tsx)
3. **Hackathons/Certificates 600px cards** - [hackathons.tsx](src/components/sections/hackathons.tsx)
4. **Modal sizing issues** - [animated-modal.tsx](src/components/ui/animated-modal.tsx)
5. **Hero section font sizing** - [hero.tsx](src/components/sections/hero.tsx)

### 🟡 MEDIUM (Consider in Future)
1. **Hardcoded parallax movements** - [hackathons.tsx](src/components/sections/hackathons.tsx)
2. **About section image height** - [about.tsx](src/components/sections/about.tsx)
3. **Keyboard scale on very small devices** - [animated-background-config.ts](src/components/animated-background-config.ts)
4. **Scroll-pinning on tablets** - Multiple files
5. **Animation performance optimization**

### 🟢 LOW (Nice to Have)
1. **Particle optimization for mobile**
2. **Floating dock functionality** - [floating-dock.tsx](src/components/ui/floating-dock.tsx)
3. **Elastic cursor behavior on tablets**

---

## RECOMMENDED IMPROVEMENT PLAN

### Phase 1: Critical Fixes (Week 1)
- [ ] Add viewport meta tag
- [ ] Fix project card widths (responsive)
- [ ] Fix contact form width constraint
- [ ] Add touch event handlers to keyboard

### Phase 2: High Priority (Week 2)
- [ ] Update button touch targets
- [ ] Fix modal sizing
- [ ] Adjust hero font sizes
- [ ] Fix large horizontal-scroll-prone cards

### Phase 3: Polish (Week 3)
- [ ] Optimize animations for mobile
- [ ] Add reduced motion support
- [ ] Test on actual devices
- [ ] Performance profiling

### Phase 4: Enhancement (Ongoing)
- [ ] Battery optimization
- [ ] Tablet landscape support
- [ ] Foldable device testing
- [ ] Dark mode mobile testing

---

## Files Requiring Attention (Priority Order)

1. **[src/app/layout.tsx](src/app/layout.tsx)** - Add viewport meta tag
2. **[src/components/sections/projects.tsx](src/components/sections/projects.tsx)** - Fix 400px width
3. **[src/app/projects/page.tsx](src/app/projects/page.tsx)** - Fix card sizing
4. **[src/components/ContactForm.tsx](src/components/ContactForm.tsx)** - Fix form width
5. **[src/components/ui/button.tsx](src/components/ui/button.tsx)** - Increase touch targets
6. **[src/components/animated-background.tsx](src/components/animated-background.tsx)** - Add touch support
7. **[src/components/ui/animated-modal.tsx](src/components/ui/animated-modal.tsx)** - Responsive sizing
8. **[src/components/sections/hero.tsx](src/components/sections/hero.tsx)** - Font sizing for mobile
9. **[src/components/sections/hackathons.tsx](src/components/sections/hackathons.tsx)** - Card scaling
10. **[src/components/sections/certificates.tsx](src/components/sections/certificates.tsx)** - Card scaling

---

## Testing Recommendations

### Devices to Test
- iPhone SE (375px)
- iPhone 12 (390px)  
- iPhone 14 Pro Max (430px)
- Samsung Galaxy S20 (360px)
- iPad Air (820px landscape)
- iPad Pro (1024px+)
- Google Pixel 5 (393px)

### Testing Tools
- Chrome DevTools mobile emulation
- React DevTools profiler
- Lighthouse mobile audit
- `prefers-reduced-motion` testing

### Metrics to Monitor
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Touch target accuracy

---

## Browser Support

### Current State
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ⚠️ `dvh` not supported in Safari < 15.4
- ⚠️ Some CSS features require fallbacks

### Recommended Fallbacks
```css
/* For dvh support */
height: 100vh;
height: 100dvh;

/* Optional: Use clamp for responsive sizing */
font-size: clamp(1.5rem, 5vw, 3.5rem);
```

---

## Performance Optimization Opportunities

### Canvas-Based (Particles)
- Reduce particle count on mobile
- Lower refresh rate on battery saver mode
- Disable on low-end devices (via User-Agent or feature detection)

### 3D Animations (Spline)
- Lazy load 3D scene on mobile
- Reduce animation frame rate
- Add iOS-specific optimizations

### GSAP Animations
- Reduce tweens on mobile
- Disable some animations on mobile
- Use `will-change` sparingly

---

## Accessibility Considerations Related to Responsiveness

- ✅ Proper semantic HTML in sections
- ⚠️ Touch target sizes now below WCAG AA (buttons < 44px)
- ❌ No skip-to-content links for mobile
- ⚠️ Modal might not work with screen readers properly on mobile

---

## Conclusion

The portfolio has solid foundational responsive design with Tailwind CSS and mobile detection. However, several critical issues prevent optimal mobile experience:

1. **Configuration issues** (missing viewport)
2. **Hardcoded dimensions** (cards, modals, forms)
3. **Touch interaction gaps** (keyboard skills, buttons)
4. **Animation overload** on mobile devices

Implementing the recommended fixes in Phase 1 will significantly improve mobile usability. Subsequent phases will polish the experience and optimize performance.

**Estimated effort:** 
- Phase 1: 2-3 days
- Phase 2: 2-3 days  
- Phase 3: 1-2 days
- Phase 4: Ongoing

