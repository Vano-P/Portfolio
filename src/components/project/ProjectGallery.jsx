import { useState } from 'react'

const ProjectGallery = ({ images, title }) => {
  const [ active, setActive ] = useState(0)

  if (!images?.length) return null

  return (
      <div className='space-y-4 lg:col-span-2 sm:row-span-2 '>
        {/* MAIN IMAGE */ }
        <div className='aspect-[4/3] overflow-hidden rounded-2xl border border-[rgb(var(--border))]'>
          <img
              src={ images[active] }
              alt={ title }
              className='h-full w-full object-cover'
              loading='lazy'
          />
        </div>

        {/* THUMBNAILS */ }
        <div className='flex gap-2 sm:gap-3'>
          { images.map((img, i) => (
              <button
                  key={ i }
                  onClick={ () => setActive(i) }
                  className={ `cursor-pointer h-auto w-auto max-w-[120px] sm:w-22 lg:w-32 overflow-hidden rounded-xl border transition ${ i === active ? 'border-indigo-400' : 'border-[rgb(var(--border))] opacity-70 hover:opacity-100' } ` }
              >
                <img
                    src={ img }
                    alt=''
                    className='h-full w-full object-cover'
                    loading='lazy'
                />
              </button>
          )) }
        </div>
      </div>
  )
}

export default ProjectGallery
