import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'

import { CONTACT, LOGO_MONOGRAM } from '@/constants'
import { EDUCATION } from '@/data'

const FLOATING_BADGES = [
  { label: 'Java', className: '-left-2 top-10 sm:-left-4', delay: 0 },
  { label: 'Spring Boot', className: '-right-2 -top-5 sm:-right-3', delay: 0.6 },
  { label: 'React', className: '-left-3 bottom-16 sm:-left-6', delay: 1.2 },
  { label: 'MySQL', className: '-right-3 bottom-6 sm:-right-4', delay: 1.8 },
]

export default function AboutProfileCard() {
  const education = EDUCATION[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-sm lg:max-w-none"
    >
      {/* Glow behind the card */}
      <div
        aria-hidden
        className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand/15 via-transparent to-sky-500/10 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/70 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
        {/* Decorative code brackets */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-4 -top-8 select-none font-mono text-8xl font-bold text-white/5"
        >
          {'</>'}
        </span>

        {/* Avatar placeholder — swap for a real photo later */}
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-brand via-sky-500 to-indigo-500 text-3xl font-bold text-ink shadow-lg shadow-brand/30">
          {LOGO_MONOGRAM}
        </div>

        <h3 className="mt-6 text-2xl font-bold text-white">
          Vajrala Adithya
        </h3>
        <p className="mt-1 font-medium text-brand">Java Full Stack Developer</p>

        <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
          <FiMapPin className="shrink-0 text-brand" size={16} />
          {CONTACT.location}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to Work
        </div>

        <div className="my-6 h-px bg-white/10" />

        <dl className="space-y-4 text-sm">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Education
            </dt>
            <dd className="mt-1 font-medium text-slate-200">
              {education.degree}
            </dd>
            <dd className="text-slate-400">
              {education.school} · {education.period}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Focus
            </dt>
            <dd className="mt-1 text-slate-300">
              Scalable backend systems &amp; full-stack delivery
            </dd>
          </div>
        </dl>
      </div>

      {/* Floating tech badges */}
      {FLOATING_BADGES.map(({ label, className, delay }) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          viewport={{ once: true }}
          transition={{
            opacity: { delay: 0.4 + delay },
            scale: { delay: 0.4 + delay },
            y: { delay, duration: 3, repeat: Infinity, ease: 'easeInOut' },
          }}
          className={`absolute rounded-full border border-white/10 bg-surface/90 px-4 py-2 text-xs font-semibold text-slate-200 shadow-lg shadow-black/30 backdrop-blur ${className}`}
        >
          {label}
        </motion.span>
      ))}
    </motion.div>
  )
}
