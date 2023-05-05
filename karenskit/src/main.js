import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Router from './routes'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import mdiVue from 'mdi-vue/v3'
// import * as mdijs from '@mdi/js'
// import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  },
})

createApp(App).use(vuetify).use(Router).mount('#app')
