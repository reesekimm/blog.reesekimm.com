import React from 'react'
import type { GatsbyBrowser, GatsbySSR } from 'gatsby'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../state/store'

interface WrapperProps {
  element: GatsbyBrowser['wrapRootElement'] | GatsbySSR['wrapRootElement']
}

const Wrapper = ({ element }: WrapperProps) => {
  return (
    <ReduxProvider store={store}>
      <>{element}</>
    </ReduxProvider>
  )
}

export default Wrapper
