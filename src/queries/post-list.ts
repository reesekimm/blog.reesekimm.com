import { PostFrontmatter } from './post'

export interface ListItemFrontmatter extends PostFrontmatter {
  slug: string
}

export interface ListItem {
  node: { frontmatter: ListItemFrontmatter; id: string }
}

export interface Edge {
  node: {
    id: string
    frontmatter: ListItemFrontmatter
  }
}

export interface TagData {
  fieldValue: string
  totalCount: number
  edges: Edge[]
}

export interface PostListQueryResult {
  allMdx: {
    edges: ListItem[]
    group: TagData[]
  }
}

export interface PostListPageContext {
  numOfPages: number
  currentPage: number
}
