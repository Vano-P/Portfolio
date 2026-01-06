import { FaTelegram } from 'react-icons/fa6'

const SocialLinks = () => (
    <a
        href='https://t.me/yourusername'
        target='_blank'
        rel='noreferrer'
        className='rounded-lg p-2 text-[rgb(var(--muted))] bg-[rgb(var(--border))] hover:text-indigo-400 transition h-8'
        aria-label='Telegram'
    >
      <FaTelegram size={ 18 } />
    </a>
)

export default SocialLinks
