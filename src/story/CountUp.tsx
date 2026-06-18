import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

type Props = { to: number; prefix?: string; suffix?: string; duration?: number }

/**
 * Counts up from zero on mount using a self-driven requestAnimationFrame loop.
 * Deliberately independent of motion's frameloop so it runs whether the chapter
 * arrives by autoplay or by manual navigation. Reduced-motion snaps to the
 * final value. The animated digits are decorative; the final value is exposed
 * to assistive tech.
 */
export function CountUp({ to, prefix = '', suffix = '', duration = 1400 }: Props) {
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
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      el.textContent = `${prefix}${Math.round(easeOutQuart(p) * to)}${suffix}`
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to, prefix, suffix, duration, reduce])

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
