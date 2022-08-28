import React, { useCallback, useEffect, useState } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import Theme from '../theme'
import { StyledBody, PageTitle } from './style'
import Header from '../header'
import Footer from '../footer'
import { persistor, store } from '../../state/store'
import { toggleHeaderTransition } from '../../state/appSlice'

interface LayoutProps {
  pageTitle?: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const [prevPositionY, setPrevPositionY] = useState(window.scrollY)
  const [showHeader, setShowHeader] = useState(true)

  const {
    app: { headerTransition },
  } = store.getState()

  const handleHeaderVisibility = useCallback(() => {
    setPrevPositionY(window.scrollY)

    let currentPositionY = window.scrollY

    if (prevPositionY < currentPositionY) {
      setShowHeader(false)
      store.dispatch(toggleHeaderTransition(true))
    } else {
      if (headerTransition) {
        setShowHeader(true)
      } else {
        setTimeout(() => {
          store.dispatch(toggleHeaderTransition(true))
        }, 1500)
      }
    }
  }, [prevPositionY])

  useEffect(() => {
    window.addEventListener('scroll', handleHeaderVisibility)

    return () => {
      window.removeEventListener('scroll', handleHeaderVisibility)
    }
  }, [handleHeaderVisibility])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <Header showing={headerTransition && showHeader} />
          <StyledBody>
            {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
            {children}
          </StyledBody>
          <Footer />
        </Theme>
      </PersistGate>
    </Provider>
  )
}

export default Layout
