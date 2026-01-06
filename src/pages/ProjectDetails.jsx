import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/projects'
import Container from '../components/ui/Container'
import { useOrder } from '../context/OrderContext'
import MoreProjectsSlider from '../components/project/MoreProjectsSlider.jsx'
import { useLang } from '../context/LanguageContext'
import ProjectGallery from '../components/project/ProjectGallery.jsx'
import ProjectSidebar from '../components/project/ProjectSidebar.jsx'

const ProjectDetails = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { openOrder } = useOrder()
  const { t } = useLang()
  const { lang } = useLang()

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
        <section className='py-32'>
          <Container>
            <p className='text-center text-[rgb(var(--muted))] flex flex-col gap-2 items-center'>
              { t.projectDetails.notFound }
              <button
                  onClick={ () => navigate('/') }
                  className='inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] transition hover:text-[rgb(var(--text))]'
              >
                <FiArrowLeft />
                { t.projectDetails.back }
              </button>
            </p>
          </Container>
        </section>
    )
  }

  return (
      <section className='py-8'>
        <Container>
          <button
              onClick={ () => navigate('/') }
              className='mb-5 inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] transition hover:text-[rgb(var(--text))]'
          >
            <FiArrowLeft />
            { t.projectDetails.back }
          </button>

          {/* HERO */ }
          <div className='mb-6 max-w-5xl'>
          <span className='text-sm text-indigo-400'>
            { t.portfolio.filters[project.category] }
          </span>
            <h1 className='mt-2 mb-3 text-3xl font-bold sm:text-4xl'>
              { project.title }
            </h1>
            <p className='text-lg text-[rgb(var(--muted))]'>
              { project.description[lang] }
            </p>
          </div>

          <div className='mb-20 grid gap-x-6 gap-y-10 sm:grid-cols-3 sm:grid-rows-2'>
            {/* GALLERY */ }
            <ProjectGallery images={ project.images } title={ project.title } />

            {/* SIDEBAR */ }
            <ProjectSidebar project={ project } t={ t } />

            {/* CONTENT */ }
            <div className='space-y-10 lg:col-span-2'>
              <div>
                <h3 className='mb-3 text-xl font-semibold'>
                  { t.projectDetails.challenge }
                </h3>
                <p className='text-[rgb(var(--muted))]'>
                  { project.challenge[lang] }
                </p>
              </div>

              <div>
                <h3 className='mb-3 text-xl font-semibold'>
                  { t.projectDetails.solution }
                </h3>
                <p className='text-[rgb(var(--muted))]'>
                  { project.solution[lang] }
                </p>
              </div>
            </div>
          </div>


          {/* MORE PROJECTS */ }
          <MoreProjectsSlider currentProject={ project } />

        </Container>
      </section>
  )
}

export default ProjectDetails
