import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import useSiteMetadata from '../../hooks/useSiteMetadata'

interface HeaderProps {
  showing: boolean
}

export const Header = ({ showing }: HeaderProps) => {
  const { title } = useSiteMetadata()

  return (
    <Flex
      as="header"
      alignItems="center"
      bg="white"
      p="4"
      position="fixed"
      w="100%"
      left={0}
      transform={showing ? 'translateY(0)' : 'translateY(-5rem)'}
      transition="transform 0.3s"
      zIndex={10}
      boxShadow="sm"
    >
      <Box zIndex={10}>
        <Heading as="h2" size="md" p={0}>
          <Link to="/">{title}</Link>
        </Heading>
      </Box>
      <Spacer />
    </Flex>
  )
}

export default Header
