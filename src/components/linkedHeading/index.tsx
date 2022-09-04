import React from 'react'
import { Link45deg } from '@styled-icons/bootstrap/Link45deg'
import { Container } from './style'

interface LinkedHeadingProps {
  children: string
  tag: 'h2' | 'h3' | 'h4' | 'h5'
}

function LinkedHeading({ children, tag }: LinkedHeadingProps) {
  const href = `#${children}`

  return (
    <Container as={tag} id={children}>
      <a href={href}>
        {children}
        <Link45deg size="2.4rem" />
      </a>
    </Container>
  )
}

export default {
  h2: (props: { children: string }) => (
    <LinkedHeading tag="h2">{props.children}</LinkedHeading>
  ),
  h3: (props: { children: string }) => (
    <LinkedHeading tag="h3">{props.children}</LinkedHeading>
  ),
  h4: (props: { children: string }) => (
    <LinkedHeading tag="h4">{props.children}</LinkedHeading>
  ),
  h5: (props: { children: string }) => (
    <LinkedHeading tag="h5">{props.children}</LinkedHeading>
  ),
}
