import { lazy, Suspense } from 'react'

import HeroSection from '@/components/sections/HeroSection'

// Below-fold sections are code-split so the initial bundle stays lean.
const AboutSection = lazy(() => import('@/components/sections/AboutSection'))
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection'))
const ProjectsGallerySection = lazy(
  () => import('@/components/sections/ProjectsGallerySection'),
)
const FeaturedProjectSection = lazy(
  () => import('@/components/sections/FeaturedProjectSection'),
)
const UrbanWearCaseStudySection = lazy(
  () => import('@/components/sections/UrbanWearCaseStudySection'),
)

const ContactSection = lazy(() => import('@/components/sections/ContactSection'))

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={null}>
        <AboutSection />
        <SkillsSection />
        <ProjectsGallerySection />
        <FeaturedProjectSection />
        <UrbanWearCaseStudySection />

        <ContactSection />
      </Suspense>
    </>
  )
}
