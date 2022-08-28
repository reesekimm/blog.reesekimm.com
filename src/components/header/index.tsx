import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { LightMode } from '@styled-icons/material-rounded/LightMode'
import { Nightlight } from '@styled-icons/material-rounded/Nightlight'
import { Button, Container, StyledHeader, Title } from './style'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { selectAppState, switchMode } from '../../state/appSlice'

interface HeaderProps {
  showing: boolean
}

const Header = ({ showing }: HeaderProps) => {
  const data = useStaticQuery(graphql`
    query getSiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const dispatch = useAppDispatch()
  const { mode } = useAppSelector(selectAppState)

  const toggleMode = () => {
    dispatch(switchMode(mode === 'dark' ? 'light' : 'dark'))
  }

  return (
    <StyledHeader showing={showing}>
      <Container>
        <Title>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </Title>
        <Button onClick={toggleMode}>{mode === 'dark' ? <LightMode size="2rem" /> : <Nightlight size="2rem" />}</Button>
      </Container>
    </StyledHeader>
  )
}

export default Header
