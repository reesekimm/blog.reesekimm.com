import { PostFrontmatter } from './post'

export interface ListItemFrontMatter extends PostFrontmatter {
  slug: string
}

export interface ListItem {
  frontmatter: ListItemFrontMatter
  id: string
}

export interface HomeQueryResult {
  allMdx: {
    nodes: ListItem[]
  }
}
