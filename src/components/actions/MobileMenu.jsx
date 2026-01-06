import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import Navigation from '../Navigation.jsx'

const MobileMenu = () => {
  const [ open, setOpen ] = useState(false)
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
            <aside className='absolute right-0 top-0 h-[100vh] w-[70vw] bg-[rgb(var(--surface))] backdrop-blur-3xl py-3 px-4 flex flex-col'>
              <button
                  onClick={ () => setOpen(false) }
                  className='rounded-lg p-2 hover:bg-[rgb(var(--border))] transition self-end'
                  aria-label='Close menu'
              >
                <FiX size={ 22 } />
              </button>
              <Navigation variant='mobile' />
            </aside>
        ) }
      </>
  )
}

export default MobileMenu
