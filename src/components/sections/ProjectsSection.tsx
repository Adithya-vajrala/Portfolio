import { motion } from 'framer-motion'

import { fadeInUp, staggerContainer } from '@/animations'
import { PROJECTS } from '@/data'

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12 text-4xl font-bold text-brand"
      >
        Projects
      </motion.h1>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-8 md:grid-cols-2"
      >
        {PROJECTS.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeInUp}
            className="rounded-xl border border-white/5 bg-surface p-8 transition hover:-translate-y-1 hover:border-brand"
          >
            <h2 className="text-2xl font-semibold text-white">
              {project.title}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              {project.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-ink px-4 py-1.5 text-sm text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
