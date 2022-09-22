import React from 'react'
import type { GatsbyBrowser, GatsbySSR } from 'gatsby'
import { StyledBody } from './style'
import Header from '../header'
import Footer from '../footer'
import useHeaderTransition from '../../hooks/useHeaderTransition'

interface LayoutProps {
  element: GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement']
}

const Layout = ({ element }: LayoutProps) => {
  const { headerShowing } = useHeaderTransition()

  return (
    <>
      <Header showing={headerShowing} />
      <StyledBody>{element}</StyledBody>
      <Footer />
    </>
  )
}

export default Layout
