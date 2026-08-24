import { memo, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import { HERO_ROTATING_TITLES } from '@/constants'

const TITLE_INTERVAL_MS = 2800

/**
 * Self-contained rotating title. Its interval state lives here so ticking
 * every ~3s never re-renders the rest of the hero.
 */
function HeroRotatingTitle() {
  const [titleIndex, setTitleIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  // Paused when the user prefers reduced motion
  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => {
      setTitleIndex((index) => (index + 1) % HERO_ROTATING_TITLES.length)
    }, TITLE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [reduceMotion])

  const currentTitle = HERO_ROTATING_TITLES[titleIndex]

  return (
    <div className="mt-5 flex items-center gap-2 text-xl font-medium sm:text-2xl md:text-3xl">
      <span className="whitespace-nowrap text-slate-400">I&apos;m a</span>
      <span
        className="relative block h-9 overflow-hidden sm:h-10"
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentTitle}
            initial={{ y: 24, opacity: 0, filter: 'blur(4px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: -24, opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="block whitespace-nowrap bg-gradient-to-r from-brand to-sky-400 bg-clip-text text-transparent"
          >
            {currentTitle}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="h-7 w-[3px] animate-pulse rounded-full bg-brand" />
    </div>
  )
}

export default memo(HeroRotatingTitle)
