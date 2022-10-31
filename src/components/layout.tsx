import React from 'react'
import Header from './header'
import Footer from './footer'
import { Container } from '@chakra-ui/react'
import useHeaderTransition from '../hooks/useHeaderTransition'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { headerShowing } = useHeaderTransition()

  return (
    <>
      <Header showing={headerShowing} />
      <Container as="main" maxW="75rem" flex="1" marginTop="4rem" centerContent>
        <>{children}</>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
