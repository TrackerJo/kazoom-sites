import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'motion/react'
import { KazoomMark, ArrowRight, Menu, Close } from './icons'
import { useMagnetic } from '../lib/anim'
import styles from './Nav.module.css'

const LINKS = [
  { href: '#examples', label: 'Examples' },
  { href: '#how', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  // The glass backing fades in as the page leaves the fold (no scroll listener).
  const glass = useTransform(scrollY, [0, 90], [0, 1])
  const cta = useMagnetic<HTMLAnchorElement>(0.4)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      <motion.div
        className={styles.glass}
        style={{ opacity: glass }}
        aria-hidden="true"
      />

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
          <motion.a
            ref={cta.ref}
            href="#start"
            className="btn btn-primary"
            style={{ x: cta.x, y: cta.y }}
            onMouseMove={cta.onMouseMove}
            onMouseLeave={cta.onMouseLeave}
          >
            Get started
            <ArrowRight />
          </motion.a>
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

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className={styles.mobile}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
