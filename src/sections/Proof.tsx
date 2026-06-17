/* Sample metrics — replace with real, verifiable figures before launch. */
const stats = [
  { num: '2,400+', label: 'small businesses online with Kazoom' },
  { num: '4.9 / 5', label: 'average rating from business owners' },
  { num: '3 days', label: 'typical time from start to launch' },
]

export function Proof() {
  return (
    <section className="proof" aria-label="By the numbers">
      <div className="wrap proof__inner">
        {stats.map((s, i) => (
          <div
            key={s.num}
            className="proof__item reveal"
            style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
          >
            <div className="proof__num">{s.num}</div>
            <div className="proof__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
