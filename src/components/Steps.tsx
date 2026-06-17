import { useRef } from 'react'
import type { ComponentType, SVGProps } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { Edit, Sparkle, Globe, Check } from './icons'
import { EASE_OUT } from '../lib/anim'
import styles from './Steps.module.css'

type StepData = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  body: string
  points: string[]
}

const STEPS: StepData[] = [
  {
    icon: Edit,
    title: 'Tell us about your business',
    body: 'Answer a few simple questions about what you do. It takes about ten minutes, and there is no jargon to wade through.',
    points: ['A few plain questions', 'About ten minutes', 'Nothing technical'],
  },
  {
    icon: Sparkle,
    title: 'We build your site',
    body: 'Our team designs a site around your business, with your words, your colors and your photos. You review it and ask for any changes.',
    points: ['Your words and colors', 'Designed around you', 'You review and refine'],
  },
  {
    icon: Globe,
    title: 'Go live and get found',
    body: 'We publish it, connect your domain and set you up to show on Google. After that, updates and hosting are on us.',
    points: ['We connect your domain', 'Set up on Google', 'Updates are on us'],
  },
]

function Step({ step, index, total }: { step: StepData; index: number; total: number }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.9, 0.5])
  const isLast = index === total - 1
  const Icon = step.icon

  return (
    <div ref={ref} className={styles.step}>
      <motion.article
        className={styles.card}
        style={reduce || isLast ? undefined : { scale, opacity }}
      >
        <div className={styles.cardText}>
          <span className={styles.num}>{String(index + 1).padStart(2, '0')}</span>
          <h3 className={styles.cardTitle}>{step.title}</h3>
          <p className={styles.cardBody}>{step.body}</p>
          <ul className={styles.points}>
            {step.points.map((p) => (
              <li key={p}>
                <Check />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.cardVisual} aria-hidden="true">
          <span className={styles.disc}>
            <Icon />
          </span>
          <span className={styles.orbA} />
          <span className={styles.orbB} />
        </div>
      </motion.article>
    </div>
  )
}

export function Steps() {
  const reduce = useReducedMotion()

  return (
    <section className={styles.section} id="how">
      <div className="container">
        <motion.div
          className={styles.head}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span className="eyebrow">How it works</span>
          <h2 className={styles.title}>Three easy steps. We do the hard parts.</h2>
        </motion.div>

        <div className={styles.stack}>
          {STEPS.map((step, i) => (
            <Step key={step.title} step={step} index={i} total={STEPS.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
