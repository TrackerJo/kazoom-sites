import { useEffect, useState } from 'react'
import { motion, useTransform } from 'motion/react'
import { KazoomMark } from '../components/icons'
import { useStoryPlayer } from './useStoryPlayer'
import { CHAPTERS } from './motion'
import { Reality } from './chapters/Reality'
import { Stakes } from './chapters/Stakes'
import { Offer } from './chapters/Offer'
import { Proof } from './chapters/Proof'
import { Invitation } from './chapters/Invitation'
import s from './Story.module.css'

const TONES = [s.toneReality, s.toneStakes, s.toneOffer, s.toneProof, s.toneInvite]
const CHAPTER_COMPONENTS = [Reality, Stakes, Offer, Proof, Invitation]
// Chapters 1 (Stakes, dark ink) and 2 (Offer, coral) need inverted chrome.
const DARK_TONE = new Set([1, 2])
const LAST = CHAPTERS.length - 1

export function Story() {
  const p = useStoryPlayer(CHAPTERS.map((c) => c.duration))
  const { index, reduce, paused } = p

  // Overall progress across the whole story, for the ambient bottom hairline.
  // Within-chapter progress rests at 0 on the final (Infinity) chapter, so
  // (LAST + 0) / LAST reads as fully complete the moment the close arrives.
  const overall = useTransform(p.progress, (v) =>
    LAST === 0 ? 1 : Math.min(1, (index + v) / LAST),
  )

  // Keyboard transport (autoplay only): space pauses, arrows step. Ignored while
  // a form control is focused so typing an email never pauses or jumps. Disabled
  // entirely under reduced motion, where the page scrolls and Space must page down.
  useEffect(() => {
    if (reduce) return
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement
      if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) return
      if (e.key === ' ' || e.code === 'Space') {
        if (el instanceof HTMLButtonElement || el instanceof HTMLAnchorElement) return
        e.preventDefault()
        p.togglePause()
      } else if (e.key === 'ArrowRight') {
        p.next()
      } else if (e.key === 'ArrowLeft') {
        p.prev()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [p, reduce])

  // Manual cross-dissolve stack (autoplay only). The incoming chapter mounts on
  // top at opacity 0 and fades to 1 while the outgoing one holds underneath at
  // full opacity, so there is never an empty gap or a brightness dip. After the
  // fade we prune to just the current chapter on a timeout (deterministic
  // unmount), which sidesteps the AnimatePresence exit-stranding that piles up
  // under React StrictMode. Declared before any early return so hook order holds.
  const [stack, setStack] = useState<number[]>(() => [index])
  useEffect(() => {
    setStack((prev) =>
      prev[prev.length - 1] === index ? prev : [...prev.filter((i) => i !== index), index],
    )
    // Prune well after the fade completes so the dissolve is never interrupted.
    const t = setTimeout(() => setStack([index]), 1200)
    return () => clearTimeout(t)
  }, [index])

  // Reduced motion never auto-advances, so the fixed single-stage would strand
  // the viewer on chapter one. Instead the whole story becomes a calm, scrollable
  // deck: every chapter shown in full, in order, with no timed playback.
  if (reduce) {
    return (
      <div className={s.scrollRoot}>
        <header className={s.topbar}>
          <a href="#story" className={s.brand} aria-label="Kazoom">
            <KazoomMark className={s.brandMark} />
            <span>Kazoom</span>
          </a>
        </header>
        <main id="story">
          {CHAPTER_COMPONENTS.map((Ch, i) => (
            <section
              key={CHAPTERS[i].id}
              className={`${s.scene} ${TONES[i]}`}
              aria-label={CHAPTERS[i].label}
            >
              <span className={s.sceneBg} aria-hidden="true">
                <span className={s.bgAuroraA} />
                <span className={s.bgAuroraB} />
                <span className={s.bgGrain} />
              </span>
              <div className={s.sceneContent}>
                <Ch />
              </div>
            </section>
          ))}
        </main>
      </div>
    )
  }

  const inverted = DARK_TONE.has(index)

  return (
    <div className={s.stage}>
      {/* Tone layers: all mounted, the active one fades to full. Crossfading by
          opacity (rather than AnimatePresence) avoids exit-unmount stranding and
          keeps the scene change to a single, reliable cross-dissolve. */}
      <div className={s.bgWrap} aria-hidden="true">
        {TONES.map((tone, i) => (
          <div
            key={tone}
            className={`${s.bg} ${tone} ${i === index ? s.bgOn : ''}`}
          >
            <span className={s.bgAuroraA} />
            <span className={s.bgAuroraB} />
            <span className={s.bgGrain} />
          </div>
        ))}
      </div>

      <header className={`${s.topbar} ${inverted ? s.inverted : ''}`}>
        <a href="#story" className={s.brand} aria-label="Kazoom">
          <KazoomMark className={s.brandMark} />
          <span>Kazoom</span>
        </a>
        {!p.atEnd && (
          <button type="button" className={s.skipBtn} onClick={() => p.goTo(LAST)}>
            Skip to get started
          </button>
        )}
      </header>

      <main className={s.main} id="story">
        {stack.map((ci) => {
          const Ch = CHAPTER_COMPONENTS[ci]
          const active = ci === index
          return (
            <section
              key={ci}
              className={`${s.chapter} ${active ? '' : s.chapterOut}`}
              aria-label={CHAPTERS[ci].label}
              aria-hidden={active ? undefined : true}
            >
              <Ch />
            </section>
          )
        })}
      </main>

      {/* Ambient playback hairline: the one progress cue, pinned to the very
          bottom edge. No buttons, no labels. Fades away once the close lands. */}
      <motion.div
        className={`${s.progress} ${inverted ? s.progressInverted : ''} ${
          paused ? s.progressPaused : ''
        } ${p.atEnd ? s.progressDone : ''}`}
        style={{ scaleX: overall }}
        aria-hidden="true"
      />
    </div>
  )
}
