import React from 'react'
import { Tag as ChakraTag, WrapItem } from '@chakra-ui/react'

interface TagProps {
  label: string
  selected?: boolean
  onClick?: () => void
}

const Tag = ({ label, selected = false, onClick }: TagProps) => {
  return (
    <WrapItem cursor={onClick ? 'pointer' : 'default'} p={0}>
      <ChakraTag
        borderRadius="full"
        variant={selected ? 'solid' : 'outline'}
        onClick={onClick}
      >
        {label}
      </ChakraTag>
    </WrapItem>
  )
}

export default Tag
