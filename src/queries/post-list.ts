import { PostFrontmatter } from './post'

export interface ListItemFrontMatter extends PostFrontmatter {
  slug: string
}

export interface ListItem {
  node: { frontmatter: ListItemFrontMatter; id: string }
}

export interface PostListQueryResult {
  allMdx: {
    edges: ListItem[]
  }
}
