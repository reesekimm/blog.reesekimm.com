import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import TableOfContents from '../../components/tableOfContents'
import Codeblock from '../../components/codeblock'
import Link from '../../components/link'
import LinkedHeading from '../../components/linkedHeading'
import { PostQueryResult } from '../../queries/post'
import {
  Date,
  MarkdownWrapper,
  PageBody,
  PageHeader,
  Subtitle,
  Title,
} from './style'
import Comments from '../../components/comments'

const components = {
  pre: Codeblock,
  a: Link,
  h2: LinkedHeading.h2,
  h3: LinkedHeading.h3,
  h4: LinkedHeading.h4,
  h5: LinkedHeading.h5,
}

type PostProps = Pick<PageProps<PostQueryResult>, 'data' | 'children'>

const Post = ({ data, children }: PostProps) => {
  const {
    frontmatter: { title, subtitle, date },
    tableOfContents,
  } = data.mdx

  return (
    <>
      <PageHeader>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </PageHeader>
      <PageBody>
        <TableOfContents tocItems={tableOfContents.items} />
        <MarkdownWrapper>
          <MDXProvider components={components}>{children}</MDXProvider>
          <hr />
          <Comments />
        </MarkdownWrapper>
      </PageBody>
    </>
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
