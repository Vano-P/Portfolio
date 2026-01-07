import { memo } from 'react'

const PortfolioFilter = ({ filters, active, onChange }) => {
  return (
      <div className='mb-10 flex flex-wrap gap-3'>
        { filters.map((filter) => (
            <button
                key={ filter }
                onClick={ () => onChange(filter) }
                className={ `capitalize rounded-full px-4 py-2 text-sm font-medium transition cursor-pointer ${
                    active === filter
                        ? 'bg-indigo-500 text-white'
                        : 'border border-[rgb(var(--border))] text-[rgb(var(--muted))] hover:border-indigo-400 hover:text-[rgb(var(--text))]'
                }` }
            >
              { filter }
            </button>
        )) }
      </div>
  )
}

export default memo(PortfolioFilter)
