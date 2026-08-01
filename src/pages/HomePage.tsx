import { Link } from 'react-router'
import { motion } from 'framer-motion'

import { fadeInUp, staggerContainer } from '@/animations'

export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeInUp} className="mb-4 text-lg font-medium text-brand">
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl font-bold text-white sm:text-6xl md:text-7xl"
          >
            Adithya
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-2xl font-medium text-slate-200 sm:text-3xl"
          >
            Java Full Stack Developer
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            Recent graduate focused on building Java backend applications and
            improving frontend development skills.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-lg bg-brand px-6 py-3 font-semibold text-base transition hover:-translate-y-0.5 hover:bg-brand/90"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border-2 border-brand px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand hover:text-ink"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
