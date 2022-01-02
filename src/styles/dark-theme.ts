import { DefaultTheme } from 'styled-components'
import commonStyles from './commonStyles'

const darkTheme: DefaultTheme = {
  ...commonStyles,
  colors: {
    ...commonStyles.colors,
    text: '#fff',
    background: '#212121',
    primary: '#89d6b6',
    secondary: '#a5b4ff',
  },
}

export default darkTheme
