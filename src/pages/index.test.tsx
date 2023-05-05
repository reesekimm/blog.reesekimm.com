import React from 'react'
import { useStaticQuery } from 'gatsby'
import { render, screen, waitFor } from '../utils/testing-library-util'
import SITE_QUERY from '../__fixtures__/siteQuery'
import POST_LIST_QUERY from '../__fixtures__/postListQuery'
import Home from '.'
import SEO from '../components/seo'

jest.mock('gatsby')

const mockedUseStaticQuery = useStaticQuery as jest.MockedFunction<
  typeof useStaticQuery
>

describe('Home', () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockClear()
    mockedUseStaticQuery.mockReturnValue(SITE_QUERY)
    render(
      <>
        <SEO title="홈" />
        <Home
          data={{
            ...POST_LIST_QUERY,
            allMdx: { edges: POST_LIST_QUERY.allMdx.edges.slice(0, 5) },
          }}
        />
      </>
    )
  })

  it('페이지 타이틀을 표시한다', async () => {
    await waitFor(() =>
      expect(document.title).toBe(`홈 | ${SITE_QUERY.site.siteMetadata.title}`)
    )
  })

  it('최신글 5개를 표시한다', () => {
    expect(screen.getAllByTestId('title')).toHaveLength(5)
  })
})
