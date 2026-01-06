import Container from '../ui/Container.jsx'
import { useLang } from '../../context/LanguageContext'

const techStack = [
  'HTML',
  'CSS / Sass',
  'Tailwind CSS',
  'JavaScript',
  'React',
  'Node.js',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Git / GitHub',
  'Linux'
]

const AboutSection = () => {
  const { t } = useLang()

  return (
      <section
          id='about'
          className='py-32 border-t border-[rgb(var(--border))]'
      >
        <Container>
          <div className='grid gap-16 items-center lg:grid-cols-2'>

            {/* TEXT */ }
            <div>
              <h2 className='mb-6 text-3xl font-bold sm:text-4xl'>
                { t.about.title }
                <span className='text-indigo-400'>.</span>
              </h2>

              <p className='mb-6 text-[rgb(var(--muted))] leading-relaxed'>
                { t.about.paragraph1 }
              </p>

              <p className='mb-8 text-[rgb(var(--muted))] leading-relaxed'>
                { t.about.paragraph2 }
              </p>

              <div className='flex flex-wrap gap-3'>
                { techStack.map((tech) => (
                    <span
                        key={ tech }
                        className='rounded-lg border border-indigo-300/40 px-3 py-1 text-sm text-[rgb(var(--muted))]'
                    >
                  { tech }
                </span>
                )) }
              </div>
            </div>

            {/* VISUAL BLOCK */ }
            <div className='relative'>
              <div className='absolute inset-0 rounded-3xl bg-indigo-500/10 blur-3xl' />
              <div className='relative rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-8'>
                <p className='text-lg font-medium'>
                  “{ t.about.quote }”
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>
  )
}

export default AboutSection
