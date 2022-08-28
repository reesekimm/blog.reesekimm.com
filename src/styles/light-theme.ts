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
  boxShadow: '0 4px 12px 0 rgb(0 0 0 / 3%)',
}

export default lightTheme
