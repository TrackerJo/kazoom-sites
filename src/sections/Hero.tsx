import { ArrowRight, Storefront } from '@phosphor-icons/react'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="reveal">
          <span className="hero__pill">
            <Storefront size={16} weight="fill" />
            Websites for small businesses
          </span>
          <h1>
            Your business deserves a website it&rsquo;s <em>proud</em> of.
          </h1>
          <p className="hero__sub">
            A site that makes you look legitimate, gets you found on Google, and
            brings in customers. Live in days.
          </p>
          <div className="hero__actions">
            <a className="btn btn-primary btn-lg" href="#start">
              Start my website
              <ArrowRight size={18} weight="bold" />
            </a>
            <a className="btn btn-ghost btn-lg" href="#examples">
              See examples
            </a>
          </div>
        </div>

        <div className="reveal hero__visual" style={{ ['--reveal-delay' as string]: '120ms' }}>
          {/* TODO: replace with a real photo of a happy small-business owner / storefront, 1200x1500 */}
          <img
            className="hero__photo"
            src="https://picsum.photos/seed/kazoom-owner-shop/1200/1500"
            width={1200}
            height={1500}
            alt="A small-business owner standing in their shop"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
