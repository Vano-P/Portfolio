import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import ProjectDetails from '../pages/ProjectDetails.jsx'

export const AppRouter = () => {
  return (
      <Routes>
        <Route element={ <Layout /> }>
          <Route path='/' element={ <Home /> } />
          <Route path='/portfolio/:slug' element={ <ProjectDetails /> } />
        </Route>
      </Routes>
  )
}
