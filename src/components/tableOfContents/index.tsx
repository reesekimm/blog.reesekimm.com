import React, { useState } from 'react'
import { ChevronUp } from '@styled-icons/ionicons-outline/ChevronUp'
import { Container, TocHeader, TocItemList, TocItemLink } from './style'
import { useAppDispatch } from '../../state/hooks'
import { toggleHeaderTransition } from '../../state/appSlice'
import useActiveId from '../../hooks/useActiveId'

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
    <TocItemList>
      {items.map((item) => {
        const href = `#${item.title}`

        return (
          <li key={item.url}>
            <TocItemLink
              href={href}
              onClick={disableHeaderTransition}
              isActive={activeItemId === item.title}
            >
              {item.title}
            </TocItemLink>
            {item.items && generateTocItems(item.items, activeItemId)}
          </li>
        )
      })}
    </TocItemList>
  )
}

export default function TableOfContents({ tocItems }: TableOfContentsProps) {
  const [showing, setShowing] = useState(true)
  const activeItemId = useActiveId(getIds(tocItems ?? []))

  const toggleItems = () => {
    setShowing(!showing)
  }

  return tocItems ? (
    <Container>
      <TocHeader showItems={showing} onClick={toggleItems}>
        Table of Contents
        <ChevronUp size="2.4rem" />
      </TocHeader>
      {showing ? generateTocItems(tocItems, activeItemId ?? '') : null}
    </Container>
  ) : null
}
