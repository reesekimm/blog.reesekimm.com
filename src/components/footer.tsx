import React from 'react'
import { Center, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.700')

  return (
    <Center as="footer" p="2" marginTop="4rem" bg={bgColor}>
      © Reese {new Date().getFullYear()}
    </Center>
  )
}

export default Footer
