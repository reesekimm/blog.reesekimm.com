import React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'

interface SEOProps {
  title?: string
  subtitle?: string
  path?: string
  ogImagePath?: string
  children?: React.ReactNode
}

const SEO = ({ title, subtitle, path, ogImagePath, children }: SEOProps) => {
  const { title: blogTitle, description, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || blogTitle,
    description: subtitle || description,
    image: `${siteUrl}${ogImagePath}`,
    url: `${siteUrl}${path || ``}`,
  }

  return (
    <>
      <title>
        {title || 'Home'} | {blogTitle}
      </title>
      <meta name="description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="image/png" />
      <meta name="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:url" content={seo.url} />
      {children}
    </>
  )
}

export default SEO
