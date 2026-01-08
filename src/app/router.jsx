import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import LazySection from '../components/ui/LazySection.jsx'
import { lazy, Suspense } from 'react'
import SectionSkeleton from '../components/ui/SectionSkeleton.jsx'

const ProjectDetails = lazy(() => import('../pages/ProjectDetails.jsx'))

export const AppRouter = () => {
  return (
      <Routes>
        <Route element={ <Layout /> }>
          <Route path='/' element={ <Home /> } />
          <Route
              path='/projects/:slug'
              element={
                <Suspense fallback={ <SectionSkeleton /> }>
                  <LazySection>
                    <ProjectDetails />
                  </LazySection>
                </Suspense>
              }
          />
        </Route>
      </Routes>
  )
}
