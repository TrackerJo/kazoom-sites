import { useEffect, useRef, useState } from 'react'
import type { ComponentType, SVGProps } from 'react'
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type Variants,
} from 'motion/react'
import { Edit, Sparkle, Globe, Check, Pause, Play } from './icons'
import { EASE_OUT } from '../lib/anim'
import styles from './Steps.module.css'

type SceneId = 'tell' | 'build' | 'live'

type StepData = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  blurb: string // short line for the rail
  body: string
  points: string[]
  scene: SceneId
}

const STEPS: StepData[] = [
  {
    icon: Edit,
    title: 'Tell us about your business',
    blurb: 'A few plain questions, about ten minutes.',
    body: 'Answer a few simple questions about what you do. It takes about ten minutes, and there is no jargon to wade through.',
    points: ['A few plain questions', 'About ten minutes', 'Nothing technical'],
    scene: 'tell',
  },
  {
    icon: Sparkle,
    title: 'We build your site',
    blurb: 'Designed around you, in your words and colors.',
    body: 'Our team designs a site around your business, with your words, your colors and your photos. You review it and ask for any changes.',
    points: ['Your words and colors', 'Designed around you', 'You review and refine'],
    scene: 'build',
  },
  {
    icon: Globe,
    title: 'Go live and get found',
    blurb: 'We publish, connect your domain, set up Google.',
    body: 'We publish it, connect your domain and set you up to show on Google. After that, updates and hosting are on us.',
    points: ['We connect your domain', 'Set up on Google', 'Updates are on us'],
    scene: 'live',
  },
]

const DURATION = 6 // seconds each step holds before auto-advancing

/* ---------- shared scene motion ---------- */

const sceneParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
}
const piece: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE_OUT } },
}
const bar: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.55, ease: EASE_OUT } },
}
const drop: Variants = {
  hidden: { opacity: 0, y: -18, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE_OUT } },
}

