interface MetricDisplayProps {
  label: string
  value: string
  status?: 'positive' | 'warning' | 'negative' | 'neutral'
  subtext?: string
}

const borderMap = {
  positive: 'border-brand-positive',
  warning: 'border-brand-warning',
  negative: 'border-brand-negative',
  neutral: 'border-brand-border',
}

const valueColorMap = {
  positive: 'text-brand-positive',
  warning: 'text-brand-warning',
  negative: 'text-brand-negative',
  neutral: 'text-brand-primary',
}

export function MetricDisplay({ label, value, status = 'neutral', subtext }: MetricDisplayProps) {
  return (
    <div className={`bg-brand-surface border-2 ${borderMap[status]} rounded-lg p-6 text-center`}>
      <p className="text-xs uppercase tracking-widest text-brand-muted">{label}</p>
      <p className={`font-mono text-4xl font-bold mt-1 ${valueColorMap[status]}`}>{value}</p>
      {subtext && <p className="text-xs text-brand-muted mt-2">{subtext}</p>}
    </div>
  )
}
