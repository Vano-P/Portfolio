import { FiLayout, FiCode, FiZap, FiSmartphone } from 'react-icons/fi'
import Container from '../ui/Container'
import { useLang } from '../../context/LanguageContext'

const services = [
  { key: 'landing', icon: <FiLayout size={ 22 } /> },
  { key: 'frontend', icon: <FiCode size={ 22 } /> },
  { key: 'responsive', icon: <FiSmartphone size={ 22 } /> },
  { key: 'performance', icon: <FiZap size={ 22 } /> }
]

const ServicesSection = () => {
  const { t } = useLang()
  const texts = t.services

  return (
      <section className='py-32' id='services'>
        <Container>
          <div className='mb-16 max-w-2xl'>
            <h2 className='mb-4 text-3xl font-bold sm:text-4xl'>
              { texts.title }
              <span className='text-indigo-400'>.</span>
            </h2>
            <p className='text-[rgb(var(--muted))]'>
              { texts.subtitle }
            </p>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            { services.map((service) => (
                <div
                    key={ service.key }
                    className='rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6 transition hover:-translate-y-1 hover:border-indigo-500/40 cursor-pointer'
                >
                  <div className='mb-4 text-indigo-400'>
                    { service.icon }
                  </div>

                  <h3 className='mb-2 text-lg font-semibold'>
                    { texts.items[service.key].title }
                  </h3>

                  <p className='text-sm text-[rgb(var(--muted))]'>
                    { texts.items[service.key].description }
                  </p>
                </div>
            )) }
          </div>
        </Container>
      </section>
  )
}

export default ServicesSection
