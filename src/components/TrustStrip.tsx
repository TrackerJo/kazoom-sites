import { Reveal } from './Reveal'
import styles from './TrustStrip.module.css'

const CATEGORIES = [
  'Cafés',
  'Salons',
  'Trades',
  'Studios',
  'Shops',
  'Clinics',
  'Restaurants',
  'Makers',
]

export function TrustStrip() {
  return (
    <section className={styles.strip} aria-label="Who Kazoom is for">
      <div className="container">
        <Reveal>
          <p className={styles.lead}>Built for the businesses on your street</p>
          <ul className={styles.tags}>
            {CATEGORIES.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
