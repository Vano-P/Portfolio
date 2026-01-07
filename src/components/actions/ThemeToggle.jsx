import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext.jsx'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  return (
      <button
          onClick={ toggleTheme }
          className='rounded-lg border border-[rgb(var(--border))] p-2 h-8 transition hover:bg-[rgb(var(--surface))] hover:text-indigo-400 cursor-pointer'
          aria-label='Toggle theme'
      >
        { theme === 'dark' ? <FiSun /> : <FiMoon /> }
      </button>
  )
}

export default ThemeToggle