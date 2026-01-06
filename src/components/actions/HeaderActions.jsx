import SocialLinks from './SocialLinks.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import LanguageSwitch from './LanguageSwitch.jsx'

const HeaderActions = () => {
  return (
      <div className='flex gap-4 items-center'>
        <SocialLinks />
        <ThemeToggle />
        <LanguageSwitch />
      </div>
  )
}

export default HeaderActions