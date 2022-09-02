import React from 'react'
import { useStaticQuery } from 'gatsby'
import { render, screen, fireEvent } from '../../utils/testing-library-util'
import Layout from '../layout'
import siteMetadata from '../../__fixtures__/siteMetadata'

jest.mock('gatsby')

const mockedUseStaticQuery = useStaticQuery as jest.MockedFunction<typeof useStaticQuery>

describe.only('Layout', () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockClear()
    mockedUseStaticQuery.mockReturnValue({ ...siteMetadata })
  })

  it('should display pageTitle', () => {
    render(
      <Layout pageTitle="Test">
        <section style={{ width: '100%', height: '2000px' }}>Empty page</section>
      </Layout>
    )

    expect(screen.getByRole('heading', { name: 'Test' })).toBeInTheDocument()
  })

  it('should toggle header visibility when user scrolls', async () => {
    render(
      <Layout pageTitle="">
        <section style={{ width: '100%', height: '2000px' }}>Empty page</section>
      </Layout>
    )

    const header = screen.getByRole('banner')

    // hide header when scrolling down
    expect(header).toHaveStyle({ top: '0' })
    fireEvent.scroll(window, { target: { scrollY: 300 } })
    expect(header).toHaveStyle({ top: '-10rem' })

    // show header when scrolling up
    fireEvent.scroll(window, { target: { scrollY: 0 } })
    expect(header).toHaveStyle({ top: '0' })
  })
})
