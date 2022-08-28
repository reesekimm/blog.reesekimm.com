import React, { useState } from 'react'
import { ChevronUp } from '@styled-icons/ionicons-outline/ChevronUp'
import { Container, TocHeader, TocItem } from './style'
import { useAppDispatch } from '../../state/hooks'
import { toggleHeaderTransition } from '../../state/appSlice'

interface Item {
  title: string
  url: string
  items?: Item[]
}

interface TableOfContentsProps {
  tocItems: Item[] | undefined
}

function generateTocItems(items: Item[]) {
  const dispatch = useAppDispatch()

  const disableHeaderTransition = () => {
    dispatch(toggleHeaderTransition(false))
  }

  return (
    <TocItem>
      {items.map((item) => {
        const href = `#${item.title}`
        return (
          <li key={item.url}>
            <a href={href} onClick={disableHeaderTransition}>
              {item.title}
            </a>
            {item.items && generateTocItems(item.items)}
          </li>
        )
      })}
    </TocItem>
  )
}

export default function TableOfContents({ tocItems }: TableOfContentsProps) {
  const [showing, setShowing] = useState(true)

  const toggleItems = () => {
    setShowing(!showing)
  }

  return (
    <Container>
      <TocHeader showItems={showing} onClick={toggleItems}>
        Table of Contents
        <ChevronUp size="2.4rem" />
      </TocHeader>
      {showing && tocItems ? generateTocItems(tocItems) : null}
    </Container>
  )
}
