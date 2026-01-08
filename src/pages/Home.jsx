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
        <Suspense fallback={ <SectionSkeleton /> }>
          <LazySection> <ServicesSection /> </LazySection>
          <LazySection> <AboutSection /> </LazySection>
          <LazySection> <PortfolioSection /> </LazySection>
          <LazySection> <PricingSection /> </LazySection>
          <LazySection> <ContactSection /> </LazySection>
        </Suspense>
      </>
  )
}

export default Home
