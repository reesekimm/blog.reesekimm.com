import { graphql, PageProps } from 'gatsby'
import React, { useState } from 'react'
import Layout from '../../components/layout'
import ListItem from '../../components/listItem'
import Tag from '../../components/tag'
import { TagsQueryResult } from '../../queries/tags'
import { PostContainer, TagContainer } from './style'

type TagsProps = Pick<
  PageProps<
    TagsQueryResult,
    object,
    {
      tag: string
    }
  >,
  'data' | 'location'
>

const Tags = ({ data, location }: TagsProps) => {
  const [selectedTag, setSelectedTag] = useState(location.state.tag)

  const tagData = data.allMdx.group

  const onClickTag = (tag: string) => {
    setSelectedTag(tag)
  }

  return (
    <Layout pageTitle="Tags">
      <TagContainer>
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
        {tagData
          .find(({ fieldValue }) => fieldValue === selectedTag)!
          .edges.map(
            (
              {
                id,
                node: {
                  frontmatter: { date, title, subtitle, slug, tags },
                },
              },
              index
            ) => (
              <ListItem
                key={id + index.toString()}
                path={`/posts/${slug}`}
                title={title}
                subtitle={subtitle}
                date={date}
              >
                {tags &&
                  tags.map((tag) => (
                    <Tag
                      key={tag}
                      label={tag}
                      onClick={() => onClickTag(tag)}
                    />
                  ))}
              </ListItem>
            )
          )}
      </PostContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
export default Tags
