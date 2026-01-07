import { createPortal } from 'react-dom'
import { FiX, FiExternalLink } from 'react-icons/fi'
import { useState } from 'react'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { useLang } from '../../context/LanguageContext'

const ProjectModal = ({ project, onClose, onViewCase }) => {
  useLockBodyScroll(true)
  const [ index, setIndex ] = useState(0)
  const { t } = useLang()
  const { lang } = useLang()

  if (!project) return null

  return createPortal(
      <div className='fixed inset-0 z-[100] flex items-center justify-center' aria-modal='true' role='dialog'>
        {/* OVERLAY */ }
        <div className='absolute inset-0 bg-black/70 backdrop-blur-sm' onClick={ onClose } />

        {/* MODAL */ }
        <div className='relative z-10 w-[92%] max-w-4xl overflow-hidden rounded-xl sm:rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))]'>
          {/* HEADER */ }
          <div className='flex items-center justify-between border-b border-[rgb(var(--border))] p-5'>
            <div>
              <h3 className='text-lg font-semibold'>{ project.title }</h3>
              <span className='text-xs text-indigo-400'> { t.portfolio.filters[project.category] } </span>
            </div>
            <button onClick={ onClose } aria-label='Close modal' className='cursor-pointer rounded-lg p-2 transition hover:bg-[rgb(var(--border))]'>
              <FiX className='text-2xl' />
            </button>
          </div>

          {/* CONTENT */ }
          <div className='grid gap-8 p-2 sm:p-6 md:grid-cols-2'>
            {/* GALLERY */ }
            <div>
              <div className='mb-3 aspect-[4/3] overflow-hidden rounded-xl'>
                <img src={ project.images[index] } alt={ project.title } className='h-full w-full object-cover' loading='lazy' />
              </div>
              <div className='flex gap-2'>
                { project.images.map((img, i) => (
                    <button
                        key={ i }
                        onClick={ () => setIndex(i) }
                        className={ `h-auto w-auto max-w-[120px] sm:w-22 lg:w-24 overflow-hidden rounded-lg border ${ i === index ? 'border-indigo-400' : 'border-[rgb(var(--border))]' }` }
                    >
                      <img src={ img } alt='' className='h-full w-full object-cover' loading='lazy' />
                    </button>
                )) }
              </div>
            </div>

            {/* INFO */ }
            <div>
              <p className='mb-4 text-[rgb(var(--muted))]'>
                { project.description[lang] }
              </p>

              <div className='mb-2 text-sm font-medium'>
                { t.projectModal.techStack }
              </div>

              <div className='mb-6 flex flex-wrap gap-2'>
                { project.tech.map((tech) => (
                    <span
                        key={ tech }
                        className='rounded-md border border-[rgb(var(--border))] px-2 py-1 text-xs text-[rgb(var(--muted))]'
                    >
                  { tech }
                </span>
                )) }
              </div>

              <div className='flex flex-wrap gap-3'>
                { project.demoUrl && (
                    <a
                        href={ project.demoUrl }
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 font-medium text-white transition hover:bg-indigo-400'
                    >
                      { t.projectModal.liveDemo }
                      <FiExternalLink />
                    </a>
                ) }

                { onViewCase && (
                    <button
                        onClick={ () => onViewCase(project.slug) }
                        className='inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] px-5 py-3 font-medium transition hover:bg-[rgb(var(--border))] cursor-pointer'
                    >
                      { t.projectModal.viewCase }
                    </button>
                ) }

              </div>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById('modal-root')
  )
}

export default ProjectModal
