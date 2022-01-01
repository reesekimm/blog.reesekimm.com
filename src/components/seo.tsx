import React from 'react'

import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  title: string
  article: boolean
}

const SEO = ({ title, article }: SEOProps) => {
  const { pathname } = useLocation()
  const {
    site: {
      siteMetadata: { defaultTitle, titleTemplate, siteUrl },
    },
  } = useStaticQuery(query)

  const seo = {
    title: title || defaultTitle,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        siteUrl
      }
    }
  }
`
