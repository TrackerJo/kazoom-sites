import type { SVGProps, ReactNode } from 'react'

/**
 * One coherent icon set: 24×24, rounded stroke, currentColor. Decorative
 * by default (aria-hidden); pass a title for meaningful use.
 */
function Icon({
  children,
  title,
  ...props
}: SVGProps<SVGSVGElement> & { children: ReactNode; title?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </Icon>
)

export const Check = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />
  </Icon>
)

export const Chevron = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
)

export const Sparkle = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 3c.4 3.5 1.5 4.6 5 5-3.5.4-4.6 1.5-5 5-.4-3.5-1.5-4.6-5-5 3.5-.4 4.6-1.5 5-5Z" />
    <path d="M19 13.5c.2 1.6.7 2.1 2.3 2.3-1.6.2-2.1.7-2.3 2.3-.2-1.6-.7-2.1-2.3-2.3 1.6-.2 2.1-.7 2.3-2.3Z" />
  </Icon>
)

export const Clock = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Icon>
)

export const Globe = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17" />
    <path d="M12 3.5c2.4 2.3 3.7 5.3 3.7 8.5S14.4 18.2 12 20.5c-2.4-2.3-3.7-5.3-3.7-8.5S9.6 5.8 12 3.5Z" />
  </Icon>
)

export const Shield = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 3.5 19 6v5.2c0 4.3-2.9 7.6-7 9.3-4.1-1.7-7-5-7-9.3V6l7-2.5Z" />
    <path d="m9 11.8 2.2 2.2L15 10.2" />
  </Icon>
)

export const Edit = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
    <path d="M13.5 6.5l3 3" />
  </Icon>
)

export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  </Icon>
)

export const Heart = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 20s-7-4.3-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.7 12 20 12 20Z" />
  </Icon>
)

export const Compass = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m14.8 9.2-1.4 4.2-4.2 1.4 1.4-4.2 4.2-1.4Z" />
  </Icon>
)

export const Menu = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Icon>
)

export const Close = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </Icon>
)

export const Plus = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </Icon>
)

/* Brand / social glyphs (filled, currentColor) */

export const KazoomMark = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...p}>
    <rect width="32" height="32" rx="9" fill="var(--coral-strong)" />
    <path
      d="M11 9.5a2 2 0 1 1 4 0v4.2l5-4.7a2 2 0 0 1 2.8 2.9L18.6 16l4.4 4.7a2 2 0 1 1-3 2.7L15 18.6V23a2 2 0 1 1-4 0V9.5Z"
      fill="var(--on-coral)"
    />
  </svg>
)

export const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.6" cy="7.4" r="0.4" fill="currentColor" />
  </Icon>
)

export const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M14.5 8.5h2V5.3h-2.3c-2 0-3.2 1.3-3.2 3.4v1.8H9v3.1h2v7.1h3.2v-7.1h2.2l.4-3.1h-2.6V9.2c0-.5.3-.7.8-.7Z" />
  </Icon>
)
