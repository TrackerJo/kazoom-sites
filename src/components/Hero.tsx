import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { MiniSite } from './MiniSite'
import { marloweCoffee, sageAndStone } from '../data/sites'
import { ArrowRight, Check } from './icons'
import { useMagnetic, useTilt, EASE_OUT } from '../lib/anim'
import styles from './Hero.module.css'

const LINE_ONE = ['Look', 'legit', 'online.']
const LINE_TWO = ['Win', 'more', 'customers.']
const CHIPS = ['No code needed', 'Live in under a week', 'Cancel anytime']

export function Hero() {
  const reduce = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  const tilt = useTilt(10)
  const cta = useMagnetic<HTMLAnchorElement>(0.4)

  // Parallax: the mockup cluster drifts up faster than the page scrolls.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90])
  const visualFade = useTransform(scrollYProgress, [0, 0.85], [1, 0.35])

  // One running index so words clip-reveal in reading order across both lines.
  let wordIndex = 0
  const word = (w: string) => {
    const delay = 0.35 + wordIndex * 0.07
    wordIndex += 1
    return (
      <span key={`${w}-${delay}`} className={styles.wordMask}>
        <motion.span
          className={styles.word}
          initial={reduce ? false : { y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay, ease: EASE_OUT }}
        >
          {w}
        </motion.span>
      </span>
    )
  }

  return (
    <section className={styles.hero} id="top" ref={heroRef}>
      <div className={styles.aurora} aria-hidden="true">
        <span className={styles.auroraA} />
        <span className={styles.auroraB} />
      </div>

      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <motion.span
            className={`eyebrow ${styles.eyebrow}`}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            Websites for small businesses
          </motion.span>

          <h1 className={styles.title}>
            <span className={styles.line}>{LINE_ONE.map(word)}</span>
            <span className={`${styles.line} ${styles.accentLine}`}>
              {LINE_TWO.map(word)}
            </span>
          </h1>

          <motion.p
            className={styles.sub}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE_OUT }}
          >
            Kazoom builds you a beautiful, professional website that fits your
            business. Ready in days, not months. No tech skills, no surprise bills.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.82, ease: EASE_OUT }}
          >
            <motion.a
              ref={cta.ref}
              href="#start"
              className="btn btn-primary btn-lg"
              style={{ x: cta.x, y: cta.y }}
              onMouseMove={cta.onMouseMove}
              onMouseLeave={cta.onMouseLeave}
            >
              Get started
              <ArrowRight />
            </motion.a>
            <a href="#examples" className="btn btn-secondary btn-lg">
              See examples
            </a>
          </motion.div>

          <motion.ul
            className={styles.chips}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: EASE_OUT }}
          >
            {CHIPS.map((chip) => (
              <li key={chip}>
                <Check />
                {chip}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className={styles.visual}
          style={{ y: visualY, opacity: visualFade }}
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE_OUT }}
        >
          <motion.div
            ref={tilt.ref}
            className={styles.tilt}
            style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
          >
            <div className={styles.float}>
              <MiniSite data={marloweCoffee} featured className={styles.desktop} />
              <motion.span
                className={styles.glare}
                aria-hidden="true"
                style={{ '--gx': tilt.glareX, '--gy': tilt.glareY } as React.CSSProperties}
              />
              <div className={styles.phone} aria-hidden="true">
                <span className={styles.notch} />
                <MiniSite data={sageAndStone} chromeless className={styles.phoneSite} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
