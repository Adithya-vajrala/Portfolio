import type { ReactNode } from 'react'

import { cn } from '@/utils'

type GlassCardAccent = 'brand' | 'emerald' | 'amber'

const ACCENT_HOVER: Record<GlassCardAccent, string> = {
  brand: 'hover:border-brand/50 hover:shadow-brand/10',
  emerald: 'hover:border-emerald-400/50 hover:shadow-emerald-400/10',
  amber: 'hover:border-amber-400/50 hover:shadow-amber-400/10',
}

interface GlassCardProps {
  className?: string
  accent?: GlassCardAccent
  hover?: boolean
  children: ReactNode
}

/**
 * Reusable glassmorphism card — consistent surface, radius, border and an
 * optional lift/glow hover treatment.
 */
export default function GlassCard({
  className,
  accent = 'brand',
  hover = true,
  children,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-surface/60 backdrop-blur transition-all duration-300 motion-reduce:transform-none',
        hover && cn('hover:-translate-y-1 hover:shadow-xl', ACCENT_HOVER[accent]),
        className,
      )}
    >
      {children}
    </div>
  )
}
