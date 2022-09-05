import React from 'react'
import { useStaticQuery } from 'gatsby'
import { render, screen } from '../../utils/testing-library-util'
import mdx from '../../__fixtures__/mdx'
import siteMetadata from '../../__fixtures__/siteMetadata'
import Post from '.'
import '../../../__mocks__/intersection-observer'

jest.mock('gatsby')

const mockedUseStaticQuery = useStaticQuery as jest.MockedFunction<
  typeof useStaticQuery
>

describe('Post', () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockClear()
    mockedUseStaticQuery.mockReturnValue({ ...siteMetadata })
  })

  it('should display mdx data correctly', () => {
    const {
      frontmatter: { date, title, subtitle },
      tableOfContents: { items },
    } = mdx.mdx

    render(
      <Post data={mdx}>
        <div></div>
      </Post>
    )

    expect(screen.getByText(date))
    expect(screen.getByRole('heading', { level: 1, name: title }))
    expect(screen.getByRole('heading', { level: 2, name: subtitle }))
    expect(items).toHaveLength(4)
  })
})
