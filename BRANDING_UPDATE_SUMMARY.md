# Branding Update Summary: lunchpaad → Lunchpadd

## ✅ Complete Update

All references to "lunchpaad" / "Shopperly" have been updated to **"Lunchpadd"** across the entire codebase.

---

## 🎨 Design & UI Upgrades

- **New Brand Identity:** Rebranded from lunchpaad to **Lunchpadd** with new logo (`ui/new-logo.jpeg` → `public/logo.jpeg`).
- **Typography:** Adopted Google Inter font with optimized weights and tighter, modern letter-spacing.
- **Color Palette:** Shifted to a vibrant, cohesive modern palette:
  - Primary: Deep Indigo / Violet (`#6c5ce7`, `#5a4bd1`, `#a29bfe`)
  - Accent: Electric Cyan (`#00cec9`, `#00b5b0`, `#81ecec`)
  - Backgrounds: Subtle layered radial gradients with clean light glassmorphism
- **Interactive Enhancements:** Suggestion chips in Hero section are now clickable, instantly populating the prompt input.
- **Glassmorphic Elements:** Polished blur layers, borders, and shadows across all components.

---

## 📄 Pages Updated

### 1. Header & Navigation
- **Location:** `src/components/layout/Header.tsx`, `Header.css`
- Modern Lunchpadd logo and wordmark
- Animated link underline effect and glassmorphic pill buttons

### 2. Hero Section
- **Location:** `src/components/sections/Hero.tsx`, `Hero.css`
- Modern radial gradient background with subtle dot grid
- Interactive prompt input with animated typing placeholders & clickable suggestion chips

### 3. Features, Stats, How It Works, Pricing, Website Types, CTA
- **Location:** `src/components/sections/`
- All cards styled with modern hover lifts, border shines, and gradient badges

### 4. About Us Page
- **Location:** `src/components/pages/AboutUs.tsx`, `AboutUs.css`
- Route: `/about`
- Complete Lunchpadd narrative, mission, and step cards

### 5. Privacy Policy
- **Location:** `src/components/pages/PrivacyPolicy.tsx`, `PrivacyPolicy.css`
- Route: `/privacy-policy`
- Contact: `privacy@Lunchpadd.com`

### 6. Terms of Use
- **Location:** `src/components/pages/TermsOfUse.tsx`
- Route: `/terms-of-use`
- Contact: `legal@Lunchpadd.com`

### 7. Terms and Conditions
- **Location:** `src/components/pages/TermsAndConditions.tsx`
- Route: `/terms-and-conditions`
- Contact: `billing@Lunchpadd.com`

### 8. Contact Us Page
- **Location:** `src/components/pages/Contact.tsx`, `Contact.css`
- Route: `/contact`
- Contact emails updated:
  - `support@Lunchpadd.com`
  - `sales@Lunchpadd.com`
  - `billing@Lunchpadd.com`
  - `privacy@Lunchpadd.com`
  - `abuse@Lunchpadd.com`
  - `legal@Lunchpadd.com`

### 9. Auth Pages (Login & Signup)
- **Location:** `src/components/pages/Login.tsx`, `Signup.tsx`, `Auth.css`
- Rebranded with Lunchpadd logo, updated copy, and cohesive purple/cyan auth card styles

### 10. SEO & Meta
- **Location:** `index.html`, `public/robots.txt`, `public/sitemap.xml`, `package.json`
- Page title: `Lunchpadd - Build websites with AI`
- Updated favicon, OpenGraph, sitemap, and robots configurations
