import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi'

import { fadeInUp, staggerContainer } from '@/animations'
import HeroCodeWindow from '@/components/sections/HeroCodeWindow'
import { CONTACT, HERO_ROTATING_TITLES, RESUME_URL } from '@/constants'

const TITLE_INTERVAL_MS = 2600

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  // Cycle through the rotating titles; paused when the user prefers reduced motion
  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => {
      setTitleIndex((index) => (index + 1) % HERO_ROTATING_TITLES.length)
    }, TITLE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [reduceMotion])

  const currentTitle = HERO_ROTATING_TITLES[titleIndex]

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Ambient background: faint grid + gradient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full bg-sky-600/15 blur-3xl" />
        <div className="absolute -left-32 top-1/3 h-[320px] w-[320px] rounded-full bg-indigo-600/10 blur-3xl" />
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

          {/* Rotating titles */}
          <motion.div
            variants={fadeInUp}
            className="mt-5 flex items-center gap-2 text-xl font-medium sm:text-2xl md:text-3xl"
          >
            <span className="whitespace-nowrap text-slate-400">I&apos;m a</span>
            <span
              className="relative block h-9 overflow-hidden sm:h-10"
              aria-live="polite"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTitle}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="block whitespace-nowrap bg-gradient-to-r from-brand to-sky-400 bg-clip-text text-transparent"
                >
                  {currentTitle}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="h-7 w-[3px] animate-pulse rounded-full bg-brand" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Recent B.Tech Computer Science graduate who builds Java full-stack
            applications. I architect scalable backend services with Spring
            Boot and microservices, and craft clean, responsive interfaces with
            React.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-sky-500 px-7 py-3 text-sm font-semibold text-ink shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand/40"
            >
              View Projects
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={RESUME_URL}
              download
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:bg-white/10"
            >
              <FiDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-3">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:text-brand"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:text-brand"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:text-brand"
            >
              <FiMail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right column — animated code window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          aria-hidden
        >
          <HeroCodeWindow />
        </motion.div>
      </div>
    </section>
  )
}
