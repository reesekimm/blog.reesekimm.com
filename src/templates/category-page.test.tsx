import React from 'react'
import { useStaticQuery } from 'gatsby'
import { render, screen } from '../utils/testing-library-util'
import SITE_QUERY from '../__fixtures__/siteQuery'
import POST_LIST_QUERY from '../__fixtures__/postListQuery'
import PAGE_CONTEXT from '../__fixtures__/pageContext'
import CategoryPage from './category-page'

jest.mock('gatsby')

const mockedUseStaticQuery = useStaticQuery as jest.MockedFunction<
  typeof useStaticQuery
>

describe('CategoryPage', () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockClear()
    mockedUseStaticQuery.mockReturnValue(SITE_QUERY)
    render(
      <CategoryPage
        data={POST_LIST_QUERY}
        pageContext={PAGE_CONTEXT.categoryPage}
      />
    )
  })

  it('카테고리 소개글을 표시한다.', () => {
    expect(
      screen.getByText(PAGE_CONTEXT.categoryPage.categoryDescription)
    ).toBeInTheDocument()
  })

  it('포스트 목록을 표시한다', () => {
    expect(screen.getByRole('list')).toBeInTheDocument()
  })
})
