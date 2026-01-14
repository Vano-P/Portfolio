import { useLocation } from 'react-router-dom'
import Navigation from '../Navigation.jsx'
import MobileMenu from '../actions/MobileMenu.jsx'
import Logo from '../brand/Logo.jsx'
import HeaderActions from '../actions/HeaderActions.jsx'
import { useScrollDirection } from '../../hooks/useScrollDirection.jsx'

const Header = () => {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/portfolio/')
  const direction = useScrollDirection(20)
  return (
      <header className={ `fixed top-0 inset-x-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 backdrop-blur transition-transform duration-500 ease-out ${ direction === 'down' ? '-translate-y-full' : 'translate-y-0' }` }>
        <div className='container flex h-16 items-center justify-between'>
          <Logo />

          { !isProjectPage && <Navigation variant='header' /> }

          {/* ACTIONS */ }
          <div className='flex items-center gap-2'>
            <HeaderActions />
            { !isProjectPage && <MobileMenu /> }
          </div>
        </div>
      </header>
  )
}

export default Header
