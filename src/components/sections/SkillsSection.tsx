import { motion } from 'framer-motion'

import { fadeInUp, staggerContainer } from '@/animations'
import { SKILLS } from '@/data'

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12 text-4xl font-bold text-brand"
      >
        Skills
      </motion.h1>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill}
            variants={fadeInUp}
            className="cursor-pointer rounded-xl border border-white/5 bg-surface p-6 text-center font-medium text-slate-200 transition hover:-translate-y-1 hover:border-brand"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
