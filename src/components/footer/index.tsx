import React from 'react'
import { Center } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Center as="footer" p="4" marginTop="4rem">
      © Reese {new Date().getFullYear()}
    </Center>
  )
}

export default Footer
