import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import { PageHeader, Date, Subtitle, Title, PageBody, TocWrapper, MarkdownWrapper } from '../components/post/style'
import SEO from '../components/seo'

function generateToc(toc) {
  return toc.items.map(({ title, url }) => {
    const href = `#${title}`
    return (
      <li key={url}>
        <a href={href}>{title}</a>
      </li>
    )
  })
}

const BlogPost = ({ data }) => {
  const {
    frontmatter: { title, subtitle, date },
    tableOfContents,
  } = data.mdx

  console.log('[tableOfContents]', tableOfContents)

  return (
    <Layout>
      <SEO title={title} article={true} />
      <PageHeader>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </PageHeader>
      <PageBody>
        <TocWrapper>
          <ul>{generateToc(tableOfContents)}</ul>
        </TocWrapper>
        <MarkdownWrapper>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MarkdownWrapper>
      </PageBody>
    </Layout>
  )
}

export const query = graphql`
  query GetPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        subtitle
      }
      body
      tableOfContents
    }
  }
`

export default BlogPost
