import { useEffect } from 'react'
import { useLocation } from 'react-router'

/**
 * On route changes, scrolls to the hash target when one is present
 * (e.g. legacy deep links like /about -> /#about), otherwise to the top.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
