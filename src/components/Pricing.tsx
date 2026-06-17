import { motion, useReducedMotion } from 'motion/react'
import { Check, ArrowRight } from './icons'
import { useMagnetic, EASE_OUT } from '../lib/anim'
import styles from './Pricing.module.css'

const INCLUDED = [
  'A custom, professional website',
  'Your own domain, free the first year',
  'Hosting, security and backups',
  'Google and local search setup',
  'Unlimited content updates',
  'Friendly human support',
  'Looks perfect on every device',
  'No setup fees, ever',
]

export function Pricing() {
  const reduce = useReducedMotion()
  const cta = useMagnetic<HTMLAnchorElement>(0.35)

  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <motion.div
          className={styles.head}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span className="eyebrow">Pricing</span>
          <h2 className={styles.title}>One simple price. Everything included.</h2>
          <p className={styles.intro}>
            No tiers to decode, no features held hostage. One honest plan with
            everything your business needs to look great online.
          </p>
        </motion.div>

        <motion.div
          className={styles.panel}
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: EASE_OUT }}
        >
          <div className={styles.offer}>
            {!reduce && (
              <motion.span
                className={styles.sheen}
                aria-hidden="true"
                initial={{ x: '-150%' }}
                whileInView={{ x: '260%' }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.2, delay: 0.4, ease: EASE_OUT }}
              />
            )}
            <span className={styles.plan}>The Kazoom plan</span>
            <p className={styles.price}>
              <span className={styles.amount}>$29</span>
              <span className={styles.per}>/ month</span>
            </p>
            <p className={styles.note}>Billed monthly. Cancel anytime.</p>
            <motion.a
              ref={cta.ref}
              href="#start"
              className="btn btn-light btn-lg"
              style={{ x: cta.x, y: cta.y }}
              onMouseMove={cta.onMouseMove}
              onMouseLeave={cta.onMouseLeave}
            >
              Get started
              <ArrowRight />
            </motion.a>
            <p className={styles.guarantee}>
              Not happy in your first 30 days? Full refund, no hard feelings.
            </p>
          </div>

          <div className={styles.includes}>
            <span className={styles.includesLabel}>Everything included</span>
            <ul className={styles.list}>
              {INCLUDED.map((item, i) => (
                <motion.li
                  key={item}
                  initial={reduce ? false : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.05, ease: EASE_OUT }}
                >
                  <Check />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
