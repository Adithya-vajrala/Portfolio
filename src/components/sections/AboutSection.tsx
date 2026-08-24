import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  FiCheckCircle,
  FiDatabase,
  FiLayers,
  FiLayout,
  FiServer,
  FiShield,
} from 'react-icons/fi'

import { fadeInUp, staggerContainer } from '@/animations'
import AboutProfileCard from '@/components/sections/AboutProfileCard'

const ABOUT_PARAGRAPHS = [
  "I'm Vajrala Adithya, a B.Tech Computer Science graduate from Gayatri " +
    'Vidya Parishad College (2022–2026) on the way to becoming a Java ' +
    'full-stack developer. I care about software that is secure, reliable, ' +
    'and easy to maintain — code that behaves the way you expect it to.',
  'My work centers on the Java ecosystem: designing REST APIs with Spring ' +
    'Boot, protecting them with Spring Security and JWT, and structuring ' +
    'backends as microservices. On the frontend I build responsive ' +
    'interfaces with React and TypeScript, backed by SQL databases I design ' +
    'and model myself.',
  "I built the SkillBridge microservices platform — " +
    'a project where I applied real architecture decisions end to end. ' +
    "I'm drawn to scalable backend systems, and I'm looking for a team " +
    'where I can grow as a software engineer.'
]

interface HighlightCard {
  Icon: IconType
  title: string
  description: string
}

const HIGHLIGHT_CARDS: HighlightCard[] = [
  {
    Icon: FiLayers,
    title: 'Java Full Stack Development',
    description: 'End-to-end features across backend and frontend.',
  },
  {
    Icon: FiShield,
    title: 'Secure REST APIs',
    description: 'JWT-protected endpoints with Spring Security.',
  },
  {
    Icon: FiServer,
    title: 'Spring Boot & Microservices',
    description: 'Scalable services with API Gateway and Eureka.',
  },
  {
    Icon: FiLayout,
    title: 'React + TypeScript',
    description: 'Responsive, type-safe user interfaces.',
  },
  {
    Icon: FiDatabase,
    title: 'SQL & Database Design',
    description: 'Clean MySQL schemas and efficient queries.',
  },
]

const EXPERIENCE_POINTS = [
  'Authentication microservice with JWT',
  'API Gateway + Eureka implementation',
  'Responsive React applications',
  'MySQL database design',
  'Full Stack application development',
]

const SECTION_VIEWPORT = { once: true, amount: 0.2 } as const

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl overflow-x-clip px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start">
        {/* Left — profile card */}
        <AboutProfileCard />

        {/* Right — story */}
        <div>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl font-bold text-brand"
          >
            About Me
          </motion.h2>

          {/* Story paragraphs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={SECTION_VIEWPORT}
            className="mt-6 space-y-4"
          >
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={fadeInUp}
                className="text-base leading-relaxed text-slate-400 sm:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Highlight cards */}
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={SECTION_VIEWPORT}
            className="mt-12 text-lg font-semibold text-white"
          >
            What I bring
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={SECTION_VIEWPORT}
            className="mt-6 grid gap-4 sm:grid-cols-2"
          >
            {HIGHLIGHT_CARDS.map(({ Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="group rounded-2xl border border-white/10 bg-surface/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10 motion-reduce:transform-none"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
                  <Icon size={18} />
                </div>
                <h4 className="mt-3 font-semibold text-white">{title}</h4>
                <p className="mt-1 text-sm text-slate-400">{description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience highlights */}
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={SECTION_VIEWPORT}
            className="mt-12 text-lg font-semibold text-white"
          >
            Experience Highlights
          </motion.h3>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={SECTION_VIEWPORT}
            className="mt-6 grid gap-3 sm:grid-cols-2"
          >
            {EXPERIENCE_POINTS.map((point) => (
              <motion.li
                key={point}
                variants={fadeInUp}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
              >
                <FiCheckCircle
                  size={16}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
