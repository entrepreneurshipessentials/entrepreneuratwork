# Entrepreneur At Work — Claude Code Project Spec
# entrepreneuratwork.com

This file is read by Claude Code at the start of every session.
It is the authoritative reference for all architecture, SEO, content,
and workflow decisions. Do not deviate from these rules without
explicit instruction.

---

## Project overview

A micro-tool site for entrepreneurs and startup founders built around
four free financial calculators, a supporting blog, a published book,
and an affiliate + display ad monetisation model.

- **Domain:** entrepreneuratwork.com
- **Framework:** Next.js 14+ App Router, TypeScript strict mode
- **Styling:** Tailwind CSS v3 + shadcn/ui components
- **Content:** Contentlayer + MDX (blog posts as plain Markdown files)
- **Hosting:** Vercel (GitHub integration — push to main = auto-deploy)
- **Email:** Kit (ConvertKit) — API integration for email capture
- **Analytics:** Plausible Analytics + Google Search Console
- **Testing:** Vitest for calculation functions

---

## Calculator architecture — THREE-LAYER PATTERN (mandatory)

Every calculator must follow this exact structure. No exceptions.

### Layer 1 — Pure calculation function
**Location:** `lib/calculators/[name].ts`
- No React, no imports from UI libraries, no side effects
- Exports a typed input interface, typed output interface, and one pure function
- Example: `calculateBurnRate(inputs: BurnRateInputs): BurnRateOutputs`
- Must be fully unit-testable with Vitest

### Layer 2 — React state hook
**Location:** `hooks/use[Name].ts`
- Marked `'use client'` at top
- Uses `useState` for inputs and `useMemo` for results (memoised on inputs)
- Imports from Layer 1 only — no UI components
- Exposes: `{ inputs, results, update }` to the UI

### Layer 3 — UI component
**Location:** `components/calculators/[Name]Calculator.tsx`
- Marked `'use client'` at top
- Imports hook from Layer 2 only — contains zero calculation logic
- Uses shadcn/ui for inputs (CurrencyInput, Slider, Select)
- Uses Recharts for any charts (lazy-loaded with dynamic import)
- Keep client bundle under 60KB per calculator

### Calculator page (server component)
**Location:** `app/tools/[slug]/page.tsx`
- NO `'use client'` directive — this is a React Server Component
- Exports `metadata` object (see SEO requirements below)
- Imports the calculator component as a client island
- Structure (in this order):
  1. `<h1>` with primary keyword
  2. `<[Name]Calculator />` — client island
  3. `<EmailCapture tool="[name]" />` — Kit signup
  4. `<AffiliateCard partner="[partner]" />` — contextual affiliate
  5. `<ToolExplainer />` — 800–1000 word explainer (MDX or inline)
  6. `<RelatedTools current="[name]" />` — cross-tool sidebar
  7. JSON-LD schema script tag

---

## The four calculators

| Calculator | Slug | Primary keyword | Affiliate tie-in |
|---|---|---|---|
| Burn Rate + Cash Runway | burn-rate-calculator | burn rate calculator | FreshBooks, Mercury |
| Break-Even | break-even-calculator | break even calculator | FreshBooks, Gusto |
| Profit Margin | profit-margin-calculator | profit margin calculator | FreshBooks, QuickBooks |
| SaaS Pricing | saas-pricing-calculator | SaaS pricing calculator | HubSpot, Baremetrics |

---

## SEO requirements — apply to EVERY new page

### Metadata export (mandatory on all pages)
```typescript
export const metadata: Metadata = {
  title: '[Primary Keyword] — [Short Descriptor] | Entrepreneur At Work',
  description: '[150–160 char description including primary keyword and "free"]',
  openGraph: {
    title: '[Primary Keyword]',
    description: '[OG description]',
    url: 'https://entrepreneuratwork.com/[path]',
    siteName: 'Entrepreneur At Work',
    images: [{ url: '/og/[slug].png', width: 1200, height: 630 }],
    type: 'website',
  },
  alternates: {
    canonical: 'https://entrepreneuratwork.com/[path]',
  },
}
```

### Title tag formula
`[Primary Keyword] — [Free] [Tool/Guide Type] | Entrepreneur At Work`

Examples:
- `Burn Rate Calculator — Free Startup Cash Runway Tool | Entrepreneur At Work`
- `What Is Burn Rate? — Plain-English Guide for Founders | Entrepreneur At Work`

### JSON-LD schema
- Calculator pages: `WebApplication` schema (see `lib/schema.ts`)
- Blog posts: `HowTo` schema + `Article` schema
- /book page: `Book` schema
- /about page: `Person` schema
- All pages: `BreadcrumbList` schema

### Author byline (mandatory on all blog posts and tool explainers)
Include the `<AuthorByline />` component. It displays:
- Author name and photo
- "Author of [Book Title]" credential
- Link to /about page

### Internal linking rules
- Every blog post: minimum 2 internal links to calculator pages
- Anchor text must match the calculator's primary keyword exactly
- Every calculator page: links to 2–3 other calculators in RelatedTools sidebar
- /tools hub: links to all four calculators with descriptions

---

## Affiliate link system

**Rule: never use a direct affiliate URL anywhere in the codebase.**
All links go through the `/go/[partner]` redirect system.

