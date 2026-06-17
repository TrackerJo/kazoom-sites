import { ArrowRight } from '@phosphor-icons/react'

export function FinalCta() {
  return (
    <section className="section final" id="start">
      <div className="wrap reveal">
        <h2>Let&rsquo;s get your business online.</h2>
        <p>
          Tell us about what you do, and we&rsquo;ll show you a website worth being
          proud of. No commitment to start.
        </p>
        <a className="btn btn-primary btn-lg" href="#start">
          Start my website
          <ArrowRight size={18} weight="bold" />
        </a>
      </div>
    </section>
  )
}
