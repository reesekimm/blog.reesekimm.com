import React from 'react'
import { render, screen, within } from '../../utils/testing-library-util'
import { PureHeader as Header } from '../header'

const data = {
  site: {
    siteMetadata: {
      title: 'dev.reese',
    },
  },
}

describe('Header', () => {
  it('should render title correctly', () => {
    render(<Header data={data} showing={true} />)

    expect(screen.getByRole('heading', { name: 'dev.reese' })).toBeInTheDocument()
  })

  it('should change mode when user clicks the toggle button', async () => {
    const { user } = render(<Header data={data} showing={true} />)

    const toggleButton = screen.getByRole('button', { name: 'mode' })
    const darktModeIcon = within(toggleButton).getByLabelText('dark-mode')

    expect(darktModeIcon).toBeInTheDocument()

    await user.click(toggleButton)

    const lighttModeIcon = within(toggleButton).getByLabelText('light-mode')
    expect(lighttModeIcon).toBeInTheDocument()
  })
})
