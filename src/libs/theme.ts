import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // 允许配置文件使用 `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

interface PaletteColor {
  light?: string
  main: string
  dark?: string
  contrastText?: string
}

// Create a theme instance.
const theme = createTheme({
  status: {
    danger: '#222',
  },
  palette: {
    primary: {
      main: '#222',
      // dark: '#222',
      // light: '#222',
      // contrastText: '#fff',
    },
    secondary: {
      main: '#f93a3a',
      dark: red[600],
      // light: '#ae2828',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
