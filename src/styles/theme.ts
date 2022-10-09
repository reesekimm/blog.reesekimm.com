import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
}

const theme = {
  colors: {
    brand: '#15db95',
  },
  fonts: {
    heading: `'IBM Plex Sans KR', sans-serif`,
    body: `'IBM Plex Sans KR', sans-serif`,
    mono: `'Roboto Mono', monospace`,
  },
  config,
}

export default extendTheme(theme)