/** A small purpose-built illustration for each step, white-on-coral. */
function Scene({ scene, play }: { scene: SceneId; play: boolean }) {
  const anim = play ? { initial: 'hidden' as const, animate: 'show' as const } : {}

  if (scene === 'tell') {
    return (
      <motion.div className={styles.scene} variants={sceneParent} {...anim}>
        <motion.div className={styles.win} variants={piece}>
          <div className={styles.winHead}>
            <span className={styles.winAvatar} />
            <motion.span className={`${styles.bar} ${styles.barWide}`} variants={bar} />
          </div>
          {[68, 84, 56].map((w, i) => (
            <div className={styles.qRow} key={i}>
              <span className={styles.qDot} />
              <motion.span
                className={styles.bar}
                style={{ width: `${w}%`, transformOrigin: 'left' }}
                variants={bar}
              />
            </div>
          ))}
        </motion.div>
        <motion.div className={styles.pill} variants={drop}>
          <Check />
          Ten minutes, done
        </motion.div>
      </motion.div>
    )
  }

  if (scene === 'build') {
    return (
      <motion.div className={styles.scene} variants={sceneParent} {...anim}>
        <motion.div className={styles.win} variants={piece}>
          <div className={styles.winBar}>
            <span className={styles.tl} />
            <span className={styles.tl} />
            <span className={styles.tl} />
            <span className={styles.urlPill} />
          </div>
          <div className={styles.layout}>
            <motion.span className={styles.blockHero} variants={piece} />
            <motion.span className={styles.blockA} variants={piece} />
            <motion.span className={styles.blockB} variants={piece} />
          </div>
          <div className={styles.swatches}>
            {['var(--coral)', 'var(--coral-strong)', 'var(--coral-deep)'].map((c, i) => (
              <motion.span
                key={i}
                className={styles.swatch}
                style={{ background: c }}
                variants={piece}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    )
  }

  // 'live'
  return (
    <motion.div className={styles.scene} variants={sceneParent} {...anim}>
      <motion.div className={styles.win} variants={piece}>
        <div className={styles.winBar}>
          <span className={styles.liveDot}>
            {play && <span className={styles.livePulse} />}
          </span>
          <span className={styles.url}>yourbusiness.com</span>
          <span className={styles.liveTag}>Live</span>
        </div>
        <div className={styles.layout}>
          <span className={styles.blockHero} />
          <span className={styles.blockA} />
          <span className={styles.blockB} />
        </div>
      </motion.div>
      <motion.div className={styles.result} variants={drop}>
        <span className={styles.pin} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Z" />
            <circle cx="12" cy="9" r="2.6" fill="var(--coral-strong)" />
          </svg>
        </span>
        <span className={styles.resultText}>
          <span className={styles.resultName} />
          <span className={styles.stars}>★★★★★</span>
        </span>
      </motion.div>
    </motion.div>
  )
}

/* ---------- the interactive stage (wide screens, motion allowed) ---------- */

function StepContent({ step, index }: { step: StepData; index: number }) {
  return (
    <>
      <p className={styles.stageNum}>
        Step {index + 1}
        <span className={styles.stageTotal}> / {STEPS.length}</span>
      </p>
      <h3 className={styles.stageTitle}>{step.title}</h3>
      <p className={styles.stageBody}>{step.body}</p>
      <ul className={styles.points}>
        {step.points.map((p) => (
          <li key={p}>
            <Check />
            {p}
          </li>
        ))}
      </ul>
    </>
  )
}

function Stepper() {
  const [active, setActive] = useState(0)
  const [userPaused, setUserPaused] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [focused, setFocused] = useState(false)

  const rootRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const inView = useInView(rootRef, { amount: 0.4 })

  const progress = useMotionValue(0)
  const activeMv = useMotionValue(0)
  const running = inView && !userPaused && !hovering && !focused

  // Connector fill = journey position (active node) + a fraction toward the next.
  const fillHeight = useTransform([progress, activeMv], ([p, a]: number[]) => {
    const frac = (a + p) / Math.max(1, STEPS.length - 1)
    return `${Math.min(100, frac * 100)}%`
  })

  useEffect(() => {
    activeMv.set(active)
    progress.set(0)
  }, [active, activeMv, progress])

  useEffect(() => {
    if (!running) return
    const remaining = DURATION * (1 - progress.get())
    const controls = animate(progress, 1, {
      duration: Math.max(0.1, remaining),
      ease: 'linear',
      onComplete: () => setActive((a) => (a + 1) % STEPS.length),
    })
    return () => controls.stop()
  }, [running, active, progress])

  const select = (i: number) => setActive(i)

  // Roving focus: move both selection and DOM focus to the target tab.
  const goto = (i: number) => {
    setActive(i)
    tabRefs.current[i]?.focus()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = STEPS.length - 1
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      goto(active === last ? 0 : active + 1)
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      goto(active === 0 ? last : active - 1)
    } else if (e.key === 'Home') {
      e.preventDefault()
      goto(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      goto(last)
    }
  }

  const step = STEPS[active]

  return (
    <div
      className={styles.stepper}
      ref={rootRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className={styles.rail}
        role="tablist"
        aria-orientation="vertical"
        aria-label="How it works"
        onKeyDown={onKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false)
        }}
      >
        <div className={styles.track} aria-hidden="true">
          <motion.span className={styles.trackFill} style={{ height: fillHeight }} />
        </div>

        {STEPS.map((s, i) => {
          const state = i < active ? 'done' : i === active ? 'active' : 'next'
          return (
            <button
              key={s.title}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              role="tab"
              id={`step-tab-${i}`}
              aria-selected={i === active}
              aria-controls="step-panel"
              tabIndex={i === active ? 0 : -1}
              className={`${styles.railItem} ${styles[state]}`}
              onClick={() => select(i)}
            >
              <span className={styles.node}>
                {i < active ? <Check /> : <span>{i + 1}</span>}
              </span>
              <span className={styles.railText}>
                <span className={styles.railTitle}>{s.title}</span>
                <span className={styles.railBlurb}>{s.blurb}</span>
              </span>
            </button>
          )
        })}

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setUserPaused((p) => !p)}
          aria-pressed={userPaused}
        >
          {userPaused ? <Play /> : <Pause />}
          {userPaused ? 'Play walkthrough' : 'Pause walkthrough'}
        </button>
      </div>

      <div
        className={styles.stage}
        role="tabpanel"
        id="step-panel"
        aria-labelledby={`step-tab-${active}`}
      >
        <motion.div
          key={`t-${active}`}
          className={styles.stageText}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        >
          <StepContent step={step} index={active} />
        </motion.div>

        <div className={styles.stageVisual}>
          <span className={styles.orbA} aria-hidden="true" />
          <span className={styles.orbB} aria-hidden="true" />
          <motion.div
            key={`s-${active}`}
            className={styles.sceneWrap}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Scene scene={step.scene} play />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

/* ---------- static timeline (mobile + reduced motion) ---------- */

function Timeline() {
  return (
    <ol className={styles.timeline}>
      {STEPS.map((s, i) => (
        <li key={s.title} className={styles.tlItem}>
          <span className={styles.node}>
            <span>{i + 1}</span>
          </span>
          <div className={styles.tlCard}>
            <div className={styles.tlText}>
              <h3 className={styles.tlTitle}>{s.title}</h3>
              <p className={styles.stageBody}>{s.body}</p>
              <ul className={styles.points}>
                {s.points.map((p) => (
                  <li key={p}>
                    <Check />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.stageVisual}>
              <span className={styles.orbA} aria-hidden="true" />
              <span className={styles.orbB} aria-hidden="true" />
              <div className={styles.sceneWrap}>
                <Scene scene={s.scene} play={false} />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

/** Interactive stepper on wide screens with motion; static timeline otherwise. */
function useInteractive() {
  const reduce = useReducedMotion()
  const [wide, setWide] = useState(true)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 861px)')
    const update = () => setWide(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return !reduce && wide
}

export function Steps() {
  const reduce = useReducedMotion()
  const interactive = useInteractive()

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

        {interactive ? <Stepper /> : <Timeline />}
      </div>
    </section>
  )
}
