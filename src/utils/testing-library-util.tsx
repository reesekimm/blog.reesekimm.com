import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import Theme from '../components/theme'
import { store } from '../state/store'

const renderWithWrapper = (ui: React.ReactElement<any>, options?: RenderOptions) => {
  const Wrapper = ({ children }: { children: React.ReactElement<any> }) => (
    <Provider store={store}>
      <Theme>{children}</Theme>
    </Provider>
  )

  return render(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'

export { renderWithWrapper as render }
