import React, { Children, isValidElement } from 'react'
import {
  Button,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  Wrap,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Tag from './tag'

function getTags(children: React.ReactNode) {
  const TagType = (<Tag label="" />).type
  return Children.toArray(children).filter(
    (child) => isValidElement(child) && child.type === TagType
  )
}

interface ListItemProps {
  path: string
  title: string
  date: string
  subtitle: string
  children?: React.ReactNode
}

const ListItem = ({ path, title, date, subtitle, children }: ListItemProps) => {
  const tags = getTags(children)

  return (
    <Grid
      templateColumns={{ sm: '1fr', md: '1fr 3fr' }}
      gridGap={{ sm: '2' }}
      padding={{ sm: '2rem 0', md: '3rem 0' }}
      borderBottom="1px solid #E2E8F0"
      w="100%"
    >
      <GridItem marginBottom={{ sm: '1rem' }}>
        <Text as="time" color="gray.500">
          {date}
        </Text>
      </GridItem>
      <GridItem>
        <Wrap>{tags}</Wrap>
        <Heading as="h2" size="lg" marginTop=".5rem" p={0}>
          <Link href={path} _hover={{ textDecoration: 'none' }}>
            {title}
          </Link>
        </Heading>
        <Heading
          as="h3"
          size="sm"
          fontWeight="normal"
          color="gray.500"
          margin=".5rem 0 1rem"
          p={0}
        >
          {subtitle}
        </Heading>
        <Button variant="unstyled" colorScheme="gray">
          <Link
            href={path}
            _hover={{ textDecoration: 'none' }}
            color="brand.primary"
          >
            Read more <ArrowForwardIcon w={4} h={4} />
          </Link>
        </Button>
      </GridItem>
    </Grid>
  )
}

export default ListItem
