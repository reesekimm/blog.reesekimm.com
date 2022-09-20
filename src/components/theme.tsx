import React from 'react'
import type { GatsbyBrowser, GatsbySSR } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import lightTheme from '../styles/light-theme'
import darkTheme from '../styles/dark-theme'
import { useAppSelector } from '../state/hooks'
import { selectAppState } from '../state/appSlice'

const themeMap = {
  light: lightTheme,
  dark: darkTheme,
}

interface ThemeProps {
  children: GatsbyBrowser['wrapRootElement'] | GatsbySSR['wrapRootElement']
}

const Theme = ({ children }: ThemeProps) => {
  const { theme } = useAppSelector(selectAppState)

  return (
    <ThemeProvider theme={themeMap[theme]}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}

export default Theme
