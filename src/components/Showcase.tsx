import { MiniSite } from './MiniSite'
import { showcaseSites } from '../data/sites'
import { Reveal } from './Reveal'
import { ArrowRight } from './icons'
import styles from './Showcase.module.css'

export function Showcase() {
  return (
    <section className={styles.section} id="examples">
      <div className="container">
        <Reveal>
          <div className={styles.head}>
            <div>
              <span className="eyebrow">Real sites, real businesses</span>
              <h2 className={styles.title}>
                Every site is built around your business
              </h2>
            </div>
            <p className={styles.intro}>
              No two are alike. You get your own look, your own words, and a site
              that feels like you, not a template everyone else is using too.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {showcaseSites.map((site, i) => (
            <Reveal key={site.domain} delay={i * 90}>
              <MiniSite data={site} className={styles.card} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className={styles.foot}>
            <span>Your business could be next.</span>
            <a href="#start" className={styles.footLink}>
              Start yours
              <ArrowRight />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
