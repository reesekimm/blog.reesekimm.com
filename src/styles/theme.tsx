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
    '2xl': '1400px',
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
        lineHeight: 1.6,
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
        margin: '1rem 0',
      },
      'aside ol': {
        margin: '0',
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
      code: {
        width: '100%',
        padding: '.7rem 1rem',
        marginTop: '1rem',
        borderRadius: '10px',
        fontSize: '0.85rem',
        fontWeight: 600,
        border: `2px solid`,
        borderColor: mode('gray.100', 'gray.600')(props),
        color: mode('gray.700', 'white')(props),
        a: {
          span: {
            position: 'relative',
            zIndex: 0,
            '::before': {
              content: '""',
              backgroundColor: mode('brand.light', 'brand.dark')(props),
              opacity: 0.7,
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: 0,
              height: '100%',
              zIndex: -1,
              transition: 'all .25s ease-in-out',
            },
          },
          _hover: {
            '.title::before': {
              width: '100%',
            },
          },
        },
      },
      'code.operation': {
        bg: mode('gray.100', 'gray.600')(props),
        color: mode('brand.light', 'brand.dark')(props),
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
        li: {
          padding: '.3rem 0 .3rem 1rem',
          p: {
            display: 'inline',
          },
        },
        p: {
          display: 'inline-block',
          marginBottom: '1rem',
          letterSpacing: '.02rem',
          a: {
            color: mode('brand.light', 'brand.dark')(props),
          },
        },
        img: {
          margin: '1rem auto 0',
          width: '100%',
        },
        pre: {
          /* Hide scrollbar */
          msOverflowStyle: 'none' /* IE and Edge */,
          scrollbarWidth: 'none' /* Firefox */,
          '::-webkit-scrollbar': {
            /* Chrome, Safari and Opera */
            display: 'none',
          },
        },
        hr: {
          margin: '3rem 0',
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
          padding: '.6rem 1rem',
          color: 'gray.500',
          borderLeft: '4px',
          borderColor: 'gray.400',
          bg: mode('gray.100', 'gray.700')(props),
          margin: '1rem 0 2rem',
        },
        'blockquote > p': {
          margin: 0,
        },
        'blockquote > ul, blockquote > ol': {
          margin: 0,
        },
        'blockquote li': {
          paddingLeft: '0',
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
