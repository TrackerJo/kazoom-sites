import { useEffect, useRef } from 'react'

/**
 * Reveals elements with the `.reveal` class as they scroll into view.
 * Motivation: storytelling — sections arrive in sequence as the owner
 * reads down the page. Collapses to instant under prefers-reduced-motion
 * (handled in CSS) and via the early-out below.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const root = useRef<T>(null)

  useEffect(() => {
    const node = root.current
    if (!node) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = Array.from(node.querySelectorAll<HTMLElement>('.reveal'))

    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return root
}
