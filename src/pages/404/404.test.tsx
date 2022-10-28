import { useStaticQuery } from 'gatsby'
import React from 'react'
import { render, screen } from '../../utils/testing-library-util'
import siteMetadata from '../../__fixtures__/siteMetadata'
import NotFound from '.'

jest.mock('gatsby')

const mockedUseStaticQuery = useStaticQuery as jest.MockedFunction<
  typeof useStaticQuery
>

describe('404', () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockClear()
    mockedUseStaticQuery.mockReturnValue({ ...siteMetadata })
  })

  it('should display contents correctly', () => {
    render(<NotFound />)

    expect(
      screen.getByRole('heading', { name: '존재하지 않는 페이지 입니다.' })
    )
  })
})
