import { Reveal } from './Reveal'
import { Check, ArrowRight } from './icons'
import styles from './Pricing.module.css'

const INCLUDED = [
  'A custom, professional website',
  'Your own domain, free the first year',
  'Hosting, security and backups',
  'Google and local search setup',
  'Unlimited content updates',
  'Friendly human support',
  'Looks perfect on every device',
  'No setup fees, ever',
]

export function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <Reveal>
          <div className={styles.head}>
            <span className="eyebrow">Pricing</span>
            <h2 className={styles.title}>One simple price. Everything included.</h2>
            <p className={styles.intro}>
              No tiers to decode, no features held hostage. One honest plan with
              everything your business needs to look great online.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className={styles.panel}>
            <div className={styles.offer}>
              <span className={styles.plan}>The Kazoom plan</span>
              <p className={styles.price}>
                <span className={styles.amount}>$29</span>
                <span className={styles.per}>/ month</span>
              </p>
              <p className={styles.note}>Billed monthly. Cancel anytime.</p>
              <a href="#start" className="btn btn-primary btn-lg">
                Get started
                <ArrowRight />
              </a>
              <p className={styles.guarantee}>
                Not happy in your first 30 days? Full refund, no hard feelings.
              </p>
            </div>

            <div className={styles.includes}>
              <span className={styles.includesLabel}>Everything included</span>
              <ul className={styles.list}>
                {INCLUDED.map((item) => (
                  <li key={item}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
