import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ListItem from '../components/listItem'
import { List } from '../components/postList/style'
import SEO from '../components/seo'

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title="All Posts" article={false} />
      <List style={{ listStyle: 'none', padding: 0 }}>
        {data.allMdx.nodes.map(({ id, slug, frontmatter, excerpt }) => (
          <ListItem key={id} path={slug} title={frontmatter.title} date={frontmatter.date} preview={excerpt} />
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
          date(formatString: "YYYY.M.D")
          title
        }
        id
        slug
        excerpt
      }
    }
  }
`

export default Home
