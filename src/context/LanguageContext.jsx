import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ru } from '../i18n/ru.js'
import { en } from '../i18n/en.js'

const translations = { ru, en }

const DEFAULT_LANG = 'en'

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [ lang, setLang ] = useState(DEFAULT_LANG)

  useEffect(() => {
    const saved = localStorage.getItem('lang')

    if (saved === 'ru' || saved === 'en') {
      setLang(saved)
    } else {
      const systemLang =
          navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en'

      setLang(systemLang)
      localStorage.setItem('lang', systemLang)
    }
  }, [])

  // 🔑 САМОЕ ВАЖНОЕ МЕСТО
  const t = useMemo(() => {
    return translations[lang] || translations[DEFAULT_LANG]
  }, [ lang ])

  const changeLang = (nextLang) => {
    setLang(nextLang)
    localStorage.setItem('lang', nextLang)
  }

  return (
      <LanguageContext.Provider value={ { lang, t, changeLang } }>
        { children }
      </LanguageContext.Provider>
  )
}

export const useLang = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLang must be used inside LanguageProvider')
  }
  return ctx
}
