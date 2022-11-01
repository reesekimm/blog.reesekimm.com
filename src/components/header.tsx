import React from 'react'
import { Link } from 'gatsby'
import {
  Box,
  Flex,
  Heading,
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
  const { title } = useSiteMetadata()

  const { colorMode, toggleColorMode } = useColorMode()
  const boxShadowMode = useColorModeValue('light', 'dark')
  const modeIcon = useColorModeValue(
    <MoonIcon w={5} h={5} color="gray.800" />,
    <SunIcon w={5} h={5} color="white" />
  )
  const modeAriaLabel = useColorModeValue('dark-mode', 'light-mode')

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
      boxShadow={boxShadowMode}
    >
      <Box zIndex={10}>
        <Heading as="h2" size="md" p={0}>
          <Link to="/" color="brand.primary">
            {title}
          </Link>
        </Heading>
      </Box>
      <Spacer />
      <IconButton
        icon={modeIcon}
        aria-label={modeAriaLabel}
        variant="unstyled"
        onClick={toggleColorMode}
      />
    </Flex>
  )
}

export default Header
