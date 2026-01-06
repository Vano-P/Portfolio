import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../hooks/useTheme.jsx'

const ThemeToggle = () => {
  const { theme, toggle } = useTheme()

  return (
      <button
          onClick={ toggle }
          className='rounded-lg border border-[rgb(var(--border))] p-2 h-8 transition hover:bg-[rgb(var(--surface))] hover:text-indigo-400 cursor-pointer'
          aria-label='Toggle theme'
      >
        { theme === 'dark' ? <FiSun /> : <FiMoon /> }
      </button>
  )
}

export default ThemeToggle