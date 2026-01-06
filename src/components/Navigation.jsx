import { useLang } from '../context/LanguageContext.jsx'
import { scrollToSection } from '../utils/scrollToSection.js'

const variants = {
  header: 'hidden items-center gap-8 md:flex gap-8',
  footer: 'flex flex-col gap-2 items-center sm:items-start',
  mobile: 'flex flex-col gap-4 items-center'
}

const linkVariants = {
  header: 'text-sm font-medium text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]',
  footer: 'text-sm text-[rgb(var(--muted))] hover:text-indigo-400 transition',
  mobile: 'text-base font-medium'
}

const navItems = [
  { key: 'home', id: 'home' },
  { key: 'services', id: 'services' },
  { key: 'about', id: 'about' },
  { key: 'portfolio', id: 'portfolio' },
  { key: 'pricing', id: 'pricing' },
  { key: 'contact', id: 'contact' }
]

const Navigation = ({ variant = 'header' }) => {
  const { t } = useLang()
  return (
      <nav className={ variants[variant] }>
        { navItems.map((item) => (
            <button
                key={ item.key }
                onClick={ () => scrollToSection(item.id) }
                className={ `${ linkVariants[variant] } transition` }
            >
              { t.nav[item.key] }
            </button>
        )) }
      </nav>
  )
}

export default Navigation
