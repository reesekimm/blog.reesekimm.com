import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../../components/layout'
import ListItem from '../../components/listItem'
import {
  PostListQueryResult,
  PostListPageContext,
} from '../../queries/post-list'
import Pagination from '../../components/pagination'
import { PostContainer } from './style'

type PostListProps = Pick<
  PageProps<PostListQueryResult, PostListPageContext>,
  'data' | 'pageContext'
>

const PostList = ({ data, pageContext }: PostListProps) => {
  return (
    <Layout pageTitle="All Posts">
      <PostContainer>
        {data.allMdx.edges.map(
          ({
            node: {
              frontmatter: { date, title, subtitle, slug, tags },
              id,
            },
          }) => (
            <ListItem
              key={id}
              path={`/posts/${slug}`}
              title={title}
              subtitle={subtitle}
              date={date}
              tags={tags}
              clickableTags={true}
            />
          )
        )}
      </PostContainer>
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
            tags
          }
          id
        }
      }
    }
  }
`

export default PostList
