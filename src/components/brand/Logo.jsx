import { useLocation, useNavigate } from 'react-router-dom'

const Logo = ({ size = 'md' }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = () => {
    const isHome = location.hash === '#/' || location.hash === ''

    if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' })
    else navigate('/')
  }

  const sizes = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  }

  return (
      <button
          onClick={ handleClick }
          className={ `font-bold tracking-tight cursor-pointer ${ sizes[size] }` }
          aria-label='Go to home'
      >
        Vano<span className='text-indigo-500'>.P</span>
      </button>
  )
}

export default Logo
