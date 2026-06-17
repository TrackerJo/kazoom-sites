import { motion, useReducedMotion } from 'motion/react'
import { Counter } from './Counter'
import { EASE_OUT } from '../lib/anim'
import styles from './Stats.module.css'

const STATS = [
  { to: 5, prefix: '', unit: 'days', label: 'From sign-up to live, on average' },
  { to: 29, prefix: '$', unit: '/mo', label: 'One flat price, everything included' },
  { to: 30, prefix: '', unit: 'days', label: 'Money-back guarantee, no hard feelings' },
]

export function Stats() {
  const reduce = useReducedMotion()

  return (
    <section className={styles.section} id="proof" aria-label="Kazoom by the numbers">
      <div className="container">
        <ul className={styles.row}>
          {STATS.map((stat, i) => (
            <motion.li
              key={stat.label}
              className={styles.stat}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: EASE_OUT }}
            >
              <p className={styles.figure}>
                <Counter to={stat.to} prefix={stat.prefix} />
                <span className={styles.unit}>{stat.unit}</span>
              </p>
              <p className={styles.label}>{stat.label}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
