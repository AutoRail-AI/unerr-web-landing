import Link from "next/link"

type BrandLogoVariant = "full" | "wordmark" | "icon"
type BrandLogoSize = "sm" | "md" | "lg"

const sizeMap: Record<
  BrandLogoSize,
  { icon: number; wordmarkH: number; gap: number }
> = {
  sm: { icon: 22, wordmarkH: 14, gap: 6 },
  md: { icon: 28, wordmarkH: 18, gap: 8 },
  lg: { icon: 32, wordmarkH: 20, gap: 8 },
}

interface BrandLogoProps {
  variant?: BrandLogoVariant
  size?: BrandLogoSize
  href?: string | false
  className?: string
  onClick?: () => void
}

export function BrandLogo({
  variant = "full",
  size = "md",
  href = "/",
  className,
  onClick,
}: BrandLogoProps) {
  const s = sizeMap[size]

  const content = (() => {
    switch (variant) {
      case "icon":
        return (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/icon.svg"
            alt="unerr"
            width={s.icon}
            height={s.icon}
          />
        )
      case "wordmark": {
        const w = Math.round(s.wordmarkH * 4.83)
        return (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/unerr-wordmark.svg"
            alt="unerr"
            width={w}
            height={s.wordmarkH}
          />
        )
      }
      case "full":
      default: {
        return (
          <span className="inline-flex items-center" style={{ gap: s.gap }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.svg"
              alt=""
              width={s.icon}
              height={s.icon}
              aria-hidden="true"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/unerr-wordmark.svg"
              alt="unerr"
              width={Math.round(s.wordmarkH * 4.83)}
              height={s.wordmarkH}
            />
          </span>
        )
      }
    }
  })()

  if (href === false) {
    return <span className={className}>{content}</span>
  }

  return (
    <Link
      href={href}
      className={className ?? "inline-flex items-center transition-opacity hover:opacity-90"}
      onClick={onClick}
      aria-label="unerr home"
    >
      {content}
    </Link>
  )
}
