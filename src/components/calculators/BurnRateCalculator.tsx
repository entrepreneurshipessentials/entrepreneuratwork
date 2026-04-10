'use client'

import { useBurnRate } from '@/hooks/useBurnRate'
import { MetricDisplay } from '@/components/ui/MetricDisplay'

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

function formatRunway(months: number): string {
  if (!isFinite(months)) return 'Profitable'
  if (months < 1) return '< 1 month'
  return `${months.toFixed(1)} months`
}

function runwayStatus(months: number, isProfitable: boolean) {
  if (isProfitable) return 'positive'
  if (months >= 12) return 'positive'
  if (months >= 6) return 'warning'
  return 'negative'
}

function CurrencyInput({
  label,
  value,
  onChange,
  hint,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  hint?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium uppercase tracking-widest text-brand-muted">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted text-sm">
          $
        </span>
        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="w-full rounded-md border border-brand-border bg-brand-surface pl-7 pr-4 py-2.5 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent"
        />
      </div>
      {hint && <p className="text-xs text-brand-muted">{hint}</p>}
    </div>
  )
}

export function BurnRateCalculator() {
  const { inputs, results, update } = useBurnRate()

  const status = runwayStatus(results.runwayMonths, results.isRamenProfitable)

  const runwaySubtext = results.runwayDate
    ? `Cash runs out around ${results.runwayDate.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      })}`
    : results.isRamenProfitable
    ? 'Revenue covers all costs — keep growing!'
    : undefined

  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl p-6 sm:p-8 space-y-8">
      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <CurrencyInput
          label="Monthly Revenue"
          value={inputs.monthlyRevenue}
          onChange={(v) => update('monthlyRevenue', v)}
          hint="Leave 0 if pre-revenue"
        />
        <CurrencyInput
          label="Monthly Costs"
          value={inputs.monthlyCosts}
          onChange={(v) => update('monthlyCosts', v)}
          hint="Salaries, rent, software, etc."
        />
        <CurrencyInput
          label="Cash on Hand"
          value={inputs.cashOnHand}
          onChange={(v) => update('cashOnHand', v)}
          hint="Current bank balance"
        />
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricDisplay
          label="Cash Runway"
          value={formatRunway(results.runwayMonths)}
          status={status}
          subtext={runwaySubtext}
        />
        <MetricDisplay
          label="Net Burn Rate"
          value={results.isRamenProfitable ? formatCurrency(0) : formatCurrency(results.netBurn)}
          status={results.isRamenProfitable ? 'positive' : 'neutral'}
          subtext="Monthly cash consumed"
        />
        <MetricDisplay
          label="Gross Burn"
          value={formatCurrency(results.grossBurn)}
          status="neutral"
          subtext="Total monthly spend"
        />
      </div>

      {/* Contextual message */}
      {!results.isRamenProfitable && isFinite(results.runwayMonths) && results.runwayMonths < 6 && (
        <div className="rounded-md bg-red-50 border border-brand-negative/20 px-4 py-3 text-sm text-brand-negative">
          <strong>Under 6 months of runway.</strong> Start fundraising or cutting costs now —
          the process takes longer than most founders expect.
        </div>
      )}

      {results.isRamenProfitable && (
        <div className="rounded-md bg-green-50 border border-brand-positive/20 px-4 py-3 text-sm text-brand-positive">
          <strong>Ramen profitable!</strong> Your revenue covers your costs.
          You have default alive status — focus on growing revenue.
        </div>
      )}
    </div>
  )
}
