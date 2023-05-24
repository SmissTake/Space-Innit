/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, ThemeDefinition } from 'vuetify'

const customDark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#13293D',
    surface: '#13293D',
    primary: '#006494',
    'primary-darken-1': '#247BA0',
    secondary: '#1B98E0',
    'secondary-darken-1': '#E8F1F2',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

const customLight: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#006494',
    'primary-darken-1': '#247BA0',
    secondary: '#1B98E0',
    'secondary-darken-1': '#E8F1F2',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      dark: customDark,
      light: customLight,
    },
  },
})
