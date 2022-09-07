import React from 'react'
import { Link } from 'gatsby'
import { Tag } from '@chakra-ui/react'
import { ArrowRight } from '@styled-icons/heroicons-solid/ArrowRight'
import { Hashtag } from '@styled-icons/heroicons-solid/Hashtag'
import { Container, Date, Subtitle, Title, ReadMore, Tags } from './style'

interface ListItemProps {
  path: string
  title: string
  date: string
  subtitle: string
  tags?: string[]
}

const ListItem = ({ path, title, date, subtitle, tags }: ListItemProps) => {
  return (
    <Container>
      <Date>{date}</Date>
      <div>
        <span>
          {tags &&
            tags.map((tag) => (
              <Tag size="lg" borderRadius="full">
                <Hashtag size="1.5rem" />
                {tag}
              </Tag>
            ))}
        </span>
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
