import { useMemo } from 'react'
import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi'

import { fadeInUp, staggerContainer } from '@/animations'
import HeroCodeWindow from '@/components/sections/HeroCodeWindow'
import HeroRotatingTitle from '@/components/sections/HeroRotatingTitle'
import { CONTACT, RESUME_URL } from '@/constants'
import { PROJECTS } from '@/data'

const STACK_CHIPS = ['Java', 'Spring Boot', 'React', 'TypeScript']

const SOCIAL_LINKS = [
  { label: 'GitHub', href: CONTACT.github, Icon: FiGithub },
  { label: 'LinkedIn', href: CONTACT.linkedin, Icon: FiLinkedin },
  { label: 'Email', href: `mailto:${CONTACT.email}`, Icon: FiMail },
]

export default function HeroSection() {
  // Deterministic, stable set of floating light particles
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        left: `${(index * 83 + 7) % 100}%`,
        size: 2 + (index % 3),
        duration: 12 + (index % 5) * 4,
        delay: -((index * 11) % 24),
        opacity: 0.12 + (index % 4) * 0.07,
      })),
    [],
  )

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Ambient background: grid, drifting gradient blobs, light particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 animate-blob rounded-full bg-brand/15 blur-3xl motion-reduce:animate-none" />
        <div className="absolute -bottom-40 -right-32 h-[420px] w-[420px] animate-blob rounded-full bg-sky-600/15 blur-3xl [animation-delay:-6s] motion-reduce:animate-none" />
        <div className="absolute -left-32 top-1/3 h-[320px] w-[320px] animate-blob rounded-full bg-indigo-600/10 blur-3xl [animation-delay:-11s] motion-reduce:animate-none" />
        {particles.map((particle, index) => (
          <span
            key={index}
            className="absolute bottom-0 animate-particle rounded-full bg-brand motion-reduce:animate-none"
            style={
              {
                left: particle.left,
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
                ['--particle-opacity' as string]: particle.opacity,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
        {/* Left column — copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Hello, I&apos;m
          </motion.span>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-br from-white via-sky-100 to-brand bg-clip-text text-transparent">
              VAJRALA ADITHYA
            </span>
          </motion.h1>

          {/* Rotating titles (self-contained, memoized) */}
          <motion.div variants={fadeInUp}>
            <HeroRotatingTitle />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Java full-stack developer who builds secure, end-to-end
            applications. I design REST APIs with Spring Boot, protect them
            with Spring Security and JWT, and structure backends as
            microservices — paired with React and TypeScript frontends backed
            by SQL databases.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand via-sky-500 to-brand bg-[length:200%_auto] px-7 py-3 text-sm font-semibold text-ink shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-right hover:shadow-xl hover:shadow-brand/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              View Projects
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={RESUME_URL}
              download
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/70 hover:bg-white/10 hover:shadow-lg hover:shadow-brand/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <FiDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </motion.div>

          {/* Metrics strip */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-2xl font-bold text-white">{PROJECTS.length}+</p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-slate-500">
                Projects
              </p>
            </div>
            <span className="hidden h-10 w-px bg-white/10 sm:block" aria-hidden />
            <ul className="flex flex-wrap gap-2">
              {STACK_CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {chip}
                </li>
              ))}
            </ul>
            <span className="hidden h-10 w-px bg-white/10 sm:block" aria-hidden />
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-slate-300">
                Open to Work
              </span>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column — animated Java code window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <HeroCodeWindow />
        </motion.div>
      </div>
    </section>
  )
}
