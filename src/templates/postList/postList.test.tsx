import React from 'react'
import { useStaticQuery } from 'gatsby'
import PostList from '.'
import { render, screen } from '../../utils/testing-library-util'
import allMdx from '../../__fixtures__/allMdx'
import siteMetadata from '../../__fixtures__/siteMetadata'

jest.mock('gatsby')

const mockedUseStaticQuery = useStaticQuery as jest.MockedFunction<
  typeof useStaticQuery
>

describe('PostList', () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockClear()
    mockedUseStaticQuery.mockReturnValue({ ...siteMetadata })
  })
  it('', () => {})
})
