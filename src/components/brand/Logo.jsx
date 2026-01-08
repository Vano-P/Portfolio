import { Link } from 'react-router-dom'

const Logo = ({ size = 'md' }) => {

  const sizes = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  }

  return (
      <Link
          to={ '/' }
          className={ `font-bold tracking-tight cursor-pointer ${ sizes[size] }` }
          aria-label='Go to home'
          onClick={ () => window.scrollTo({ top: 0, behavior: 'smooth' }) }
      >
        Vano<span className='text-indigo-500'>.P</span>
      </Link>
  )
}

export default Logo
