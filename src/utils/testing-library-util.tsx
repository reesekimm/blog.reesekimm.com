import React from 'react'
import { Provider } from 'react-redux'
import { MDXProvider } from '@mdx-js/react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'
import store from '../state/store'

interface CustomRenderResult extends RenderResult {
  user: UserEvent
}

const renderWithWrapper = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): CustomRenderResult => {
  const user = userEvent.setup()

  const Wrapper = ({ children }: { children: React.ReactElement }) => {
    return (
      <Provider store={store}>
        <MDXProvider>{children}</MDXProvider>
      </Provider>
    )
  }

  return { ...render(ui, { wrapper: Wrapper, ...options }), user }
}

export * from '@testing-library/react'

export { renderWithWrapper as render }
