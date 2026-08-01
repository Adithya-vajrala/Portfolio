import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

import { fadeInUp, staggerContainer } from '@/animations'
import SkillCategoryCard from '@/components/sections/SkillCategoryCard'
import { CURRENT_FOCUS, SKILL_CATEGORIES } from '@/data'

const SECTION_VIEWPORT = { once: true, amount: 0.2 } as const

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl overflow-x-clip px-6 py-24">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl font-bold text-brand"
      >
        Technical Skills
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="mt-4 max-w-2xl leading-relaxed text-slate-400"
      >
        The technologies I use to design, build, and ship software — from the
        Java ecosystem on the backend to the React tooling on the frontend.
      </motion.p>

      {/* Category cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SKILL_CATEGORIES.map((category) => (
          <SkillCategoryCard key={category.id} category={category} />
        ))}
      </motion.div>

      {/* Current Focus */}
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="mt-20 text-xl font-semibold text-white"
      >
        Current Focus
      </motion.h3>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {CURRENT_FOCUS.map(({ title, description }) => (
          <motion.div
            key={title}
            variants={fadeInUp}
            className="group rounded-2xl border border-white/10 bg-surface/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 motion-reduce:transform-none"
          >
            <FiCheckCircle size={20} className="text-emerald-400" />
            <h4 className="mt-3 font-semibold text-white">{title}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
