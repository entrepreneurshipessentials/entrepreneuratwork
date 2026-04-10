import { Flame, TrendingUp, DollarSign, BarChart2 } from 'lucide-react'
import { ToolCard } from '@/components/ui/ToolCard'
import { AffiliateCard } from '@/components/ui/AffiliateCard'
import { MetricDisplay } from '@/components/ui/MetricDisplay'
import { PageShell } from '@/components/layout/PageShell'

const colorTokens = [
  { name: '--color-bg', hex: '#F9F7F4', label: 'bg' },
  { name: '--color-surface', hex: '#FFFFFF', label: 'surface' },
  { name: '--color-ink', hex: '#1A1A1A', label: 'ink' },
  { name: '--color-ink-muted', hex: '#6B7280', label: 'muted' },
  { name: '--color-primary', hex: '#1B2B4B', label: 'primary' },
  { name: '--color-accent', hex: '#E85D26', label: 'accent' },
  { name: '--color-accent-hover', hex: '#C94D1E', label: 'accent-hover' },
  { name: '--color-border', hex: '#E5E0D8', label: 'border' },
  { name: '--color-positive', hex: '#16A34A', label: 'positive' },
  { name: '--color-warning', hex: '#D97706', label: 'warning' },
  { name: '--color-negative', hex: '#DC2626', label: 'negative' },
]

export const metadata = {
  title: 'Design System',
  robots: { index: false },
}

export default function DesignSystemPage() {
  return (
    <PageShell width="wide" className="py-16 space-y-16">
      <h1 className="font-display text-3xl text-brand-primary">Design System</h1>

      {/* 1 — Colour swatches */}
      <section>
        <h2 className="font-display text-xl text-brand-primary mb-6">Colour Tokens</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {colorTokens.map((token) => (
            <div key={token.name} className="flex flex-col gap-2">
              <div
                className="h-14 rounded-md border border-brand-border"
                style={{ backgroundColor: token.hex }}
              />
              <div>
                <p className="text-xs font-mono text-brand-ink">{token.hex}</p>
                <p className="text-xs text-brand-muted">{token.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2 — Typography scale */}
      <section>
        <h2 className="font-display text-xl text-brand-primary mb-6">Typography</h2>
        <div className="space-y-4 bg-brand-surface border border-brand-border rounded-lg p-6">
          <p className="font-display text-4xl text-brand-primary">Display H1 — Playfair Display</p>
          <p className="font-display text-3xl text-brand-primary">Display H2 — Playfair Display</p>
          <p className="font-display text-2xl text-brand-primary">Display H3 — Playfair Display</p>
          <hr className="border-brand-border" />
          <p className="font-sans text-lg text-brand-ink">Body large — DM Sans 18px</p>
          <p className="font-sans text-base text-brand-ink">Body base — DM Sans 16px</p>
          <p className="font-sans text-sm text-brand-ink">Body small — DM Sans 14px</p>
          <p className="font-sans text-xs text-brand-muted">Body xs / caption — DM Sans 12px</p>
        </div>
      </section>

      {/* 3 — Mono sample */}
      <section>
        <h2 className="font-display text-xl text-brand-primary mb-4">Mono (Calculator Output)</h2>
        <div className="bg-brand-surface border border-brand-border rounded-lg p-6">
          <p className="font-mono text-2xl text-brand-primary">
            8.3 months&nbsp;&nbsp;|&nbsp;&nbsp;$15,000/mo&nbsp;&nbsp;|&nbsp;&nbsp;6 runway
          </p>
        </div>
      </section>

      {/* 4 — Buttons */}
      <section>
        <h2 className="font-display text-xl text-brand-primary mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4 bg-brand-surface border border-brand-border rounded-lg p-6">
          <button className="inline-flex items-center justify-center rounded-md bg-brand-accent px-4 py-2 text-sm font-medium text-white hover:bg-brand-accent-hover transition-colors">
            Primary Button
          </button>
          <button className="inline-flex items-center justify-center rounded-md border border-brand-border bg-transparent px-4 py-2 text-sm font-medium text-brand-ink hover:bg-brand-bg transition-colors">
            Outline Button
          </button>
        </div>
      </section>

      {/* 5 — Badges */}
      <section>
        <h2 className="font-display text-xl text-brand-primary mb-4">Badges</h2>
        <div className="flex flex-wrap gap-3 bg-brand-surface border border-brand-border rounded-lg p-6">
          <span className="inline-flex items-center rounded-full border border-brand-border bg-brand-bg px-2.5 py-0.5 text-xs font-medium text-brand-muted">
            Free
          </span>
          <span className="inline-flex items-center rounded-full bg-brand-accent px-2.5 py-0.5 text-xs font-medium text-white">
            No signup
          </span>
        </div>
      </section>

      {/* 6 — ToolCard */}
      <section>
        <h2 className="font-display text-xl text-brand-primary mb-4">Tool Card</h2>
        <div className="max-w-xs">
          <ToolCard
            title="Burn Rate Calculator"
            description="Find out how long your money lasts."
            href="/tools/burn-rate-calculator"
            icon={<Flame />}
            badge="Free"
          />
        </div>
      </section>

      {/* 7 — AffiliateCard */}
      <section>
        <h2 className="font-display text-xl text-brand-primary mb-4">Affiliate Card</h2>
        <AffiliateCard
          partnerName="FreshBooks"
          partnerSlug="freshbooks"
          headline="Track your cash automatically"
          body="Connect FreshBooks to see your burn rate updated in real time — no spreadsheet required."
          ctaText="Try FreshBooks free for 30 days"
        />
      </section>

      {/* 8 — MetricDisplay states */}
      <section>
        <h2 className="font-display text-xl text-brand-primary mb-4">Metric Display</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricDisplay
            label="Cash Runway"
            value="14 months"
            status="positive"
            subtext="Based on $12,000/month burn"
          />
          <MetricDisplay
            label="Cash Runway"
            value="5 months"
            status="warning"
            subtext="Based on $28,000/month burn"
          />
          <MetricDisplay
            label="Cash Runway"
            value="2 months"
            status="negative"
            subtext="Based on $60,000/month burn"
          />
          <MetricDisplay
            label="Profit Margin"
            value="38.2%"
            status="neutral"
            subtext="Revenue minus all costs"
          />
        </div>
      </section>
    </PageShell>
  )
}
