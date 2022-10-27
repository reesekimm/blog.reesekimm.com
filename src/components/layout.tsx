import React from 'react'
import type { GatsbyBrowser, GatsbySSR } from 'gatsby'
import Header from './header'
import Footer from './footer'
import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from '../styles/theme'
import useHeaderTransition from '../hooks/useHeaderTransition'

interface LayoutProps {
  element: GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement']
}

const Layout = ({ element }: LayoutProps) => {
  const { headerShowing } = useHeaderTransition()

  return (
    <ChakraProvider theme={theme}>
      <>
        <Header showing={headerShowing} />
        <Container
          as="main"
          maxW="75rem"
          flex="1"
          marginTop="4rem"
          centerContent
        >
          <>{element}</>
        </Container>
        <Footer />
      </>
    </ChakraProvider>
  )
}

export default Layout
