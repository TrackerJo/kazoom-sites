import { useState } from 'react'
import { Plus } from './icons'
import { Reveal } from './Reveal'
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
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className={styles.section} id="faq">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.aside}>
          <span className="eyebrow">Good questions</span>
          <h2 className={styles.title}>The things owners ask us most</h2>
          <p className={styles.help}>
            Still wondering about something?{' '}
            <a href="#start" className={styles.helpLink}>
              Talk to a real person
            </a>
            . No pressure, no script.
          </p>
        </Reveal>

        <Reveal delay={100} className={styles.listCol}>
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
                    <span
                      className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
                      aria-hidden="true"
                    >
                      <Plus />
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ''}`}
                  >
                    <div className={styles.answerInner}>
                      <p className={styles.answer}>{item.a}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
