import { useState } from 'react'
import { useLang } from '../../context/LanguageContext'
import { FiChevronDown } from 'react-icons/fi'

const LanguageSwitch = () => {
  const { lang, setLang } = useLang()
  const [ open, setOpen ] = useState(false)

  return (
      <div className='relative'>
        <button
            onClick={ () => setOpen(!open) }
            className='flex items-center gap-0.5 rounded-lg h-8 px-1.5 text-sm text-[rgb(var(--muted))] hover:text-indigo-400 transition border border-[rgb(var(--border))] cursor-pointer'
        >
          { lang.toUpperCase() }
          <FiChevronDown size={ 14 } />
        </button>

        { open && (
            <div className='absolute right-0 mt-2 w-24 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-1'>
              { [ 'en', 'ru' ].map((l) => (
                  <button
                      key={ l }
                      onClick={ () => {
                        setLang(l)
                        setOpen(false)
                      } }
                      className={ `w-full rounded-lg px-3 py-2 text-left text-sm transition cursor-pointer
                ${ lang === l ? 'bg-indigo-500/10 text-indigo-400' : 'hover:bg-[rgb(var(--border))]' }
              ` }
                  >
                    { l.toUpperCase() }
                  </button>
              )) }
            </div>
        ) }
      </div>
  )
}

export default LanguageSwitch
