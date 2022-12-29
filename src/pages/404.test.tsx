import React from 'react'
import { useStaticQuery } from 'gatsby'
import { render, screen } from '../utils/testing-library-util'
import SITE_QUERY from '../__fixtures__/siteQuery'
import NotFound from './404'

jest.mock('gatsby')

const mockedUseStaticQuery = useStaticQuery as jest.MockedFunction<
  typeof useStaticQuery
>

describe('404', () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockClear()
    mockedUseStaticQuery.mockReturnValue(SITE_QUERY)
  })

  it('에러 문구를 표시한다', () => {
    render(<NotFound />)

    expect(
      screen.getByRole('heading', { name: '존재하지 않는 페이지 입니다.' })
    )
  })
})
