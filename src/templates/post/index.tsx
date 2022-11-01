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
import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import SEO from '../../components/seo'
import Layout from '../../components/layout'

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
    <Layout>
      <Container w="100%" maxW="100%" p={[0, 6, 14]} centerContent>
        <Text as="time" color="gray.500" marginBottom={4}>
          {date}
        </Text>
        <Heading as="h2" p={0} marginBottom={1} textAlign="center">
          {title}
        </Heading>
        <Heading as="h3" p={0} size="sm" fontWeight="normal" color="gray.500">
          {subtitle}
        </Heading>
      </Container>
      <Flex w="100%">
        <TableOfContents tocItems={tableOfContents.items} />
        <Container as="article" order="1" maxW="100%" p={0}>
          <MDXProvider components={components}>{children}</MDXProvider>
          <hr />
          <Comments />
        </Container>
      </Flex>
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

export const Head = ({ location, pageContext }) => {
  const {
    id,
    frontmatter: { title, subtitle },
  } = pageContext

  return (
    <SEO id={id} title={title} subtitle={subtitle} path={location.pathname} />
  )
}
