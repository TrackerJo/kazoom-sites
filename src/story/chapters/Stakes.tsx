import { CountUp } from '../CountUp'
import s from '../Story.module.css'

const STATS = [
  { to: 94, suffix: '%', label: 'of first impressions of your business come down to website design.' },
  { to: 81, suffix: '%', label: 'of shoppers research online before they ever spend a cent.' },
]

/** Chapter 2 — the stakes. Dark, tense. The numbers make the cost concrete. */
export function Stakes() {
  return (
    <div className={`${s.chapterInner} ${s.stakesInner}`}>
      <span className={`${s.kicker} ${s.aRise}`} style={{ animationDelay: '0.1s' }}>
        Right now, out there
      </span>

      <h2 className={s.bigline}>
        <span className={s.lineMask}>
          <span className={`${s.lineFill} ${s.aWipe}`} style={{ animationDelay: '0.2s' }}>
            Your customers are
          </span>
        </span>
        <span className={s.lineMask}>
          <span className={`${s.lineFill} ${s.aWipe}`} style={{ animationDelay: '0.32s' }}>
            looking you up.
          </span>
        </span>
      </h2>

      <div className={s.stats}>
        {STATS.map((stat, i) => (
          <div className={`${s.stat} ${s.aRise}`} key={stat.to} style={{ animationDelay: `${0.7 + i * 0.18}s` }}>
            <span className={s.statNum}>
              <CountUp to={stat.to} suffix={stat.suffix} />
            </span>
            <span className={s.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      <p className={`${s.note} ${s.noteLight} ${s.aRise}`} style={{ animationDelay: '1.35s' }}>
        No website, or a poor one, and the sale is gone before you say hello.
      </p>
    </div>
  )
}
