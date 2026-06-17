import { useRef } from 'react'
import {
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react'

/** Shared easing + spring vocabulary so every surface moves the same way. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const
/** For on-screen morphs (accordions, resizes): symmetric accel + decel. */
export const EASE_IN_OUT = [0.645, 0.045, 0.355, 1] as const
export const SPRING_SOFT = { type: 'spring', stiffness: 120, damping: 18, mass: 0.6 } as const
export const SPRING_SNAP = { type: 'spring', stiffness: 320, damping: 24, mass: 0.5 } as const

/** Standard "rise into place" reveal, staggered by index. */
export const riseIn = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, delay: i * 0.07, ease: EASE_OUT },
})

/**
 * Magnetic pull toward the cursor. Continuous values live in motion values,
 * never React state, so it stays at 60fps and never re-renders the tree.
 */
export function useMagnetic<T extends HTMLElement = HTMLAnchorElement>(strength = 0.35) {
  const ref = useRef<T>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, SPRING_SNAP)
  const sy = useSpring(y, SPRING_SNAP)

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, x: sx, y: sy, onMouseMove, onMouseLeave }
}

type TiltOut = {
  ref: React.RefObject<HTMLDivElement | null>
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  glareX: MotionValue<string>
  glareY: MotionValue<string>
  onMouseMove: (e: React.MouseEvent) => void
  onMouseLeave: () => void
}

/**
 * 3D pointer tilt with a moving glare hotspot. Pointer position is normalised
 * to -0.5..0.5 and mapped to a few degrees of rotation through springs.
 */
export function useTilt(max = 9): TiltOut {
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const spx = useSpring(px, SPRING_SOFT)
  const spy = useSpring(py, SPRING_SOFT)

  const rotateY = useTransform(spx, [0, 1], [-max, max])
  const rotateX = useTransform(spy, [0, 1], [max, -max])
  const glareX = useTransform(spx, [0, 1], ['0%', '100%'])
  const glareY = useTransform(spy, [0, 1], ['0%', '100%'])

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const onMouseLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return { ref, rotateX, rotateY, glareX, glareY, onMouseMove, onMouseLeave }
}
