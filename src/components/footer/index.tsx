import React from 'react'
import { Container, StyledFooter } from './style'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <>© Reese {new Date().getFullYear()}</>
      </Container>
    </StyledFooter>
  )
}

export default Footer
