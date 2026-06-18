import { useRef, useState, type FormEvent } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Check } from './icons'
import { useMagnetic, EASE_OUT } from '../lib/anim'
import styles from './FinalCTA.module.css'

// Deliberately forgiving: catch obvious typos, never reject a real address.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Errors = { name?: string; email?: string }

export function FinalCTA() {
  const reduce = useReducedMotion()
  const cta = useMagnetic<HTMLButtonElement>(0.4)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const doneRef = useRef<HTMLHeadingElement>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next: Errors = {}
    if (!name.trim()) next.name = 'Tell us your business name.'
    if (!email.trim()) next.email = 'We need an email to reach you.'
    else if (!EMAIL_RE.test(email.trim())) next.email = 'That email looks off, mind checking it?'

    setErrors(next)
    if (next.name) {
      nameRef.current?.focus()
      return
    }
    if (next.email) {
      emailRef.current?.focus()
      return
    }

    setSent(true)
    // Move focus to the confirmation so screen readers and keyboard users land on it.
    requestAnimationFrame(() => doneRef.current?.focus())
  }

  return (
    <section className={styles.section} id="start">
      <div className={styles.blob} aria-hidden="true" />

      <motion.div
        className={`container ${styles.inner}`}
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
      >
        {sent ? (
          <div className={styles.done} role="status" aria-live="polite">
            <span className={styles.doneIcon} aria-hidden="true">
              <Check />
            </span>
            <h2 className={styles.title} tabIndex={-1} ref={doneRef}>
              Got it, {name.trim()}.
            </h2>
            <p className={styles.sub}>
              We will email you at <strong>{email.trim()}</strong> within one
              business day to get your site started. No payment needed yet.
            </p>
          </div>
        ) : (
          <>
            <h2 className={styles.title}>Ready to look legit online?</h2>
            <p className={styles.sub}>
              Tell us a little about your business and we will be in touch. You
              could be live within the week.
            </p>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.fields}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="cta-name">
                    Business name
                  </label>
                  <input
                    id="cta-name"
                    ref={nameRef}
                    className={`${styles.input} ${errors.name ? styles.invalid : ''}`}
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      if (errors.name) setErrors((p) => ({ ...p, name: undefined }))
                    }}
                    placeholder="Marlowe Coffee"
                    autoComplete="organization"
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? 'cta-name-error' : undefined}
                  />
                  {errors.name && (
                    <span className={styles.error} id="cta-name-error">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="cta-email">
                    Email
                  </label>
                  <input
                    id="cta-email"
                    ref={emailRef}
                    className={`${styles.input} ${errors.email ? styles.invalid : ''}`}
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (errors.email) setErrors((p) => ({ ...p, email: undefined }))
                    }}
                    placeholder="you@yourbusiness.com"
                    autoComplete="email"
                    inputMode="email"
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? 'cta-email-error' : undefined}
                  />
                  {errors.email && (
                    <span className={styles.error} id="cta-email-error">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.submitRow}>
                <motion.button
                  ref={cta.ref}
                  type="submit"
                  className="btn btn-light btn-lg"
                  style={{ x: cta.x, y: cta.y }}
                  onMouseMove={cta.onMouseMove}
                  onMouseLeave={cta.onMouseLeave}
                >
                  Get started
                  <ArrowRight />
                </motion.button>
              </div>
            </form>

            <p className={styles.alt}>
              Rather ask a question first? <a href="#faq">Talk to a human</a>
            </p>
            <p className={styles.fine}>No code. No contracts. No surprise bills.</p>
          </>
        )}
      </motion.div>
    </section>
  )
}
