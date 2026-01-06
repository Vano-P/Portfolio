import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import OrderModal from '../modals/OrderModal.jsx'

const Layout = () => {
  return (
      <div className='min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1'>
          <Outlet />
        </main>
        <Footer />
        <OrderModal />
      </div>
  )
}

export default Layout