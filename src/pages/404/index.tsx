import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 24rem;

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`

const NotFound = () => {
  return (
    <Container>
      <h2>Page not found</h2>
      <Link to="/">Back to home</Link>
    </Container>
  )
}

export default NotFound
