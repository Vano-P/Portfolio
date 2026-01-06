import { FiMail, FiGithub } from 'react-icons/fi'
import { SiTelegram, SiFiverr, SiLinkedin } from 'react-icons/si'

export const socials = [
  {
    label: 'Telegram',
    value: '@yourusername',
    href: 'https://t.me/yourusername',
    icon: SiTelegram
  },
  {
    label: 'Email',
    value: 'you@email.com',
    href: 'mailto:you@email.com',
    icon: FiMail
  },
  {
    label: 'GitHub',
    value: 'github.com/yourname',
    href: 'https://github.com/yourname',
    icon: FiGithub
  },
  {
    label: 'Linkedin',
    value: 'linkedin.com/yourname',
    href: 'https://www.fiverr.com/yourname',
    icon: SiLinkedin
  },
  {
    label: 'Fiverr',
    value: 'fiverr.com/yourname',
    href: 'https://www.fiverr.com/yourname',
    icon: SiFiverr
  },
  {
    label: 'Kwork',
    value: 'kwork.ru/user/yourname',
    href: 'https://kwork.ru/user/yourname',
    icon: SiFiverr // временно, если хочешь — потом кастомную иконку
  }
]
