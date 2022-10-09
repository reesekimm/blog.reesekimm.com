import React from 'react'
import type { GatsbyBrowser, GatsbySSR } from 'gatsby'
import Header from '../header'
import Footer from '../footer'
import useHeaderTransition from '../../hooks/useHeaderTransition'
import SEO from '../seo'
import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from '../../styles/theme'

interface LayoutProps {
  element: GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement']
}

const Layout = ({ element }: LayoutProps) => {
  const { headerShowing } = useHeaderTransition()

  return (
    <ChakraProvider theme={theme}>
      <>
        <Header showing={headerShowing} />
        <Container as="main">
          <>{element}</>
        </Container>
        <Footer />
      </>
    </ChakraProvider>
  )
}

export default Layout

export const Head = () => <SEO />
