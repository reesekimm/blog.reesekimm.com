import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string
      background: string
      primary: string
      secondary: string
      white: string
      gray1: string
      gray2: string
      gray3: string
      gray4: string
      gray5: string
      gray6: string
      black: string
    }
    fontFamily: {
      default: string
      monospace: string
    }
    fontWeight: {
      regular: number
      medium: number
      bold: number
    }
    fontSize: {
      sm: string
      md: string
      lg: string
      xl: string
    }
    device: {
      mobile: string
      tablet: string
      desktop: string
    }
    boxShadow: string
  }
}
