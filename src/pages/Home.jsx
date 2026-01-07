import { Suspense, lazy } from 'react'
import HeroSection from '../components/sections/HeroSection'
import SectionSkeleton from '../components/ui/SectionSkeleton.jsx'
import LazySection from '../components/ui/LazySection.jsx'

const ServicesSection = lazy(() => import('../components/sections/ServicesSection.jsx'))
const AboutSection = lazy(() => import('../components/sections/AboutSection.jsx'))
const PortfolioSection = lazy(() => import('../components/sections/portfolio/PortfolioSection.jsx'))
const ContactSection = lazy(() => import('../components/sections/contact/ContactSection.jsx'))
const PricingSection = lazy(() => import('../components/sections/PricingSection.jsx'))

const Home = () => {
  return (
      <>
        <HeroSection />
        <LazySection> <Suspense fallback={ <SectionSkeleton /> }> <ServicesSection /> </Suspense> </LazySection>
        <LazySection> <Suspense fallback={ <SectionSkeleton /> }> <AboutSection /> </Suspense> </LazySection>
        <LazySection> <Suspense fallback={ <SectionSkeleton /> }> <PortfolioSection /> </Suspense> </LazySection>
        <LazySection> <Suspense fallback={ <SectionSkeleton /> }> <PricingSection /> </Suspense> </LazySection>
        <LazySection> <Suspense fallback={ <SectionSkeleton /> }> <ContactSection /> </Suspense> </LazySection>
      </>
  )
}

export default Home
