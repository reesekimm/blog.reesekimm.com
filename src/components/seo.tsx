import React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'

interface SEOProps {
  title?: string
  subtitle?: string
  path?: string
  children?: React.ReactNode
}

const SEO = ({ title, subtitle, path, children }: SEOProps) => {
  const { title: blogTitle, description, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: title ? `${blogTitle} | ${title}` : blogTitle,
    description: subtitle || description,
    image: `${siteUrl}${image}`,
    ogImage:
      path === '/' ? `${siteUrl}${image}` : `${siteUrl}${path}/og-image.png`,
    url: `${siteUrl}${path || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="og:image" content={seo.ogImage} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:type" content="image/png" />
      <meta name="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={seo.ogImage} />
      <meta name="twitter:url" content={seo.url} />
      {children}
    </>
  )
}

export default SEO
