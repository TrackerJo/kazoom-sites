import { ArrowUpRight } from '@phosphor-icons/react'

/* TODO: swap Picsum seeds for real screenshots of the sites Kazoom has built. */
const sites = [
  { name: 'Marigold & Thyme', kind: 'Neighborhood florist', seed: 'kazoom-florist-shop', cls: 'tile--wide', w: 1200, h: 900 },
  { name: 'Vela Coffee', kind: 'Coffee roaster', seed: 'kazoom-coffee-roaster', cls: 'tile--tall', w: 700, h: 900 },
  { name: 'Ironside Barbers', kind: 'Barbershop', seed: 'kazoom-barbershop', cls: 'tile--std', w: 700, h: 500 },
  { name: 'Costa Plumbing Co.', kind: 'Home services', seed: 'kazoom-plumbing-van', cls: 'tile--std', w: 700, h: 500 },
  { name: 'Lumen Yoga', kind: 'Yoga studio', seed: 'kazoom-yoga-studio', cls: 'tile--std', w: 700, h: 500 },
]

export function Showcase() {
  return (
    <section className="section" id="examples" style={{ background: 'var(--cream)' }}>
      <div className="wrap">
        <div className="show__head reveal">
          <h2>The kind of website your customers expect to see.</h2>
          <a className="btn btn-ghost" href="#examples">
            Browse the gallery
            <ArrowUpRight size={17} weight="bold" />
          </a>
        </div>
        <div className="show__grid">
          {sites.map((s, i) => (
            <article
              key={s.name}
              className={`tile reveal ${s.cls}`}
              style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}
            >
              <img
                src={`https://picsum.photos/seed/${s.seed}/${s.w}/${s.h}`}
                width={s.w}
                height={s.h}
                loading="lazy"
                alt={`${s.name}, a ${s.kind.toLowerCase()} website built by Kazoom`}
              />
              <div className="tile__cap">
                <b>{s.name}</b>
                <span>{s.kind}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
