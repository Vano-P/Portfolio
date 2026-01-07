export const getSystemLanguage = () => {
  if (typeof navigator === 'undefined') return 'en'

  return navigator.language.toLowerCase().startsWith('ru')
      ? 'ru'
      : 'en'
}

export const getSystemTheme = () => {
  if (typeof window === 'undefined') return 'dark'

  return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}
