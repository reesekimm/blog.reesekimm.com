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
  colors: {
    ...baseTheme.colors,
    brand: {
      light: '#15db95',
      dark: '#66ccad',
    },
  },
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
  shadows: {
    ...baseTheme.shadows,
    light: '0 4px 12px 0 rgb(0 0 0 / 3%)',
    dark: '0 4px 12px 0 rgb(255 255 255 / 3%)',
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      'html, body': {
        height: '100vh',
        bg: mode('white', 'gray.800')(props),
        color: mode('gray.800', 'whiteAlpha.900')(props),
        overscrollBehaviorY: 'none',
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
      code: {
        bg: 'gray.200',
        borderRadius: '5px',
        padding: '0.2rem 0.25rem',
        fontSize: 'sm',
        fontWeight: 'bold',
        color: 'gray.500',
      },
      blockquote: {
        padding: '1rem 1rem 1rem 2rem',
        color: 'gray.500',
        borderLeft: '4px',
        borderColor: 'gray.400',
        bg: mode('gray.100', 'gray.700')(props),
        p: {
          margin: 0,
        },
      },
      th: {
        borderBottom: '1px',
        borderColor: 'gray.300',
      },
      'th, td': {
        padding: '1rem',
      },
      a: {
        color: mode('brand.light', 'brand.dark')(props),
      },
      img: {
        margin: '2rem auto',
      },
      p: {
        display: 'inline',
        lineHeight: '1.8',
      },
      'ol, ul': {
        listStylePosition: 'inside',
        marginBottom: '1rem',
      },
      li: {
        padding: '0.5rem',
      },
      h1: {
        paddingBotton: '4rem',
      },
      h2: {
        paddingBottom: '2rem',
      },
      'h3, h4': {
        paddingBottom: '1rem',
      },
    }),
  },
  config,
}

export default extendTheme(theme)
