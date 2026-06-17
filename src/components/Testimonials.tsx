import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from './icons'
import { EASE_OUT } from '../lib/anim'
import styles from './Testimonials.module.css'

const QUOTES = [
  {
    quote:
      'I finally have a website I am not embarrassed to send people. It took less than a week, and I did not have to learn a thing.',
    name: 'Denise Carter',
    business: 'Carter & Co. Florist',
    initials: 'DC',
    tint: 'oklch(0.62 0.12 18)',
  },
  {
    quote:
      'It looks like something a big company would have. People take my little shop seriously now, and that has been worth every penny.',
    name: 'Marcus Hale',
    business: "Hale's Hardware",
    initials: 'MH',
    tint: 'oklch(0.55 0.09 150)',
  },
  {
    quote:
      'We were live in five days. The whole thing cost less than one slow month of doing it the old way.',
    name: 'Aisha Bello',
    business: 'Bello Bakeshop',
    initials: 'AB',
    tint: 'oklch(0.58 0.11 250)',
  },
]

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
}

export function Testimonials() {
  const reduce = useReducedMotion()
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
  const active = QUOTES[index]

  const paginate = (d: number) =>
    setState(([i]) => [(i + d + QUOTES.length) % QUOTES.length, d])
  const goTo = (i: number) => setState(([cur]) => [i, i > cur ? 1 : -1])

  useEffect(() => {
    if (reduce) return
    const id = setTimeout(() => paginate(1), 6500)
    return () => clearTimeout(id)
  }, [index, reduce])

  return (
    <section className={styles.section} id="stories" aria-label="What owners say" aria-roledescription="carousel">
      <div className="container">
        <motion.h2
          className={styles.title}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          Owners who took the leap
        </motion.h2>

        <div className={styles.stage}>
          <AnimatePresence mode="wait" custom={dir} initial={false}>
            <motion.figure
              key={index}
              className={styles.card}
              custom={dir}
              variants={reduce ? undefined : variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: EASE_OUT }}
              drag={reduce ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) paginate(1)
                else if (info.offset.x > 80) paginate(-1)
              }}
            >
              <blockquote className={styles.quote}>{active.quote}</blockquote>
              <figcaption className={styles.person}>
                <span className={styles.avatar} style={{ background: active.tint }} aria-hidden="true">
                  {active.initials}
                </span>
                <span>
                  <span className={styles.name}>{active.name}</span>
                  <span className={styles.business}>{active.business}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className={styles.controls}>
            <div className={styles.dots} role="tablist" aria-label="Choose testimonial">
              {QUOTES.map((q, i) => (
                <button
                  key={q.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial from ${q.name}`}
                  className={`${styles.dot} ${i === index ? styles.dotOn : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <div className={styles.arrows}>
              <button
                type="button"
                className={styles.arrow}
                aria-label="Previous testimonial"
                onClick={() => paginate(-1)}
              >
                <ArrowRight style={{ transform: 'rotate(180deg)' }} />
              </button>
              <button
                type="button"
                className={styles.arrow}
                aria-label="Next testimonial"
                onClick={() => paginate(1)}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
