import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [ theme, setTheme ] = useState(
      localStorage.getItem('theme') || 'dark'
  )

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
    localStorage.setItem('theme', theme)
  }, [ theme ])

  return {
    theme,
    toggle: () =>
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
}
