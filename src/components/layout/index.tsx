import React from 'react'
import type { GatsbyBrowser, GatsbySSR } from 'gatsby'
import Header from '../header'
import Footer from '../footer'
import SEO from '../seo'
import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from '../../styles/theme'

interface LayoutProps {
  element: GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement']
}

const Layout = ({ element }: LayoutProps) => {
  return (
    <ChakraProvider theme={theme}>
      <>
        <Header />
        <Container as="main" maxW="75rem" flex="1" centerContent>
          <>{element}</>
        </Container>
        <Footer />
      </>
    </ChakraProvider>
  )
}

export default Layout

export const Head = () => <SEO />
