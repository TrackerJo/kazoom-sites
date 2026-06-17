import { KazoomMark, Instagram, Facebook } from './icons'
import styles from './Footer.module.css'

const COLUMNS = [
  {
    heading: 'Product',
    links: ['How it works', 'Examples', 'Pricing', 'What you get'],
  },
  {
    heading: 'Company',
    links: ['About us', 'Careers', 'Blog', 'Contact'],
  },
  {
    heading: 'Support',
    links: ['Help center', 'Talk to us', 'Status', 'Privacy'],
  },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.brand} aria-label="Kazoom home">
            <KazoomMark className={styles.mark} />
            <span>Kazoom</span>
          </a>
          <p className={styles.blurb}>
            Beautiful, professional websites for the small businesses that make a
            neighborhood worth living in.
          </p>
          <div className={styles.social}>
            <a href="#top" aria-label="Kazoom on Instagram">
              <Instagram />
            </a>
            <a href="#top" aria-label="Kazoom on Facebook">
              <Facebook />
            </a>
          </div>
        </div>

        <nav className={styles.cols} aria-label="Footer">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className={styles.colHeading}>{col.heading}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© 2026 Kazoom. Made for small businesses.</p>
        <p className={styles.legal}>
          <a href="#top">Terms</a>
          <a href="#top">Privacy</a>
          <a href="#top">Cookies</a>
        </p>
      </div>
    </footer>
  )
}
