import { Outlet } from 'react-router'

import ScrollToTop from '@/components/ScrollToTop'
import Footer from '@/layout/Footer'
import Navbar from '@/layout/Navbar'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-lg"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
