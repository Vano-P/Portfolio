import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { projects } from '../data/projects'
import Container from '../components/ui/Container'
import MoreProjectsSlider from '../components/project/MoreProjectsSlider.jsx'
import { useLang } from '../context/LanguageContext'
import ProjectGallery from '../components/project/ProjectGallery.jsx'
import ProjectSidebar from '../components/project/ProjectSidebar.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import { Helmet } from 'react-helmet'

const ProjectDetails = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { t, lang } = useLang()
  const origin = window.location.origin

  const project = projects.find((p) => p.slug === slug)

  const title = `${ project.title } | Vano-P`
  const description = project.description
  const url = `${ origin }/portfolio/projects/${ project.slug }`
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
      <>
        {/* ✅ SEO FOR PROJECT PAGE */ }
        <Helmet key={ project.slug }>
          <title>{ title }</title>
          <meta name='description' content={ description } />
          <link rel='canonical' href={ url } />

          {/* Open Graph */ }
          <meta property='og:type' content='website' />
          <meta property='og:title' content={ title } />
          <meta property='og:description' content={ description } />
          <meta property='og:url' content={ url } />
          { project.cover && <meta property='og:image' content={ `${ origin }${ project.images[0] }` } /> }
        </Helmet>

        <section className='py-8'>
          <Container>
            <button
                onClick={ () => navigate('/') }
                className='mb-5 inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] transition hover:text-[rgb(var(--text))] cursor-pointer'
            >
              <FiArrowLeft />
              { t.projectDetails.back }
            </button>

            {/* HERO */ }
            <div className='mb-6 max-w-5xl'>
          <span className='text-sm text-indigo-400'>
            { t.portfolio.filters[project.category] }
          </span>
              <SectionTitle title={ project.title } subtitle={ project.description[lang] } />
            </div>

            <div className='mb-20 grid gap-x-6 gap-y-10 lg:grid-cols-3 lg:grid-rows-2'>
              {/* GALLERY */ }
              <ProjectGallery key={ project.slug } images={ project.images } title={ project.title } />

              {/* SIDEBAR */ }
              <ProjectSidebar project={ project } t={ t } />

              {/* CONTENT */ }
              <div className='space-y-10 md:col-span-2'>
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
      </>
  )
}

export default ProjectDetails
