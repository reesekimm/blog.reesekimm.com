import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import ListItem from '../components/listItem'

const Home = () => {
  const data = useStaticQuery(graphql`
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
  `)

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

export default Home
