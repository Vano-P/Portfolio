import { createContext, useContext, useEffect, useState } from 'react'
import { getSystemTheme } from '../utils/system.js'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [ theme, setTheme ] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme')

    if (saved === 'dark' || saved === 'light') {
      setTheme(saved)
      document.documentElement.classList.toggle('dark', saved === 'dark')
    } else {
      const systemTheme = getSystemTheme()
      const initialTheme = systemTheme ?? 'dark' // ⬅️ fallback

      setTheme(initialTheme)
      localStorage.setItem('theme', initialTheme)
      document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', next)
      document.documentElement.classList.toggle('dark', next === 'dark')
      return next
    })
  }

  return (
      <ThemeContext.Provider value={ { theme, toggleTheme } }>
        { children }
      </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
