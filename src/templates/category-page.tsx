import React from 'react'
import { graphql, PageProps } from 'gatsby'
import ListItem from '../components/listItem'
import { CategoryPageContext, PostListQueryResult } from '../types'
import { Container, Heading, Wrap } from '@chakra-ui/react'
import SEO from '../components/seo'
import Layout from '../components/layout'

type CategoryPageProps = Pick<
  PageProps<PostListQueryResult, CategoryPageContext>,
  'data' | 'pageContext'
>

const CategoryPage = ({ data, pageContext }: CategoryPageProps) => {
  const { categoryDescription } = pageContext

  return (
    <Layout>
      <Container
        as="section"
        role="banner"
        marginBottom="1px solid gray.500"
        p={['1rem', '3rem']}
        fontWeight="bold"
        centerContent
      >
        <Heading as="h3" fontSize="md">
          {categoryDescription}
        </Heading>
      </Container>
      <Wrap w="100%" paddingTop="1rem" direction="column" shouldWrapChildren>
        {data.allMdx.edges.map(
          ({
            node: {
              id,
              frontmatter: { date, title, category, slug },
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

export default CategoryPage

export const Head = ({ location, pageContext }) => {
  return <SEO path={location.pathname} ogImage={pageContext.ogImage} />
}
