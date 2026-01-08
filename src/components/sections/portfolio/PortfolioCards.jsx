import PortfolioCard from './PortfolioCard.jsx'
import { memo } from 'react'

const PortfolioGrid = memo(({ projects, onSelect }) => {

  return (
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        { projects.map(project => <PortfolioCard key={ project.slug } project={ project } onSelect={ onSelect } />) }
      </div>
  )
})

export default PortfolioGrid
