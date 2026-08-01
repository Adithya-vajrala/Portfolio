import type { NavLink } from '@/types'

export const SITE_NAME = 'Adithya'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export const CONTACT = {
  email: 'vajrlaaditya@gmail.com',
  phone: '9392723505',
  location: 'Andhra Pradesh, India',
  linkedin: 'https://linkedin.com/in/Vajrala-Adithya',
  github: 'https://github.com/Adithya-vajrala',
} as const
