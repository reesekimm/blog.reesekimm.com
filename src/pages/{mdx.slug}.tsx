import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import { Container, Date, Title } from '../components/post/style'
import SEO from '../components/seo'

const BlogPost = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, date },
    },
  } = data

  return (
    <Layout>
      <SEO title={title} article={true} />
      <Container>
        <Date>{date}</Date>
        <Title>{title}</Title>
      </Container>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query GetPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY.M.D")
      }
      body
    }
  }
`

export default BlogPost
