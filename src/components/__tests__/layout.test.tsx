import React from 'react'
import { render, screen, fireEvent } from '../../utils/testing-library-util'
import { PureLayout as Layout } from '../layout'

describe.only('Layout', () => {
  it('should toggle header visibility when user scrolls', async () => {
    render(
      <Layout siteTitle="dev.reese" pageTitle="">
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
