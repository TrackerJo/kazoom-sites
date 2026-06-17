import { ArrowRight, Check } from '@phosphor-icons/react'

const included = [
  'A custom-designed site, built for your business',
  'Your own domain and business email',
  'Found on Google from day one',
  'Looks great on every phone',
  'Edits whenever you need them, just ask',
]

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="price__inner reveal">
          <div>
            <h2>Simple pricing, no surprises.</h2>
            <p className="lede">
              One flat monthly price covers everything: design, hosting, updates,
              and a real person to help. No setup fees, ever.
            </p>
            <ul className="price__list">
              {included.map((item) => (
                <li key={item}>
                  <Check size={20} weight="bold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="price__card">
            {/* Sample price — confirm before launch. */}
            <div className="price__amount">
              <b>$29</b>
              <span> / month</span>
            </div>
            <a className="btn btn-primary btn-lg" href="#start">
              Start my website
              <ArrowRight size={18} weight="bold" />
            </a>
            <p className="price__note">14-day free trial. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
