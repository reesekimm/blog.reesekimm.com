import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import GlobalStyle from '../styles/global'
import lightTheme from '../styles/light-theme'
import darkTheme from '../styles/dark-theme'
import { useAppSelector } from '../state/hooks'
import { selectAppState } from '../state/appSlice'
import CodeBlock from './codeblock'
import Link from './link'
import LinkedHeading from './linkedHeading'

const themeMap = {
  light: lightTheme,
  dark: darkTheme,
}

const components = {
  pre: CodeBlock,
  a: Link,
  h2: LinkedHeading.h2,
  h3: LinkedHeading.h3,
  h4: LinkedHeading.h4,
  h5: LinkedHeading.h5,
}

interface ThemeProps {
  children: React.ReactNode
}

const Theme = ({ children }: ThemeProps) => {
  const { mode } = useAppSelector(selectAppState)

  return (
    <ThemeProvider theme={themeMap[mode]}>
      <GlobalStyle />
      <MDXProvider components={components}>{children}</MDXProvider>
    </ThemeProvider>
  )
}

export default Theme
