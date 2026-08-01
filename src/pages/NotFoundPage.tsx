import { Link } from 'react-router'
import { motion } from 'framer-motion'

import { fadeInUp } from '@/animations'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-ink px-6">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <p className="text-8xl font-bold text-brand">404</p>
        <h1 className="mt-6 text-2xl font-semibold text-white">
          Page not found
        </h1>
        <p className="mt-3 text-slate-400">
          The page you are looking for doesn&apos;t exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-base transition hover:bg-brand/90"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  )
}
