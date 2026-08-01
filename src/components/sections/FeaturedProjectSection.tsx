import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import {
  FiAward,
  FiCheckCircle,
  FiClock,
  FiCpu,
  FiGithub,
  FiLayers,
  FiMap,
  FiTarget,
} from 'react-icons/fi'

import { fadeInUp, staggerContainer } from '@/animations'
import ArchitectureDiagram from '@/components/sections/ArchitectureDiagram'
import { CONTACT } from '@/constants'
import { cn } from '@/utils'

const SECTION_VIEWPORT = { once: true, amount: 0.2 } as const

const TECH_GROUPS = [
  {
    label: 'Backend',
    items: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'JWT Authentication',
      'Spring Cloud Gateway',
      'Eureka Service Discovery',
    ],
  },
  { label: 'APIs & Data', items: ['REST APIs', 'MySQL'] },
  { label: 'Tools', items: ['Git', 'Maven'] },
]

const SERVICES = [
  { name: 'Authentication Service', status: 'Working' },
  { name: 'API Gateway', status: 'Working' },
  { name: 'Eureka Server', status: 'Working' },
  { name: 'Professional Service', status: 'Planned' },
  { name: 'Booking Service', status: 'Planned' },
  { name: 'Notification Service', status: 'Planned' },
  { name: 'AI Service', status: 'Planned' },
] as const

const ROLES = ['ADMIN', 'CUSTOMER', 'PROFESSIONAL']

const WORKING_SERVICES = [
  'Authentication Service',
  'API Gateway',
  'Eureka Server',
]

const CHALLENGES = [
  'JWT authentication implementation',
  'Spring Security configuration',
  'API Gateway routing',
  'Eureka service registration',
  'Role-based authorization',
  'Database entity design',
]

const ROADMAP = [
  'Professional Service',
  'Booking Service',
  'Notification Service',
  'AI Service',
]

interface DetailCardProps {
  Icon: IconType
  title: string
  id?: string
  className?: string
  children: ReactNode
}

function DetailCard({
  Icon,
  title,
  id,
  className,
  children,
}: DetailCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      id={id}
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

export default function FeaturedProjectSection() {
  return (
    <section
      id="featured-project"
      className="relative mx-auto max-w-6xl scroll-mt-24 overflow-x-clip px-6 py-24"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-[360px] w-[360px] rounded-full bg-brand/10 blur-3xl"
      />

      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="text-sm font-semibold uppercase tracking-widest text-brand"
      >
        Flagship Project
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-3 text-4xl font-bold text-white"
      >
        Featured Project
      </motion.h2>
      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="mt-4 text-2xl font-bold sm:text-3xl"
      >
        <span className="bg-gradient-to-r from-brand to-sky-400 bg-clip-text text-transparent">
          SkillBridge
        </span>
      </motion.h3>
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="mt-4 max-w-2xl leading-relaxed text-slate-400"
      >
        A microservices platform that connects customers with professionals. It
        demonstrates how I approach backend architecture — JWT-secured
        services, service discovery with Eureka, gateway routing, and clean
        domain separation across the Spring ecosystem.
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
          href={CONTACT.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-sky-500 px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <FiGithub size={16} />
          GitHub Repository
        </a>
        <a
          href="#skillbridge-architecture"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <FiLayers size={16} className="text-brand" />
          Architecture
        </a>
        <a
          href="#skillbridge-roadmap"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <FiMap size={16} className="text-brand" />
          Future Roadmap
        </a>
      </motion.div>

      {/* Two-column layout */}
      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Left — architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={SECTION_VIEWPORT}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          id="skillbridge-architecture"
          className="scroll-mt-24"
        >
          <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
            <FiLayers className="text-brand" size={18} />
            Architecture
          </h4>
          <ArchitectureDiagram />
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
            <div className="space-y-4">
              {TECH_GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {group.label}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </DetailCard>

          <DetailCard Icon={FiLayers} title="Architecture" className="sm:col-span-2">
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li
                  key={service.name}
                  className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
                >
                  <span className="text-slate-300">{service.name}</span>
                  <span
                    className={cn(
                      'inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold',
                      service.status === 'Working'
                        ? 'bg-emerald-500/15 text-emerald-300'
                        : 'bg-amber-500/15 text-amber-300',
                    )}
                  >
                    {service.status === 'Working' ? (
                      <FiCheckCircle size={11} />
                    ) : (
                      <FiClock size={11} />
                    )}
                    {service.status}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Roles
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {ROLES.map((role) => (
                  <li
                    key={role}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </DetailCard>

          <DetailCard Icon={FiCheckCircle} title="Current Status">
            <ul className="space-y-2">
              {WORKING_SERVICES.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <FiCheckCircle size={14} className="shrink-0 text-emerald-400" />
                  {service}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Remaining services are under development.
            </p>
          </DetailCard>

          <DetailCard Icon={FiTarget} title="Project Goal">
            <p className="text-sm leading-relaxed text-slate-400">
              A platform where customers and professionals meet through secure,
              independently deployable services — with JWT-secured APIs,
              service discovery, and gateway routing as the foundation.
            </p>
          </DetailCard>

          <DetailCard
            Icon={FiAward}
            title="Challenges Solved"
            className="sm:col-span-2"
          >
            <ul className="grid gap-2 sm:grid-cols-2">
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

          <DetailCard
            Icon={FiMap}
            title="Future Roadmap"
            id="skillbridge-roadmap"
            className="scroll-mt-24 sm:col-span-2"
          >
            <ul className="grid gap-2 sm:grid-cols-2">
              {ROADMAP.map((service) => (
                <li
                  key={service}
                  className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
                >
                  <span className="text-slate-300">{service}</span>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-300">
                    <FiClock size={11} />
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
