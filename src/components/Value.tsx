import { motion, useReducedMotion } from 'motion/react'
import type { ComponentType, SVGProps } from 'react'
import { Heart, Compass, Phone, Edit, Shield, Sparkle } from './icons'
import { EASE_OUT } from '../lib/anim'
import styles from './Value.module.css'

type Value = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  body: string
}

const VALUES: Value[] = [
  {
    icon: Heart,
    title: 'A site you are proud to share',
    body: 'Polished and professional, the kind of first impression that makes people take your business seriously.',
  },
  {
    icon: Compass,
    title: 'Found on Google, locally',
    body: 'We set up the basics so nearby customers can actually find you.',
  },
  {
    icon: Phone,
    title: 'Great on every phone',
    body: 'Works beautifully on phones, tablets and laptops, automatically.',
  },
  {
    icon: Edit,
    title: 'Easy to update yourself',
    body: 'Change your hours, prices or photos in minutes. Or just ask us.',
  },
  {
    icon: Shield,
    title: 'Secure and always online',
    body: 'Hosting, backups, security and updates are all handled for you.',
  },
  {
    icon: Sparkle,
    title: 'Real support from real people',
    body: 'Friendly humans you can email when you need a hand. No phone trees.',
  },
]

export function Value() {
  const reduce = useReducedMotion()

  return (
    <section className={styles.section} id="features">
      <div className={styles.blobA} aria-hidden="true" />
      <div className={styles.blobB} aria-hidden="true" />

      <div className="container">
        <motion.div
          className={styles.head}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <h2 className={styles.title}>Everything you need to look professional.</h2>
          <p className={styles.sub}>
            We handle the technology, the hosting and the fiddly bits, so you can
            get back to running your business.
          </p>
        </motion.div>

        <div className={styles.bento}>
          {VALUES.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.article
                key={value.title}
                className={`${styles.tile} ${i === 0 ? styles.feature : ''}`}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE_OUT }}
              >
                <span className={styles.tileIcon}>
                  <Icon />
                </span>
                <div>
                  <h3 className={styles.tileTitle}>{value.title}</h3>
                  <p className={styles.tileBody}>{value.body}</p>
                </div>
                {i === 0 && <span className={styles.featureGlow} aria-hidden="true" />}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
