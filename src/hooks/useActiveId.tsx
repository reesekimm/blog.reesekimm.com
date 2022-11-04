import { useEffect, useState } from 'react'

const options = {
  rootMargin: '0% 0% -75% 0%',
  threshold: 1,
}

export default function useActiveId(ids: string[]) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, options)

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [ids])

  return activeId
}
