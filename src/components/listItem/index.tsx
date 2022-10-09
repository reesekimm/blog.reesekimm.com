import React, { Children, isValidElement } from 'react'
import { Link } from 'gatsby'
import { Button, Container, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import { ArrowRight } from '@styled-icons/heroicons-solid/ArrowRight'
import Tag from '../tag'

function getTags(children: React.ReactNode) {
  const TagType = (<Tag label="" />).type
  return Children.toArray(children).filter(
    (child) => isValidElement(child) && child.type === TagType
  )
}

interface ListItemProps {
  path: string
  title: string
  date: string
  subtitle: string
  children?: React.ReactNode
}

const ListItem = ({ path, title, date, subtitle, children }: ListItemProps) => {
  const tags = getTags(children)

  return (
    <WrapItem>
      <Container as="time">{date}</Container>
      <Container>
        <Wrap>{tags}</Wrap>
        <Heading as="h2">
          <Link to={path}>{title}</Link>
        </Heading>
        <Heading as="h3">{subtitle}</Heading>
        <Button>
          <Link to={path}>
            Read more <ArrowRight size="1.6rem" />
          </Link>
        </Button>
      </Container>
    </WrapItem>
  )
}

export default ListItem
