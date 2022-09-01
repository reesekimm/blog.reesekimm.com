import React from 'react'
import { render, screen, within } from '../../utils/testing-library-util'
import Header from '../header'

describe('Header', () => {
  it('should render title correctly', () => {
    render(<Header siteTitle="dev.reese" showing={true} />)

    expect(screen.getByRole('heading', { name: 'dev.reese' })).toBeInTheDocument()
  })

  it('should change mode when user clicks the toggle button', async () => {
    const { user } = render(<Header siteTitle="dev.reese" showing={true} />)

    const toggleButton = screen.getByRole('button', { name: 'mode' })
    const darktModeIcon = within(toggleButton).getByLabelText('dark-mode')

    expect(darktModeIcon).toBeInTheDocument()

    await user.click(toggleButton)

    const lighttModeIcon = within(toggleButton).getByLabelText('light-mode')
    expect(lighttModeIcon).toBeInTheDocument()
  })
})
