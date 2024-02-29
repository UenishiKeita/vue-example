import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/ja'
import router from '@/router'

import 'quasar/src/css/index.sass'

import App from './App.vue'

const app = createApp(App)

app.use(Quasar, {
  lang: quasarLang,
  plugins: {}
})

app.use(createPinia())
app.use(router)

app.mount('#app')
