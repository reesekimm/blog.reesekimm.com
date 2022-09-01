import React from 'react'
import { render, screen, within } from '../../utils/testing-library-util'
import Header from '../header'

describe('Header', () => {
  it('should render title correctly', () => {
    render(<Header siteTitle="dev.reese" showing={true} />)

    expect(screen.getByRole('heading', { name: 'dev.reese' })).toBeInTheDocument()
  })

  it('should display different theme button icon when user clicks the theme button', async () => {
    const { user } = render(<Header siteTitle="dev.reese" showing={true} />)

    const themeButton = screen.getByRole('button', { name: 'theme' })
    const darktModeIcon = within(themeButton).getByLabelText('dark-mode')

    expect(darktModeIcon).toBeInTheDocument()

    await user.click(themeButton)

    const lighttModeIcon = within(themeButton).getByLabelText('light-mode')
    expect(lighttModeIcon).toBeInTheDocument()
  })
})
