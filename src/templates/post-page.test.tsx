import React from 'react'
import { useStaticQuery } from 'gatsby'
import { render, screen } from '../utils/testing-library-util'
import POST_QUERY from '../__fixtures__/postQuery'
import SITE_QUERY from '../__fixtures__/siteQuery'
import PostPage from './post-page'

jest.mock('gatsby')

const mockedUseStaticQuery = useStaticQuery as jest.MockedFunction<
  typeof useStaticQuery
>

const { date, title, subtitle } = POST_QUERY.mdx.frontmatter

describe('PostPage', () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockClear()
    mockedUseStaticQuery.mockReturnValue(SITE_QUERY)
    render(<PostPage data={POST_QUERY}>{undefined}</PostPage>)
  })

  it('포스트 작성일을 표시한다', () => {
    expect(screen.getByText(date)).toBeInTheDocument()
  })

  it('포스트 제목을 표시한다', () => {
    expect(
      screen.getByRole('heading', { level: 2, name: title })
    ).toBeInTheDocument()
  })

  it('포스트 소제목을 표시한다', () => {
    expect(
      screen.getByRole('heading', { level: 3, name: subtitle })
    ).toBeInTheDocument()
  })

  it('TOC를 표시한다', () => {
    expect(screen.getByRole('complementary')).toBeInTheDocument()
  })
})
