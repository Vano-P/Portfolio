import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Navigation from '../Navigation.jsx'

const MobileMenu = () => {
  const [ open, setOpen ] = useState(false)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [ open ])
  return (
      <>
        <button
            onClick={ () => setOpen(true) }
            className='md:hidden text-xl rounded-lg border border-[rgb(var(--border))] px-2 h-8 transition hover:bg-[rgb(var(--surface))] hover:text-indigo-400'
            aria-label='Open menu'
        >
          <FiMenu />
        </button>

        { open && (
            <aside className={ `absolute right-0 top-0 w-[70vw] h-[100svh] bg-[rgb(var(--surface))]/95 border-l border-indigo-400/30 py-4 px-5 flex flex-col` }>
              <button
                  onClick={ () => setOpen(false) }
                  className='rounded-lg p-2 hover:bg-[rgb(var(--border))] transition self-end'
                  aria-label='Close menu'
              >
                <FiX size={ 22 } />
              </button>

              <Navigation variant='mobile' onNavigate={ () => setOpen(false) } />

              <div className='mt-auto pt-5 pb-2 border-t border-white/10'>
                <p className='text-sm text-muted text-center'>
                  Frontend & Fullstack Developer
                </p>
              </div>
            </aside>
        ) }
      </>
  )
}

export default MobileMenu