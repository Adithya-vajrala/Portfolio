import { Outlet } from 'react-router'

import ScrollToTop from '@/components/ScrollToTop'
import Footer from '@/layout/Footer'
import Navbar from '@/layout/Navbar'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
