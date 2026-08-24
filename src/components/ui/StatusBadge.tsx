import type { ReactNode } from 'react'

import { cn } from '@/utils'

export type StatusTone = 'brand' | 'emerald' | 'amber'

const TONES: Record<StatusTone, string> = {
  brand: 'border-brand/30 bg-brand/15 text-brand',
  emerald: 'border-emerald-400/30 bg-emerald-500/15 text-emerald-300',
  amber: 'border-amber-400/30 bg-amber-500/15 text-amber-300',
}

interface StatusBadgeProps {
  tone: StatusTone
  className?: string
  children: ReactNode
}

/**
 * Small status pill used for project states (Featured / Completed /
 * In Development / Planned).
 */
export default function StatusBadge({
  tone,
  className,
  children,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold backdrop-blur',
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
