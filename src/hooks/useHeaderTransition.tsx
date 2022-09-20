import { useCallback, useEffect, useState } from 'react'
import store from '../state/store'
import { toggleHeaderTransition } from '../state/appSlice'

const isBrowser = typeof window !== 'undefined'

export default function useHeaderTransition() {
  const [prevPositionY, setPrevPositionY] = useState(0)
  const [showHeader, setShowHeader] = useState(true)

  const {
    app: { headerTransition },
  } = store.getState()

  const handleHeaderVisibility = useCallback(() => {
    if (isBrowser) {
      setPrevPositionY(window.scrollY)

      let currentPositionY = window.scrollY

      if (prevPositionY < currentPositionY && currentPositionY > 120) {
        setShowHeader(false)
        store.dispatch(toggleHeaderTransition(true))
      } else {
        if (headerTransition) {
          setShowHeader(true)
        } else {
          setTimeout(() => {
            store.dispatch(toggleHeaderTransition(true))
          }, 1000)
        }
      }
    }
  }, [prevPositionY])

  useEffect(() => {
    if (isBrowser) window.addEventListener('scroll', handleHeaderVisibility)

    return () => {
      if (isBrowser)
        window.removeEventListener('scroll', handleHeaderVisibility)
    }
  }, [handleHeaderVisibility])

  return { headerShowing: headerTransition && showHeader }
}
