import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Heading, Spacer, useColorMode } from '@chakra-ui/react'
import useSiteMetadata from '../hooks/useSiteMetadata'

interface HeaderProps {
  showing: boolean
}

export const Header = ({ showing }: HeaderProps) => {
  const { title } = useSiteMetadata()
  const { colorMode } = useColorMode()

  return (
    <Flex
      as="header"
      alignItems="center"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      p={4}
      position="fixed"
      w="100%"
      left={0}
      transform={showing ? 'translateY(0)' : 'translateY(-5rem)'}
      transition="transform 0.3s"
      zIndex={10}
      boxShadow={colorMode === 'light' ? 'light' : 'dark'}
    >
      <Box zIndex={10}>
        <Heading as="h2" size="md" p={0}>
          <Link to="/" color="brand.primary">
            {title}
          </Link>
        </Heading>
      </Box>
      <Spacer />
    </Flex>
  )
}

export default Header