### Partner config — `lib/affiliates.ts`
This is the single source of truth. To change a partner URL, update
this file only. All pages update automatically on next deploy.

```typescript
export const affiliates = {
  freshbooks: {
    url: 'https://www.freshbooks.com/?ref=YOUR_ID',
    name: 'FreshBooks',
    cta: 'Try FreshBooks free for 30 days',
    context: 'accounting',
    cpa: 55,
  },
  gusto: {
    url: 'https://gusto.com/r/YOUR_ID',
    name: 'Gusto',
    cta: 'Run payroll in minutes with Gusto',
    context: 'payroll',
    cpa: 120,
  },
  mercury: {
    url: 'https://mercury.com/r/YOUR_ID',
    name: 'Mercury Bank',
    cta: 'Open a free business bank account',
    context: 'banking',
    cpa: 75,
  },
  hubspot: {
    url: 'https://hubspot.com/?ref=YOUR_ID',
    name: 'HubSpot',
    cta: 'Start free with HubSpot CRM',
    context: 'crm',
    cpa: 200,
  },
} as const
```

### Affiliate redirect route
`app/go/[partner]/route.ts` — handles `/go/freshbooks` → 301 redirect
Never link directly to affiliate URLs. Always use `/go/[partner]`.

---

## Content (MDX) rules

**File location:** `/content/[slug].mdx`

### Required frontmatter (validated by Contentlayer)
```yaml
---
title: "Full post title"
date: "YYYY-MM-DD"
author: "Your Name"
description: "150–160 char SEO description"
keywords: ["primary keyword", "secondary keyword", "long-tail variant"]
slug: "url-slug-matching-filename"
toolLink: "/tools/burn-rate-calculator"  # primary tool this post supports
affiliate: "freshbooks"                   # primary affiliate for this post
---
```

### Content standards
- Length: 800–1,200 words per post (explainer content)
- Must include at least 2 internal links to calculator pages
- Anchor text must match the target page's primary keyword exactly
- Each post ends with an email capture CTA
- Tone: direct, founder-to-founder, no jargon without explanation

### Embedding calculators in blog posts
```mdx
import { BurnRateCalculator } from '@/components/calculators/BurnRateCalculator'

<BurnRateCalculator />
```

---

## Site architecture — URL structure

```
/                           Homepage
/tools                      Tools hub — links to all calculators
/tools/burn-rate-calculator     Calculator page
/tools/break-even-calculator    Calculator page
/tools/profit-margin-calculator Calculator page
/tools/saas-pricing-calculator  Calculator page
/blog                       Blog index
/blog/[slug]                Individual blog post (MDX)
/book                       Book landing page + PDF lead magnet
/about                      Author profile + E-E-A-T signals
/go/[partner]               Affiliate redirect (301)
sitemap.xml                 Auto-generated by Next.js
robots.txt                  Auto-generated by Next.js
```

---

## Git workflow

```bash
# New calculator or major feature
git checkout -b feature/[calculator-name]
# ... build and test ...
git push origin feature/[calculator-name]
# Open PR for review before merging to main

# Content (MDX) updates — direct to main is fine
git add content/[slug].mdx
git commit -m "content: add [post title]"
git push origin main

# Commit message format
feat(tools): add [calculator name] calculator
feat(seo): add JSON-LD schema to [page]
content: add blog post [slug]
fix(calc): correct [calculation name] formula
chore: update [affiliate name] partner URL
```

### Before every commit — run these commands
```bash
npm run type-check   # TypeScript must pass with zero errors
npm run test         # Vitest must pass on all calculation functions
npm run build        # Next.js build must succeed
```
If any of these fail, fix the errors before committing.

---

## Key commands

```bash
npm run dev          # Start development server at localhost:3000
npm run build        # Production build
npm run test         # Run Vitest unit tests
npm run type-check   # TypeScript strict mode check
npm run lint         # ESLint
```

---

## Number formatting rules

All numbers displayed to users must be formatted. Never show raw JS floats.

```typescript
// Currency
new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD',
  maximumFractionDigits: 0 }).format(value)

// Percentages
`${(value * 100).toFixed(1)}%`

// Months / runway
`${Math.round(value)} months`

// Dates
value.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
```

---

## Performance targets (Core Web Vitals)

- LCP (Largest Contentful Paint): under 2.5 seconds
- CLS (Cumulative Layout Shift): under 0.1
- Client bundle per calculator: under 60KB
- Recharts: always lazy-loaded with `dynamic(() => import('recharts'), { ssr: false })`
- Images: next/image with explicit width and height on all images
- Fonts: next/font (Geist) — zero external font requests

---

## What Claude Code should never do

- Never put `'use client'` on a page file (pages are Server Components)
- Never link directly to an affiliate URL — always use `/go/[partner]`
- Never hardcode affiliate partner URLs outside of `lib/affiliates.ts`
- Never put calculation logic inside a React component or hook
- Never commit if `npm run build` or `npm run test` fails
- Never use raw `.toFixed()` on user-facing numbers without formatting
- Never create a calculator without unit tests in `__tests__/`

---

*Last updated: April 2026*
*Version: 1.0 — initial project setup*
