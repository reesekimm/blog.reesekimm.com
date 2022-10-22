import React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import useSiteMetadata from '../../hooks/useSiteMetadata'

export const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <Flex as="header" alignItems="center" p="4">
      <Box>
        <Heading as="h2" size="md" p={0}>
          <Link to="/">{title}</Link>
        </Heading>
      </Box>
      <Spacer />
    </Flex>
  )
}

export default Header
