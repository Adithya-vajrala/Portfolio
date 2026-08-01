import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import {
  FiAlertCircle,
  FiArchive,
  FiArrowRight,
  FiBarChart,
  FiCreditCard,
  FiCpu,
  FiMap,
  FiPackage,
  FiRepeat,
  FiServer,
  FiTarget,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi'

import { fadeInUp, staggerContainer } from '@/animations'
import ChappalShopArchitectureDiagram from '@/components/sections/ChappalShopArchitectureDiagram'
import { cn } from '@/utils'

const SECTION_VIEWPORT = { once: true, amount: 0.2 } as const

const TECH_STACK = ['Java', 'Spring Boot', 'React', 'MySQL']

const MODULES: { Icon: IconType; title: string; description: string }[] = [
  {
    Icon: FiArchive,
    title: 'Inventory',
    description: 'Track products and their details across the shop.',
  },
  {
    Icon: FiCreditCard,
    title: 'Billing',
    description: 'Generate bills and record transactions.',
  },
  {
    Icon: FiRepeat,
    title: 'Exchange',
    description: 'Handle product exchanges cleanly.',
  },
  {
    Icon: FiPackage,
    title: 'Stock Management',
    description: 'Keep stock levels accurate and up to date.',
  },
  {
    Icon: FiBarChart,
    title: 'Reports',
    description: 'Summarize sales and inventory insights.',
  },
  {
    Icon: FiTrendingUp,
    title: 'Sales',
    description: 'Record and manage day-to-day sales.',
  },
]

const WORKFLOW = [
  'Inventory',
  'Sales',
  'Billing',
  'Reports',
]

const CHALLENGES = [
  'Keeping stock levels accurate as sales and exchanges happen',
  'Designing a billing flow that stays consistent with inventory updates',
  'Handling exchanges without breaking stock or sales records',
  'Turning day-to-day entries into useful reports',
  'Building a simple interface the shop staff can use comfortably',
]

const ROADMAP = [
  'Backend foundation with Spring Boot + MySQL',
  'Core modules: inventory and stock management',
  'Billing and sales workflows',
  'Exchange handling',
  'Reports and insights',
  'React frontend for the shop team',
]

interface DetailCardProps {
  Icon: IconType
  title: string
  className?: string
  children: ReactNode
}

function DetailCard({ Icon, title, className, children }: DetailCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        'rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-400/10 motion-reduce:transform-none',
        className,
      )}
    >
      <div className="flex items-center gap-2.5">
        <Icon size={18} className="shrink-0 text-amber-300" />
        <h4 className="font-semibold text-white">{title}</h4>
      </div>
      <div className="mt-4">{children}</div>
    </motion.div>
  )
}

export default function ChappalShopCaseStudySection() {
  return (
    <section
      id="chappal-shop"
      className="relative mx-auto max-w-6xl scroll-mt-24 overflow-x-clip px-6 py-24"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-[360px] w-[360px] rounded-full bg-amber-500/10 blur-3xl"
      />

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="text-sm font-semibold uppercase tracking-widest text-amber-300"
      >
        Full Stack · In Development
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-3 text-4xl font-bold"
      >
        <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
          Chappal Shop
        </span>
      </motion.h2>

      {/* IN DEVELOPMENT badge */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="mt-6"
      >
        <span className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/40 bg-amber-500/10 px-5 py-2 text-sm font-bold uppercase tracking-wider text-amber-300">
          <span aria-hidden className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
          </span>
          In Development
        </span>
      </motion.div>

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="mt-6 max-w-2xl leading-relaxed text-slate-400"
      >
        A management system being built for a chappal (footwear) shop to
        digitize daily operations — inventory, billing, exchanges, stock,
        reports, and sales — replacing manual record-keeping with a clear,
        reliable workflow across a Spring Boot backend, a React interface, and
        a MySQL database.
      </motion.p>

      {/* Two-column layout */}
      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Left — architecture + workflow */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={SECTION_VIEWPORT}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
            <FiServer className="text-amber-300" size={18} />
            Architecture
          </h3>
          <ChappalShopArchitectureDiagram />

          <h3 className="mb-4 mt-10 flex items-center gap-2 text-lg font-semibold text-white">
            <FiTrendingUp className="text-amber-300" size={18} />
            Designed Workflow
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={SECTION_VIEWPORT}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-surface/60 p-5 backdrop-blur"
          >
            {WORKFLOW.map((step, index) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-200">
                  {step}
                </span>
                {index < WORKFLOW.length - 1 && (
                  <FiArrowRight aria-hidden className="text-amber-300/70" size={14} />
                )}
              </span>
            ))}
            <p className="mt-2 w-full text-xs text-slate-500">
              Planned flow — modules are under development.
            </p>
          </motion.div>
        </motion.div>

        {/* Right — project details */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
          className="grid gap-5 sm:grid-cols-2"
        >
          <DetailCard Icon={FiCpu} title="Technology Stack" className="sm:col-span-2">
            <ul className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </DetailCard>

          <DetailCard Icon={FiTarget} title="Project Goal">
            <p className="text-sm leading-relaxed text-slate-400">
              A single system that handles the shop's day-to-day operations —
              from adding stock and recording sales to generating bills,
              managing exchanges, and producing reports — so the owner can run
              the business with accurate, verifiable records.
            </p>
          </DetailCard>

          <DetailCard Icon={FiAlertCircle} title="Business Problem">
            <p className="text-sm leading-relaxed text-slate-400">
              Manual tracking of stock, sales, and exchanges makes it easy to
              lose count, misrecord entries, or miss discrepancies. The system
              centralizes these operations in one place with consistent
              records.
            </p>
          </DetailCard>

          <DetailCard Icon={FiZap} title="Challenges" className="sm:col-span-2">
            <ul className="grid gap-2 sm:grid-cols-2">
              {CHALLENGES.map((challenge) => (
                <li
                  key={challenge}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                  {challenge}
                </li>
              ))}
            </ul>
          </DetailCard>

          <DetailCard Icon={FiMap} title="Future Roadmap" className="sm:col-span-2">
            <ul className="space-y-2">
              {ROADMAP.map((milestone) => (
                <li
                  key={milestone}
                  className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
                >
                  <span className="text-slate-300">{milestone}</span>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-300">
                    Planned
                  </span>
                </li>
              ))}
            </ul>
          </DetailCard>
        </motion.div>
      </div>

      {/* System modules */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="mt-16"
      >
        <motion.h3
          variants={fadeInUp}
          className="text-lg font-semibold text-white"
        >
          System Modules
        </motion.h3>
        <motion.p variants={fadeInUp} className="mt-1 text-sm text-slate-400">
          The business modules planned for the system.
        </motion.p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map(({ Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="group rounded-2xl border border-white/10 bg-surface/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/10 motion-reduce:transform-none"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-ink">
                  <Icon size={18} />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-300">
                  Planned
                </span>
              </div>
              <h4 className="mt-3 font-semibold text-white">{title}</h4>
              <p className="mt-1 text-sm text-slate-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
