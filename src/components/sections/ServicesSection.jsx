import { FiLayout, FiCode, FiZap, FiSmartphone } from 'react-icons/fi'
import Container from '../ui/Container'
import { useLang } from '../../context/LanguageContext'
import SectionTitle from '../ui/SectionTitle.jsx'

const services = [
  { key: 'landing', icon: <FiLayout size={ 22 } /> },
  { key: 'frontend', icon: <FiCode size={ 22 } /> },
  { key: 'responsive', icon: <FiSmartphone size={ 22 } /> },
  { key: 'performance', icon: <FiZap size={ 22 } /> }
]

const ServicesSection = () => {
  const { t } = useLang()

  return (
      <section className='py-18 sm:py-24' id='services'>
        <Container>
          <SectionTitle title={ t.services.title } subtitle={ t.services.subtitle } />

          <div className='grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            { services.map((service) => (
                <div
                    key={ service.key }
                    className='group rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6 hover:-translate-y-1 transition-all duration-200 hover:border-indigo-500/40'
                >
                  <div className='mb-4 text-indigo-400 transition group-hover:text-indigo-300'>{ service.icon }</div>

                  <h3 className='mb-2 text-lg font-semibold'>{ t.services.items[service.key].title } </h3>

                  <p className='text-sm text-[rgb(var(--muted))]'> { t.services.items[service.key].description } </p>
                </div>
            )) }
          </div>
        </Container>
      </section>
  )
}

export default ServicesSection
