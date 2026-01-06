import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'
import PortfolioSection from '../components/sections/PortfolioSection.jsx'
import ContactSection from '../components/sections/contact/ContactSection.jsx'
import PricingSection from '../components/sections/PricingSection.jsx'

const Home = () => {
  return (
      <>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <PricingSection />
        <ContactSection />
      </>
  )
}

export default Home
