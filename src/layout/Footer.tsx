import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

import { CONTACT, SITE_NAME } from '@/constants'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: CONTACT.github, Icon: FiGithub },
  { label: 'LinkedIn', href: CONTACT.linkedin, Icon: FiLinkedin },
  { label: 'Email', href: `mailto:${CONTACT.email}`, Icon: FiMail },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-400">
          © {year} {SITE_NAME}. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-slate-400 transition-colors hover:text-brand"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
