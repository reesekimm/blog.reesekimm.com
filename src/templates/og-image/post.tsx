import React from 'react'
import useSiteMetadata from '../../hooks/useSiteMetadata'

const PostOgImage = ({ pageContext }) => {
  const { title: blogTitle, author } = useSiteMetadata()
  const { date, title, subtitle } = pageContext

  return (
    <>
      <h1>{blogTitle}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <span>
        @{author} - {date}{' '}
      </span>
    </>
  )
}

export default PostOgImage
