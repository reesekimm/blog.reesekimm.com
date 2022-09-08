import React from 'react'
import { Link, navigate } from 'gatsby'

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

interface ListItemProps {
  path: string
  title: string
  date: string
  subtitle: string
  tags?: string[]
  clickableTags?: boolean
}

const ListItem = ({
  path,
  title,
  date,
  subtitle,
  tags,
  clickableTags,
}: ListItemProps) => {
  const onClickTag = (tag: string) => {
    if (clickableTags) navigate('/tags', { state: { tag } })
  }

  return (
    <Container>
      <Date>{date}</Date>
      <div>
        {tags && (
          <TagContainer>
            {tags.map((tag) => (
              <Tag
                key={tag}
                label={tag}
                selected={false}
                disabled={!clickableTags}
                onClick={() => onClickTag(tag)}
              />
            ))}
          </TagContainer>
        )}
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
