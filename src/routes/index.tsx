import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import Loader from '@/components/Loader'
import MainLayout from '@/layout/MainLayout'

const HomePage = lazy(() => import('@/pages/HomePage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* Legacy deep links redirect to the matching section of the single page */}
          <Route path="about" element={<Navigate to="/#about" replace />} />
          <Route path="skills" element={<Navigate to="/#skills" replace />} />
          <Route
            path="projects"
            element={<Navigate to="/#projects" replace />}
          />
          <Route path="contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
