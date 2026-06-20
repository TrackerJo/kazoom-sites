import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

type Props = {
  to: number
  prefix?: string
  suffix?: string
  duration?: number
  /** Hold at zero this many ms before climbing, to sync with a row's reveal. */
  delay?: number
}

/**
 * Counts up from zero using a self-driven requestAnimationFrame loop.
 * Deliberately independent of motion's frameloop so it runs whether the chapter
 * arrives by autoplay or by manual navigation. Reduced-motion snaps to the
 * final value. The animated digits are decorative; the final value is exposed
 * to assistive tech.
 *
 * Easing is a gentle ease-out-quad, not quart: a steep curve burns most of the
 * range in the first fraction of a second, so the low numbers are never seen.
 * `delay` holds at zero until the number is actually on screen.
 */
export function CountUp({ to, prefix = '', suffix = '', duration = 1900, delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduce) {
      el.textContent = `${prefix}${to}${suffix}`
      return
    }
    let raf = 0
    let start = 0
    const easeOutQuad = (t: number) => 1 - Math.pow(1 - t, 2)
    const step = (ts: number) => {
      if (!start) start = ts
      const elapsed = ts - start
      if (elapsed < delay) {
        raf = requestAnimationFrame(step)
        return
      }
      const p = Math.min((elapsed - delay) / duration, 1)
      el.textContent = `${prefix}${Math.round(easeOutQuad(p) * to)}${suffix}`
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to, prefix, suffix, duration, delay, reduce])

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {prefix}0{suffix}
      </span>
      <span className="visually-hidden">
        {prefix}
        {to}
        {suffix}
      </span>
    </>
  )
}
