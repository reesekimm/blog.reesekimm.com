import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

interface LinkProps {
  children?: React.ReactNode | string
  href: string
}

export default function Link({ children = '', href }: LinkProps) {
  // internal link
  if (href[1] === '/')
    return <GatsbyLink to={href.slice(1, -1)}>{children}</GatsbyLink>

  // on-page link
  if (href.startsWith('#')) return <a href={href}>{children}</a>

  // external link
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
