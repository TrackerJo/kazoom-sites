import frame from './MiniSite.module.css'
import s from './PrsmMock.module.css'

const LOGO = `${import.meta.env.BASE_URL}prsm-logo.svg`

/**
 * A faithful miniature of the live PRSM Allergy Foundation hero
 * (prsmallergy.org), used as the featured "building" site in the Proof
 * chapter. Reuses MiniSite's browser-chrome frame; the body mirrors the real
 * two-column hero, palette, and the actual diamond logo. Decorative: the whole
 * frame carries a single descriptive label for assistive tech.
 */
export function PrsmMock({ className = '' }: { className?: string }) {
  return (
    <figure
      className={`${frame.frame} ${className}`.trim()}
      role="img"
      aria-label="Example nonprofit website Kazoom built for PRSM Allergy Foundation"
      style={{ ['--ms-font' as string]: '"Inter", "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className={frame.chrome} aria-hidden="true">
        <span className={frame.dots}>
          <i /> <i /> <i />
        </span>
        <span className={frame.url}>
          <svg viewBox="0 0 16 16" className={frame.lock}>
            <rect x="3.5" y="7" width="9" height="6.5" rx="1.6" />
            <path d="M5.5 7V5.3a2.5 2.5 0 0 1 5 0V7" fill="none" />
          </svg>
          prsmallergy.org
        </span>
      </div>

      <div className={s.viewport} aria-hidden="true">
        <header className={s.nav}>
          <span className={s.brand}>
            <img className={s.brandMark} src={LOGO} alt="" />
            <span className={s.brandText}>
              <span className={s.brandName}>PRSM Allergy Foundation</span>
              <span className={s.tagline}>Accelerating progress in allergy and immune health</span>
            </span>
          </span>
          <nav className={s.links}>
            <span>About</span>
            <span>Events</span>
            <span>Articles</span>
            <span>Contact</span>
            <span>Dashboard</span>
          </nav>
          <span className={s.donate}>Donate →</span>
        </header>

        <section className={s.hero}>
          <span className={s.grid} />
          <span className={s.glow} />

          <div className={s.heroText}>
            <span className={s.kicker}>Research to community care</span>
            <p className={s.heading}>Help fund life-changing allergy research</p>
            <p className={s.sub}>
              Allergies affect over 100 million Americans. Your gift funds research,
              patient programs, and equitable access to care.
            </p>
            <span className={s.cta}>Donate now →</span>
            <p className={s.note}>
              100% of donations go directly to the allergy research organizations we support.
            </p>
          </div>

          <div className={s.heroCard}>
            <img className={s.heroLogo} src={LOGO} alt="" />
            <span className={s.wordmark}>
              <b>PRSM</b>
              <span>
                Allergy
                <br />
                Foundation
              </span>
            </span>
          </div>
        </section>
      </div>
    </figure>
  )
}
