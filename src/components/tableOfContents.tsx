import React from 'react'
import {
  Container,
  Link,
  ListItem,
  OrderedList,
  useColorModeValue,
} from '@chakra-ui/react'
import { useAppDispatch } from '../state/hooks'
import { toggleHeaderTransition } from '../state/appSlice'
import useActiveId from '../hooks/useActiveId'
import { Item } from '../types'

interface TableOfContentsProps {
  tocItems: Item[] | undefined
}

function getIds(items: Item[]) {
  let init: string[] = []

  return items.reduce((ids, item) => {
    ids.push(item.title)

    if (item.items) {
      ids.push(...getIds(item.items))
    }

    return ids
  }, init)
}

function generateTocItems(items: Item[], activeItemId: string) {
  const activeColor = useColorModeValue('brand.light', 'brand.dark')
  const dispatch = useAppDispatch()

  const disableHeaderTransition = () => {
    dispatch(toggleHeaderTransition(false))
  }

  return (
    <OrderedList
      display="flex"
      flexDirection="column"
      marginBottom={0}
      style={{ listStyle: 'none' }}
    >
      {items.map((item, index) => {
        const href = `#${item.title}`

        return (
          <ListItem key={item.url || item + '' + index} fontSize="sm" p={0}>
            <Link
              href={href}
              onClick={disableHeaderTransition}
              color={activeItemId === item.title ? activeColor : 'gray.400'}
              fontWeight={activeItemId === item.title ? 'medium' : 'normal'}
              _hover={{ textDecoration: 'none' }}
            >
              {item.title}
            </Link>
            {item.items && generateTocItems(item.items, activeItemId)}
          </ListItem>
        )
      })}
    </OrderedList>
  )
}

export default function TableOfContents({ tocItems }: TableOfContentsProps) {
  const activeItemId = useActiveId(getIds(tocItems ?? []))

  return tocItems ? (
    <Container
      as="aside"
      color="gray.400"
      p={0}
      display={{ sm: 'none', md: 'none', lg: 'none', '2xl': 'block' }}
      style={{
        width: '20rem',
        position: 'fixed',
        alignSelf: 'flex-start',
        top: '16.5rem',
        left: '4rem',
        order: 0,
      }}
    >
      {generateTocItems(tocItems, activeItemId)}
    </Container>
  ) : null
}
