import { useEffect } from 'react'

export const useLockBodyScroll = (locked) => {
  useEffect(() => {
    const body = document.body
    if (locked) body.classList.add('luck-scroll')
    return () => {
      body.classList.remove('luck-scroll')
    }
  }, [ locked ])
}
