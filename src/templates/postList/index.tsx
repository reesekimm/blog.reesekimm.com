import React from 'react'
import { graphql, PageProps } from 'gatsby'
import ListItem from '../../components/listItem'
import { PostListQueryResult } from '../../queries/post-list'
import Tag from '../../components/tag'
import { selectAppState, setSelectedTag } from '../../state/appSlice'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { Wrap } from '@chakra-ui/react'
import SEO from '../../components/seo'

type PostListProps = Pick<PageProps<PostListQueryResult>, 'data'>

const PostList = ({ data }: PostListProps) => {
  if (!data) return null

  const { selectedTag } = useAppSelector(selectAppState)

  const dispatch = useAppDispatch()

  const onClickTag = (tag: string) => {
    dispatch(setSelectedTag(tag))
  }

  const selectedTagPosts = data.allMdx.group.find(
    ({ fieldValue }) => fieldValue === selectedTag
  )

  return (
    <>
      <Wrap as="ol" w="100%" paddingTop={{ sm: '2rem', md: '3rem' }}>
        <Tag
          label="All"
          selected={selectedTag === 'All'}
          onClick={() => onClickTag('All')}
        />
        {data.allMdx.group.map(({ fieldValue, totalCount }) => (
          <Tag
            key={fieldValue}
            label={`${fieldValue} ${totalCount}`}
            selected={fieldValue === selectedTag}
            onClick={() => onClickTag(fieldValue)}
          />
        ))}
      </Wrap>
      <Wrap
        as="ol"
        w="100%"
        paddingTop="1rem"
        direction="column"
        shouldWrapChildren
      >
        {selectedTagPosts
          ? selectedTagPosts.edges.map(
              (
                {
                  node: {
                    id,
                    frontmatter: { date, title, subtitle, slug, tags },
                  },
                },
                index
              ) => (
                <ListItem
                  key={id + index.toString()}
                  path={slug}
                  title={title}
                  subtitle={subtitle}
                  date={date}
                >
                  {tags && tags.map((tag) => <Tag key={tag} label={tag} />)}
                </ListItem>
              )
            )
          : data.allMdx.edges.map(
              ({
                node: {
                  frontmatter: { date, title, subtitle, slug, tags },
                  id,
                },
              }) => (
                <ListItem
                  key={id}
                  path={slug}
                  title={title}
                  subtitle={subtitle}
                  date={date}
                >
                  {tags && tags.map((tag) => <Tag key={tag} label={tag} />)}
                </ListItem>
              )
            )}
      </Wrap>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            subtitle
            slug
            tags
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              subtitle
              slug
              tags
            }
          }
        }
      }
    }
  }
`

export default PostList

export const Head = () => {
  return <SEO path={location.pathname} />
}
