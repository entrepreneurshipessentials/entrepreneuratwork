import Link from 'next/link'

const toolLinks = [
  { href: '/tools/burn-rate-calculator', label: 'Burn Rate Calculator' },
  { href: '/tools/break-even-calculator', label: 'Break-Even Calculator' },
  { href: '/tools/profit-margin-calculator', label: 'Profit Margin Calculator' },
  { href: '/tools/saas-pricing-calculator', label: 'SaaS Pricing Calculator' },
]

const siteLinks = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/book', label: 'Book' },
  { href: '/contact', label: 'Contact' },
]

export function SiteFooter() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Column 1 — Brand */}
          <div>
            <span className="font-display text-lg text-brand-primary">
              Entrepreneur At Work
            </span>
            <p className="mt-2 text-sm text-brand-muted">
              Free financial tools for founders who are still figuring it out.
            </p>
          </div>

          {/* Column 2 — Tools */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-brand-muted mb-3">
              Tools
            </h3>
            <ul className="space-y-2">
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-ink hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Site */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-brand-muted mb-3">
              Site
            </h3>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-ink hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between gap-2">
          <span className="text-xs text-brand-muted">
            © 2026 Entrepreneur At Work
          </span>
          <span className="text-xs text-brand-muted">
            This site contains affiliate links. We may earn a commission at no extra cost to you.
          </span>
        </div>
      </div>
    </footer>
  )
}
