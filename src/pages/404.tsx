import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { NotFound } from '../components/NotFound/style'
import SEO from '../components/SEO'

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Not Found" article={false} />
      <NotFound>
        <h2>Page not found</h2>
        <Link to="/">Back to home</Link>
      </NotFound>
    </Layout>
  )
}

export default NotFoundPage
