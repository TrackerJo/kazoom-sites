const steps = [
  {
    title: 'Tell us about your business',
    body: 'Answer a few friendly questions. No tech talk, no jargon. Ten minutes on your phone is plenty.',
  },
  {
    title: 'We design it for you',
    body: 'Our team builds a site around your business, your photos, and your words. You review, we refine.',
  },
  {
    title: 'You go live',
    body: 'Approve it and you are online, found on Google and ready for customers. We handle the technical parts.',
  },
]

export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="how__head reveal">
          <p className="eyebrow">How it works</p>
          <h2>Online in three simple steps, without lifting a finger on the hard parts.</h2>
        </div>
        <div className="how__steps">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="how__step reveal"
              style={{ ['--reveal-delay' as string]: `${i * 110}ms` }}
            >
              <div className="how__index">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
