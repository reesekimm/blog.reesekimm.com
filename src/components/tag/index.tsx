import React from 'react'
import { Container } from './style'

interface TagProps {
  label: string
  selected: boolean
  disabled?: boolean
  onClick?: () => void
}

const Tag = ({ label, selected, disabled = true, onClick }: TagProps) => {
  return (
    <Container selected={selected} disabled={disabled} onClick={onClick}>
      {label}
    </Container>
  )
}

export default Tag
