import { useEffect, useRef, useState } from 'react'
import type { ComponentType, CSSProperties, SVGProps } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react'
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

const STACK_OFFSET = 16 // px each card sits below the one beneath, so a sliver peeks
const ENTER_Y = 820 // px: cards start below the fold and slide up into the stack
// Fraction of the pin scroll the cards finish arriving by; the small remainder
// is a brief hold on the finished stack before the section scrolls on.
const ARRIVE_BY = 0.94

/** True only on wide screens with motion allowed; otherwise a static list. */
function useAnimatedDeck() {
  const reduce = useReducedMotion()
  const [wide, setWide] = useState(true)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 821px)')
    const update = () => setWide(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return !reduce && wide
}

function CardInner({ step, index }: { step: StepData; index: number }) {
  const Icon = step.icon
  return (
    <>
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
    </>
  )
}

function DeckCard({
  step,
  index,
  total,
  progress,
}: {
  step: StepData
  index: number
  total: number
  progress: MotionValue<number>
}) {
  // Each card after the first rises in over its own slice of the scroll, then
  // the assembled deck holds for the final slice before the section scrolls on.
  const seg = ARRIVE_BY / Math.max(1, total - 1)
  const start = index === 0 ? 0 : (index - 1) * seg
  const end = index === 0 ? 1 : index * seg
  const yMv = useTransform(progress, [start, end], [ENTER_Y, 0])

  return (
    <motion.article
      className={`${styles.card} ${styles.deckCard}`}
      style={{
        top: index * STACK_OFFSET,
        zIndex: index,
        y: index === 0 ? 0 : yMv,
      }}
    >
      <CardInner step={step} index={index} />
    </motion.article>
  )
}

function Deck() {
  const pinRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div className={styles.pin} ref={pinRef}>
      <div className={styles.sticky}>
        <div
          className={styles.deck}
          style={{ '--peek': `${(STEPS.length - 1) * STACK_OFFSET}px` } as CSSProperties}
        >
          {STEPS.map((step, i) => (
            <DeckCard
              key={step.title}
              step={step}
              index={i}
              total={STEPS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function StaticList() {
  return (
    <div className={styles.list}>
      {STEPS.map((step, i) => (
        <article key={step.title} className={`${styles.card} ${styles.listCard}`}>
          <CardInner step={step} index={i} />
        </article>
      ))}
    </div>
  )
}

export function Steps() {
  const reduce = useReducedMotion()
  const animated = useAnimatedDeck()

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
      </div>

      {animated ? (
        <div className="container">
          <Deck />
        </div>
      ) : (
        <div className="container">
          <StaticList />
        </div>
      )}
    </section>
  )
}
