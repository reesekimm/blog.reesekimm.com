import React, { useState } from 'react'
import { Heading, Link } from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'

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
        _hover={{ textDecoration: 'none' }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {children}
        {showLinkIcon && (
          <LinkIcon w={4} h={4} marginLeft="1.5" color="gray.400" />
        )}
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
