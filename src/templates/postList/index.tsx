import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../../components/layout'
import ListItem from '../../components/listItem'
import {
  PostListQueryResult,
  PostListPageContext,
} from '../../queries/post-list'
import Pagination from '../../components/pagination'

type PostList = Pick<
  PageProps<PostListQueryResult, PostListPageContext>,
  'data' | 'pageContext'
>

const PostList = ({ data, pageContext }: PostList) => {
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
      <Pagination
        numOfPages={pageContext.numOfPages}
        currentPage={pageContext.currentPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allMdx(
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
