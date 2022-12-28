import React from 'react'
import { Link } from 'gatsby'
import {
  Box,
  Container,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import useSiteMetadata from '../hooks/useSiteMetadata'

interface HeaderProps {
  showing: boolean
}

export const Header = ({ showing }: HeaderProps) => {
  const { categories } = useSiteMetadata()

  const { colorMode, toggleColorMode } = useColorMode()
  const boxShadowMode = useColorModeValue('light', 'dark')
  const modeIcon = useColorModeValue(
    <MoonIcon w={5} h={5} color="gray.800" />,
    <SunIcon w={5} h={5} color="white" />
  )
  const modeAriaLabel = useColorModeValue('dark-mode', 'light-mode')

  return (
    <Container
      as="header"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      p="1rem"
      position="fixed"
      w="100%"
      maxW="initial"
      left={0}
      transform={showing ? 'translateY(0)' : 'translateY(-5rem)'}
      transition="transform 0.3s"
      zIndex={10}
      boxShadow={boxShadowMode}
      centerContent
    >
      <Box as="nav" maxW="45rem" zIndex={10}>
        {categories.map(({ displayText, url }) => (
          <Link
            key={url}
            to={url}
            style={{
              margin: '.5rem',
              fontWeight: 'bold',
              color: `${
                colorMode === 'light' ? '#1A202C' : 'rgba(255, 255, 255, 0.92)'
              }`,
            }}
          >
            {displayText}
          </Link>
        ))}
      </Box>
      <IconButton
        icon={modeIcon}
        aria-label={modeAriaLabel}
        variant="unstyled"
        onClick={toggleColorMode}
        position="absolute"
        top=".5rem"
        right=".5rem"
      />
    </Container>
  )
}

export default Header
