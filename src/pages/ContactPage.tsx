import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

import { fadeInUp, staggerContainer } from '@/animations'
import { CONTACT } from '@/constants'

interface ContactItem {
  label: string
  value: string
  href?: string
  Icon: IconType
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    Icon: FiMail,
  },
  {
    label: 'Phone',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
    Icon: FiPhone,
  },
  { label: 'Location', value: CONTACT.location, Icon: FiMapPin },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/Vajrala-Adithya',
    href: CONTACT.linkedin,
    Icon: FiLinkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/Adithya-vajrala',
    href: CONTACT.github,
    Icon: FiGithub,
  },
]

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mb-12 text-4xl font-bold text-brand"
      >
        Contact
      </motion.h1>
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {CONTACT_ITEMS.map(({ label, value, href, Icon }) => {
          const linkProps = href?.startsWith('http')
            ? { target: '_blank', rel: 'noreferrer' }
            : undefined

          const content = (
            <>
              <Icon className="shrink-0 text-brand" size={20} />
              {value}
            </>
          )
          const className =
            'flex items-center gap-3 text-slate-300 transition-colors hover:text-brand'

          return (
            <motion.li
              key={label}
              variants={fadeInUp}
              className="rounded-xl border border-white/5 bg-surface p-6 transition hover:border-brand"
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-slate-500">
                {label}
              </p>
              {href ? (
                <a href={href} {...linkProps} className={className}>
                  {content}
                </a>
              ) : (
                <div className={className}>{content}</div>
              )}
            </motion.li>
          )
        })}
      </motion.ul>
    </section>
  )
}
