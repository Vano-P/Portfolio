import { useEffect, useRef, useState } from 'react'

export const useScrollDirection = (offset = 10) => {
  const lastScrollY = useRef(0)
  const [ direction, setDirection ] = useState('up')

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      if (Math.abs(currentY - lastScrollY.current) < offset) return

      setDirection(currentY > lastScrollY.current ? 'down' : 'up')
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ offset ])

  return direction
}
