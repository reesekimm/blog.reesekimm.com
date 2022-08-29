import { useEffect, useState } from 'react'

const options = {
  rootMargin: '0% 0% -80% 0%',
  threshold: 1,
}

export default function useActiveId(ids: string[]) {
  const [activeId, setActiveId] = useState<string | undefined>()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, options)

    ids.forEach((id) => {
      observer.observe(document.getElementById(id)!)
    })

    return () => {
      observer.disconnect()
    }
  }, [ids])

  return activeId
}
