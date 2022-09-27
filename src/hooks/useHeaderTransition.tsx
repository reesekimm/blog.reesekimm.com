import { useCallback, useEffect, useState } from 'react'
import { selectAppState, toggleHeaderTransition } from '../state/appSlice'
import { useAppDispatch, useAppSelector } from '../state/hooks'

const isBrowser = typeof window !== 'undefined'

export default function useHeaderTransition() {
  if (!isBrowser) return { headerShowing: true }

  const [prevPositionY, setPrevPositionY] = useState(0)
  const [showHeader, setShowHeader] = useState(true)

  const { headerTransition } = useAppSelector(selectAppState)
  const dispatch = useAppDispatch()

  const handleHeaderVisibility = useCallback(() => {
    setPrevPositionY(window.scrollY)

    let currentPositionY = window.scrollY

    if (prevPositionY < currentPositionY) {
      setShowHeader(false)
      dispatch(toggleHeaderTransition(true))
    } else {
      if (headerTransition) {
        setShowHeader(true)
      } else {
        setTimeout(() => {
          dispatch(toggleHeaderTransition(true))
        }, 1000)
      }
    }
  }, [prevPositionY])

  useEffect(() => {
    window.addEventListener('scroll', handleHeaderVisibility)

    return () => {
      window.removeEventListener('scroll', handleHeaderVisibility)
    }
  }, [handleHeaderVisibility])

  return { headerShowing: headerTransition && showHeader }
}
