import React from 'react'
import { Link } from 'gatsby'
import { LightMode } from '@styled-icons/material-rounded/LightMode'
import { Nightlight } from '@styled-icons/material-rounded/Nightlight'
import { Button, Container, StyledHeader, Title } from './style'
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
    <StyledHeader showing={showing}>
      <Container>
        <Title>
          <Link to="/">{title}</Link>
        </Title>
        <Button aria-label="theme" onClick={changeTheme}>
          {theme === 'dark' ? (
            <LightMode size="2rem" aria-label="light-mode" />
          ) : (
            <Nightlight size="2rem" aria-label="dark-mode" />
          )}
        </Button>
      </Container>
    </StyledHeader>
  )
}

export default Header
