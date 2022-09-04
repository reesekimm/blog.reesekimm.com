import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/layout'
import ListItem from '../components/listItem'
import { HomeQueryResult } from '../queries/home'

const Home = ({ data }: PageProps<HomeQueryResult>) => {
  return (
    <Layout pageTitle="All Posts">
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {data.allMdx.nodes.map(({ id, frontmatter: { date, title, subtitle, slug } }) => (
          <ListItem key={id} path={`/posts/${slug}`} title={title} subtitle={subtitle} date={date} />
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
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
`

export default Home
