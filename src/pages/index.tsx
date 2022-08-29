import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ListItem from '../components/ListItem'
import { List } from '../components/PostList/style'
import SEO from '../components/SEO'

const Home = ({ data }) => {
  return (
    <Layout pageTitle="All Posts">
      <SEO title="All Posts" article={false} />
      <List style={{ listStyle: 'none', padding: 0 }}>
        {data.allMdx.nodes.map(({ id, slug, frontmatter }) => (
          <ListItem
            key={id}
            path={slug}
            title={frontmatter.title}
            subtitle={frontmatter.subtitle}
            date={frontmatter.date}
          />
        ))}
      </List>
    </Layout>
  )
}

export const query = graphql`
  query getPosts {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          subtitle
        }
        id
        slug
        excerpt
      }
    }
  }
`

export default Home
