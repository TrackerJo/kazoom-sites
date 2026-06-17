import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Sparkle } from './icons'
import { useMagnetic, EASE_OUT } from '../lib/anim'
import styles from './FinalCTA.module.css'

const SPARKS = [
  { top: '18%', left: '12%', size: 26, delay: 0 },
  { top: '64%', left: '8%', size: 18, delay: 1.4 },
  { top: '24%', left: '86%', size: 22, delay: 0.7 },
  { top: '70%', left: '90%', size: 30, delay: 2 },
]

export function FinalCTA() {
  const reduce = useReducedMotion()
  const cta = useMagnetic<HTMLAnchorElement>(0.45)

  return (
    <section className={styles.section} id="start">
      <div className={styles.blob} aria-hidden="true" />
      <div className={styles.sparks} aria-hidden="true">
        {SPARKS.map((s, i) => (
          <span
            key={i}
            className={styles.spark}
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
            }}
          >
            <Sparkle />
          </span>
        ))}
      </div>

      <motion.div
        className={`container ${styles.inner}`}
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
      >
        <h2 className={styles.title}>Ready to look legit online?</h2>
        <p className={styles.sub}>
          Join the local businesses who stopped putting it off. Tell us about
          yours today, and you could be live within the week.
        </p>
        <div className={styles.actions}>
          <motion.a
            ref={cta.ref}
            href="#top"
            className="btn btn-light btn-lg"
            style={{ x: cta.x, y: cta.y }}
            onMouseMove={cta.onMouseMove}
            onMouseLeave={cta.onMouseLeave}
          >
            Get started
            <ArrowRight />
          </motion.a>
          <a href="#faq" className="btn btn-on-coral btn-lg">
            Talk to a human
          </a>
        </div>
        <p className={styles.fine}>No code. No contracts. No surprise bills.</p>
      </motion.div>
    </section>
  )
}
