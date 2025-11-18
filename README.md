# Bester Marketing Website

**Tagline:** *"Self-development made social."*

---

## What is Bester?

**Bester** is an AI-powered, social self-development app that combines:

- **AI** – Smart coaching, personalized routines, and intelligent guidance
- **Social** – Community feed, shared progress, and accountability
- **Systems** – Structured routines, quests, realms, and consistency tracking

Bester helps people grow by making self-development **fun, social, and sustainable**. Instead of working on yourself alone, you do it with a community—supported by AI that learns your patterns and helps you build better habits.

This repository contains the **public marketing website** for Bester—a fast, playful landing experience designed to communicate the product vision and collect waitlist signups.

---

## What This Marketing Site Does

### Scope

This website is **not the Bester app**. It's a standalone marketing site with:

1. **Main Landing Page (`/`)** – Hero, value proposition, features, Besterverse showcase, and waitlist CTA
2. **About Page (`/about`)** – Mission, vision, and why Bester is different
3. **Waitlist Form** – Email capture with optional Early Access interest checkbox

### Non-Goals (For Now)

- Blog or content marketing pages
- User authentication or accounts
- Social proof (testimonials, partner logos) – *coming later*
- Analytics setup – *future extension*
- Testing infrastructure (Jest, Playwright, Cypress) – *future extension*
- The Bester app itself

---

## Pages Overview

### `/` – Main Landing Page

The landing page is designed to be **fast, colorful, playful, and motivating**.

**Hero Section:**

- **Headline:** *"Ready to start your Bester life?"*
- **Subheadline:** *"Self-development made social."*
- **Supporting line:** *"Where AI meets community to help you grow — together."*

**Visual Layout:**

- **Desktop:**
  - **Left:** Fast carousel of app UI previews, rotating through different "realms" or features every ~3 seconds (e.g., Social Feed, Smart Routine Engine, Quests).
  - **Right:** Muted, looping lifestyle video—colorful, showing someone doing a positive, growth-oriented activity.
- **Mobile:** Stacked layout (hero text, carousel, video in a sensible order).

**Call-to-Action:**

- **Primary Button:** *"Join the Waitlist"*
  - Helper text: *"Get 3 months Premium at launch."*
- **Additional Flag:** Checkbox or similar for *"I'm interested in Early Access."*

**Sections (in order):**

1. **Hero** – Headline, visual layout, primary CTA
2. **Problem → Solution** – Self-development is lonely, chaotic, overwhelming → Bester = AI + social + systems
3. **Core Value Proposition** – *"Reveal your Bester self — inside a social self-development community."*
4. **Key Features** (exactly 3):
   - **Social Feed** – See what your community is working on, share your wins
   - **Smart AI Routine Engine** – Personalized routines that adapt to you
   - **Iteration & Fun Trying** – Playful experimentation, no guilt, just growth
5. **Besterverse / Realms** – Short descriptions of different "growth universes" (e.g., Fitness, Mindfulness, Creativity, Career, Relationships)
6. **Final CTA Section** – Restate main pitch + waitlist form

**Tone & Style:**

- Fast, playful, colorful, motivating
- Clean and modern, not childish
- No social proof yet (logos, testimonials) – this can be added later as a future extension

---

### `/about` – About Page

A simple, text-first page with:

- **Mission** – Why Bester exists
- **Vision** – Where we're going
- **Why Bester is Different** – Social-first, AI-native, systems thinking
- **Short Origin Story** – How Bester came to be

**Visual Style:**

- Clean layout, minimal visuals
- Good typography, high readability
- No heavy interactivity

---

### Waitlist Form

**Fields:**

- `email` (required, validated)
- `interestedInEarlyAccess` (boolean, optional checkbox)

**Behavior:**

- **Loading state** on submit
- **Inline success message** on success (e.g., "Thanks! You're on the list.")
- **Inline error message** on failure (e.g., "Something went wrong. Please try again.")

**Implementation:**

- Can use an internal API route stub (to be wired to a real backend later), **or**
- Integrate with an external provider (ConvertKit, Mailchimp, Supabase, etc.)

The form is designed to be simple and low-friction—just email and an optional Early Access flag.

---

## Tech Stack

For detailed stack rules and versions, see **`claude.md`**.

**High-level:**

- **Next.js 16** (App Router, SSG for landing and about pages)
- **React 19.2.0** (Server Components by default, Client Components where needed)
- **TypeScript 5.9.x** (strict mode)
- **Tailwind CSS v4** (utility-first styling)
- **Framer Motion** (smooth animations)
- **Node.js 24.x LTS**

---

## Getting Started

### Prerequisites

- **Node.js 24.x LTS** (e.g., v24.11.x)
- **pnpm** (or npm/yarn, but pnpm is preferred)

### Installation

```bash
# Clone repository
git clone <repository-url>
cd BesterWeb

# Install dependencies
pnpm install

# Set up environment variables (if needed)
cp .env.example .env
# Edit .env with your configuration
```

### Development

```bash
# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

### Build & Production

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Linting & Formatting

```bash
# Run linter
pnpm lint

# Format code (if configured)
pnpm format
```

---

## Project Structure

```
app/
├── layout.tsx              # Root layout, metadata
├── page.tsx                # Landing page (/)
├── globals.css             # Tailwind imports + CSS variables
├── about/
│   └── page.tsx            # About page (/about)
├── api/
│   └── waitlist/
│       └── route.ts        # Waitlist API route
└── _components/            # Marketing site components
    ├── Hero.tsx
    ├── AppPreviewCarousel.tsx
    ├── WaitlistForm.tsx
    └── ...

design/
└── tokens.json             # Design tokens (colors, spacing, typography)

public/
├── videos/
├── images/
└── ...
```

For detailed structure and conventions, see **`claude.md`**.

---

## Future Roadmap

This marketing site is intentionally minimal to start. Future extensions may include:

- **Blog** – `/blog` with posts (MDX or CMS integration)
- **Social Proof** – Testimonials, partner logos, user stats
- **Analytics** – Plausible, Google Analytics, or similar
- **Real Waitlist Provider** – Replace stub with ConvertKit, Mailchimp, or custom backend
- **Testing** – Add Jest (unit tests), Playwright (E2E) when project matures
- **A/B Testing** – Experiment with hero copy, CTAs
- **More Pages** – FAQ, Pricing (if applicable), Contact, Press Kit
- **Translations** – i18n support for international audiences

---

## Engineering Guidelines

For detailed engineering rules, coding principles, and stack constraints, see **`claude.md`**.

**Key principles:**

- **KISS** – Keep it simple
- **YAGNI** – Don't build abstractions until needed
- **Small, focused components** – One clear responsibility per component
- **Accessibility** – Semantic HTML, proper labels, contrast
- **Performance** – Prefer Server Components, avoid unnecessary client-side JS

---

## Contributing

We're not accepting external contributions at this time, but if you're working on this repo:

1. **Read `claude.md` before making changes** – It contains stack rules and conventions.
2. **Follow the branch naming convention** – `feat/`, `fix/`, etc.
3. **Write clear commit messages** – Imperative, descriptive (e.g., "Add hero section layout").
4. **Keep PRs focused** – One logical change per PR.

---

## Questions or Issues?

If you encounter issues or have questions:

1. Check `claude.md` for engineering guidelines
2. Check this README for product context
3. Review recent commits and changes
4. Ask for clarification when needed

---

**Built with care for the Bester community.**
