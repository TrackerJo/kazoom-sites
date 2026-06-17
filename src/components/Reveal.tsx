import type { ReactNode } from 'react'
import { useReveal } from '../lib/useReveal'

type RevealProps = {
  children: ReactNode
  /** Stagger in milliseconds, applied as a transition-delay. */
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal--in' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
