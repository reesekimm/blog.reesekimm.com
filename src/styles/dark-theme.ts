import { DefaultTheme } from 'styled-components'
import commonStyles from './commonStyles'

const darkTheme: DefaultTheme = {
  ...commonStyles,
  colors: {
    ...commonStyles.colors,
    text: '#fff',
    background: '#212121',
    primary: '#66ccad',
    secondary: '#9fadf4',
  },
}

export default darkTheme
