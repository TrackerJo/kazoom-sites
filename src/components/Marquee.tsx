import { motion, useReducedMotion } from 'motion/react'
import { EASE_OUT } from '../lib/anim'
import styles from './Marquee.module.css'

const CATEGORIES = [
  'Cafés',
  'Salons',
  'Trades',
  'Studios',
  'Shops',
  'Clinics',
  'Restaurants',
  'Makers',
  'Florists',
  'Bakeries',
  'Gyms',
  'Tutors',
]

export function Marquee() {
  const reduce = useReducedMotion()
  // Duplicated once so the track loops seamlessly at -50%.
  const loop = [...CATEGORIES, ...CATEGORIES]

  return (
    <section className={styles.strip} aria-label="Who Kazoom is for">
      <motion.p
        className={styles.lead}
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        Built for the businesses on your street
      </motion.p>

      <div className={styles.viewport}>
        <ul className={styles.track} aria-hidden="true">
          {loop.map((category, i) => (
            <li key={`${category}-${i}`}>{category}</li>
          ))}
        </ul>
        <span className={styles.fadeL} aria-hidden="true" />
        <span className={styles.fadeR} aria-hidden="true" />
      </div>

      <ul className="visually-hidden">
        {CATEGORIES.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </section>
  )
}
