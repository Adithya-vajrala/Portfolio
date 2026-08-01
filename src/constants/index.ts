import type { NavLink } from '@/types'

export const SITE_NAME = 'Adithya'
export const LOGO_MONOGRAM = 'VA'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Skills', path: '#skills' },
  { label: 'Projects', path: '#projects' },
  { label: 'Contact', path: '#contact' },
]

/** Section ids derived from the nav links — single source of truth for scroll-spy. */
export const SECTION_IDS = NAV_LINKS.map((link) => link.path.slice(1))

export const RESUME_URL = '/resume.pdf'

export const HERO_ROTATING_TITLES: string[] = [
  'Java Full Stack Developer',
  'Building Secure REST APIs',
  'Designing Microservices',
  'React + TypeScript',
  'Spring Security & JWT',
]

export const CONTACT = {
  email: 'vajrlaaditya@gmail.com',
  phone: '9392723505',
  location: 'Andhra Pradesh, India',
  linkedin: 'https://linkedin.com/in/Vajrala-Adithya',
  github: 'https://github.com/Adithya-vajrala',
} as const
