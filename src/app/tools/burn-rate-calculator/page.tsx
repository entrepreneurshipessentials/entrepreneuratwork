import type { Metadata } from 'next'
import { BurnRateCalculator } from '@/components/calculators/BurnRateCalculator'
import { AffiliateCard } from '@/components/ui/AffiliateCard'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Burn Rate Calculator — Free Startup Cash Runway Tool',
  description:
    'Calculate your startup burn rate and cash runway in seconds. Free burn rate calculator for founders — no signup required.',
  openGraph: {
    title: 'Burn Rate Calculator — Free Startup Cash Runway Tool',
    description:
      'Calculate your startup burn rate and cash runway in seconds. Free burn rate calculator for founders — no signup required.',
    url: 'https://entrepreneuratwork.com/tools/burn-rate-calculator',
    siteName: 'Entrepreneur At Work',
    type: 'website',
  },
  alternates: {
    canonical: 'https://entrepreneuratwork.com/tools/burn-rate-calculator',
  },
}

export default function BurnRateCalculatorPage() {
  return (
    <PageShell width="default" className="py-12 space-y-10">
      {/* Header */}
      <div>
        <p className="text-xs uppercase tracking-widest text-brand-muted mb-2">Free tool</p>
        <h1 className="font-display text-3xl sm:text-4xl text-brand-primary">
          Burn Rate Calculator
        </h1>
        <p className="mt-3 text-brand-muted max-w-xl">
          Enter your monthly revenue, costs, and cash on hand to see exactly how long your
          runway lasts — and when you need to take action.
        </p>
      </div>

      {/* Calculator */}
      <BurnRateCalculator />

      {/* Affiliate */}
      <AffiliateCard
        partnerName="Mercury Bank"
        partnerSlug="mercury"
        headline="Track your cash balance automatically"
        body="Mercury syncs your bank balance so your burn rate is always up to date — no manual entry, no spreadsheet juggling."
        ctaText="Open a free account"
      />

      {/* Explainer */}
      <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-brand-primary prose-a:text-brand-accent">
        <h2>What is burn rate?</h2>
        <p>
          Burn rate is how much cash your startup spends each month, net of any revenue.
          It tells you how fast you are drawing down your bank account. Investors, founders,
          and CFOs watch it closely because it determines how long you can survive without
          raising more money or reaching profitability.
        </p>

        <h2>Gross burn vs. net burn</h2>
        <p>
          <strong>Gross burn</strong> is your total monthly expenses — salaries, rent, software,
          contractors, and everything else. <strong>Net burn</strong> subtracts any revenue you
          are already bringing in. If your gross burn is $30,000 and your revenue is $10,000,
          your net burn is $20,000 per month.
        </p>
        <p>
          Net burn is the number that matters for runway. It is the rate at which you are
          actually consuming your cash reserves.
        </p>

        <h2>How to calculate cash runway</h2>
        <p>
          Cash runway = Cash on hand ÷ Net burn rate. If you have $150,000 in the bank
          and a net burn of $20,000 per month, you have 7.5 months of runway.
          That is your deadline for either raising more capital or reaching break-even.
        </p>

        <h2>What is a healthy runway?</h2>
        <p>
          Most experienced founders and investors recommend maintaining at least 12–18 months
          of runway at all times. Fundraising typically takes 3–6 months, so if you wait
          until you have 6 months left, you are already dangerously close to running out.
          Start the conversation early.
        </p>

        <h2>What does "ramen profitable" mean?</h2>
        <p>
          A term coined by Y Combinator founder Paul Graham — ramen profitable means your
          revenue covers your basic operating costs, even if the founders are not yet
          paying themselves market salaries. It is not real profitability, but it means
          you are no longer on the clock. You can grow on your own terms.
        </p>
      </div>
    </PageShell>
  )
}
