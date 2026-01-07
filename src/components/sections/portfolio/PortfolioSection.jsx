import { lazy, Suspense, useCallback, useMemo, useState } from 'react'
import Container from '../../ui/Container.jsx'
import PortfolioFilter from '../../PortfolioFilter.jsx'
import { projects } from '../../../data/projects.js'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../../../context/LanguageContext.jsx'
import SectionTitle from '../../ui/SectionTitle.jsx'
import PortfolioCards from './PortfolioCards.jsx'

const ProjectModal = lazy(() => import('../../modals/ProjectModal.jsx'))
const STEP = 6

const PortfolioSection = () => {
  const { t } = useLang()
  const navigate = useNavigate()

  const [ activeFilter, setActiveFilter ] = useState('all')
  const [ activeProject, setActiveProject ] = useState(null)
  const [ visibleCount, setVisibleCount ] = useState(STEP)

  const filters = useMemo(() => {
    const categories = new Set(projects.map(p => p.category))
    return [ 'all', ...categories ]
  }, [])
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter(p => p.category === activeFilter)
  }, [ activeFilter ])
  const visibleProjects = filteredProjects.slice(0, visibleCount)

  const handleCloseModal = useCallback(() => setActiveProject(null), [])
  const handleViewCase = useCallback((slug) => navigate(`/portfolio/${ slug }`), [ navigate ])
  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    setVisibleCount(STEP)
  }
  const handleLoadMore = () => {
    setVisibleCount(v => {
      const next = v + STEP
      requestAnimationFrame(() => {
        const cards = document.querySelectorAll('[data-portfolio-card]')
        if (cards[v]) cards[v].scrollIntoView({ behavior: 'smooth', block: 'center' })
      })
      return next
    })
  }
  return (
      <section id='portfolio' className='py-32 border-t border-[rgb(var(--border))]'>
        <Container>

          <SectionTitle title={ t.portfolio.title } subtitle={ t.portfolio.subtitle } />

          <PortfolioFilter filters={ filters } active={ activeFilter } onChange={ handleFilterChange } labels={ t.portfolio.filters } />

          {/* GRID */ }
          <PortfolioCards
              projects={ visibleProjects.map(project => ({
                ...project,
                categoryLabel: t.portfolio.filters[project.category]
              })) }
              onSelect={ setActiveProject }
          />

          { visibleCount < filteredProjects.length && (
              <div className='mt-12 text-center'>
                <button
                    onClick={ handleLoadMore }
                    className='inline-flex items-center gap-2 rounded-full border border-indigo-400/40 px-6 py-3 text-sm font-medium text-indigo-400 transition hover:bg-indigo-400/10 cursor-pointer'
                >
                  Show more projects
                </button>
              </div>
          ) }


        </Container>

        {/* MODAL */ }
        { activeProject && (
            <Suspense fallback={ null }>
              <ProjectModal project={ activeProject } onClose={ handleCloseModal } onViewCase={ handleViewCase } />
            </Suspense>
        ) }
      </section>
  )
}

export default PortfolioSection
