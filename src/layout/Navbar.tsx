import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

import { LOGO_MONOGRAM, NAV_LINKS, SECTION_IDS, SITE_NAME } from '@/constants'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  // Deepen the glass + shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClasses = (isActive: boolean) =>
    cn(
      'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
      isActive
        ? 'bg-white/10 text-white shadow-inner'
        : 'text-slate-300 hover:bg-white/5 hover:text-white',
    )

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300',
        isScrolled
          ? 'border-white/10 bg-ink/70 shadow-lg shadow-black/20'
          : 'border-white/5 bg-ink/40',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-sky-500 text-sm font-bold tracking-wide text-ink shadow-lg shadow-brand/25 transition-transform duration-300 group-hover:scale-105">
            {LOGO_MONOGRAM}
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            {SITE_NAME}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, path }) => {
            const isActive = activeId === path.slice(1)
            return (
              <li key={path}>
                <a href={path} className={linkClasses(isActive)}>
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-white transition-colors hover:bg-white/5 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/10 bg-ink/80 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {NAV_LINKS.map(({ label, path }) => {
                const isActive = activeId === path.slice(1)
                return (
                  <li key={path}>
                    <a
                      href={path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-white/10 text-white'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white',
                      )}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
