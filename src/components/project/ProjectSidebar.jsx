import { FiExternalLink } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects'
import { useOrder } from '../../context/OrderContext'

const ProjectSidebar = ({ project, t }) => {
  const navigate = useNavigate()
  const { openOrder } = useOrder()

  const currentIndex = projects.findIndex(p => p.slug === project.slug)
  const nextProject =
      projects[currentIndex + 1] || projects[0]

  return (
      <aside className='sticky top-24 space-y-6 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-6'>

        {/* TECH STACK */ }
        <div>
          <h4 className='mb-4 font-semibold'>
            { t.projectDetails.tech }
          </h4>

          <div className='flex flex-wrap gap-2'>
            { project.tech.map((tech) => (
                <span
                    key={ tech }
                    className='rounded-md border border-indigo-400 px-2 py-1 text-xs text-[rgb(var(--muted))]'
                >
              { tech }
            </span>
            )) }
          </div>
        </div>

        {/* ACTIONS */ }
        <div className='flex flex-col gap-3'>
          { project.demoUrl && (
              <a
                  href={ project.demoUrl }
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 font-medium text-white transition hover:bg-indigo-400'
              >
                { t.projectDetails.liveDemo }
                <FiExternalLink />
              </a>
          ) }

          <button
              onClick={ () => openOrder({ project }) }
              className='inline-flex w-full items-center justify-center rounded-xl border border-[rgb(var(--border))] px-5 py-3 font-medium transition hover:bg-[rgb(var(--border))]'
          >
            { t.projectDetails.order }
          </button>
          <div className='rounded-2xl border border-[rgb(var(--border))] p-4'>
            <p className='mb-2 text-xs uppercase tracking-wide text-[rgb(var(--muted))]'>
              { t.projectDetails.nextProject }
            </p>

            <button
                onClick={ () => navigate(`/portfolio/${ nextProject.slug }`) }
                className='text-sm font-medium hover:text-indigo-400 transition'
            >
              { nextProject.title } →
            </button>
          </div>
        </div>

      </aside>
  )
}

export default ProjectSidebar
