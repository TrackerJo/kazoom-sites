import { useEffect, useRef } from 'react'
import { animate, useInView, useMotionValue, useReducedMotion } from 'motion/react'
import { EASE_OUT } from '../lib/anim'

type CounterProps = {
  to: number
  prefix?: string
  suffix?: string
}

/**
 * Counts a number up from zero the first time it scrolls into view. Honors
 * reduced-motion by snapping straight to the final value. The number is driven
 * by a motion value writing into a ref, so the React tree never re-renders.
 */
export function Counter({ to, prefix = '', suffix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })
  const value = useMotionValue(0)
  const reduce = useReducedMotion()

  const render = (n: number) => {
    if (ref.current) ref.current.textContent = `${prefix}${Math.round(n)}${suffix}`
  }

  useEffect(() => {
    const unsub = value.on('change', render)
    return unsub
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      render(to)
      return
    }
    const controls = animate(value, to, { duration: 1.4, ease: EASE_OUT })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, to, reduce])

  return (
    <>
      {/* Animated digits are decorative; screen readers get the final value. */}
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
