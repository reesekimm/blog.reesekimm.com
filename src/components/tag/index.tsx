import React from 'react'
import { Container } from './style'

interface TagProps {
  label: string
  selected?: boolean
  onClick?: () => void
}

const Tag = ({ label, selected = false, onClick }: TagProps) => {
  return (
    <Container selected={selected} disabled={!onClick} onClick={onClick}>
      {label}
    </Container>
  )
}

export default Tag
