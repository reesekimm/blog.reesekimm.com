import React, { useState } from 'react'
import { Heading, Link } from '@chakra-ui/react'
import { Link45deg } from '@styled-icons/bootstrap/Link45deg'

interface LinkedHeadingProps {
  children: string
  tag: 'h2' | 'h3' | 'h4' | 'h5'
}

const Size = {
  h2: 'lg',
  h3: 'md',
  h4: 'sm',
  h5: 'xsm',
}

function LinkedHeading({ children, tag }: LinkedHeadingProps) {
  const href = `#${children}`

  const [showLinkIcon, setShowLinkIcon] = useState(false)

  const onHover = () => {
    setShowLinkIcon(true)
  }

  const onLeave = () => {
    setShowLinkIcon(false)
  }

  return (
    <Heading as={tag} id={children} size={Size[tag]}>
      <Link
        href={href}
        color="gray.800"
        _hover={{ textDecoration: 'none' }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {children}
        {showLinkIcon && <Link45deg size="1.4rem" color="#A0AEC0" />}
      </Link>
    </Heading>
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
