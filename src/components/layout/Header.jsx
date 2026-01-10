import { useLocation } from 'react-router-dom'
import Navigation from '../Navigation.jsx'
import MobileMenu from '../actions/MobileMenu.jsx'
import Logo from '../brand/Logo.jsx'
import HeaderActions from '../actions/HeaderActions.jsx'

const Header = () => {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/portfolio/')

  return (
      <header className='sticky left-0 top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 backdrop-blur'>
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
