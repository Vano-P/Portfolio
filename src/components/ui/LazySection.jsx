import { useEffect, useRef, useState } from 'react'

const LazySection = ({ children, className = '' }) => {
  const ref = useRef(null)
  const [ active, setActive ] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([ entry ]) => {
          if (entry.isIntersecting) {
            setActive(true)
            observer.disconnect()
          }
        },
        { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
      <div
          ref={ ref }
          className={ ` transition-all duration-700 ease-out ${ active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' } ${ className } ` }
      >
        { children }
      </div>
  )
}

export default LazySection
