import React from 'react'
import { Link } from 'gatsby'
import { ArrowRight } from '@styled-icons/heroicons-solid/ArrowRight'
import { Container, Date, Subtitle, Title, ReadMore } from './style'

interface ListItemProps {
  path: string
  title: string
  date: string
  subtitle: string
}

const ListItem = ({ path, title, date, subtitle }: ListItemProps) => {
  return (
    <Container>
      <Date>{date}</Date>
      <div>
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
