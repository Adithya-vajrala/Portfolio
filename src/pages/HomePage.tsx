import AboutSection from '@/components/sections/AboutSection'
import ChappalShopCaseStudySection from '@/components/sections/ChappalShopCaseStudySection'
import ContactSection from '@/components/sections/ContactSection'
import FeaturedProjectSection from '@/components/sections/FeaturedProjectSection'
import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import UrbanWearCaseStudySection from '@/components/sections/UrbanWearCaseStudySection'
import SkillsSection from '@/components/sections/SkillsSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectSection />
      <UrbanWearCaseStudySection />
      <ChappalShopCaseStudySection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
