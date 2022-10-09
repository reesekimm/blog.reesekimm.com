import React, { useState } from 'react'
import { ChevronUp } from '@styled-icons/ionicons-outline/ChevronUp'
import { useAppDispatch } from '../../state/hooks'
import { toggleHeaderTransition } from '../../state/appSlice'
import useActiveId from '../../hooks/useActiveId'
import { Container, Wrap, WrapItem } from '@chakra-ui/react'

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
  const dispatch = useAppDispatch()

  const disableHeaderTransition = () => {
    dispatch(toggleHeaderTransition(false))
  }

  return (
    <Wrap>
      {items.map((item, index) => {
        const href = `#${item.title}`

        return (
          <WrapItem key={item.url || item + '' + index}>
            <Container
              as="a"
              href={href}
              onClick={disableHeaderTransition}
              // isActive={activeItemId === item.title}
            >
              {item.title}
            </Container>
            {item.items && generateTocItems(item.items, activeItemId)}
          </WrapItem>
        )
      })}
    </Wrap>
  )
}

export default function TableOfContents({ tocItems }: TableOfContentsProps) {
  const [showing, setShowing] = useState(true)
  const activeItemId = useActiveId(getIds(tocItems ?? []))

  const toggleItems = () => {
    setShowing(!showing)
  }

  return tocItems ? (
    <Container as="aside">
      <Container as="summary" onClick={toggleItems}>
        Table of Contents
        <ChevronUp size="2.4rem" />
      </Container>
      {showing ? generateTocItems(tocItems, activeItemId ?? '') : null}
    </Container>
  ) : null
}
