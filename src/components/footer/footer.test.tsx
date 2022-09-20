import React from 'react'
import { render, screen } from '../../utils/testing-library-util'
import Footer from '.'

describe('Footer', () => {
  it('renders correnctly', () => {
    render(<Footer />)

    const contents = screen.getByText(`© Reese ${new Date().getFullYear()}`)

    expect(contents).toBeInTheDocument()
  })
})
