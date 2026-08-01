import { useEffect, useState } from 'react'

/**
 * Tracks which page section is currently in view using an IntersectionObserver.
 * Powers the navbar's active-link highlighting while scrolling.
 *
 * The section whose box covers the "detection band" (40-45% down the viewport)
 * is considered active. All observed sections are re-evaluated on every
 * observer callback, so the state stays accurate in both scroll directions.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const checkActiveSection = () => {
      const bandTop = window.innerHeight * 0.4
      const bandBottom = window.innerHeight * 0.45

      let bestId = ''
      let bestTop = Infinity

      for (const element of elements) {
        const rect = element.getBoundingClientRect()
        const coversBand = rect.top <= bandBottom && rect.bottom >= bandTop
        if (coversBand && rect.top < bestTop) {
          bestTop = rect.top
          bestId = element.id
        }
      }

      if (bestId) setActiveId(bestId)
    }

    const observer = new IntersectionObserver(checkActiveSection, {
      threshold: 0,
    })

    elements.forEach((element) => observer.observe(element))
    checkActiveSection()

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
