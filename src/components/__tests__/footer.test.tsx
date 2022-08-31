import React from 'react'
import { render, screen } from '../../utils/testing-library-util'
import Footer from '../footer'

describe('Footer', () => {
  it('renders correnctly', () => {
    render(<Footer />)

    const contents = screen.getByText('© 2022 Reese')

    expect(contents).toBeInTheDocument()
  })
})
