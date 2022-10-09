import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import * as ChakraComponents from '@chakra-ui/react'
import TableOfContents from '../../components/tableOfContents'
import Codeblock from '../../components/codeblock'
import Link from '../../components/link'
import LinkedHeading from '../../components/linkedHeading'
import { PostQueryResult } from '../../queries/post'
import Comments from '../../components/comments'
import { Container, Heading } from '@chakra-ui/react'

const components = {
  pre: Codeblock,
  a: Link,
  h2: LinkedHeading.h2,
  h3: LinkedHeading.h3,
  h4: LinkedHeading.h4,
  h5: LinkedHeading.h5,
  ...ChakraComponents,
}

type PostProps = Pick<PageProps<PostQueryResult>, 'data' | 'children'>

const Post = ({ data, children }: PostProps) => {
  if (!data) return null

  const {
    frontmatter: { title, subtitle, date },
    tableOfContents,
  } = data.mdx

  return (
    <>
      <Container>
        <Container>{date}</Container>
        <Heading as="h2">{title}</Heading>
        <Heading as="h3">{subtitle}</Heading>
      </Container>
      <Container>
        <TableOfContents tocItems={tableOfContents.items} />
        <Container as="article">
          <MDXProvider components={components}>{children}</MDXProvider>
          <hr />
          <Comments />
        </Container>
      </Container>
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
