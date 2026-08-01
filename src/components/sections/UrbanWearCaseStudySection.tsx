import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import {
  FiAward,
  FiCheckCircle,
  FiCpu,
  FiExternalLink,
  FiGithub,
  FiGlobe,
  FiGrid,
  FiLayers,
  FiMap,
  FiMonitor,
  FiShare2,
  FiShoppingBag,
  FiShoppingCart,
  FiSmartphone,
  FiTarget,
} from 'react-icons/fi'

import { fadeInUp, staggerContainer } from '@/animations'
import UrbanWearMockups from '@/components/sections/UrbanWearMockups'
import { PROJECT_LINKS } from '@/constants'
import { cn } from '@/utils'

const SECTION_VIEWPORT = { once: true, amount: 0.2 } as const

const TECH_STACK = [
  'React',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
  'React Router',
  'Context API',
]

const FEATURES: { Icon: IconType; title: string; description: string }[] = [
  {
    Icon: FiMonitor,
    title: 'Responsive UI',
    description: 'Fluid layouts that adapt from phone to desktop.',
  },
  {
    Icon: FiShoppingCart,
    title: 'Shopping Cart',
    description: 'Add and manage items in the cart.',
  },
  {
    Icon: FiGrid,
    title: 'Product Categories',
    description: 'Browse products grouped by category.',
  },
  {
    Icon: FiGlobe,
    title: 'React Router',
    description: 'Clean client-side navigation between pages.',
  },
  {
    Icon: FiShare2,
    title: 'Context API',
    description: 'Predictable shared state without prop drilling.',
  },
  {
    Icon: FiSmartphone,
    title: 'Mobile-first design',
    description: 'Designed for small screens first, then scaled up.',
  },
  {
    Icon: FiLayers,
    title: 'Reusable components',
    description: 'Composable pieces that keep the UI consistent.',
  },
]

const CHALLENGES = [
  'Keeping cart state in sync across routes with Context API',
  'Building a responsive layout that works from mobile up',
  'Composing reusable product and category components',
  'Organizing multi-page navigation with React Router',
  'Styling consistently and iterating fast with Tailwind',
]

const LESSONS = [
  'Shared state stays predictable when centralized in Context',
  'Reusable components speed up adding new pages and sections',
  'Mobile-first design prevents rework at small breakpoints',
  'TypeScript and Vite catch issues early in the build loop',
  'React Router keeps multi-page flows clean and declarative',
]

const RESPONSIVE_POINTS = [
  'Mobile-first breakpoints across the storefront',
  'Fluid grids with flexible product cards',
  'Touch-friendly cart and category interactions',
]

const FUTURE_IMPROVEMENTS = [
  'Full checkout and payment flow',
  'User accounts and order history',
  'Persistent cart with localStorage',
  'Search and filters for products',
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
        'rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 motion-reduce:transform-none',
        className,
      )}
    >
      <div className="flex items-center gap-2.5">
        <Icon size={18} className="shrink-0 text-brand" />
        <h4 className="font-semibold text-white">{title}</h4>
      </div>
      <div className="mt-4">{children}</div>
    </motion.div>
  )
}

export default function UrbanWearCaseStudySection() {
  return (
    <section
      id="urbanwear"
      className="relative mx-auto max-w-6xl scroll-mt-24 overflow-x-clip px-6 py-24"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-0 h-[360px] w-[360px] rounded-full bg-sky-500/10 blur-3xl"
      />

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="text-sm font-semibold uppercase tracking-widest text-brand"
      >
        Frontend Case Study
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-3 text-4xl font-bold"
      >
        <span className="bg-gradient-to-r from-brand to-sky-400 bg-clip-text text-transparent">
          UrbanWear
        </span>
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="mt-4 max-w-2xl leading-relaxed text-slate-400"
      >
        A responsive e-commerce storefront built with React and TypeScript —
        my hands-on playground for modern frontend architecture. It explores
        client-side routing with React Router, shared state with the Context
        API, and a mobile-first, component-driven UI styled with Tailwind CSS.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <a
          href={PROJECT_LINKS.urbanwear.liveDemo}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-sky-500 px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <FiExternalLink size={16} />
          Live Demo
        </a>
        <a
          href={PROJECT_LINKS.urbanwear.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <FiGithub size={16} className="text-brand" />
          GitHub Repository
        </a>
      </motion.div>

      {/* Two-column layout */}
      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Left — mockups */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={SECTION_VIEWPORT}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="pb-10"
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
            <FiMonitor className="text-brand" size={18} />
            UI Preview
          </h3>
          <UrbanWearMockups />
          <p className="mt-14 text-center text-xs text-slate-500">
            Illustrative placeholder — real screenshots coming soon.
          </p>
        </motion.div>

        {/* Right — project details */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
          className="grid gap-5 sm:grid-cols-2"
        >
          <DetailCard Icon={FiTarget} title="Project Overview" className="sm:col-span-2">
            <p className="text-sm leading-relaxed text-slate-400">
              UrbanWear is a modern online store for urban fashion. Built
              entirely on the frontend, it demonstrates how a polished,
              responsive shopping experience can be assembled from reusable
              React components — with the cart, categories, and navigation all
              powered by client-side state and routing.
            </p>
          </DetailCard>

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

          <DetailCard Icon={FiShoppingBag} title="Features" className="sm:col-span-2">
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {FEATURES.map(({ Icon, title, description }) => (
                <li
                  key={title}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3"
                >
                  <Icon size={16} className="mt-0.5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </DetailCard>

          <DetailCard Icon={FiCheckCircle} title="Challenges Solved">
            <ul className="space-y-2.5">
              {CHALLENGES.map((challenge) => (
                <li
                  key={challenge}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <FiCheckCircle
                    size={14}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />
                  {challenge}
                </li>
              ))}
            </ul>
          </DetailCard>

          <DetailCard Icon={FiAward} title="Lessons Learned">
            <ul className="space-y-2.5">
              {LESSONS.map((lesson) => (
                <li
                  key={lesson}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {lesson}
                </li>
              ))}
            </ul>
          </DetailCard>

          <DetailCard Icon={FiSmartphone} title="Responsive Design">
            <ul className="space-y-2.5">
              {RESPONSIVE_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <FiSmartphone
                    size={14}
                    className="mt-0.5 shrink-0 text-brand"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </DetailCard>

          <DetailCard Icon={FiMap} title="Future Improvements">
            <ul className="space-y-2.5">
              {FUTURE_IMPROVEMENTS.map((improvement) => (
                <li
                  key={improvement}
                  className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
                >
                  <span className="text-slate-300">{improvement}</span>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-300">
                    Planned
                  </span>
                </li>
              ))}
            </ul>
          </DetailCard>
        </motion.div>
      </div>
    </section>
  )
}
