import React from 'react'
import { useStaticQuery } from 'gatsby'
import { render, screen, within } from '../../utils/testing-library-util'
import siteMetadata from '../../__fixtures__/siteMetadata'
import Header from '.'

jest.mock('gatsby')

const mockedUseStaticQuery = useStaticQuery as jest.MockedFunction<
  typeof useStaticQuery
>

describe('Header', () => {
  beforeEach(() => {
    mockedUseStaticQuery.mockClear()
    mockedUseStaticQuery.mockReturnValue({ ...siteMetadata })
  })

  it('should render title correctly', () => {
    render(<Header showing={true} />)

    expect(
      screen.getByRole('heading', { name: 'Reese.dev' })
    ).toBeInTheDocument()
  })

  it('should display different theme button icon when user clicks the theme button', async () => {
    const { user } = render(<Header showing={true} />)

    const themeButton = screen.getByRole('button', { name: 'theme' })

    const darktModeIcon = await within(themeButton).findByLabelText('dark-mode')

    expect(darktModeIcon).toBeInTheDocument()

    await user.click(themeButton)

    const lighttModeIcon = await within(themeButton).findByLabelText(
      'light-mode'
    )

    expect(lighttModeIcon).toBeInTheDocument()
  })
})
