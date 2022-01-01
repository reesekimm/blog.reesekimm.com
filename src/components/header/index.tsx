import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Button, Container, StyledHeader, Title } from './style'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { selectAppState, switchMode } from '../../state/appSlice'

const Header = () => {
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
    <StyledHeader>
      <Container>
        <Title>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </Title>
        <Button onClick={toggleMode}>{mode === 'dark' ? 'Light' : 'Dark'}</Button>
      </Container>
    </StyledHeader>
  )
}

export default Header
