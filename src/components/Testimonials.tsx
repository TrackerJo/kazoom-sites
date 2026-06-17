import { Reveal } from './Reveal'
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

export function Testimonials() {
  return (
    <section className={styles.section} aria-label="What owners say">
      <div className="container">
        <Reveal>
          <h2 className={styles.title}>Owners who took the leap</h2>
        </Reveal>
        <div className={styles.grid}>
          {QUOTES.map((item, i) => (
            <Reveal key={item.name} delay={i * 90}>
              <figure className={styles.card}>
                <blockquote className={styles.quote}>{item.quote}</blockquote>
                <figcaption className={styles.person}>
                  <span
                    className={styles.avatar}
                    style={{ background: item.tint }}
                    aria-hidden="true"
                  >
                    {item.initials}
                  </span>
                  <span>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.business}>{item.business}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
