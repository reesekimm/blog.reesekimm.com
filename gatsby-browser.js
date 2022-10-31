import '@fontsource/ibm-plex-sans-kr/400.css'
import '@fontsource/ibm-plex-sans-kr/500.css'
import '@fontsource/ibm-plex-sans-kr/700.css'
import '@fontsource/roboto-mono/400.css'
import '@fontsource/roboto-mono/400-italic.css'

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './src/styles/theme'
import Wrapper from './src/components/wrapper'

export const wrapPageElement = ({ element }) => {
  return <ChakraProvider theme={theme}>{element}</ChakraProvider>
}

export const wrapRootElement = Wrapper
