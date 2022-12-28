import React from 'react'
import { graphql, PageProps } from 'gatsby'
import ListItem from '../components/listItem'
import { PostListQueryResult } from '../queries/post-list'
import { Container, Wrap } from '@chakra-ui/react'
import SEO from '../components/seo'
import Layout from '../components/layout'

type PostListProps = Pick<PageProps<PostListQueryResult>, 'data'>

const CategoryPageTemplate = ({ data, pageContext }: PostListProps) => {
  const { categoryDescription } = pageContext

  return (
    <Layout>
      <Container
        marginBottom="1px solid gray.500"
        p={['1rem', '3rem']}
        fontWeight="bold"
        centerContent
      >
        {categoryDescription}
      </Container>
      <Wrap
        as="ol"
        w="100%"
        paddingTop="1rem"
        direction="column"
        shouldWrapChildren
      >
        {data.allMdx.edges.map(
          ({
            node: {
              frontmatter: { date, title, category, slug },
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
  query ($categoryName: String!) {
    allMdx(
      filter: { frontmatter: { category: { eq: $categoryName } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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

export default CategoryPageTemplate

export const Head = ({ location, pageContext }) => {
  return <SEO path={location.pathname} ogImage={pageContext.ogImage} />
}
