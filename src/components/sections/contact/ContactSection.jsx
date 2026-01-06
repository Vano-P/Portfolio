import Container from '../../ui/Container.jsx'
import { useLang } from '../../../context/LanguageContext.jsx'
import { socials } from '../../../data/socials.js'
import ContactForm from './ContactForm.jsx'


const ContactSection = () => {
  const { t } = useLang()

  return (
      <section id='contact' className='py-32 border-t border-[rgb(var(--border))]'>
        <Container>
          <div className='grid gap-16 items-start lg:grid-cols-2'>

            {/* TEXT */ }
            <div>
              <h2 className='mb-4 text-3xl font-bold sm:text-4xl'>
                { t.contact.title }
                <span className='text-indigo-400'>.</span>
              </h2>

              <p className='mb-8 max-w-xl text-[rgb(var(--muted))]'>
                { t.contact.description }
              </p>

              <div className='rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6'>
                <p className='text-sm text-[rgb(var(--muted))]'>
                  { t.contact.stackLabel }
                </p>
                <p className='mt-2 font-medium'>
                  { t.contact.stackValue }
                </p>
              </div>

              <div className='mt-10 grid gap-4 sm:grid-cols-2'>
                { socials.map((social, i) => {
                  const Icon = social.icon
                  return (
                      <a
                          key={ i }
                          href={ social.href }
                          target='_blank'
                          rel='noreferrer'
                          className='flex items-center gap-3 rounded-xl border border-[rgb(var(--border))] p-4 transition hover:bg-[rgb(var(--border))] hover:text-indigo-400'
                      >
                        <Icon />
                        <span className='text-sm'>{ social.label }</span>
                      </a>
                  )
                }) }
              </div>
            </div>

            {/* FORM */ }
            <ContactForm />

          </div>
        </Container>
      </section>
  )
}

export default ContactSection
