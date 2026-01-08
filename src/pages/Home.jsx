import { Suspense, lazy, useEffect } from 'react'
import HeroSection from '../components/sections/HeroSection'
import SectionSkeleton from '../components/ui/SectionSkeleton.jsx'
import LazySection from '../components/ui/LazySection.jsx'
import { Helmet } from 'react-helmet'
import { useLang } from '../context/LanguageContext.jsx'

const ServicesSection = lazy(() => import('../components/sections/ServicesSection.jsx'))
const AboutSection = lazy(() => import('../components/sections/AboutSection.jsx'))
const PortfolioSection = lazy(() => import('../components/sections/portfolio/PortfolioSection.jsx'))
const ContactSection = lazy(() => import('../components/sections/contact/ContactSection.jsx'))
const PricingSection = lazy(() => import('../components/sections/PricingSection.jsx'))

const Home = () => {
  const { lang } = useLang()

  const title = lang === 'ru' ? 'Vano-P — Frontend разработчик' : 'Vano-P — Frontend & Fullstack Web Developer'
  const description = lang === 'ru'
      ? 'Персональное портфолио frontend и fullstack разработчика. React, JavaScript, современные сайты.'
      : 'Personal portfolio of a frontend & fullstack web developer. React, JavaScript, modern websites.'
  const url = `${ origin }/portfolio/`
  useEffect(() => {
    document.documentElement.lang = lang
  }, [ lang ])
  useEffect(() => {
    document.title = title
  }, [ title ])
  return (
      <>
        {/* ✅ SEO FOR HOME */ }
        <Helmet key={ `home-${ lang }` }>
          <title>{ title }</title>
          <meta name='description' content={ description } />
          <link rel='canonical' href={ url } />

          {/* Open Graph */ }
          <meta property='og:type' content='website' />
          <meta property='og:title' content={ title } />
          <meta property='og:description' content={ description } />
          <meta property='og:url' content={ url } />
          <meta property='og:image' content={ `${ url }og-home.png` } />
        </Helmet>

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
