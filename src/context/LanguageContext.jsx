import { createContext, useContext, useState } from 'react'
import { en } from '../i18n/en'
import { ru } from '../i18n/ru'

const languages = { en, ru }

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [ lang, setLang ] = useState('en')

  const t = languages[lang]

  return (
      <LanguageContext.Provider value={ { lang, setLang, t } }>
        { children }
      </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
