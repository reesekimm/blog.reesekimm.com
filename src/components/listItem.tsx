import React from 'react'
import { Grid, GridItem, Heading, Link, Text } from '@chakra-ui/react'

interface ListItemProps {
  path: string
  title: string
  date: string
  subtitle: string
  children?: React.ReactNode
}

const ListItem = ({ path, title, date }: ListItemProps) => {
  return (
    <Grid templateColumns="3fr 1fr" w="100%">
      <GridItem>
        <Link href={path} _hover={{ textDecoration: 'none' }}>
          <Heading as="h2" size="sm" fontWeight="regular" p={0}>
            {title}
          </Heading>
        </Link>
      </GridItem>
      <GridItem minW="8rem" textAlign="right">
        <Text as="time">{date}</Text>
      </GridItem>
    </Grid>
  )
}

export default ListItem
