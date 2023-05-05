import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Link, Text } from '@chakra-ui/react'
import Layout from '../components/layout'
import { PostListQueryResult } from '../types'
import SEO from '../components/seo'

type HomeProps = Pick<PageProps<PostListQueryResult>, 'data'>

const Home = ({ data }: HomeProps) => {
  if (!data) return null

  const recentPosts = data.allMdx.edges

  return (
    <Layout>
      <Text fontWeight="bold" w="100%" marginTop="2rem">
        Operations
      </Text>
      <code className="operation">
        <div>{`query {`}</div>
        <div style={{ paddingLeft: '1rem' }}>
          {`allPosts(sort: { fields: date, order: DESC }, limit: 5) {`}
        </div>
        <div style={{ paddingLeft: '2rem' }}>date</div>
        <div style={{ paddingLeft: '2rem' }}>title</div>
        <div style={{ paddingLeft: '1rem' }}>{`}`}</div>
        <div>{`}`}</div>
      </code>
      <Text fontWeight="bold" w="100%" marginTop="2rem">
        Response
      </Text>
      <code>
        <div>{`{`}</div>
        <div style={{ paddingLeft: '1rem' }}>{`"data": [`}</div>
        {recentPosts.map(
          ({
            node: {
              id,
              frontmatter: { title, date, category, slug },
            },
          }) => (
            <div style={{ paddingLeft: '2rem' }} key={id}>
              <Link
                href={`/${category + slug}`}
                _hover={{ textDecoration: 'none' }}
              >
                <div>{`{`}</div>
                <div style={{ paddingLeft: '1rem' }}>{`"date": "${date}"`}</div>
                <div style={{ paddingLeft: '1rem' }}>
                  <span>{`"title": `}</span>"
                  <span
                    className="title"
                    data-testid="title"
                  >{`${title}`}</span>
                  "
                </div>
                <div>{`}`}</div>
              </Link>
            </div>
          )
        )}
        <div style={{ paddingLeft: '1rem' }}>{`]`}</div>
        <div>{`}`}</div>
      </code>
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

export const Head = ({ location }) => {
  return <SEO title="홈" path={location.pathname} />
}
