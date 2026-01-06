import { useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { useLang } from '../../context/LanguageContext.jsx'

const MoreProjectsSlider = ({ currentProject }) => {
  const navigate = useNavigate()
  const { t } = useLang()
  const [ index, setIndex ] = useState(0)
  const startX = useRef(0)

  const moreProjects = useMemo(() => {
    if (!currentProject) return []

    const sameCategory = projects.filter(
        (p) =>
            p.slug !== currentProject.slug &&
            p.category === currentProject.category
    )

    const others = projects.filter(
        (p) =>
            p.slug !== currentProject.slug &&
            p.category !== currentProject.category
    )

    return [ ...sameCategory, ...others ]
  }, [ currentProject ])

  if (moreProjects.length === 0) return null

  const visibleDesktop = 3
  const maxIndexDesktop = Math.max(0, moreProjects.length - visibleDesktop)

  const prev = () => setIndex((i) => Math.max(i - 1, 0))
  const next = () => setIndex((i) => Math.min(i + 1, maxIndexDesktop))

  const onTouchStart = (e) => (startX.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - startX.current
    if (delta > 50) prev()
    if (delta < -50) next()
  }

  return (
      <section>
        <h3 className='mb-6 text-2xl font-semibold'>
          { t.moreProjects.title }
        </h3>

        {/* DESKTOP */ }
        <div className='relative hidden overflow-hidden md:block'>
          <button
              onClick={ prev }
              disabled={ index === 0 }
              aria-label='Previous'
              className='absolute left-0 top-1/2 z-20 -translate-y-1/2 transition hover:text-indigo-400 disabled:opacity-30'
          >
            <BsArrowLeftSquareFill size={ 25 } />
          </button>

          <div className='overflow-hidden'>
            <div
                className='flex gap-6 transition-transform duration-300'
                style={ {
                  transform: `translateX(-${ index * (100 / visibleDesktop) }%)`
                } }
            >
              { moreProjects.map((p) => (
                  <button
                      key={ p.slug }
                      onClick={ () => navigate(`/portfolio/${ p.slug }`) }
                      className='min-w-[calc(33.333%-16px)] overflow-hidden rounded-2xl border border-[rgb(var(--border))] text-left transition hover:-translate-y-1'
                  >
                    <div className='aspect-[3/2] overflow-hidden'>
                      <img
                          src={ p.images[0] }
                          alt={ p.title }
                          className='h-full w-full object-cover'
                      />
                    </div>

                    <div className='p-4'>
                      <div className='text-xs text-indigo-400'>
                        { t.portfolio.filters[p.category] }
                      </div>
                      <div className='font-medium'>
                        { p.title }
                      </div>
                    </div>
                  </button>
              )) }
            </div>
          </div>

          <button
              onClick={ next }
              disabled={ index === maxIndexDesktop }
              aria-label='Next'
              className='absolute right-0 top-1/2 z-20 transition hover:text-indigo-400 disabled:opacity-30'
          >
            <BsArrowRightSquareFill size={ 25 } />
          </button>
        </div>

        {/* MOBILE */ }
        <div
            className='overflow-hidden md:hidden'
            onTouchStart={ onTouchStart }
            onTouchEnd={ onTouchEnd }
        >
          <div
              className='flex transition-transform duration-300'
              style={ {
                transform: `translateX(-${ index * 100 }%)`
              } }
          >
            { moreProjects.map((p) => (
                <div key={ p.slug } className='min-w-full'>
                  <button
                      onClick={ () => navigate(`/portfolio/${ p.slug }`) }
                      className='mx-auto block w-[90%] overflow-hidden rounded-2xl border border-[rgb(var(--border))] text-left'
                  >
                    <div className='aspect-[3/2] overflow-hidden'>
                      <img
                          src={ p.images[0] }
                          alt={ p.title }
                          className='h-full w-full object-cover'
                      />
                    </div>

                    <div className='p-4'>
                      <div className='text-xs text-indigo-400'>
                        { t.portfolio.filters[p.category] }
                      </div>
                      <div className='font-medium'>
                        { p.title }
                      </div>
                    </div>
                  </button>
                </div>
            )) }
          </div>
        </div>
      </section>
  )
}

export default MoreProjectsSlider
