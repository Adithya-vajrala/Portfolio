import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import {
  FiAward,
  FiCheckCircle,
  FiCpu,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiTarget,
  FiZap,
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
      'Spring Cloud Gateway',
      'Eureka',
    ],
  },
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'React Router', 'Axios', 'Vite'],
  },
  { label: 'Database', items: ['MySQL', 'Database-per-Service'] },
  {
    label: 'Infrastructure',
    items: ['Docker', 'Docker Compose', 'AWS EC2', 'Vercel'],
  },
]

const SERVICES = [
  { name: 'API Gateway', status: 'Working' },
  { name: 'Eureka Server', status: 'Working' },
  { name: 'Auth Service', status: 'Working' },
  { name: 'Customer Service', status: 'Working' },
  { name: 'Professional Service', status: 'Working' },
  { name: 'Booking Service', status: 'Working' },
  { name: 'Payment Service', status: 'Working' },
  { name: 'Notification Service', status: 'Working' },
] as const

const ROLES = ['ADMIN', 'CUSTOMER', 'PROFESSIONAL']

const FEATURES = [
  {
    title: 'Microservices Architecture',
    description:
      'Eight independently deployable services with API Gateway routing and Eureka service discovery.',
  },
  {
    title: 'Secure Authentication',
    description:
      'JWT tokens with HMAC-SHA256 signing, BCrypt password hashing, and role-based authorization.',
  },
  {
    title: 'Three Role-Based Experiences',
    description:
      'Separate dashboards and access control for Customers, Professionals, and Admins.',
  },
  {
    title: 'Service-Owned Databases',
    description:
      'Independent MySQL databases per service domain with Spring Data JPA persistence.',
  },
  {
    title: 'Cross-Service Communication',
    description:
      'HTTP-based service calls for identity resolution and automatic profile provisioning.',
  },
  {
    title: 'Production Deployment',
    description:
      'React frontend on Vercel, Dockerized Spring Boot services on AWS EC2 with Eureka discovery.',
  },
]

const HIGHLIGHTS = [
  'JWT validation at API Gateway with role extraction',
  'Spring Security configuration across 7 services',
  'Eureka service registration and discovery',
  'Database-per-service architecture with 6 MySQL databases',
  'Cross-service identity resolution via HTTP clients',
  'Automatic customer and professional provisioning on registration',
  'Booking status state machine with transition validation',
  'CORS configuration for production Vercel frontend',
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
          SkillBridge — Full-Stack Service Marketplace
        </span>
      </motion.h3>
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={SECTION_VIEWPORT}
        className="mt-4 max-w-2xl leading-relaxed text-slate-400"
      >
        A full-stack service marketplace connecting customers with professionals,
        built with Spring Boot microservices on the backend and React on the
        frontend. Features JWT-secured authentication, role-based access control,
        service discovery, and production deployment.
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
          href="https://skill-bridge-nine-sepia.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-sky-500 px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <FiExternalLink size={16} />
          Live Demo
        </a>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <FiGithub size={16} className="text-brand" />
          GitHub
        </a>
        <a
          href="#skillbridge-architecture"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <FiLayers size={16} className="text-brand" />
          Architecture
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

          <DetailCard Icon={FiLayers} title="Services" className="sm:col-span-2">
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li
                  key={service.name}
                  className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm"
                >
                  <span className="text-slate-300">{service.name}</span>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                    <FiCheckCircle size={11} />
                    Working
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

          <DetailCard Icon={FiZap} title="Key Features" className="sm:col-span-2">
            <div className="grid gap-3 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <h5 className="text-sm font-semibold text-white">{feature.title}</h5>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </DetailCard>

          <DetailCard Icon={FiTarget} title="Deployment">
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <FiCheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                <span>Frontend on <strong className="text-white">Vercel</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                <span>Backend on <strong className="text-white">AWS EC2</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                <span><strong className="text-white">Docker</strong> containerized</span>
              </li>
              <li className="flex items-start gap-2">
                <FiCheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                <span><strong className="text-white">Eureka</strong> service discovery</span>
              </li>
            </ul>
          </DetailCard>

          <DetailCard
            Icon={FiAward}
            title="Technical Highlights"
            className="sm:col-span-2"
          >
            <ul className="grid gap-2 sm:grid-cols-2">
              {HIGHLIGHTS.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-sm text-slate-300"
                >
                  <FiCheckCircle
                    size={14}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </DetailCard>
        </motion.div>
      </div>
    </section>
  )
}
