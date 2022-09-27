import React from 'react'
import type { GatsbyBrowser, GatsbySSR } from 'gatsby'

import { Provider } from 'react-redux'
import store from '../state/store'

interface WrapperProps {
  element: GatsbyBrowser['wrapRootElement'] | GatsbySSR['wrapRootElement']
}

const Wrapper = ({ element }: WrapperProps) => {
  return (
    <Provider store={store}>
      <>{element}</>
    </Provider>
  )
}

export default Wrapper
