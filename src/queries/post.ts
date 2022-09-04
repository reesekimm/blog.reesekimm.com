export interface PostFrontmatter {
  date: string
  title: string
  subtitle: string
}

export interface TableOfContents {
  title: string
  url: string
  items?: TableOfContents[]
}

export interface PostQueryResult {
  mdx: {
    frontmatter: PostFrontmatter
    tableOfContents: TableOfContents
  }
}
