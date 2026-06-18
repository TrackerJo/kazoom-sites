import { useRef, useState, type FormEvent } from 'react'
import { MiniSite } from '../../components/MiniSite'
import { showcaseSites } from '../../data/sites'
import { ArrowRight, Check, Compass, Close } from '../../components/icons'
import s from '../Story.module.css'

// Forgiving on purpose: catch obvious typos, never reject a real address.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
type Errors = { name?: string; email?: string }

/** Chapter 5 — the resting close. Auto-play has stopped; this screen is usable. */
export function Invitation() {
  const [view, setView] = useState<'invite' | 'work'>('invite')

  return (
    <div className={`${s.chapterInner} ${s.inviteInner}`}>
      {/* Keyed swap: changing `view` remounts the panel so its CSS entrance replays. */}
      <div key={view} className={`${view === 'invite' ? s.inviteView : s.workView} ${s.aFade}`}>
        {view === 'invite' ? (
          <InviteForm onSeeWork={() => setView('work')} />
        ) : (
          <WorkGallery onBack={() => setView('invite')} />
        )}
      </div>
    </div>
  )
}

function InviteForm({ onSeeWork }: { onSeeWork: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const doneRef = useRef<HTMLParagraphElement>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next: Errors = {}
    if (!name.trim()) next.name = 'Tell me your business name.'
    if (!email.trim()) next.email = 'I need an email to reach you.'
    else if (!EMAIL_RE.test(email.trim())) next.email = 'That email looks off, mind checking it?'

    setErrors(next)
    if (next.name) return nameRef.current?.focus()
    if (next.email) return emailRef.current?.focus()

    setSent(true)
    requestAnimationFrame(() => doneRef.current?.focus())
  }

  if (sent) {
    return (
      <div className={s.done} role="status" aria-live="polite">
        <span className={s.doneIcon} aria-hidden="true">
          <Check />
        </span>
        <h2 className={s.inviteTitle}>Got it, {name.trim()}.</h2>
        <p className={s.inviteSub} tabIndex={-1} ref={doneRef}>
          I will email you at <strong>{email.trim()}</strong> within a day to get
          your site started. No payment yet.
        </p>
      </div>
    )
  }

  return (
    <>
      <span className={`${s.kicker} ${s.aRise}`} style={{ animationDelay: '0.05s' }}>
        Your turn
      </span>
      <h2 className={s.bigline}>
        <span className={s.lineMask}>
          <span className={`${s.lineFill} ${s.aWipe}`} style={{ animationDelay: '0.15s' }}>
            Let's make yours.
          </span>
        </span>
      </h2>
      <p className={`${s.inviteSub} ${s.aRise}`} style={{ animationDelay: '0.4s' }}>
        Tell me a little about your business and I will be in touch within a day.
        No payment to start.
      </p>

      <form className={`${s.form} ${s.aRise}`} style={{ animationDelay: '0.55s' }} onSubmit={handleSubmit} noValidate>
        <div className={s.fields}>
          <div className={s.field}>
            <label className={s.label} htmlFor="story-name">Business name</label>
            <input
              id="story-name"
              ref={nameRef}
              className={`${s.input} ${errors.name ? s.invalid : ''}`}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (errors.name) setErrors((p) => ({ ...p, name: undefined }))
              }}
              placeholder="Rosa's Bakery"
              autoComplete="organization"
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? 'story-name-error' : undefined}
            />
            {errors.name && <span className={s.error} id="story-name-error">{errors.name}</span>}
          </div>

          <div className={s.field}>
            <label className={s.label} htmlFor="story-email">Email</label>
            <input
              id="story-email"
              ref={emailRef}
              className={`${s.input} ${errors.email ? s.invalid : ''}`}
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
              aria-describedby={errors.email ? 'story-email-error' : undefined}
            />
            {errors.email && <span className={s.error} id="story-email-error">{errors.email}</span>}
          </div>
        </div>

        <div className={s.inviteActions}>
          <button type="submit" className="btn btn-primary btn-lg">
            Book my 10-minute call
            <ArrowRight />
          </button>
          <button type="button" className="btn btn-secondary btn-lg" onClick={onSeeWork}>
            <Compass />
            See work I've shipped
          </button>
        </div>
      </form>

      <p className={`${s.fine} ${s.aRise}`} style={{ animationDelay: '0.75s' }}>
        No code. No contracts. No surprise bills.
      </p>
    </>
  )
}

function WorkGallery({ onBack }: { onBack: () => void }) {
  return (
    <>
      <div className={s.workHead}>
        <div>
          <span className={s.kicker}>Recent work</span>
          <h2 className={s.workTitle}>Real sites, built for real businesses.</h2>
        </div>
        <button type="button" className={s.workBack} onClick={onBack}>
          <Close />
          Back
        </button>
      </div>

      <div className={s.workRow}>
        {showcaseSites.map((site, i) => (
          <div className={`${s.workItem} ${s.aRise}`} key={site.name} style={{ animationDelay: `${i * 0.08}s` }}>
            <MiniSite data={site} className={s.workSite} />
            <span className={s.workCaption}>
              {site.name}
              <span className={s.workCategory}>{site.category}</span>
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
