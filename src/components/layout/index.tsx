import React from 'react'
import { Provider } from 'react-redux'
import Theme from '../theme'
import { StyledBody, PageTitle } from './style'
import Header from '../header'
import Footer from '../footer'
import store from '../../state/store'
import useHeaderTransition from '../../hooks/useHeaderTransition'

interface LayoutProps {
  pageTitle?: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const { headerShowing } = useHeaderTransition()
  return (
    <Provider store={store}>
      <Theme>
        <Header showing={headerShowing} />
        <StyledBody>
          {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
          {children}
        </StyledBody>
        <Footer />
      </Theme>
    </Provider>
  )
}

export default Layout
