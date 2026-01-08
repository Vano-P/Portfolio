import { FiArrowRight, FiGithub, FiMail } from 'react-icons/fi'
import Container from '../ui/Container.jsx'
import { useLang } from '../../context/LanguageContext.jsx'
import { scrollToSection } from '../../utils/scrollToSection.js'
import { MdKeyboardArrowDown } from 'react-icons/md'
import SectionTitle from '../ui/SectionTitle.jsx'

const HeroSection = () => {
  const { t } = useLang()
  return (
      <section id='home' className='relative overflow-hidden py-20 sm:py-30'>

        {/* BACKGROUND GLOW */ }
        <div className='absolute inset-0 -z-10'>
          <div className='absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[120px]' />
        </div>
        <Container>
          <div className='max-w-3xl'>

            {/* EYEBROW */ }
            <p className='mb-4 text-sm font-medium text-indigo-400'> { t.hero.eyebrow } </p>

            {/* TITLE */ }
            <h1 className='mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl'>
              { t.hero.title }
              <span className='ml-1 font-extrabold text-indigo-400'>.</span>
            </h1>

            {/* DESCRIPTION */ }
            <p className='mb-10 text-lg text-[rgb(var(--muted))]'>{ t.hero.description }</p>

            {/* ACTIONS */ }
            <div className='flex flex-wrap items-center gap-2 sm:gap-4'>
              <button
                  onClick={ () => scrollToSection('portfolio') }
                  className='inline-flex items-center gap-2 rounded-lg sm:rounded-xl bg-indigo-500 px-4 py-2 sm:px-6 sm:py-3 font-medium text-white transition hover:bg-indigo-400 cursor-pointer'
              >
                { t.hero.viewPortfolio } <FiArrowRight />
              </button>

              <button
                  onClick={ () => scrollToSection('contact') }
                  className='inline-flex items-center gap-2 rounded-lg sm:rounded-xl border border-[rgb(var(--border))] px-4 py-2 sm:px-6 sm:py-3 font-medium transition hover:bg-[rgb(var(--surface))] cursor-pointer  '
              >
                { t.hero.contact } <FiMail />
              </button>

              <a
                  href='https://github.com/'
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center px-1 sm:px-3 py-3 text-[rgb(var(--muted))] transition hover:text-indigo-400'
                  aria-label='GitHub'
              >
                <FiGithub size={ 20 } />
              </a>
            </div>
          </div>
        </Container>
        <button
            aria-label='Scroll to services section'
            className='scroll-hint absolute bottom-4 left-1/2 -translate-x-1/2 text-indigo-400 cursor-pointer'
            onClick={ () => scrollToSection('services') }
        >
          <MdKeyboardArrowDown size={ 40 } />
        </button>
      </section>
  )
}

export default HeroSection
