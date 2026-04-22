# Sere Innovations — Landing Page

A modern, responsive landing page for Sere Innovations, an agri-tech company bringing affordable smart egg incubation systems to small poultry farmers.

**Tagline:** "Helping farmers hatch their own future"

---

## Project Overview

This is a single-page landing website designed to communicate the value of Sere Innovations' smart incubator to rural poultry farmers. The site explains the problem (dependency on external hatcheries), presents the solution (affordable in-farm incubation), and drives user inquiry and demos.

**Target Audience:** Small poultry farmers, agri-entrepreneurs, and rural youth in India

---

## 🎯 Features

**9 Required Sections:**
- Hero section with call-to-action
- Problem statement (external hatchery dependency)
- Solution overview (smart incubator benefits)
- Feature cards (easy to use, temperature control, humidity control, automatic egg turning, affordability, farmer-friendly design)
- Benefits section (control, independence, cost savings, simpler operations)
- Trust & credibility messaging
- Target audience identification
- Strong CTA with inquiry form
- Footer with contact information

 **Design Highlights:**
- Mobile-first responsive design (375px, 768px, 1280px+)
- Farmer-friendly color palette: Forest Green + Cream + Amber
- High legibility typography (18px+ body text)
- Clean, minimal design with generous whitespace
- No emojis — professional, grounded aesthetic
- Smooth interactions and hover states

**Accessibility:**
- Semantic HTML structure
- Proper heading hierarchy
- Good color contrast
- Mobile optimized

---

## Tech Stack

- **Frontend Framework:** React 19.2.5
- **Build Tool:** Vite 8.0.9
- **Styling:** Pure CSS with CSS Grid & Flexbox
- **Font:** Outfit (Google Fonts)
- **Deployment:** [Vercel / Netlify / GitHub Pages]

---

## 📦 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/sere-landing.git
cd sere-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

---

## Build & Deploy

### Build for production:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

### Deploy to Vercel (recommended):
```bash
npm install -g vercel
vercel
```

---

## 📁 Project Structure

```
sere-landing/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Problem.jsx
│   │   ├── Solution.jsx
│   │   ├── Features.jsx
│   │   ├── Benefits.jsx
│   │   ├── TrustCredibility.jsx
│   │   ├── WhoItIsFor.jsx
│   │   ├── CTASection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── App.css
├── public/
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Design System

### Colors
- **Forest Green:** #1B4332 (primary, headings)
- **Cream:** #F9F8F4 (background, neutrals)
- **Amber:** #D97706 (CTAs, accents)
- **Dark Text:** #2d3748
- **Muted Text:** #4a5568

### Typography
- **Font Family:** Outfit (sans-serif)
- **Body:** 18px, line-height 1.7
- **Headings:** Bold weights (600-700)
- **Mobile:** Proportionally scaled for readability

### Spacing
- Section padding: 5rem vertical (6rem on desktop)
- Grid gaps: 2.5rem
- Card padding: 2.5rem vertical, 2rem horizontal

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| Mobile | 375px | Single column |
| Tablet | 768px | 2-column grids |
| Desktop | 1024px+ | Full 3-column grids |

---

## ✨ Key Decisions

1. **No Tailwind:** Built custom CSS utilities for lighter bundle and better control
2. **React Components:** Organized each section as a separate component for maintainability
3. **No Backend:** Form provides UI feedback; backend integration can be added later
4. **Mobile-First:** All breakpoints tested and optimized
5. **Plain Language:** All copy written for farmer-friendly accessibility

---

## Available Scripts

- `npm run dev` — Start development server with HMR
- `npm run build` — Build for production
- `npm run lint` — Run ESLint
- `npm run preview` — Preview production build locally

---

## Content Guidelines

This site follows the Sere Innovations PRD (Product Requirements Document) with emphasis on:
- **Clarity:** Simple language, no jargon
- **Trustworthiness:** Honest messaging, no fake testimonials
- **Farmer-centricity:** Designed for rural audience
- **Problem-Solution Arc:** Narrative flow guides users to action

---

## Future Improvements

- Add SVG illustrations (incubator, egg, chick, farmer)
- Connect form to backend email service
- Add scroll animations and transitions
- Implement hamburger menu for mobile navigation
- Add accessibility features (ARIA labels, keyboard navigation)
- Add multilingual support (Hindi)
- Integration with CRM for lead tracking

---

## License

This project is proprietary to Sere Innovations (NayaGrowth Internship Task).

---

## Author

**Abishek Kishan**

---

## Contact

For questions about this project:
- Email: [ak.abishek005@gmail.com]
- GitHub: [https://github.com/abishek-005]

---

*Built for the NayaGrowth Frontend Developer Internship Program | Deadline: April 25, 2026*
