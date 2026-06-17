import { motion, useReducedMotion } from 'motion/react'
import { MiniSite, type MiniSiteData } from './MiniSite'
import { showcaseSites } from '../data/sites'
import { ArrowRight } from './icons'
import { useTilt, EASE_OUT } from '../lib/anim'
import styles from './Showcase.module.css'

function ShowcaseCard({ site, index }: { site: MiniSiteData; index: number }) {
  const reduce = useReducedMotion()
  const tilt = useTilt(7)

  return (
    <motion.div
      className={styles.cardWrap}
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay: index * 0.12, ease: EASE_OUT }}
    >
      <motion.div
        ref={tilt.ref}
        className={styles.tilt}
        style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
      >
        <MiniSite data={site} className={styles.card} />
        <motion.span
          className={styles.spotlight}
          aria-hidden="true"
          style={{ '--gx': tilt.glareX, '--gy': tilt.glareY } as React.CSSProperties}
        />
      </motion.div>
    </motion.div>
  )
}

export function Showcase() {
  const reduce = useReducedMotion()

  return (
    <section className={styles.section} id="examples">
      <div className="container">
        <motion.div
          className={styles.head}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span className="eyebrow">Real sites, real businesses</span>
          <h2 className={styles.title}>Every site is built around your business</h2>
          <p className={styles.intro}>
            No two are alike. You get your own look, your own words, and a site
            that feels like you, not a template everyone else is using too.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {showcaseSites.map((site, i) => (
            <ShowcaseCard key={site.domain} site={site} index={i} />
          ))}
        </div>

        <motion.p
          className={styles.foot}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span>Your business could be next.</span>
          <a href="#start" className={styles.footLink}>
            Start yours
            <ArrowRight />
          </a>
        </motion.p>
      </div>
    </section>
  )
}
