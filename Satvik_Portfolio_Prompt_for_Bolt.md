# PORTFOLIO WEBSITE — SATVIK CHAUHAN

> **Build a single-page, dark-cinematic portfolio website for an early-career Product Manager. The site should feel like an Apple keynote crossed with a Bloomberg terminal — high contrast, dramatic metric reveals, silky scroll animations, and a sense that every pixel was placed with product intent. This is not a resume on a webpage. This is a product experience that sells a person.**

> **⚠️ CRITICAL INSTRUCTION: DO NOT rewrite, summarize, or paraphrase ANY case study text below. Use EVERY WORD exactly as written. The copy is final — your job is to build the UI around it, not edit it.**

---

## TECH STACK

- **Framework:** React 18+ with Vite
- **Styling:** Tailwind CSS 3.4+ — extend the Tailwind config with the custom color tokens below (do NOT use raw CSS custom properties — define everything in `tailwind.config.js` under `theme.extend.colors`)
- **Animations:** Framer Motion (for scroll-triggered reveals, stagger animations, number counters, parallax). Use Framer Motion's `useScroll` hook for BOTH the scroll progress bar AND active nav highlighting — do not mix Intersection Observer with Framer Motion for scroll tracking.
- **Icons:** Lucide React
- **Fonts:** Load from Google Fonts — `"Inter"` for body, `"Space Grotesk"` for headings, `"JetBrains Mono"` for metric numbers and code-style accents
- **No backend needed.** All content is hardcoded. Fully static site.

---

## DESIGN SYSTEM

