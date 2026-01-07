import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { useLang } from '../../context/LanguageContext.jsx'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const MoreProjectsSlider = ({ currentProject }) => {
  const navigate = useNavigate()
  const { t } = useLang()

  const moreProjects = useMemo(() => {
    if (!currentProject) return []

    const sameCategory = projects.filter((p) => p.slug !== currentProject.slug && p.category === currentProject.category)

    const others = projects.filter((p) => p.slug !== currentProject.slug && p.category !== currentProject.category)

    return [ ...sameCategory, ...others ]
  }, [ currentProject ])

  if (moreProjects.length === 0) return null

  return (
      <section>
        <h3 className='mb-6 text-2xl font-semibold'>
          { t.moreProjects.title }
        </h3>
        <div className='flex items-center gap-3 relative'>

          <button className='swiper-prev hidden md:block cursor-pointer transition enabled:hover:text-indigo-400 disabled:opacity-30' aria-label='Previous'>
            <BsArrowLeftSquareFill size={ 50 } />
          </button>

          <Swiper
              modules={ [ Navigation, Pagination ] }
              spaceBetween={ 12 }
              slidesPerView={ 3 }
              grabCursor={ true }
              pagination={ {
                el: '.swiper-pagination',
                clickable: true
              } }
              breakpoints={ {
                0: {
                  slidesPerView: 1,
                  pagination: {
                    clickable: true
                  },
                  navigation: false
                },
                768: {
                  slidesPerView: 2,
                  pagination: {
                    clickable: true
                  },
                  navigation: false
                },
                1024: {
                  slidesPerView: 3,
                  pagination: false,
                  navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                  }
                }
              } }
              className='mb-10'
          >
            { moreProjects.map((p) => (
                <SwiperSlide key={ p.slug }>
                  <button
                      onClick={ () => navigate(`/portfolio/${ p.slug }`) }
                      className='block h-full overflow-hidden rounded-2xl border border-[rgb(var(--border))] text-left transition hover:-translate-y-1 cursor-pointer'
                  >
                    <div className='aspect-[16/10] overflow-hidden'>
                      <img
                          src={ p.images[0] }
                          alt={ p.title }
                          className='h-full w-full object-cover'
                          loading='lazy'
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
                </SwiperSlide>
            )) }
          </Swiper>
          <div className='swiper-pagination swiperDotsCustom md:hidden block bottom-0'></div>
          <button className='swiper-next hidden md:block cursor-pointer transition enabled:hover:text-indigo-400 disabled:opacity-30' aria-label='Next'>
            <BsArrowRightSquareFill size={ 50 } />
          </button>
        </div>
      </section>

  )
}

export default MoreProjectsSlider
