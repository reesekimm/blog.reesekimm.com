import {
  extendTheme,
  theme as baseTheme,
  type ThemeConfig,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: 'system',
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
      '*::selection': {
        color: 'white',
        bg: mode('brand.light', 'brand.dark')(props),
      },
      '#___gatsby, #gatsby-focus-wrapper': {
        height: '100%',
      },
      '#gatsby-focus-wrapper': {
        display: 'flex',
        flexDirection: 'column',
      },
      a: {
        color: mode('brand.light', 'brand.dark')(props),
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
      '#post-content': {
        'h1, h2, h3, h4, h5': {
          padding: 0,
        },
        h1: {
          margin: '5rem 0 2rem',
        },
        h2: {
          margin: '4rem 0 1.6rem',
        },
        h3: {
          margin: '3rem 0 1.4rem',
        },
        h4: {
          margin: '2rem 0 1rem',
        },
        h5: {
          margin: '2rem 0 .8rem',
        },
        'ol, ul': {
          margin: 0,
        },
        p: {
          display: 'block',
          marginBottom: '1rem',
          letterSpacing: '.02rem',
        },
        'blockquote > p': {
          margin: 0,
        },
        img: {
          margin: '3rem auto 0',
          width: '40rem',
        },
        pre: {
          /* Hide scrollbar */
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
          '::-webkit-scrollbar': {
            /* Chrome, Safari and Opera */
            display: 'none',
          },
        },
        hr: {
          margin: '2rem 0',
        },
        code: {
          fontSize: 'sm',
          fontWeight: 'bold',
          bg: mode('gray.200', 'gray.500')(props),
          color: mode('gray.500', 'white')(props),
          borderRadius: '5px',
          padding: '0.15rem 0.25rem',
        },
        blockquote: {
          padding: '.5rem 1rem',
          color: 'gray.500',
          borderLeft: '4px',
          borderColor: 'gray.400',
          bg: mode('gray.100', 'gray.700')(props),
          margin: '1rem 0 2rem',
        },
        th: {
          borderBottom: '1px',
          borderColor: 'gray.300',
        },
        'th, td': {
          padding: '1rem',
        },
      },
    }),
  },
  config,
}

export default extendTheme(theme)
