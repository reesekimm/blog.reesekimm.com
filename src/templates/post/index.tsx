import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../../components/layout'
import TableOfContents from '../../components/tableOfContents'
import { PostQueryResult } from '../../queries/post'
import {
  Date,
  MarkdownWrapper,
  PageBody,
  PageHeader,
  Subtitle,
  Title,
} from './style'

const Post = ({ data, children }: PageProps<PostQueryResult>) => {
  const {
    frontmatter: { title, subtitle, date },
    tableOfContents,
  } = data.mdx

  return (
    <Layout>
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
