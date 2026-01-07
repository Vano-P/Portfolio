import { useLang } from '../../../context/LanguageContext.jsx'

const ProjectCard = ({ project, onClick }) => {
  const { lang } = useLang()
  return (
      <button
          data-portfolio-card=''
          onClick={ () => onClick(project) }
          className='group overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-left transition hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-[0_0_0_1px_rgba(99,102,241,0.15)] cursor-pointer'
      >
        <div className='aspect-[16/10] overflow-hidden'>
          <img
              src={ project.images[0] }
              alt={ project.title }
              className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
          />
        </div>

        <div className='p-5'>
        <span className='text-xs text-indigo-400'>
          { project.categoryLabel }
        </span>

          <h3 className='mt-1 text-lg font-semibold'>
            { project.title }
          </h3>

          <p className='mt-1.5 text-sm text-[rgb(var(--muted))] leading-relaxed'>
            { project.short[lang] }
          </p>
        </div>
      </button>
  )
}

export default ProjectCard
