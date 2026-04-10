import { ReactNode } from 'react'

interface ProseWrapperProps {
  children: ReactNode
  className?: string
}

export function ProseWrapper({ children, className = '' }: ProseWrapperProps) {
  return (
    <div
      className={`prose prose-slate max-w-none
        prose-headings:font-display prose-headings:text-brand-primary
        prose-body:text-brand-ink prose-p:text-brand-ink
        prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline
        prose-strong:text-brand-ink
        prose-code:text-brand-primary prose-code:bg-brand-bg prose-code:px-1 prose-code:rounded
        ${className}`}
    >
      {children}
    </div>
  )
}
