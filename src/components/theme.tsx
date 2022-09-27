import React from 'react'
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
  children: React.ReactNode
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
