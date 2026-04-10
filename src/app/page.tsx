import type { Metadata } from 'next'
import Link from 'next/link'
import { Flame, TrendingUp, DollarSign, BarChart2, ArrowRight, BookOpen } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { ToolCard } from '@/components/ui/ToolCard'

export const metadata: Metadata = {
  title: 'Free Financial Calculators for Startup Founders | Entrepreneur At Work',
  description:
    'Free financial calculators for startup founders — burn rate, break-even, profit margin, and SaaS pricing. No signup required.',
  openGraph: {
    title: 'Free Financial Calculators for Startup Founders',
    description:
      'Free financial calculators for startup founders — burn rate, break-even, profit margin, and SaaS pricing. No signup required.',
    url: 'https://entrepreneuratwork.com',
    siteName: 'Entrepreneur At Work',
    type: 'website',
  },
  alternates: {
    canonical: 'https://entrepreneuratwork.com',
  },
}

const tools = [
  {
    title: 'Burn Rate Calculator',
    description: 'Find out exactly how long your runway lasts before you run out of cash.',
    href: '/tools/burn-rate-calculator',
    icon: <Flame size={20} />,
    badge: 'Free',
  },
  {
    title: 'Break-Even Calculator',
    description: 'Calculate how many units or dollars you need to cover your costs.',
    href: '/tools/break-even-calculator',
    icon: <TrendingUp size={20} />,
    badge: 'Free',
  },
  {
    title: 'Profit Margin Calculator',
    description: 'Understand your gross, operating, and net margins in seconds.',
    href: '/tools/profit-margin-calculator',
    icon: <DollarSign size={20} />,
    badge: 'Free',
  },
  {
    title: 'SaaS Pricing Calculator',
    description: 'Model pricing tiers and see the revenue impact before you commit.',
    href: '/tools/saas-pricing-calculator',
    icon: <BarChart2 size={20} />,
    badge: 'Free',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 py-16">
      {/* ── Hero / Value prop ───────────────────────────────────── */}
      <PageShell width="wide">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-brand-muted mb-4">
            For founders who are still figuring it out
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-brand-primary leading-tight">
            The financial tools your startup actually needs
          </h1>
          <p className="mt-5 text-lg text-brand-muted leading-relaxed">
            Four free calculators — burn rate, break-even, profit margin, and SaaS pricing —
            built for founders who want clear answers, not spreadsheet complexity.
            No signup. No credit card. Just numbers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-accent px-6 py-3 text-sm font-medium text-white hover:bg-brand-accent-hover transition-colors"
            >
              Explore the tools <ArrowRight size={16} />
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-border px-6 py-3 text-sm font-medium text-brand-ink hover:bg-brand-bg transition-colors"
            >
              Get the book
            </Link>
          </div>
        </div>
      </PageShell>

      {/* ── Four tool cards ─────────────────────────────────────── */}
      <PageShell width="wide">
        <h2 className="font-display text-2xl text-brand-primary mb-8 text-center">
          Free calculators, no strings attached
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </PageShell>

      {/* ── Newsletter CTA ──────────────────────────────────────── */}
      <div className="bg-brand-primary">
        <PageShell width="default" className="py-14">
          <div className="text-center">
            <h2 className="font-display text-2xl text-white">
              One founder tip, every week
            </h2>
            <p className="mt-3 text-sm text-white/70 max-w-md mx-auto">
              Short, practical financial insights for early-stage founders.
              No fluff. Unsubscribe any time.
            </p>
            <form
              className="mt-6 flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto"
              action="#"
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-md px-4 py-2.5 text-sm text-brand-ink bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-accent"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-brand-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-accent-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-white/50">No spam. Unsubscribe any time.</p>
          </div>
        </PageShell>
      </div>

      {/* ── Book teaser ─────────────────────────────────────────── */}
      <PageShell width="wide">
        <div className="bg-brand-surface border border-brand-border rounded-xl p-8 sm:p-12 flex flex-col sm:flex-row gap-8 items-center">
          {/* Book cover placeholder */}
          <div className="shrink-0 w-32 h-44 bg-brand-primary rounded-lg flex items-center justify-center shadow-md">
            <BookOpen size={40} className="text-white/60" />
          </div>

          {/* Copy */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest text-brand-muted mb-2">
              Now available
            </p>
            <h2 className="font-display text-2xl text-brand-primary">
              The book behind the tools
            </h2>
            <p className="mt-3 text-sm text-brand-muted leading-relaxed max-w-lg">
              Everything on this site grew out of one book — a plain-English guide to
              the financial fundamentals every founder needs to survive year one.
              If you like the calculators, you'll love the book.
            </p>
            <Link
              href="/book"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-accent-hover transition-colors"
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  )
}
