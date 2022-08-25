import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import Theme from '../theme'
import { StyledBody, PageTitle } from './style'
import Header from '../header'
import Footer from '../footer'
import { persistor, store } from '../../state/store'

interface LayoutProps {
  pageTitle?: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <Header />
          <StyledBody>
            <PageTitle>{pageTitle}</PageTitle>
            {children}
          </StyledBody>
          <Footer />
        </Theme>
      </PersistGate>
    </Provider>
  )
}

export default Layout
