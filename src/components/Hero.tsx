import { MiniSite } from './MiniSite'
import { marloweCoffee, sageAndStone } from '../data/sites'
import { ArrowRight, Check } from './icons'
import { Reveal } from './Reveal'
import styles from './Hero.module.css'

const CHIPS = ['No code needed', 'Live in under a week', 'Cancel anytime']

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <Reveal>
            <span className="eyebrow">Websites for small businesses</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={styles.title}>
              Look legit online.
              <br />
              <span className={styles.accent}>Win more customers.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={styles.sub}>
              Kazoom builds you a beautiful, professional website that fits your
              business. Ready in days, not months. No tech skills, no agencies,
              no surprise bills.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className={styles.actions}>
              <a href="#start" className="btn btn-primary btn-lg">
                Get started
                <ArrowRight />
              </a>
              <a href="#examples" className="btn btn-secondary btn-lg">
                See examples
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className={styles.chips}>
              {CHIPS.map((chip) => (
                <li key={chip}>
                  <Check />
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className={styles.visualReveal}>
          <div className={styles.visual}>
            <MiniSite data={marloweCoffee} featured className={styles.desktop} />
            <div className={styles.phone} aria-hidden="true">
              <span className={styles.notch} />
              <MiniSite data={sageAndStone} className={styles.phoneSite} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
