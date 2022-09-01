import React, { useCallback, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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

interface PureLayoutProps extends LayoutProps {
  siteTitle: string
}
interface LayoutProps {
  pageTitle?: string
  children: React.ReactNode
}

export const PureLayout = ({ siteTitle, pageTitle, children }: PureLayoutProps) => {
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
          <Header siteTitle={siteTitle} showing={headerTransition && showHeader} />
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

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query getSiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <PureLayout siteTitle={data.site.siteMetadata.title} pageTitle={pageTitle}>
      {children}
    </PureLayout>
  )
}

export default Layout
