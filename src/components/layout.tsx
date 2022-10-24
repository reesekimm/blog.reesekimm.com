import React from 'react'
import type { GatsbyBrowser, GatsbySSR } from 'gatsby'
import Header from './header'
import Footer from './footer'
import SEO from './seo'
import { ChakraProvider, Container, LightMode } from '@chakra-ui/react'
import theme from '../styles/theme'
import useHeaderTransition from '../hooks/useHeaderTransition'

interface LayoutProps {
  element: GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement']
}

const Layout = ({ element }: LayoutProps) => {
  const { headerShowing } = useHeaderTransition()

  return (
    <ChakraProvider theme={theme}>
      {/* flash 이슈에 대한 임시 해결책으로 Light mode 고정 */}
      <LightMode>
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
      </LightMode>
    </ChakraProvider>
  )
}

export default Layout

export const Head = () => <SEO />
