import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import { Container } from './style'

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <h2>Page not found</h2>
        <Link to="/">Back to home</Link>
      </Container>
    </Layout>
  )
}

export default NotFound
