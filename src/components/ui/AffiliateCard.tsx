import Image from 'next/image'
import Link from 'next/link'

interface AffiliateCardProps {
  partnerName: string
  partnerSlug: string
  headline: string
  body: string
  ctaText: string
  logoSrc?: string
}

export function AffiliateCard({
  partnerName,
  partnerSlug,
  headline,
  body,
  ctaText,
  logoSrc,
}: AffiliateCardProps) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-1.5">
        Recommended tool
      </p>
      <div className="bg-brand-bg border border-brand-border rounded-lg p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Logo or name */}
        <div className="shrink-0">
          {logoSrc ? (
            <Image src={logoSrc} alt={partnerName} width={32} height={32} className="rounded" />
          ) : (
            <span className="font-display text-brand-primary text-sm font-bold">
              {partnerName}
            </span>
          )}
        </div>

        {/* Copy */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-brand-ink">{headline}</p>
          <p className="text-sm text-brand-muted mt-0.5">{body}</p>
        </div>

        {/* CTA */}
        <Link
          href={`/go/${partnerSlug}`}
          className="shrink-0 inline-flex items-center justify-center rounded-md bg-brand-accent px-4 py-2 text-sm font-medium text-white hover:bg-brand-accent-hover transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  )
}
