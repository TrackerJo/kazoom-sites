import { useEffect, useRef, useState } from 'react'

/**
 * Reveal an element once it scrolls into view. Falls back to immediately
 * visible when IntersectionObserver is unavailable, so content is never
 * trapped hidden.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}
