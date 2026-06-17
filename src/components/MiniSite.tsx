import type { CSSProperties } from 'react'
import styles from './MiniSite.module.css'

export type MiniSiteData = {
  /** Business name, used as the mini-site wordmark and in the aria label. */
  name: string
  domain: string
  /** Plain-language category for the accessible label, e.g. "bakery". */
  category: string
  /** Font stack for this mini-site, so each example reads as bespoke. */
  fontFamily: string
  theme: {
    bg: string
    surface: string
    ink: string
    sub: string
    accent: string
    accentInk: string
    heroFrom: string
    heroTo: string
    border: string
  }
  nav: string[]
  hero: { kicker: string; heading: string; sub: string; cta: string }
  badge?: string
  itemsLabel: string
  items: { title: string; meta: string; from: string; to: string }[]
}

type MiniSiteProps = {
  data: MiniSiteData
  /** Larger type + spacing for the hero feature placement. */
  featured?: boolean
  className?: string
}

export function MiniSite({ data, featured = false, className = '' }: MiniSiteProps) {
  const styleVars = {
    '--ms-bg': data.theme.bg,
    '--ms-surface': data.theme.surface,
    '--ms-ink': data.theme.ink,
    '--ms-sub': data.theme.sub,
    '--ms-accent': data.theme.accent,
    '--ms-accent-ink': data.theme.accentInk,
    '--ms-hero-from': data.theme.heroFrom,
    '--ms-hero-to': data.theme.heroTo,
    '--ms-border': data.theme.border,
    '--ms-font': data.fontFamily,
  } as CSSProperties

  return (
    <figure
      className={`${styles.frame} ${featured ? styles.featured : ''} ${className}`.trim()}
      role="img"
      aria-label={`Example ${data.category} website Kazoom built for ${data.name}`}
      style={styleVars}
    >
      <div className={styles.chrome} aria-hidden="true">
        <span className={styles.dots}>
          <i /> <i /> <i />
        </span>
        <span className={styles.url}>
          <svg viewBox="0 0 16 16" className={styles.lock}>
            <rect x="3.5" y="7" width="9" height="6.5" rx="1.6" />
            <path d="M5.5 7V5.3a2.5 2.5 0 0 1 5 0V7" fill="none" />
          </svg>
          {data.domain}
        </span>
      </div>

      <div className={styles.viewport} aria-hidden="true">
        <header className={styles.msNav}>
          <span className={styles.msBrand}>{data.name}</span>
          <nav className={styles.msLinks}>
            {data.nav.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </nav>
          <span className={styles.msNavCta}>{data.hero.cta}</span>
        </header>

        <section className={styles.msHero}>
          <svg className={styles.msBlob} viewBox="0 0 200 200">
            <circle cx="150" cy="60" r="70" />
            <circle cx="186" cy="150" r="34" />
          </svg>
          <div className={styles.msHeroText}>
            <span className={styles.msKicker}>{data.hero.kicker}</span>
            <p className={styles.msHeading}>{data.hero.heading}</p>
            <p className={styles.msSub}>{data.hero.sub}</p>
            <span className={styles.msCta}>{data.hero.cta}</span>
          </div>
          {data.badge ? <span className={styles.msBadge}>{data.badge}</span> : null}
        </section>

        <section className={styles.msItems}>
          <span className={styles.msItemsLabel}>{data.itemsLabel}</span>
          <div className={styles.msGrid}>
            {data.items.map((item) => (
              <div key={item.title} className={styles.msCard}>
                <span
                  className={styles.msThumb}
                  style={{
                    background: `linear-gradient(135deg, ${item.from}, ${item.to})`,
                  }}
                />
                <span className={styles.msCardTitle}>{item.title}</span>
                <span className={styles.msCardMeta}>{item.meta}</span>
              </div>
            ))}
          </div>
        </section>

        <footer className={styles.msFoot}>
          <span>{data.name}</span>
          <span>{data.domain}</span>
        </footer>
      </div>
    </figure>
  )
}
