import { PostFrontmatter } from './post'

export interface ListItemFrontmatter extends PostFrontmatter {
  slug: string
}

export interface ListItem {
  node: { frontmatter: ListItemFrontmatter; id: string }
}

export interface PostListQueryResult {
  allMdx: {
    edges: ListItem[]
  }
}

export interface PostListPageContext {
  numOfPages: number
  currentPage: number
}
