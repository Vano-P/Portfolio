import { useMemo, useState } from 'react'
import Container from '../ui/Container'
import ProjectModal from '../modals/ProjectModal'
import PortfolioFilter from '../PortfolioFilter'
import { projects } from '../../data/projects'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../../context/LanguageContext'

const PortfolioSection = () => {
  const { t } = useLang()
  const { lang } = useLang()

  const [ activeFilter, setActiveFilter ] = useState('all')
  const [ activeProject, setActiveProject ] = useState(null)
  const navigate = useNavigate()

  const filters = useMemo(() => {
    const categories = new Set(projects.map(p => p.category))
    return [ 'all', ...categories ]
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter(p => p.category === activeFilter)
  }, [ activeFilter ])

  return (
      <section id='portfolio' className='py-32 border-t border-[rgb(var(--border))]'>
        <Container>

          {/* HEADER */ }
          <div className='mb-10 max-w-2xl'>
            <h2 className='mb-4 text-3xl font-bold sm:text-4xl'>
              { t.portfolio.title }
              <span className='text-indigo-400'>.</span>
            </h2>
            <p className='text-[rgb(var(--muted))]'>
              { t.portfolio.subtitle }
            </p>
          </div>

          {/* FILTER */ }
          <PortfolioFilter filters={ filters } active={ activeFilter } onChange={ setActiveFilter } labels={ t.portfolio.filters } />

          {/* GRID */ }
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            { filteredProjects.map(project => (
                <button
                    key={ project.slug }
                    onClick={ () => setActiveProject(project) }
                    className='group overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-left transition hover:-translate-y-1'
                >
                  <div className='aspect-[4/3] overflow-hidden'>
                    <img
                        src={ project.images[0] }
                        alt={ project.title }
                        className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                    />
                  </div>

                  <div className='p-6'>
                <span className='text-xs text-indigo-400'>
                  { t.portfolio.filters[project.category] }
                </span>
                    <h3 className='mt-1 text-lg font-semibold'>
                      { project.title }
                    </h3>
                    <p className='mt-2 text-sm text-[rgb(var(--muted))]'>
                      { project.short[lang] }
                    </p>
                  </div>
                </button>
            )) }
          </div>
        </Container>

        {/* MODAL */ }
        { activeProject && (
            <ProjectModal
                project={ activeProject }
                onClose={ () => setActiveProject(null) }
                onViewCase={ (slug) => navigate(`/portfolio/${ slug }`) }
            />
        ) }
      </section>
  )
}

export default PortfolioSection
