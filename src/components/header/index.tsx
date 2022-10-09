import React from 'react'
import { Link } from 'gatsby'
import { Flex, Heading, IconButton, Spacer } from '@chakra-ui/react'
import { LightMode } from '@styled-icons/material-rounded/LightMode'
import { Nightlight } from '@styled-icons/material-rounded/Nightlight'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { selectAppState, toggleTheme } from '../../state/appSlice'
import useSiteMetadata from '../../hooks/useSiteMetadata'

interface HeaderProps {
  showing: boolean
}

export const Header = ({ showing }: HeaderProps) => {
  const { theme } = useAppSelector(selectAppState)
  const { title } = useSiteMetadata()

  const dispatch = useAppDispatch()

  const changeTheme = () => {
    dispatch(toggleTheme(theme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Flex as="header" top={showing ? '0' : '-10rem'}>
      <Heading as="h2" size="2xl">
        <Link to="/">{title}</Link>
      </Heading>
      <Spacer />
      <IconButton
        aria-label="theme"
        onClick={changeTheme}
        icon={
          theme === 'dark' ? (
            <LightMode size="2rem" aria-label="light-mode" />
          ) : (
            <Nightlight size="2rem" aria-label="dark-mode" />
          )
        }
      />
    </Flex>
  )
}

export default Header
