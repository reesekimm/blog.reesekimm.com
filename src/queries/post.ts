export interface PostFrontmatter {
  date: string
  title: string
  subtitle: string
}

export interface TableOfContents {
  items: Item[]
}

export interface Item extends TableOfContents {
  title: string
  url: string
  items?: Item[]
}

export interface PostQueryResult {
  mdx: {
    frontmatter: PostFrontmatter
    tableOfContents: TableOfContents
  }
}
