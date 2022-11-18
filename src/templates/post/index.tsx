import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import * as ChakraComponents from '@chakra-ui/react'
import * as ChakraIcons from '@chakra-ui/icons'
import TableOfContents from '../../components/tableOfContents'
import Codeblock from '../../components/codeblock'
import Link from '../../components/link'
import LinkedHeading from '../../components/linkedHeading'
import { PostQueryResult } from '../../queries/post'
import Comments from '../../components/comments'
import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import Caption from '../../components/caption'
import Image from '../../components/image'

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
  Image,
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
      <Container
        w="100%"
        maxW="100%"
        p={[0, 6, 14]}
        m={[2, 6, 10]}
        centerContent
      >
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
        <Container id="post-content" as="article" order="1" maxW="100%" p={0}>
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
