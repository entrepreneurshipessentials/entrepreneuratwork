import { ReactNode } from 'react'

interface PageShellProps {
  width?: 'narrow' | 'default' | 'wide'
  className?: string
  children: ReactNode
}

const widthMap = {
  narrow: 'max-w-2xl',
  default: 'max-w-3xl',
  wide: 'max-w-5xl',
}

export function PageShell({ width = 'default', className = '', children }: PageShellProps) {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${widthMap[width]} ${className}`}>
      {children}
    </div>
  )
}
