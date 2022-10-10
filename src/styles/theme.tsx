import {
  extendTheme,
  theme as baseTheme,
  type ThemeConfig,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra',
}

const theme = {
  ...baseTheme,
  fonts: {
    heading: `'IBM Plex Sans KR', sans-serif`,
    body: `'IBM Plex Sans KR', sans-serif`,
    mono: `'Roboto Mono', monospace`,
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      'html, body': {
        height: '100vh',
        bg: mode('white', 'gray.800')(props),
        color: mode('gray.800', 'whiteAlpha.900')(props),
      },
      '#___gatsby, #gatsby-focus-wrapper': {
        height: '100%',
      },
      '#gatsby-focus-wrapper': {
        display: 'flex',
        flexDirection: 'column',
      },
    }),
  },
  config,
}

export default extendTheme(theme)
