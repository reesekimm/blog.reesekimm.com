import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../../components/layout'
import ListItem from '../../components/listItem'
import { PostListQueryResult } from '../../queries/post-list'

const PostList = ({ data, pageContext }: PageProps<PostListQueryResult>) => {
  return (
    <Layout pageTitle="All Posts">
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {data.allMdx.edges.map(
          ({
            node: {
              frontmatter: { date, title, subtitle, slug },
              id,
            },
          }) => (
            <ListItem
              key={id}
              path={`/posts/${slug}`}
              title={title}
              subtitle={subtitle}
              date={date}
            />
          )
        )}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query ($limit: Int!) {
    allMdx(limit: $limit, sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            subtitle
            slug
          }
          id
        }
      }
    }
  }
`

export default PostList
