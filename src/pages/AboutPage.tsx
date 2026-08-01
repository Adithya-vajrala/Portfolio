import { motion } from 'framer-motion'

import { fadeInUp } from '@/animations'

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mb-12 text-4xl font-bold text-brand"
      >
        About Me
      </motion.h1>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="rounded-xl border border-white/5 bg-surface p-8 transition hover:border-brand"
      >
        <p className="text-lg leading-relaxed text-slate-300">
          I recently graduated and started building Java-based applications to
          improve my backend development skills. Currently focusing on Java,
          Collections, JDBC, SQL, HTML, and CSS while improving
          problem-solving and project development skills.
        </p>
      </motion.div>
    </section>
  )
}
