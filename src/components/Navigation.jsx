import { useLang } from '../context/LanguageContext.jsx'

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
  { key: 'home', href: '#home' },
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'pricing', href: '#pricing' },
  { key: 'contact', href: '#contact' }
]

const Navigation = ({ variant = 'header' }) => {
  const { t } = useLang()
  return (
      <nav className={ variants[variant] }>
        { navItems.map((item) => (
            <a
                key={ item.key }
                href={ item.href }
                className={ `${ linkVariants[variant] } transition` }
            >
              { t.nav[item.key] }
            </a>
        )) }
      </nav>
  )
}

export default Navigation
