import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

const links = [
  { label: 'How it works', href: '#how' },
  { label: 'Examples', href: '#examples' },
  { label: 'Pricing', href: '#pricing' },
]

export function Nav() {
  const sentinel = useRef<HTMLDivElement>(null)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const node = sentinel.current
    if (!node) return
    const io = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinel} aria-hidden style={{ position: 'absolute', top: 0, height: 1 }} />
      <header className="nav" data-stuck={stuck}>
        <div className="wrap nav__inner">
          <a className="logo" href="#top" aria-label="Kazoom home">
            <span className="logo__mark" aria-hidden>K</span>
            Kazoom
          </a>
          <nav className="nav__links" aria-label="Primary">
            {links.map((l) => (
              <a key={l.href} className="nav__link" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav__cta">
            <a className="btn btn-primary" href="#start">
              Start my website
              <ArrowRight size={17} weight="bold" />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
