import { Star } from '@phosphor-icons/react'

const quotes = [
  {
    body: 'I had put off getting a website for years. Kazoom had mine live in a week, and I booked three new clients the same month.',
    name: 'Priya Raman',
    role: 'Owner, Marigold & Thyme',
    avatar: 'https://i.pravatar.cc/120?img=45',
  },
  {
    body: 'It actually looks like the shop I run. People walk in saying they found us on Google now.',
    name: 'Marcus Bell',
    role: 'Owner, Ironside Barbers',
    avatar: 'https://i.pravatar.cc/120?img=12',
  },
  {
    body: 'No confusing dashboards, no surprise bills. I told them about the roastery and they handled the rest.',
    name: 'Sofia Duarte',
    role: 'Founder, Vela Coffee',
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
]

export function Testimonials() {
  return (
    <section className="section quotes">
      <div className="wrap">
        <div className="quotes__head reveal">
          <h2>Owners who were nervous, then glad they did it.</h2>
        </div>
        <div className="quotes__grid">
          {quotes.map((q, i) => (
            <figure
              key={q.name}
              className="quote reveal"
              style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
            >
              <div className="quote__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} weight="fill" />
                ))}
              </div>
              <blockquote>
                <p>{q.body}</p>
              </blockquote>
              <figcaption className="quote__who">
                <img className="quote__avatar" src={q.avatar} width={42} height={42} loading="lazy" alt="" />
                <span>
                  <b>{q.name}</b>
                  <span>{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