### Color Palette (define these in `tailwind.config.js` → `theme.extend.colors`)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0F',
          secondary: '#12121A',
          tertiary: '#1A1A2E',
        },
        text: {
          primary: '#F0F0F5',
          secondary: '#8888A0',
          tertiary: '#7575A0',   // Accessible on dark bg (WCAG AA compliant)
        },
        accent: {
          indigo: '#6C63FF',
          mint: '#00D4AA',
          coral: '#FF6B6B',
        },
        border: {
          subtle: '#1F1F35',
        },
      },
    },
  },
}
```

Accent gradient (use inline styles where Tailwind can't express it):
```
linear-gradient(135deg, #6C63FF 0%, #00D4AA 100%)
```

Glow shadows (use for hover states on cards):
```
glow-indigo: 0 0 40px rgba(108, 99, 255, 0.15)
glow-mint: 0 0 40px rgba(0, 212, 170, 0.15)
```

### Typography Scale

```
Hero headline:       72px / 76px line-height / Space Grotesk 700 / letter-spacing: -0.03em
Section title:       48px / 54px / Space Grotesk 600 / -0.02em
Card title:          24px / 30px / Space Grotesk 600
Body large:          18px / 28px / Inter 400
Body:                16px / 26px / Inter 400
Caption/label:       13px / 18px / Inter 500 / uppercase / letter-spacing: 0.08em / text-secondary color
Metric number:       56px / 60px / JetBrains Mono 700
Metric label:        14px / 18px / Inter 500 / text-secondary
```

### Spacing & Layout

- Max content width: `1200px`, centered
- Section vertical padding: `120px` top and bottom (80px on mobile)
- Card padding: `32px` (24px on mobile)
- Card border-radius: `16px`
- Card border: `1px solid border-subtle`
- Card background: `bg-secondary`
- Cards get a subtle glow-indigo box-shadow on hover
- Grid gap: `24px`

### Animation Principles

- **Every section** fades in + slides up (20px translateY) as it enters viewport, using Framer Motion's `whileInView`
- Stagger children by `0.1s` within each section
- Duration: `0.6s` with `ease: [0.16, 1, 0.3, 1]` (smooth deceleration)
- Metric numbers use a **counting animation** — they count up from 0 to the final value over 1.5s when they scroll into view, using JetBrains Mono font
- **No animation plays until the element is at least 20% visible in the viewport**
- Hover transitions: `0.3s ease`
- Parallax: subtle, max 30px offset — don't overdo it
- **Scroll progress bar**: a thin (3px) gradient line (accent-gradient) fixed at the top of the viewport that fills left-to-right as the user scrolls down the page — use Framer Motion's `useScroll` + `useTransform` for this

---

## NAVIGATION

Fixed top navbar, `backdrop-blur-xl` with semi-transparent dark background (`rgba(10, 10, 15, 0.8)`), `border-bottom: 1px solid border-subtle`.

- **Left side:** Name "SC" as a small monogram in accent-gradient text, Space Grotesk 700
- **Right side:** Navigation links — `Work` · `Impact` · `Philosophy` · `Beyond` · `Connect` — styled in text-secondary, turning text-primary on hover with a small underline animation (a 2px gradient line sliding in from left). The link for the currently visible section is always highlighted (text-primary + underline) — use Framer Motion's `useScroll` to track which section is in view.
- **Far right:** A CTA button — "Let's Talk" — small, pill-shaped, accent-gradient background, white text, subtle glow on hover
- On mobile: hamburger menu icon that opens a full-screen overlay nav with large centered links, backdrop-blur background

---

## SECTION 1: HERO

Full viewport height (`100vh`). No hero image. Pure typography and motion.

**Layout:**
- Content vertically and horizontally centered
- Above the headline: a small label in caption style — `PRODUCT MANAGER · AI-FIRST BUILDER · SYSTEMS THINKER` — with a tiny blinking cursor animation at the end (like a terminal cursor, accent-indigo color)
- **Headline (the hook — this is the first thing anyone reads):**

```
I don't just ship features.
I ship outcomes.
```

  - Render this as two lines. Each line animates in separately with a stagger — first line fades in + slides up, second line follows 0.3s later. Use Space Grotesk 700, 72px (48px on mobile). The word **"outcomes"** is styled with accent-gradient text (using `background-clip: text` and `-webkit-text-fill-color: transparent`).

- **Subheadline** (below, after 0.5s delay):

```
I build AI products that scale — currently at NowFloats, where 100,000+ small businesses run on what my team ships.
```

  - Styled in Body large (18px), text-secondary color, max-width 600px, centered.

- **"Currently" line** (below subheadline, after 0.6s delay):

```
Currently: Scaling AI content tools and rebuilding SME onboarding for Boost360 & BizHQ
```

  - Styled in 14px, Inter 500, text-tertiary, with a small green dot (accent-mint, 6px circle) pulsing gently before the word "Currently" — signals active work.

- **CTA Buttons** (below, after 0.7s delay): Two buttons side by side —
  1. `"View My Work"` — pill-shaped, accent-gradient background, white text, arrow-down icon, on click smooth-scrolls to the Work section
  2. `"Download Resume"` — pill-shaped, transparent with border-subtle border, text-secondary, download icon — links to the resume PDF (use `#` as placeholder)

- **Scroll indicator** at the very bottom of the hero: a small animated chevron-down icon that bobs up and down gently (infinite loop, 2s duration), text-tertiary color, with the word "Scroll" in caption style above it

**Background treatment:**
- A single large radial gradient glow centered behind the headline text — accent-indigo at 5% opacity, 600px radius, positioned slightly above center. This creates a subtle "spotlight" effect on the dark canvas.

---

## SECTION 1.5: CREDIBILITY STRIP

A thin horizontal bar (80px tall, bg-secondary background) sitting between the Hero and the Impact Ticker. It contains a row of company names/logos displayed in text-tertiary color, evenly spaced, horizontally centered:

```
NowFloats    ·    Times Internet    ·    ReachInBox AI    ·    Koo
```

- Use Space Grotesk 500, 14px, text-tertiary, uppercase, letter-spacing 0.1em
- On hover, each name brightens to text-secondary (0.3s transition)
- Preceded by a tiny label centered above the row: `"TRUSTED BY & WORKED WITH"` in 11px, text-tertiary, uppercase
- Keep it understated — this isn't a brag bar, it's a credibility signal

---

## SECTION 2: IMPACT TICKER

A horizontal strip (~200px tall) with bg-secondary background. This section scrolls into view and immediately starts counting.

**Four key metrics displayed in a row (2x2 grid on mobile):**

| Metric | Value | Label |
|--------|-------|-------|
| `100,000+` | SME customers impacted | Use accent-mint color for the number |
| `10x` | AI FAQ coverage expansion | Use accent-indigo color |
| `14%` | Conversion lift via A/B tests | Use accent-mint color |
| `10+` | Products and features shipped | Use accent-indigo color |

Each metric:
- Number in JetBrains Mono 700, 56px, colored as above
- Label in caption style below (13px, uppercase, text-secondary)
- Counts up from 0 when scrolling into view (e.g., 100,000 counts up from 0 over 1.5s; 14% counts from 0%; 10x counts from 0x)
- Each metric card has a faint top border in the respective accent color (2px)

---

## SECTION 3: WORK — CASE STUDIES (the core of the portfolio — 80% of the substance)

Section title: `"The Work"` — 48px, Space Grotesk, centered, with a small accent-gradient underline decoration (a thin line, 60px wide, centered below the title).

Below the title, a subtitle in text-secondary: `"Every product decision backed by data. Every launch measured by outcomes."`

### Case Study Card Design

Each case study is a **large card** (full content width, bg-secondary background, 16px border-radius, 1px border-subtle border). The card has two states:

**Collapsed state (default):** Shows a horizontal layout —
- Left side (60%): Project title (24px, Space Grotesk 600), company name (caption style, text-tertiary), and a one-line summary (body text, text-secondary). Below that: 2-3 small pill-shaped tags showing the key skills (e.g., "AI/ML", "Taxonomy", "Growth") — small rounded rectangles with border-subtle border and text-tertiary text.
- Right side (40%): One hero metric — the single most impressive number from this project, displayed large (JetBrains Mono, 48px, accent-mint color) with a label below it.
- A subtle "Read Case Study →" link at the bottom right in accent-indigo color.

**Expanded state (on click):** The card expands smoothly (Framer Motion `layout` animation, 0.5s) to reveal the full case study inside, structured as a narrative:

```
CONTEXT → PROBLEM → APPROACH → EXECUTION → OUTCOME → REFLECTION
```

Each section within the expanded card:
- Has a small label (caption style, accent-indigo color, uppercase) — e.g., "THE PROBLEM"
- Followed by 2-3 sentences of description (body text, text-primary)
- Key metrics or data points are highlighted inline with accent-mint color
- A "Close ✕" button at the top right of the expanded card

A thin vertical accent-gradient line runs down the left edge of the expanded content, acting as a visual timeline connector.

**The REFLECTION section** within each expanded case study should be visually de-emphasized — render it in a slightly smaller font (15px), italic, with a left border (2px solid border-subtle) as a pull-quote style. This keeps it available for curious readers without bloating the case study for scanners.

After all 4 case study cards, add a small centered line in text-tertiary, 14px: `"More case studies in progress — check back soon."`

### THE 4 CASE STUDIES (use this EXACT content — do not edit, paraphrase, or summarize):

---

#### CASE STUDY 1: "Teaching AI to Speak for 100,000 Businesses"

**Company:** NowFloats · **Role:** Associate Product Manager

**Tags:** `AI/ML` · `Vertical Scaling` · `Data Modeling`

**Hero Metric:** `10x` — "Coverage expansion"

**CONTEXT:**
NowFloats' Boost360 and BizHQ platforms help Indian SMEs build their digital presence. One core feature was an AI-powered FAQ generator that automatically created relevant FAQs for business listings — but it only worked for a single business vertical.

**PROBLEM:**
With 100,000+ SME customers across wildly different industries — from restaurants to law firms to gyms — a one-vertical AI couldn't serve 90% of the user base. Businesses outside the original vertical got generic, often irrelevant FAQs that hurt their credibility with customers.

**APPROACH:**
Owned the full product strategy to expand from 1 to 10 verticals. This wasn't just "add more templates" — it required rethinking the data model, AI generation logic, and how vertical-specific context gets injected into prompts. I wrote the PRD, designed wireframes, defined API specs, and worked directly with engineering on the AI generation pipeline.

**EXECUTION:**
- Mapped the unique FAQ patterns for each of 10 business verticals through user research and competitive analysis
- Designed a flexible data model that could accommodate vertical-specific attributes without ballooning complexity — collaborating with the backend engineer to stress-test schema scalability
- Defined the AI prompt engineering approach — each vertical got contextual priming that produced naturally relevant Q&As
- Coordinated rollout across both Boost360 and BizHQ platforms simultaneously, syncing with QA and Customer Success for parallel testing
- Built QC checkpoints using confidence scoring to catch low-quality generations before they went live

**OUTCOME:**
Expanded AI FAQ coverage from 1 to 10 business verticals — a 10x increase. The generator now serves contextually relevant FAQs to the full breadth of NowFloats' 100,000+ SME customer base across both platforms. Generation quality, measured by confidence scores and manual QC passes, matched or exceeded the original single-vertical performance.

**REFLECTION:**
The hardest part wasn't the AI — it was the taxonomy. Understanding what makes a "good FAQ" different for a dentist versus a caterer required talking to actual business owners, not just looking at data. This project taught me that scaling AI products is fundamentally a domain-understanding problem, not a technology problem.

---

#### CASE STUDY 2: "Reclassifying 100,000 Businesses Nobody Could Find"

**Company:** NowFloats · **Role:** Associate Product Manager

**Tags:** `Search & Discovery` · `Data Quality` · `Taxonomy`

**Hero Metric:** `100K+` — "Listings reclassified"

**CONTEXT:**
NowFloats maintains digital listings for 100,000+ Indian SMEs. These listings surface on Google Search — which means the business category classification directly impacts whether a potential customer finds them.

**PROBLEM:**
Years of organic growth had left the classification system broken. Businesses were tagged under wrong or outdated categories. A boutique hotel classified as "Travel Agency." A physiotherapist under "General Physician." Each misclassification was an invisible SEO penalty — the business was online but unfindable.

**APPROACH:**
Led a full reclassification initiative across all 100,000+ listings using a rebuilt business taxonomy spanning 10 verticals. Designed a rule-based keyword scoring system combined with confidence-scored QC to automate the bulk of reclassification while flagging edge cases for manual review.

**EXECUTION:**
- Audited the existing taxonomy and identified the most common misclassification patterns
- Built a new 10-vertical taxonomy with clear classification rules and boundary cases documented
- Designed the keyword scoring algorithm — each business listing was scored against vertical-specific keyword sets, with confidence thresholds determining auto-classification vs. manual review
- Implemented a confidence-scored QC pipeline to validate results before they went live — working with the data team to define threshold calibration
- Coordinated with Customer Success to handle edge cases and communicate changes to affected businesses

**OUTCOME:**
Successfully reclassified 100,000+ SME listings across 10 verticals. The improved taxonomy directly sharpened Google Search discoverability for NowFloats' entire customer base — businesses that were previously invisible for relevant search queries started appearing in the right results.

**REFLECTION:**
This project was a masterclass in "infrastructure as product." Nobody sees a taxonomy. No customer asked for reclassification. But the downstream impact on discoverability was enormous. It reinforced my belief that the most impactful PM work is often the work nobody notices.

---

#### CASE STUDY 3: "14% More Conversions, One Test at a Time"

**Company:** Times Internet · **Role:** Product Executive

**Tags:** `Growth` · `A/B Testing` · `Funnel Optimization`

**Hero Metric:** `14%` — "Conversion lift"

**CONTEXT:**
TimesHealth+ and ET Digital are digital properties under Times Internet, one of India's largest media conglomerates. I owned the quarterly growth charters — activation, engagement, and conversion KPIs — for both products.

**PROBLEM:**
Conversion funnels had been designed once and left untouched. Landing pages, CTAs, onboarding flows, and communication touchpoints were all based on assumptions, not data. Nobody was systematically testing what actually worked.

**APPROACH:**
Designed and executed 5+ structured A/B tests across the entire conversion funnel — from landing pages to CTAs to onboarding flows to email communication touchpoints. Each test was hypothesis-driven with clear success metrics defined before launch.

**EXECUTION:**
- Mapped the full user journey from first touch to conversion for both TimesHealth+ and ET Digital
- Identified the highest-drop-off points through funnel analysis
- Prioritized tests by estimated impact × effort, focusing on the leakiest parts of the funnel first
- Ran disciplined A/B tests with proper statistical significance thresholds — no premature winners — partnering with the analytics team to validate sample sizes
- Automated funnel, cohort, and user-journey dashboards that saved 10+ hours per week of manual reporting across teams
- Turned friction insights into prioritized roadmap bets, sizing each opportunity by potential impact

**OUTCOME:**
Lifted conversion by 14% through systematic experimentation. Automated reporting infrastructure saved 10+ hours per week of manual work across teams. More importantly, established a culture of "test before you ship" in two product teams that previously relied on intuition.

**REFLECTION:**
The 14% number is nice, but what I'm prouder of is the reporting automation. The dashboards I built outlasted my tenure — they're still being used. Building systems that keep generating value after you leave is the best kind of product work.

---

#### CASE STUDY 4: "Onboarding That Gets SMEs Live in Minutes, Not Days"

**Company:** NowFloats · **Role:** Associate Product Manager

**Tags:** `0→1 Product` · `AI-Assisted UX` · `Onboarding`

**Hero Metric:** `4` — "Apps benchmarked (Zomato, Swiggy, Blinkit, Zepto)"

**CONTEXT:**
NowFloats onboards thousands of SMEs onto its platform every month. The onboarding flow is the first product experience these business owners have — it determines whether they complete their profile setup and go live, or abandon the platform before getting any value.

**PROBLEM:**
The existing onboarding was a long, manual form that required SMEs to type out their business details from scratch — name, address, services, keywords, descriptions. Most small business owners don't think in "SEO keywords" or "business descriptions." Drop-off during onboarding was high, and businesses that did complete it often launched with thin, low-quality profiles that underperformed on search.

**APPROACH:**
Revamped the entire onboarding journey from scratch — designing an AI-assisted flow with Google Business Profile autofill and smart keyword recommendations. Benchmarked the new flow against the onboarding UX of Zomato, Swiggy, Blinkit, and Zepto to match consumer-app levels of simplicity for a B2B product.

**EXECUTION:**
- Audited the existing onboarding funnel step-by-step, identifying every friction point and drop-off trigger
- Studied onboarding flows of Zomato, Swiggy, Blinkit, and Zepto — extracted patterns around progressive disclosure, autofill, and minimal-input design
- Designed the AI-assisted flow: business owners enter their Google Business Profile link or phone number, and the system autofills name, address, category, hours, and photos — reducing manual input by ~70%
- Built smart keyword recommendations that suggest search-ready keywords based on business vertical and location — so even non-tech-savvy owners launch with optimized profiles
- Worked closely with the frontend engineer on interaction design and with the ML team on the recommendation engine
- Defined success metrics: onboarding completion rate, time-to-live, and Day-7 profile completeness score

**OUTCOME:**
Shipped a reimagined onboarding that gets SMEs from signup to a search-ready live profile in minutes instead of days. The AI-assisted autofill dramatically reduced manual input, and smart keyword recommendations ensured that profiles launched with SEO-optimized content from day one — without the business owner needing to understand SEO.

**REFLECTION:**
This was my first true 0→1 product experience — not optimizing something that existed, but reimagining it entirely. The biggest lesson: the best onboarding doesn't teach users your product; it removes the need to learn it. When a restaurant owner taps one button and sees their Google listing auto-populate into a professional profile, that's not a feature — that's trust earned in 10 seconds.

---

## SECTION 4: PHILOSOPHY — "How I Think About Product"

Section title: `"How I Build"` — same styling as section 3 title.

This section uses a **2x2 grid of principle cards** (stacks to 1 column on mobile). Each card:
- bg-secondary background
- A large icon at the top (Lucide icon, 32px, accent-indigo color)
- A bold title (20px, Space Grotesk 600)
- A 2-3 sentence description (body text, text-secondary)
- A small reference line at the bottom linking to a case study (14px, text-tertiary, italic) — e.g., "See: Reclassifying 100K Businesses"
- Hover: card lifts slightly (translateY -4px) with glow-indigo shadow

**The 4 Principle Cards:**

1. **Icon:** `Search` (magnifying glass)
   **Title:** "Start With the Friction"
   **Description:** "I don't start with solutions. I start with the moment a user gets stuck — the drop-off point, the confused click, the support ticket. The best products are built backward from frustration."
   **Reference:** _See: 14% More Conversions_

2. **Icon:** `BarChart3`
   **Title:** "Measure the Outcome, Not the Output"
   **Description:** "Shipped features don't matter. Changed metrics do. Every PRD I write starts with the number we're trying to move and ends with how we'll know we moved it."
   **Reference:** _See: 14% More Conversions_

3. **Icon:** `Layers`
   **Title:** "Infrastructure Is Product"
   **Description:** "Taxonomy reclassification. Reporting automation. Data model redesign. The work nobody sees often creates the most value. I'm not afraid of the invisible wins."
   **Reference:** _See: Reclassifying 100K Businesses_

4. **Icon:** `Zap`
   **Title:** "Ship, Learn, Iterate"
   **Description:** "Perfect specs don't survive contact with real users. I'd rather ship a focused V1 in two weeks and learn from live data than spend two months polishing assumptions. Speed is a feature."
   **Reference:** _See: Onboarding That Gets SMEs Live_

---

## SECTION 5: BEYOND — "The Other 20%"

Section title: `"Beyond Product"` — same styling.

Subtitle: `"Building things bigger than backlogs."`

This section is a **compact timeline** — a vertical line (2px, border-subtle color) running down the left side, with events branching off to the right. Each event is a small card.

**Timeline events (top to bottom):**

1. **Label:** `LEADERSHIP`
   **Title:** "Founded The South Asian Policy Initiative"
   **Description:** "Built and led a 150+ member organization from scratch — producing research on Sustainable Urban Transport, Climate Resilience, and Women's Political Participation across South Asia. Collaborated with students from IITs, JNU, and other premier institutions."
   **Date:** "2023 – 2024"

2. **Label:** `SOCIAL IMPACT`
   **Title:** "The Soft Movement — PaperBag Project"
   **Description:** "Managed operations for 1,000+ volunteers across 50+ chapters in Indian cities. Secured 6+ institutional partnerships, expanding into 5 new cities."
   **Date:** "2024"

3. **Label:** `THOUGHT LEADERSHIP`
   **Title:** "AI in Policy — Talks & Podcasts"
   **Description:** "Spoke at St. Stephen's College on AI governance. Podcast guest at Miranda House and the Indian Foreign Policy Project's inaugural Fireside Chat on AI's role in foreign policy."
   **Date:** "2023 – 2024"

Each timeline event card:
- Small label in caption style with accent-indigo color
- Title in 18px Space Grotesk 600
- Description in body text, text-secondary
- Date on the right side, text-tertiary, JetBrains Mono
- A small circle (8px, accent-gradient fill) on the timeline line marks where each event branches off

---

## SECTION 6: CONNECT — CTA + Footer

This is the final section, designed to convert.

**Layout:** Centered content, generous padding (160px top, 80px bottom).

- **Headline:** `"Got a Hard Problem?"` — 48px, Space Grotesk 600
- **Subtext:** `"I'm looking for PM roles where AI meets scale — companies building products that change how industries work. Let's talk."` — body large, text-secondary, max-width 500px, centered
- **CTA Buttons** (centered, side by side):
  1. `"Email Me"` — accent-gradient background, white text, `Mail` icon — links to `mailto:satvikchauhan34@gmail.com`
  2. `"LinkedIn"` — transparent with border-subtle border, text-secondary, LinkedIn icon — links to `https://linkedin.com/in/satvik-chauhan-903aba248`

**Footer** (below the CTA section, separated by a border-subtle top border):
- Left side: `"B.Tech IT · NIET '22–'26  ·  Delhi, India"` — text-tertiary, 13px
- Right side: `"© 2026 Satvik Chauhan"` — text-tertiary, 13px
- On mobile: stacked, centered

---

## RESPONSIVE DESIGN

- **Desktop (1200px+):** Full layouts as described above
- **Tablet (768px–1199px):**
  - Hero headline drops to 56px
  - Metric ticker becomes 2x2 grid
  - Case study cards stack vertically
  - Philosophy cards become 2-column
- **Mobile (below 768px):**
  - Hero headline: 36px
  - All grids become single column
  - Navigation becomes hamburger menu with full-screen overlay
  - Section padding reduces to 80px vertical
  - Card padding reduces to 24px
  - Metric numbers: 40px
  - Timeline shifts — line on the left, all content to the right (no alternating)
  - CTA buttons stack vertically

---

## INTERACTIONS & MICRO-DETAILS

1. **Smooth scroll:** Enable CSS `scroll-behavior: smooth` globally. All internal navigation links scroll smoothly to their target sections.

2. **Active nav highlighting:** As the user scrolls, the navbar link corresponding to the currently visible section gets highlighted (text-primary + small underline). Use Framer Motion's `useScroll` hook for this — same scroll tracker as the progress bar.

3. **Card hover states:** All cards — case study, philosophy, timeline — get a subtle lift (translateY -2px to -4px), border color shifts from border-subtle to a slightly lighter shade, and the faint glow shadow appears. Transition: 0.3s ease.

4. **Gradient text animation:** The gradient text on the word "outcomes" in the hero headline has a very slow, subtle gradient shift animation — the gradient angle rotates from 135deg to 315deg and back over 8 seconds, infinite loop. This makes the text feel "alive" without being distracting.

5. **Page load sequence:** On initial page load, the hero content animates in with a choreographed sequence:
   - 0.0s: Navbar fades in
   - 0.3s: Label ("PRODUCT MANAGER · AI-FIRST BUILDER · SYSTEMS THINKER") fades in
   - 0.6s: First line of headline slides up
   - 0.9s: Second line of headline slides up
   - 1.2s: Subheadline fades in
   - 1.4s: "Currently" line fades in
   - 1.6s: CTA buttons fade in
   - 2.0s: Scroll indicator fades in
   All animations use the smooth deceleration easing curve `[0.16, 1, 0.3, 1]`.

6. **Number counter animation:** When metric numbers scroll into view, they count up from 0 to their final value. Use Framer Motion's `useMotionValue` + `useTransform` + `animate`. Duration: 1.5s, ease-out. Numbers with "+" suffix (like "100,000+") show the "+" only after the count finishes. The "x" in "10x" also appears after.

7. **Case study expand/collapse:** Use Framer Motion `AnimatePresence` and `layout` prop for smooth height transitions. When a case study opens, others collapse. Only one case study open at a time (accordion behavior). Scroll the opened case study to the top of the viewport (with offset for the fixed navbar).

---

## PERFORMANCE & POLISH

- Lazy load all sections below the fold
- Use `will-change: transform` on animated elements for GPU acceleration
- Preload the three Google Fonts in the `<head>`
- Add appropriate `meta` tags:
  - `<title>Satvik Chauhan — Product Manager</title>`
  - `<meta name="description" content="Product Manager building AI products at scale. 100K+ SMEs impacted, 10x AI coverage, 14% conversion lift. View case studies and product philosophy.">`
  - Open Graph tags for social sharing (title, description, and a solid color OG image placeholder)
- Favicon: Use an inline SVG favicon — the letters "SC" in Space Grotesk 700, accent-gradient colored, on a transparent background

---

## WHAT THIS IS NOT

- NOT a template with generic placeholder text — every word above is the final content, use it verbatim
- NOT a multi-page site — this is a single-page scrolling experience
- NOT flashy for the sake of flashy — every animation serves a purpose (guide attention, reveal information, create rhythm)
- NOT a resume dump — it's a curated narrative that positions a product person through the lens of outcomes and thinking
- NOT light mode — this is dark mode only, no toggle needed

---

## BOLT.NEW EXECUTION NOTES

This prompt is long. To get the best results:

1. **First pass:** Paste this entire prompt. Bolt will generate the full structure, design system, and most sections. If any case study text appears to be truncated or paraphrased, paste the missing content in a follow-up message with: "Replace the content for Case Study [N] with this exact text: [paste]"

2. **Second pass (if needed):** Check animations — the scroll progress bar, metric counters, accordion expand/collapse, and hero load sequence. If any are missing, ask: "Add the scroll progress bar using Framer Motion useScroll" or similar targeted fixes.

3. **Do not add a custom mouse cursor.** Standard cursor only.

4. **Fallback guidance:** If the gradient text animation on "outcomes" causes rendering issues, remove it and use static gradient text instead. Function over flair.

---

## FINAL CHECKLIST

Before considering this done, verify:

- [ ] All 4 case studies render with full content (every word, not paraphrased), expandable accordion style
- [ ] Reflection sections are styled as pull-quotes (italic, left-bordered, smaller font)
- [ ] Metric counters animate on scroll-in
- [ ] Navbar highlights active section on scroll
- [ ] Scroll progress bar works across the full page
- [ ] Hero animation sequence plays on load with correct timing
- [ ] "Currently" line shows with pulsing green dot
- [ ] Credibility strip shows all 4 company names
- [ ] All hover states work (cards, buttons, nav links)
- [ ] Mobile hamburger menu opens/closes smoothly
- [ ] Responsive breakpoints at 768px and 1200px work correctly
- [ ] All external links (email, LinkedIn) work
- [ ] Philosophy cards reference specific case studies
- [ ] "More case studies in progress" line shows below case study cards
- [ ] Footer shows education info and copyright
- [ ] Page loads fast — no unnecessary dependencies
- [ ] Typography hierarchy is consistent throughout
- [ ] Tailwind config has all custom colors defined
