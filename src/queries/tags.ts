import { ListItemFrontmatter } from './post-list'

export interface Edge {
  id: string
  node: {
    frontmatter: ListItemFrontmatter
  }
}

export interface TagData {
  fieldValue: string
  totalCount: number
  edges: Edge[]
}

export interface TagsQueryResult {
  allMdx: {
    group: TagData[]
  }
}
