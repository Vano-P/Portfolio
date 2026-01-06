import { useEffect } from 'react'

export const useLockBodyScroll = (locked) => {
  useEffect(() => {
    if (!locked) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [ locked ])
}
