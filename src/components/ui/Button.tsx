import type { ReactNode } from 'react'

import { cn } from '@/utils'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transform-none disabled:pointer-events-none disabled:opacity-60'

const VARIANTS = {
  primary:
    'bg-gradient-to-r from-brand to-sky-500 px-6 py-3 text-ink shadow-lg shadow-brand/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40',
  ghost:
    'border border-white/15 bg-white/5 px-6 py-3 text-white backdrop-blur hover:-translate-y-0.5 hover:border-brand/60 hover:bg-white/10',
} as const

type ButtonVariant = keyof typeof VARIANTS

interface ButtonProps {
  variant?: ButtonVariant
  /** When provided, renders an anchor instead of a button. */
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  download?: boolean
  target?: string
  rel?: string
  ariaLabel?: string
  onClick?: () => void
  className?: string
  children: ReactNode
}

/**
 * Shared button — renders an anchor when `href` is provided, otherwise a
 * native button. Two variants: primary gradient and ghost glass.
 */
export default function Button({
  variant = 'primary',
  href,
  type = 'button',
  disabled,
  download,
  target,
  rel,
  ariaLabel,
  onClick,
  className,
  children,
}: ButtonProps) {
  const classes = cn(BASE, VARIANTS[variant], className)

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
