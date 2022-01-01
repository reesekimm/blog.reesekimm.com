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

const themeMap = {
  light: lightTheme,
  dark: darkTheme,
}

const components = {
  pre: CodeBlock,
  a: Link,
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
