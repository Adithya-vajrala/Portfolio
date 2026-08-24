import { motion } from 'framer-motion'

import { fadeInUp } from '@/animations'
import { cn } from '@/utils'

const HEADING_VIEWPORT = { once: true, amount: 0.3 } as const
const BODY_VIEWPORT = { once: true, amount: 0.2 } as const

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  titleClassName?: string
  className?: string
}

/**
 * Consistent section heading block: optional eyebrow, an h2 title and an
 * optional description. All animate in once with the shared fadeInUp variant.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  titleClassName,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      {eyebrow && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={HEADING_VIEWPORT}
          className="text-sm font-semibold uppercase tracking-widest text-brand"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={HEADING_VIEWPORT}
        className={cn('mt-3 text-4xl font-bold text-white', titleClassName)}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={BODY_VIEWPORT}
          className="mt-4 leading-relaxed text-slate-400"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
