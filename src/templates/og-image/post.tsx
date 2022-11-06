import React from 'react'
import { Box, Flex, Heading, Tag, Text } from '@chakra-ui/react'
import useSiteMetadata from '../../hooks/useSiteMetadata'
import { PostFrontmatter } from '../../queries/post'

interface PostOgImageProps {
  pageContext: Omit<PostFrontmatter, 'tags'>
}

const PostOgImage = ({ pageContext }: PostOgImageProps) => {
  const { title: blogTitle, author } = useSiteMetadata()
  const { date, title, subtitle } = pageContext

  return (
    <Flex
      w="1200px"
      h="630px"
      p={6}
      direction="column"
      bgGradient="linear(to-r, brand.light, #8F49FF)"
      color="white"
    >
      <Box p={2}>
        <Heading as="h1" size="2xl">
          {blogTitle}
        </Heading>
      </Box>
      <Box flex="1" paddingTop={12}>
        <Heading
          as="h2"
          fontSize="8xl"
          fontWeight="black"
          lineHeight={1.2}
          wordBreak="keep-all"
          p={0}
        >
          {title}
        </Heading>
        <Heading as="h3" size="lg" p={0} marginTop={0.5} opacity={0.7}>
          {subtitle}
        </Heading>
      </Box>
      <Box>
        <Text fontSize="3xl" fontWeight="bold">
          {author}
        </Text>
        <Text fontSize="3xl" fontWeight="bold" m="0 .5rem">
          ⎯
        </Text>
        <Text as="time" fontSize="3xl">
          {date}
        </Text>
      </Box>
    </Flex>
  )
}

export default PostOgImage
