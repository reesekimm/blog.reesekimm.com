export interface Frontmatter {
  date: string
  title: string
  subtitle: string | null
  category: string
  tags: string[]
  slug: string
}

export interface Item {
  title: string
  url: string
  items?: Item[]
}

export interface PostQueryResult {
  mdx: {
    frontmatter: Frontmatter
    tableOfContents: { items: Item[] }
  }
}

export interface Node {
  node: { id: string; frontmatter: Frontmatter }
}

export interface PostListQueryResult {
  allMdx: {
    edges: Node[]
  }
}

export interface CategoryPageContext {
  categoryName: string
  categoryDescription: string
}
