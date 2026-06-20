import s from '../Story.module.css'

const TERMS = [
  { big: 'Pay what you want', small: 'plus the cost of your domain. That is the whole bill.' },
  { big: 'I do everything else', small: 'the design, the writing, the photos, the setup.' },
  { big: 'One 10-minute call', small: 'and your site is live in about a week.' },
]

/** Chapter 3 — the warm peak. Sky floods the stage; the offer lands plainly. */
export function Offer() {
  return (
    <div className={`${s.chapterInner} ${s.offerInner}`}>
      <span
        className={`${s.kicker} ${s.kickerOnSky} ${s.aRise}`}
        style={{ animationDelay: '0.1s' }}
      >
        So here is what I do
      </span>

      <h2 className={`${s.bigline} ${s.onSky}`}>
        <span className={s.lineMask}>
          <span className={`${s.lineFill} ${s.aWipe}`} style={{ animationDelay: '0.2s' }}>
            I'll build your
          </span>
        </span>
        <span className={s.lineMask}>
          <span className={`${s.lineFill} ${s.aWipe}`} style={{ animationDelay: '0.32s' }}>
            website for you.
          </span>
        </span>
      </h2>

      <p className={`${s.offerPersonal} ${s.aRise}`} style={{ animationDelay: '0.7s' }}>
        I just want the small businesses around me to look as good online as they
        already are in person.
      </p>

      <ul className={s.terms}>
        {TERMS.map((t, i) => (
          <li className={`${s.term} ${s.aRise}`} key={t.big} style={{ animationDelay: `${1.0 + i * 0.22}s` }}>
            <span className={s.termBig}>{t.big}</span>
            <span className={s.termSmall}>{t.small}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
