import { Reveal } from './Reveal'
import { ArrowRight } from './icons'
import styles from './FinalCTA.module.css'

export function FinalCTA() {
  return (
    <section className={styles.section} id="start">
      <div className={styles.blob} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <h2 className={styles.title}>Ready to look legit online?</h2>
          <p className={styles.sub}>
            Join the local businesses who stopped putting it off. Tell us about
            yours today, and you could be live within the week.
          </p>
          <div className={styles.actions}>
            <a href="#top" className="btn btn-light btn-lg">
              Get started
              <ArrowRight />
            </a>
            <a href="#faq" className="btn btn-on-coral btn-lg">
              Talk to a human
            </a>
          </div>
          <p className={styles.fine}>
            No code. No contracts. No surprise bills.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
