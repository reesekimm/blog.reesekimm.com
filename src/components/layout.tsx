import React from 'react'
import Header from './header'
import Footer from './footer'
import { Container, Flex } from '@chakra-ui/react'
import useHeaderTransition from '../hooks/useHeaderTransition'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { headerShowing } = useHeaderTransition()

  return (
    <Flex direction="column" h="100vh">
      <Header showing={headerShowing} />
      <Container as="main" maxW="45rem" marginTop="4rem" flex="1" centerContent>
        <>{children}</>
      </Container>
      <Footer />
    </Flex>
  )
}

export default Layout
