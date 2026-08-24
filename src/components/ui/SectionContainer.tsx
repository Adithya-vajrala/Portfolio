import type { ReactNode } from 'react'

import { cn } from '@/utils'

interface SectionContainerProps {
  id?: string
  className?: string
  children: ReactNode
}

/**
 * Shared full-width section shell — consistent spacing, max width, overflow
 * clipping and scroll-margin so the sticky navbar never covers section tops.
 */
export default function SectionContainer({
  id,
  className,
  children,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative mx-auto max-w-6xl scroll-mt-24 overflow-x-clip px-6 py-24',
        className,
      )}
    >
      {children}
    </section>
  )
}
