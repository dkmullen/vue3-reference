/* Vuetify is set up and themed here, then exported for use
   in main.js */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const meTheme = {
  /* Vuetify has ways of handing dark and light themes, and 
     just needs to know which one yours is */
  dark: false,
  colors: {
    primary: '008080',
    accent: 'ffd633',
    success: '00cc66',
    yada: '851395'
  }
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'meTheme',
    themes: {
      meTheme
    }
  }
})

export default vuetify
