import React from 'react'
import type { GatsbyBrowser, GatsbySSR } from 'gatsby'

import { Provider } from 'react-redux'
import store from '../state/store'
import Theme from './theme'

interface WrapperProps {
  element: GatsbyBrowser['wrapRootElement'] | GatsbySSR['wrapRootElement']
}

const Wrapper = ({ element }: WrapperProps) => {
  return (
    <Provider store={store}>
      <Theme>{element}</Theme>
    </Provider>
  )
}

export default Wrapper
