import React from 'react'
import { useStaticQuery } from 'gatsby'
import { render, screen } from '../utils/testing-library-util'
import SITE_QUERY from '../__fixtures__/siteQuery'
import POST_LIST_QUERY from '../__fixtures__/postListQuery'
import Home from '.'

jest.mock('gatsby')

const mockedUseStaticQuery = useStaticQuery as jest.MockedFunction<
  typeof useStaticQuery
>

describe('Home', () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockClear()
    mockedUseStaticQuery.mockReturnValue(SITE_QUERY)
    render(
      <Home
        data={{
          ...POST_LIST_QUERY,
          allMdx: { edges: POST_LIST_QUERY.allMdx.edges.slice(0, 5) },
        }}
      />
    )
  })

  it('소개 문구를 표시한다', () => {
    expect(
      screen.getByText('웹 프론트엔드 개발을 합니다', { exact: false })
    ).toBeInTheDocument()
  })

  it('최신글 5개를 표시한다', () => {
    expect(screen.getAllByRole('listitem')).toHaveLength(5)
  })
})
