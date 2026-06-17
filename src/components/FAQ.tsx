import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Plus } from './icons'
import { EASE_OUT } from '../lib/anim'
import styles from './FAQ.module.css'

const FAQS = [
  {
    q: 'Do I need any technical skills?',
    a: 'None at all. You tell us about your business in plain language, and we handle everything technical. If you can send a text message, you can do this.',
  },
  {
    q: 'How long until my site is live?',
    a: 'Most sites go live in under a week. Once you answer a few questions, we build the first version fast, then make any changes you want before it goes public.',
  },
  {
    q: 'Can I make changes myself later?',
    a: 'Yes, easily. Updating your hours, prices or photos takes a couple of minutes. And if you would rather not, just email us and we will do it for you.',
  },
  {
    q: 'What if I already have a domain name?',
    a: 'We will connect your existing domain for you. If you do not have one yet, we will help you get the right one, free for your first year.',
  },
  {
    q: 'Am I locked into a contract?',
    a: 'No. It is month to month, and you can cancel anytime. Your content is yours, and we will help you take it with you if you ever leave.',
  },
  {
    q: 'Will customers actually find my business?',
    a: 'We set up the essentials for local search, so people nearby searching for what you offer can find you on Google. It is included in your plan.',
  },
]

export function FAQ() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className={styles.section} id="faq">
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.aside}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <h2 className={styles.title}>The things owners ask us most</h2>
          <p className={styles.help}>
            Still wondering about something?{' '}
            <a href="#start" className={styles.helpLink}>
              Talk to a human
            </a>
            . No pressure, no script.
          </p>
        </motion.div>

        <ul className={styles.list}>
          {FAQS.map((item, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`
            return (
              <li key={item.q} className={styles.item}>
                <button
                  type="button"
                  id={buttonId}
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <motion.span
                    className={styles.icon}
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.4, ease: EASE_OUT }}
                  >
                    <Plus />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={styles.answerWrap}
                      initial={reduce ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduce ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE_OUT }}
                    >
                      <p className={styles.answer}>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
