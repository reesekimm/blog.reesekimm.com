import React from 'react'
import type { GatsbyBrowser, GatsbySSR } from 'gatsby'
import { StyledBody } from './style'
import Header from '../header'
import Footer from '../footer'
import useHeaderTransition from '../../hooks/useHeaderTransition'
import SEO from '../seo'
import Theme from '../theme'

interface LayoutProps {
  element: GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement']
}

const Layout = ({ element }: LayoutProps) => {
  const { headerShowing } = useHeaderTransition()

  return (
    <Theme>
      <>
        <Header showing={headerShowing} />
        <StyledBody>
          <>{element}</>
        </StyledBody>
        <Footer />
      </>
    </Theme>
  )
}

export default Layout

export const Head = () => <SEO />
