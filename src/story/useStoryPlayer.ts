import { useCallback, useEffect, useRef, useState } from 'react'
import { useMotionValue, useReducedMotion } from 'motion/react'

/**
 * Drives the self-playing story: which chapter is on stage, whether playback is
 * paused, and how far through the current chapter we are. Progress lives in a
 * MotionValue (not React state) so the rail can fill at 60fps without
 * re-rendering the stage or any chapter on every frame.
 *
 * Reduced-motion viewers never auto-advance: the story becomes a manual,
 * arrow/rail-navigable deck with every chapter shown in full.
 */
export function useStoryPlayer(durations: number[]) {
  const reduce = useReducedMotion() ?? false
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const progress = useMotionValue(0)
  const elapsedRef = useRef(0)

  const last = durations.length - 1
  const goTo = useCallback(
    (i: number) => setIndex(Math.max(0, Math.min(last, i))),
    [last],
  )
  const next = useCallback(() => setIndex((i) => Math.min(last, i + 1)), [last])
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), [])
  const togglePause = useCallback(() => setPaused((p) => !p), [])
  const replay = useCallback(() => {
    elapsedRef.current = 0
    progress.set(0)
    setPaused(false)
    setIndex(0)
  }, [progress])

  // Reset the per-chapter clock whenever the chapter changes. Pausing must NOT
  // reset it, so this only watches `index` — resume picks up where it left off.
  useEffect(() => {
    elapsedRef.current = 0
    progress.set(0)
  }, [index, progress])

  // The advance loop. Skipped entirely when reduced, paused, or on a resting
  // chapter (Infinity duration). Accumulates real elapsed time so a pause/resume
  // continues the same segment rather than restarting it.
  useEffect(() => {
    const dur = durations[index]
    if (reduce || paused || !Number.isFinite(dur)) return

    let raf = 0
    let prevTs = performance.now()
    const tick = (ts: number) => {
      elapsedRef.current += ts - prevTs
      prevTs = ts
      const t = Math.min(elapsedRef.current / dur, 1)
      progress.set(t)
      if (t >= 1) {
        setIndex((i) => Math.min(durations.length - 1, i + 1))
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [index, paused, reduce, durations, progress])

  const atEnd = index === last

  return {
    index,
    paused,
    reduce,
    progress,
    atEnd,
    goTo,
    next,
    prev,
    togglePause,
    replay,
    setPaused,
  }
}
