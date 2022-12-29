import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import * as ChakraComponents from '@chakra-ui/react'
import * as ChakraIcons from '@chakra-ui/icons'
import TableOfContents from '../components/tableOfContents'
import Codeblock from '../components/codeblock'
import Link from '../components/link'
import LinkedHeading from '../components/linkedHeading'
import { PostQueryResult } from '../types'
import Comments from '../components/comments'
import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Caption from '../components/caption'

const components = {
  ...ChakraComponents,
  ...ChakraIcons,
  pre: Codeblock,
  a: Link,
  h1: LinkedHeading.h1,
  h2: LinkedHeading.h2,
  h3: LinkedHeading.h3,
  h4: LinkedHeading.h4,
  h5: LinkedHeading.h5,
  Caption,
}

type PostPageProps = Pick<PageProps<PostQueryResult>, 'data' | 'children'>

const PostPage = ({ data, children }: PostPageProps) => {
  if (!data) return null

  const {
    frontmatter: { title, subtitle, date },
    tableOfContents,
  } = data.mdx

  return (
    <Layout>
      <Container w="100%" p={[0, 6, 14]} maxW="initial" centerContent>
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
      <Flex w="100%" maxW="initial" p={0}>
        <TableOfContents tocItems={tableOfContents.items} />
        <Container id="post-content" as="article" p={0} m={0} maxW="initial">
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
        date(formatString: "MMM D, YYYY")
        title
        subtitle
      }
      tableOfContents
    }
  }
`

export default PostPage

export const Head = ({ location, pageContext }) => {
  const {
    frontmatter: { title, subtitle },
    ogImage,
  } = pageContext

  return (
    <SEO
      title={title}
      subtitle={subtitle}
      path={location.pathname}
      ogImage={ogImage}
    />
  )
}
