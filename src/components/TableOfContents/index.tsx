import React from 'react'
import { Container } from './style'

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
  return <Container>{tocItems ? generateItems(tocItems) : null}</Container>
}
