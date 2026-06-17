import { Reveal } from './Reveal'
import { Heart, Compass, Phone, Edit, Shield, Sparkle, ArrowRight } from './icons'
import styles from './Value.module.css'

const VALUES = [
  { icon: Heart, title: 'A site you are proud to share', body: 'Polished and professional, the kind of site that makes a great first impression.' },
  { icon: Compass, title: 'Found on Google, locally', body: 'We set up the basics so nearby customers can actually find you.' },
  { icon: Phone, title: 'Looks great on every phone', body: 'Your site works beautifully on phones, tablets and laptops, automatically.' },
  { icon: Edit, title: 'Easy to update yourself', body: 'Change your hours, prices or photos in minutes, or just ask us to do it.' },
  { icon: Shield, title: 'Secure and always online', body: 'Hosting, backups, security and updates are all handled for you.' },
  { icon: Sparkle, title: 'Real support from real people', body: 'Friendly humans you can email when you need a hand. No phone trees.' },
]

export function Value() {
  return (
    <section className={styles.section}>
      <div className={styles.blobA} aria-hidden="true" />
      <div className={styles.blobB} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.lead}>
          <span className={styles.eyebrow}>What you get</span>
          <h2 className={styles.title}>
            Everything you need to look professional.
          </h2>
          <p className={styles.sub}>
            We handle the technology, the hosting and the fiddly bits, so you can
            get back to running your business.
          </p>
          <a href="#start" className="btn btn-light btn-lg">
            Get started
            <ArrowRight />
          </a>
        </Reveal>

        <Reveal delay={120} className={styles.listWrap}>
          <ul className={styles.list}>
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <li key={value.title} className={styles.item}>
                  <span className={styles.itemIcon}>
                    <Icon />
                  </span>
                  <div>
                    <h3 className={styles.itemTitle}>{value.title}</h3>
                    <p className={styles.itemBody}>{value.body}</p>
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
