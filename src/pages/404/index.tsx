import React from 'react'
import { Link } from 'gatsby'
import { Container } from './style'

const NotFound = () => {
  return (
    <Container>
      <h2>Page not found</h2>
      <Link to="/">Back to home</Link>
    </Container>
  )
}

export default NotFound
