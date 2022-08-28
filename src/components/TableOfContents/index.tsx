import React, { useState } from 'react'
import { ChevronUp } from '@styled-icons/ionicons-outline/ChevronUp'
import { Container, TocHeader } from './style'

interface Item {
  title: string
  url: string
  items?: Item[]
}

interface TableOfContentsProps {
  tocItems: Item[] | undefined
}

function generateItems(items: Item[]) {
  return (
    <ol style={{ listStyle: 'none', padding: 0 }}>
      {items.map((item) => {
        const href = `#${item.title}`
        return (
          <li key={item.url}>
            <a href={href}>{item.title}</a>
            {item.items && generateItems(item.items)}
          </li>
        )
      })}
    </ol>
  )
}

export default function TableOfContents({ tocItems }: TableOfContentsProps) {
  const [showing, setShowing] = useState(true)

  const toggleItems = () => {
    setShowing(!showing)
  }

  return (
    <Container>
      <TocHeader showItems={showing}>
        Table of Contents
        <ChevronUp size="2.4rem" onClick={toggleItems} />
      </TocHeader>
      {showing && tocItems ? generateItems(tocItems) : null}
    </Container>
  )
}
