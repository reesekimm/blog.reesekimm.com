import React from 'react'
import { graphql, PageProps } from 'gatsby'
import ListItem from '../../components/listItem'
import { PostListQueryResult } from '../../queries/post-list'
import { PostContainer, TagContainer } from './style'
import Tag from '../../components/tag'
import { selectAppState, setSelectedTag } from '../../state/appSlice'
import { useAppDispatch, useAppSelector } from '../../state/hooks'

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
      <TagContainer>
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
      </TagContainer>
      <PostContainer>
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
      </PostContainer>
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
