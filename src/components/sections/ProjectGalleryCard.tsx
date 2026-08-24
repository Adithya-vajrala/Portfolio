import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiServer,
  FiShoppingBag,
  FiStar,
} from 'react-icons/fi'

import StatusBadge from '@/components/ui/StatusBadge'
import type { GalleryProject } from '@/types'
import { cn } from '@/utils'

const PLACEHOLDER_ICONS: Record<string, IconType> = {
  skillbridge: FiServer,
  urbanwear: FiShoppingBag,
}

const PLACEHOLDER_GRADIENTS: Record<string, string> = {
  skillbridge: 'from-brand/40 via-sky-500/20 to-transparent',
  urbanwear: 'from-sky-500/40 via-cyan-400/20 to-transparent',
}

const DOT_GRID = {
  backgroundImage:
    'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)',
  backgroundSize: '18px 18px',
} as const

interface ProjectGalleryCardProps {
  project: GalleryProject
}

/**
 * Premium glass gallery card with a gradient border. Forwarded ref is required
 * by AnimatePresence mode="popLayout" for exit-measurement.
 */
const ProjectGalleryCard = forwardRef<HTMLElement, ProjectGalleryCardProps>(
  function ProjectGalleryCard({ project }, ref) {
    const PlaceholderIcon = PLACEHOLDER_ICONS[project.id] ?? FiServer
    const gradient =
      PLACEHOLDER_GRADIENTS[project.id] ?? 'from-brand/40 to-transparent'

    return (
      <motion.article
        ref={ref}
        layout
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="group relative rounded-2xl bg-gradient-to-b from-white/15 via-white/[0.06] to-white/[0.04] p-px transition-all duration-300 hover:-translate-y-1 hover:from-brand/50 hover:via-brand/20 hover:to-sky-500/25 hover:shadow-xl hover:shadow-brand/10 motion-reduce:transform-none"
      >
        <div className="flex h-full flex-col overflow-hidden rounded-[calc(1rem-1px)] bg-surface/70 backdrop-blur">
          {/* Placeholder visual (no fake screenshots) */}
          <div
            aria-hidden
            className={cn(
              'relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br',
              gradient,
            )}
          >
            <div className="absolute inset-0 opacity-30" style={DOT_GRID} />
            <PlaceholderIcon
              className="relative text-white/70 transition-transform duration-500 group-hover:scale-110"
              size={44}
            />
          </div>

          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-sky-500 px-4 py-2 text-xs font-semibold text-ink shadow-md shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <FiExternalLink size={13} />
                  Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <FiGithub size={13} className="text-brand" />
                GitHub
              </a>
              <a
                href={project.anchor}
                aria-label={`View details for ${project.title}`}
                className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                View Details
                <FiArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Status badge — outside the aria-hidden visual so screen readers hear it */}
        <StatusBadge tone={project.statusTone} className="absolute right-3 top-3">
          {project.statusLabel === 'Featured' && (
            <FiStar size={11} className="fill-current" />
          )}
          {project.statusLabel}
        </StatusBadge>
      </motion.article>
    )
  },
)

export default ProjectGalleryCard
