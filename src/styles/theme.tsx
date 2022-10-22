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
  fontSizes: {
    xs: '0.6rem',
    sm: '0.8rem',
    md: '1rem',
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
      hr: {
        margin: '4rem 0',
      },
      li: {
        padding: '0.5rem',
      },
      code: {
        bg: 'gray.200',
        borderRadius: '5px',
        padding: '0.1rem 0.4rem',
        margin: '0 0.3rem',
        fontSize: 'sm',
      },
      blockquote: {
        padding: '1rem 1rem 1rem 2rem',
        color: 'gray.500',
        borderLeft: '4px',
        borderColor: 'gray.400',
        bg: 'gray.100',
      },
      th: {
        borderBottom: '1px',
        borderColor: 'gray.300',
      },
      'th, td': {
        padding: '1rem',
      },
      a: {
        color: 'purple.300',
      },
      h1: {
        padding: '4rem 0',
      },
      h2: {
        padding: '2rem 0',
      },
      'h3, h4': {
        padding: '1rem 0',
      },
    }),
  },
  config,
}

export default extendTheme(theme)
