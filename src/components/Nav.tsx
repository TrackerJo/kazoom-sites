import { useEffect, useState } from 'react'
import { KazoomMark, ArrowRight, Menu, Close } from './icons'
import styles from './Nav.module.css'

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#examples', label: 'Examples' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand} aria-label="Kazoom home">
          <KazoomMark className={styles.mark} />
          <span>Kazoom</span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#pricing" className={styles.signIn}>
            Sign in
          </a>
          <a href="#start" className="btn btn-primary">
            Get started
            <ArrowRight />
          </a>
        </div>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#start"
          className="btn btn-primary btn-lg"
          onClick={() => setOpen(false)}
        >
          Get started
          <ArrowRight />
        </a>
      </div>
    </header>
  )
}
