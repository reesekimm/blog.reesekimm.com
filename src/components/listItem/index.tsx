import React, { Children, isValidElement } from 'react'
import { Link } from 'gatsby'
import { ArrowRight } from '@styled-icons/heroicons-solid/ArrowRight'
import {
  Container,
  Date,
  Subtitle,
  Title,
  ReadMore,
  TagContainer,
} from './style'
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
    <Container>
      <Date>{date}</Date>
      <div>
        <TagContainer>{tags}</TagContainer>
        <Title>
          <Link to={path}>{title}</Link>
        </Title>
        <Subtitle>{subtitle}</Subtitle>
        <ReadMore>
          <Link to={path}>
            Read more <ArrowRight size="1.6rem" />
          </Link>
        </ReadMore>
      </div>
    </Container>
  )
}

export default ListItem
