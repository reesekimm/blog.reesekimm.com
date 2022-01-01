import React from 'react'
import { Link } from 'gatsby'
import { Container, Date, Preview, Title } from './style'

interface ListItemProps {
  path: string
  title: string
  date: string
  preview: string
}

const ListItem = ({ path, title, date, preview }: ListItemProps) => {
  return (
    <Container>
      <Link to={`/${path}`}>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Preview>{preview}</Preview>
      </Link>
    </Container>
  )
}

export default ListItem
