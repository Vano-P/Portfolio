import { useEffect, useState } from 'react'
import { useTheme } from './context/ThemeContext.jsx'
import { useLang } from './context/LanguageContext.jsx'

const FADE_MS = 300

const AppMotion = ({ children }) => {
  const { theme } = useTheme()
  const { lang } = useLang()
  const [ visible, setVisible ] = useState(true)

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), FADE_MS)
    return () => clearTimeout(t)
  }, [ theme, lang ])

  return (
      <div className={ `app-motion ${ !visible ? 'app-motion--hidden' : '' }` }>
        { children }
      </div>
  )
}

export default AppMotion
