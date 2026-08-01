import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { fadeInUp } from '@/animations'
import ProjectGalleryCard from '@/components/sections/ProjectGalleryCard'
import { PROJECTS_GALLERY } from '@/data'
import type { ProjectCategory } from '@/types'
import { cn } from '@/utils'

const SECTION_VIEWPORT = { once: true, amount: 0.2 } as const

type FilterId = 'all' | ProjectCategory

const FILTERS: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'featured', label: 'Featured' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'in-progress', label: 'In Progress' },
  { id: 'completed', label: 'Completed' },
]

export default function ProjectsGallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS_GALLERY
      : PROJECTS_GALLERY.filter((project) =>
          project.categories.includes(activeFilter),
        )

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl scroll-mt-24 overflow-x-clip px-6 py-24"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/3 h-[360px] w-[360px] rounded-full bg-brand/10 blur-3xl"
      />

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="text-sm font-semibold uppercase tracking-widest text-brand"
      >
        Portfolio
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-3 text-4xl font-bold text-white"
      >
        Projects
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="mt-4 max-w-2xl leading-relaxed text-slate-400"
      >
        A hub for everything I build — dive into the detailed case studies below
        or jump straight to a project that interests you.
      </motion.p>

      {/* Filter chips */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        role="group"
        aria-label="Filter projects"
        className="mt-10 flex flex-wrap gap-2"
      >
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={isActive}
              className={cn(
                'relative rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                isActive
                  ? 'border-transparent text-ink'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-brand/40 hover:text-white',
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="projects-filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-brand to-sky-500"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </button>
          )
        })}
      </motion.div>

      {/* Cards */}
      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectGalleryCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
