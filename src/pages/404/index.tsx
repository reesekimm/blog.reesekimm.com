import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import { NotFound } from './style'

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFound>
        <h2>Page not found</h2>
        <Link to="/">Back to home</Link>
      </NotFound>
    </Layout>
  )
}

export default NotFoundPage
