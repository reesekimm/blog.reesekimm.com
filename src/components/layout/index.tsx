import React, { useCallback, useEffect, useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import Theme from '../theme'
import { StyledBody, PageTitle } from './style'
import Header from '../header'
import Footer from '../footer'
import Codeblock from '../codeblock'
import Link from '../link'
import LinkedHeading from '../linkedHeading'
import { persistor, store } from '../../state/store'
import { toggleHeaderTransition } from '../../state/appSlice'

const components = {
  pre: Codeblock,
  a: Link,
  h2: LinkedHeading.h2,
  h3: LinkedHeading.h3,
  h4: LinkedHeading.h4,
  h5: LinkedHeading.h5,
}

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

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <Header showing={headerTransition && showHeader} />
          <StyledBody>
            {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
            <MDXProvider components={components}>{children}</MDXProvider>
          </StyledBody>
          <Footer />
        </Theme>
      </PersistGate>
    </Provider>
  )
}

export default Layout
