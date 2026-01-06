import { AppRouter } from './app/router'
import ScrollToTop from './utils/ScrollToTop.jsx'

const App = () => {
  return (
      <div className='min-h-screen'>
        <ScrollToTop />
        <AppRouter />
      </div>
  )
}

export default App
