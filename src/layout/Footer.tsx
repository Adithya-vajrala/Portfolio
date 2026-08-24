import { motion } from 'framer-motion'
import {
  FiArrowUp,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi'

import { fadeInUp, staggerContainer } from '@/animations'
import Button from '@/components/ui/Button'
import { CONTACT, LOGO_MONOGRAM, NAV_LINKS, RESUME_URL, SITE_NAME } from '@/constants'

const SECTION_VIEWPORT = { once: true, amount: 0.2 } as const

const SOCIAL_LINKS = [
  { label: 'GitHub', href: CONTACT.github, Icon: FiGithub },
  { label: 'LinkedIn', href: CONTACT.linkedin, Icon: FiLinkedin },
  { label: 'Email', href: `mailto:${CONTACT.email}`, Icon: FiMail },
]

const BUILT_WITH = 'Built with React, TypeScript, Vite and Tailwind CSS'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-surface/30 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
          className="grid gap-10 md:grid-cols-[2fr_1fr_1.5fr]"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp}>
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-sky-500 text-sm font-bold tracking-wide text-ink shadow-lg shadow-brand/25 transition-transform duration-300 group-hover:scale-105">
                {LOGO_MONOGRAM}
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                {SITE_NAME}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Java full-stack developer building secure REST APIs, Spring Boot
              microservices, and responsive React interfaces.
            </p>
            <p className="mt-4 text-xs text-slate-500">{BUILT_WITH}</p>
          </motion.div>

          {/* Quick navigation */}
          <motion.nav variants={fadeInUp} aria-label="Footer navigation">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <a
                    href={path}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Connect */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Connect
            </h3>
            <ul className="mt-4 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => {
                const linkProps = href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {}
                return (
                  <li key={label}>
                    <a
                      href={href}
                      {...linkProps}
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transform-none"
                    >
                      <Icon size={18} />
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className="mt-6">
              <Button
                href={RESUME_URL}
                download
                variant="ghost"
                className="px-5 py-2.5 text-xs"
              >
                <FiDownload size={14} />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transform-none"
          >
            Back to top
            <FiArrowUp size={13} className="text-brand" />
          </a>
        </div>
      </div>
    </footer>
  )
}
