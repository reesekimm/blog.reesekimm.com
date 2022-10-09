import React from 'react'
import { Tag as ChakraTag } from '@chakra-ui/react'

interface TagProps {
  label: string
  selected?: boolean
  onClick?: () => void
}

const Tag = ({ label, selected = false, onClick }: TagProps) => {
  return <ChakraTag onClick={onClick}>{label}</ChakraTag>
}

export default Tag
