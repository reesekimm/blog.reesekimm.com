import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { PageHeader, Date, Subtitle, Title, PageBody, MarkdownWrapper } from './style'
import SEO from '../../components/SEO'
import TableOfContents from '../../components/tableOfContents'

const Post = ({ data: { mdx }, children }) => {
  const {
    frontmatter: { title, subtitle, date },
    tableOfContents,
  } = mdx

  return (
    <Layout>
      <SEO title={title} article={true} />
      <PageHeader>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </PageHeader>
      <PageBody>
        <TableOfContents tocItems={tableOfContents.items} />
        <MarkdownWrapper>{children}</MarkdownWrapper>
      </PageBody>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        subtitle
      }
      tableOfContents
    }
  }
`

export default Post
