import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Router from './routes'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})

createApp(App).use(vuetify).use(Router).use(mdiVue, {icons: mdijs}).mount('#app')
