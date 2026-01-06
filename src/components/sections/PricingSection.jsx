import { FiCheck } from 'react-icons/fi'
import Container from '../ui/Container'
import { pricingPlans } from '../../data/pricing'
import { useOrder } from '../../context/OrderContext'
import { useLang } from '../../context/LanguageContext'

const PricingSection = () => {
  const { openOrder } = useOrder()
  const { t } = useLang()
  const texts = t.pricing

  return (
      <section id='pricing' className='py-32 border-t border-[rgb(var(--border))]'>
        <Container>
          {/* HEADER */ }
          <div className='mb-16 max-w-2xl'>
            <h2 className='mb-4 text-3xl font-bold sm:text-4xl'>
              { texts.title }
              <span className='text-indigo-400'>.</span>
            </h2>
            <p className='text-[rgb(var(--muted))]'>
              { texts.subtitle }
            </p>
          </div>

          {/* CARDS */ }
          <div className='grid gap-8 lg:grid-cols-3'>
            { pricingPlans.map((plan) => {
              const planText = texts.plans[plan.id]

              return (
                  <div
                      key={ plan.id }
                      className={ `relative flex flex-col rounded-3xl border p-8 transition ${ plan.highlight ? 'border-indigo-500 bg-indigo-500/5' : 'border-[rgb(var(--border))] bg-[rgb(var(--surface))]' }` }
                  >
                    { plan.highlight &&
                        <span className='absolute -top-3 left-6 rounded-full bg-indigo-500 px-3 py-1 text-xs font-medium text-white'> { texts.popular } </span>
                    }

                    <h3 className='mb-2 text-xl font-semibold'> { planText.title } </h3>

                    <p className='mb-6 text-sm text-[rgb(var(--muted))]'> { planText.subtitle } </p>

                    <div className='mb-6 text-4xl font-bold'> { plan.price } </div>

                    <ul className='mb-8 space-y-3'>
                      { plan.featureKeys.map((key, i) => (
                          <li key={ i } className='flex items-center gap-2 text-sm'>
                            <FiCheck className='text-indigo-400' /> <span>{ texts.features[key] }</span>
                          </li>
                      )) }
                    </ul>

                    <button
                        onClick={ () => openOrder({ plan: planText.title }) }
                        className={ `mt-auto inline-flex w-full items-center justify-center rounded-xl px-6 py-3 font-medium transition cursor-pointer ${
                            plan.highlight
                                ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                                : 'border border-[rgb(var(--border))] hover:bg-[rgb(var(--border))]'
                        }` }
                    >
                      { planText.cta }
                    </button>
                  </div>
              )
            }) }
          </div>

          <p className='mt-10 text-sm text-[rgb(var(--muted))]'>
            { texts.footnote }
          </p>
        </Container>
      </section>
  )
}

export default PricingSection
