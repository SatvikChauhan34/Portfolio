# Satvik Chauhan — Portfolio

A dark-cinematic, single-page portfolio built to feel like an Apple keynote crossed with a Bloomberg terminal. Not a resume on a webpage. A product experience that sells a person.

**Live:** [satvikchauhan](https://satvikchauhan-rouge.vercel.app/)

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | React 18+ with Vite |
| Styling | Tailwind CSS 3.4+ |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter, Space Grotesk, JetBrains Mono (Google Fonts) |
| Deployment | Vercel |

---

## Features

- **Dark Cinematic Design** — custom color system with grain texture overlay, glassmorphic cards, and gradient mesh backgrounds
- **Scroll Animations** — every section reveals on scroll using Framer Motion's `whileInView`, choreographed hero entrance sequence, and a scroll progress bar
- **Animated Metric Counters** — numbers count up on scroll using `useMotionValue` and `useInView`
- **Interactive Case Studies** — accordion-style expandable cards with unique gradient backgrounds and animated tags
- **Name Hover Popover** — hovering on "Satvik Chauhan" opens a glassmorphic card with photo, bio, and links
- **My Arsenal Section** — tools shown as flippable 3D cards in a marquee, skills as scrolling pills in the opposite direction
- **Self-Drawing Timeline** — the Beyond section timeline draws itself as you scroll using `scaleY` tied to scroll progress
- **Responsive** — fully responsive across desktop, tablet, and mobile
- **Accessible** — WCAG AA contrast compliant, semantic HTML, keyboard navigable

---

## Sections

1. **Hero** — headline with DM Serif Display, animated gradient orb, dot grid background, pulsing "Currently" indicator
2. **Credibility Strip** — companies worked with as styled badge pills with hover glow
3. **Impact** — four large animated counters (100K+ SMBs Impacted, 14% Conversion Lift, etc.)
4. **The Work** — four case studies with expandable accordion detail, each with context, problem, approach, and outcome
5. **Philosophy** — four principle cards with 3D tilt hover effect, each tied to a real case study
6. **My Arsenal** — tools (flippable logo cards) and skills (pill marquee) in opposing scroll directions
7. **Beyond** — animated self-drawing timeline of roles and milestones
8. **Connect** — "Got a Hard Problem?" CTA with gradient mesh and shimmer button animation

---

## Design System

```
Background:   #0A0A0F / #12121A / #1A1A2E
Text:         #F0F0F5 / #8888A0 / #7575A0
Accents:      #6C63FF (indigo) / #00D4AA (mint) / #FF6B6B (coral)
Border:       #1F1F35
```

Typography: Inter (body), Space Grotesk (headings), JetBrains Mono (metrics), DM Serif Display (hero headline)

---

## Getting Started

```bash
# Clone
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install
npm install

# Dev
npm run dev

# Build
npm run build
```

---

## Deployment

Push to GitHub. Connect the repo to [Vercel](https://vercel.com). It auto-detects Vite/React and deploys on every push to `main`.

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

---

## Project Structure

```
├── public/
│   └── satvik.png              # Profile photo
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── CredibilityStrip.jsx
│   │   ├── ImpactMetrics.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Philosophy.jsx
│   │   ├── Arsenal.jsx
│   │   ├── Timeline.jsx
│   │   ├── Connect.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FadeUp.jsx          # Scroll reveal wrapper
│   │   ├── Counter.jsx         # Animated metric counter
│   │   ├── ScrollProgress.jsx  # Top progress bar
│   │   └── NamePopover.jsx     # Hover card with photo + bio
│   ├── data/
│   │   └── content.js          # All case study text, metrics, skills
│   ├── App.jsx
│   ├── index.css               # Grain overlay, marquee keyframes, global styles
│   └── main.jsx
├── tailwind.config.js          # Custom color tokens, font families
├── index.html
├── package.json
└── README.md
```

---


---

Built with intent. Shipped with code.
