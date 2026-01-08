import Container from '../ui/Container.jsx'
import { useLang } from '../../context/LanguageContext'
import SectionTitle from '../ui/SectionTitle.jsx'

const techStack = [ 'HTML', 'CSS / Sass', 'Tailwind CSS', 'JavaScript', 'React', 'Node.js', 'MySQL', 'PostgreSQL', 'MongoDB', 'Git / GitHub', 'Linux' ]

const AboutSection = () => {
  const { t } = useLang()

  return (
      <section id='about' className='py-18 sm:py-24 border-t border-[rgb(var(--border))]'>
        <Container>
          <div className='grid gap-16 items-center lg:grid-cols-2'>
            <div>
              <SectionTitle title={ t.about.title } />

              <p className='mb-6 text-[rgb(var(--muted))] leading-relaxed'> { t.about.paragraph1 } </p>

              <p className='mb-8 text-[rgb(var(--muted))] leading-relaxed'> { t.about.paragraph2 } </p>

              <div className='flex flex-wrap gap-3'>
                { techStack.map((tech) => (
                    <span
                        key={ tech }
                        className='rounded-lg border border-indigo-300/30 hover:border-indigo-400/50 hover:text-indigo-300 transition px-3 py-1 text-sm text-[rgb(var(--muted))]'
                    > { tech } </span>
                )) }
              </div>
            </div>

            {/* PHOTO BLOCK */ }
            <div className='relative flex justify-center'>
              {/* glow */ }
              <div className='absolute inset-0 rounded-3xl bg-indigo-500/10 blur-3xl' />

              {/* photo card */ }
              <div className='group relative w-full max-w-sm rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4'>
                <div className='overflow-hidden rounded-2xl'>
                  <img
                      src='./me.jpg'
                      alt='Vano'
                      className='h-full w-full object-cover grayscale-[20%] contrast-[1.03] transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-[1.02]'
                      loading='lazy'
                  />
                  <div className='mt-4 text-center'>
                    <p className='text-sm font-medium'>
                      Frontend / Full-Stack Developer
                    </p>
                    <p className='text-xs text-[rgb(var(--muted))]'>
                      Yerevan, Armenia
                    </p>
                  </div>
                </div>

                {/* quote */ }
                <div className='mt-4 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4'>
                  <p className='text-sm text-[rgb(var(--muted))] italic'>
                    “{ t.about.quote }”
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
  )
}

export default AboutSection
