import React from 'react'
import { Link } from 'gatsby'
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'
import useSiteMetadata from '../../hooks/useSiteMetadata'

interface HeaderProps {
  showing: boolean
}

export const Header = ({ showing }: HeaderProps) => {
  const { title } = useSiteMetadata()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      as="header"
      alignItems="center"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      p="0.6rem 1rem"
      position="fixed"
      w="100%"
      left={0}
      transform={showing ? 'translateY(0)' : 'translateY(-5rem)'}
      transition="transform 0.3s"
      zIndex={10}
      boxShadow={
        colorMode === 'light'
          ? '0 4px 12px 0 rgb(0 0 0 / 3%)'
          : '0 4px 12px 0 rgb(255 255 255 / 3%)'
      }
    >
      <Box zIndex={10}>
        <Heading as="h2" size="md" p={0}>
          <Link to="/">{title}</Link>
        </Heading>
      </Box>
      <Spacer />
      <IconButton
        icon={
          <MoonIcon
            w={5}
            h={5}
            color={colorMode === 'light' ? 'gray.800' : 'white'}
          />
        }
        aria-label="toggle mode"
        variant="unstyled"
        onClick={toggleColorMode}
      />
    </Flex>
  )
}

export default Header
