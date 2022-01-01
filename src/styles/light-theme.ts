import { DefaultTheme } from 'styled-components'
import commonStyles from './commonStyles'

const lightTheme: DefaultTheme = {
  ...commonStyles,
  colors: {
    ...commonStyles.colors,
    text: '#212121',
    background: '#fff',
    primary: '#15db95',
    secondary: '#304FFE',
  },
}

export default lightTheme
