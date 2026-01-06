import { FiGithub, FiSend, FiMail, FiLinkedin } from 'react-icons/fi'
import { useLang } from '../../context/LanguageContext'
import { useLocation } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import Navigation from '../Navigation.jsx'
import Logo from '../brand/Logo.jsx'

const Footer = () => {
  const location = useLocation()

  const { t } = useLang()
  const isProjectPage = location.pathname.startsWith('/portfolio/')

  return (
      <footer className='border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))] pt-10'>
        <Container>
          <div className='grid gap-12 md:grid-cols-2'>
            {/* LEFT */ }
            <div>
              <Logo size='sm' />

              <p className='mt-3 max-w-sm text-sm text-[rgb(var(--muted))]'>
                { t.footer.description }
              </p>
            </div>

            {/* RIGHT */ }
            <div className='grid gap-8 sm:grid-cols-2'>
              {/* NAV */ }
              <div>
                { !isProjectPage && (
                    <>
                      <div className='mb-3 text-sm font-medium'> { t.footer.navigationTitle } </div>
                      <Navigation variant='footer' />
                    </>
                ) }
              </div>


              {/* CONTACT */ }
              <div>
                <div className='mb-3 text-sm font-medium'>
                  { t.footer.contactTitle }
                </div>
                <ul className='space-y-2 text-sm text-[rgb(var(--muted))]'>
                  <li className='flex items-center gap-2'>
                    <FiSend />
                    <a
                        href='https://t.me/yourusername'
                        target='_blank'
                        rel='noreferrer'
                        className='hover:text-indigo-400 transition'
                    > Telegram </a>
                  </li>

                  <li className='flex items-center gap-2'>
                    <FiLinkedin />
                    <a
                        href='https://linkedin.com/in/yourprofile'
                        target='_blank'
                        rel='noreferrer'
                        className='hover:text-indigo-400 transition'
                    > Linkedin </a>
                  </li>

                  <li className='flex items-center gap-2'>
                    <FiMail />
                    <a
                        href='mailto:you@email.com'
                        className='hover:text-indigo-400 transition'
                    > Van.Poghosyan@email.com </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */ }
          <div className='mt-10 flex flex-col items-center justify-between gap-4 border-t border-[rgb(var(--border))] pt-3 pb-4 text-sm text-[rgb(var(--muted))] sm:flex-row'>
            <span> © { new Date().getFullYear() } Vano. { t.footer.copyright } </span>

            <div className='flex items-center gap-4'>
              <a href='https://github.com/yourusername' target='_blank' rel='noreferrer' className='hover:text-indigo-400 transition' aria-label='GitHub'>
                <FiGithub />
              </a>
              <a href='https://t.me/yourusername' target='_blank' rel='noreferrer' className='hover:text-indigo-400 transition' aria-label='Telegram'>
                <FiSend />
              </a>
            </div>
          </div>
        </Container>
      </footer>
  )
}

export default Footer
