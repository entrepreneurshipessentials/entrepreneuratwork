import { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ToolCardProps {
  title: string
  description: string
  href: string
  icon: ReactNode
  badge?: string
}

export function ToolCard({ title, description, href, icon, badge }: ToolCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="relative bg-brand-surface border border-brand-border rounded-lg p-6 hover:border-brand-accent hover:shadow-md transition-all duration-200">
        {badge && (
          <span className="absolute top-4 right-4 inline-flex items-center rounded-full border border-brand-border bg-brand-bg px-2 py-0.5 text-xs font-medium text-brand-muted">
            {badge}
          </span>
        )}
        <div className="bg-brand-bg rounded-md p-2 inline-flex text-brand-accent mb-4 [&_svg]:w-5 [&_svg]:h-5">
          {icon}
        </div>
        <h3 className="font-display text-lg text-brand-primary">{title}</h3>
        <p className="text-sm text-brand-muted mt-1">{description}</p>
        <span className="text-sm font-medium text-brand-accent hover:text-brand-accent-hover mt-4 inline-flex items-center gap-1">
          Open calculator <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  )
}
