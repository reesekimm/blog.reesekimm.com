import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import TableOfContents from '../components/tableOfContents'
import { PostQueryResult } from '../queries/post'

export const PageHeader = styled.div`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5rem;
  text-align: center;
`

export const Date = styled.time`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray3};
  display: block;
  width: 100%;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  padding: 0.8rem 0;
`

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.gray3};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding: 0;
  margin: 0;
`

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
  }
`

export const MarkdownWrapper = styled.article`
  flex: 1;
`

const Post = ({ data, children }: PageProps<PostQueryResult>) => {
  const {
    frontmatter: { title, subtitle, date },
    tableOfContents,
  } = data.mdx

  return (
    <Layout>
      <PageHeader>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </PageHeader>
      <PageBody>
        <TableOfContents tocItems={tableOfContents.items} />
        <MarkdownWrapper>{children}</MarkdownWrapper>
      </PageBody>
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
