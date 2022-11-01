import React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'

interface SEOProps {
  id?: string
  title?: string
  subtitle?: string
  path?: string
  children?: React.ReactNode
}

const SEO = ({ id, title, subtitle, path, children }: SEOProps) => {
  const { title: blogTitle, description, image, siteUrl } = useSiteMetadata()

  console.log('og image path', `${siteUrl}/og-image/${id}/image.png`)

  const seo = {
    title: title || blogTitle,
    description: subtitle || description,
    image: `${siteUrl}${image}`,
    ogImage:
      path !== '/' && id && path
        ? `${siteUrl}/og-image/${id}/image.png`
        : `${siteUrl}${image}`,
    url: `${siteUrl}${path || ``}`,
  }

  return (
    <>
      <title>
        {title || 'Home'} | {blogTitle}
      </title>
      <meta name="description" content={seo.description} />
      <meta name="og:image" content={seo.ogImage} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="image/png" />
      <meta name="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={seo.ogImage} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:url" content={seo.url} />
      {children}
    </>
  )
}

export default SEO
