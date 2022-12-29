import React from 'react'
import { graphql } from 'gatsby'
import ListItem from '../components/listItem'
import Layout from '../components/layout'
import { Text, Wrap } from '@chakra-ui/react'

const Home = ({ data }) => {
  if (!data) return null

  const recentPosts = data.allMdx.edges

  return (
    <Layout>
      <Wrap
        w="100%"
        p={['1rem 0', '2rem 0']}
        borderBottom="1px solid lightgray"
      >
        <Text>
          웹 프론트엔드 개발을 합니다. <br /> 사용자 경험을 좌우할 수 있는
          디테일을 중요하게 생각합니다.
        </Text>
      </Wrap>
      <Text fontWeight="bold" w="100%" padding="2rem 0 1rem">
        최신글
      </Text>
      <Wrap as="ol" w="100%" direction="column" shouldWrapChildren>
        {recentPosts.map(
          ({
            node: {
              frontmatter: { title, date, category, slug },
              id,
            },
          }) => (
            <ListItem
              key={id}
              path={`/${category + slug}`}
              title={title}
              date={date}
            />
          )
        )}
      </Wrap>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 5) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMM D, YYYY")
            title
            category
            slug
          }
        }
      }
    }
  }
`

export default Home
