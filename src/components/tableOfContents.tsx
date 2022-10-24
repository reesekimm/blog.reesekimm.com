import React from 'react'
import { useAppDispatch } from '../state/hooks'
import { toggleHeaderTransition } from '../state/appSlice'
import useActiveId from '../hooks/useActiveId'
import {
  Container,
  Link,
  ListItem,
  OrderedList,
  useColorMode,
} from '@chakra-ui/react'

interface Item {
  title: string
  url: string
  items?: Item[]
}

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
  const { colorMode } = useColorMode()
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
              color={
                activeItemId === item.title
                  ? colorMode === 'light'
                    ? 'brand.light'
                    : 'brand.dark'
                  : 'gray.400'
              }
              fontWeight={activeItemId === item.title ? 'bold' : 'normal'}
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
      display={['none', 'none', 'block']}
      style={{
        minWidth: '16rem',
        maxWidth: '20rem',
        position: 'sticky',
        alignSelf: 'flex-start',
        top: '6rem',
        left: '2rem',
        order: 0,
      }}
    >
      {generateTocItems(tocItems, activeItemId ?? '')}
    </Container>
  ) : null
}
