import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/ja'
import router from '@/router'
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports.js'

import 'quasar/src/css/index.sass'

import App from './App.vue'
Amplify.configure({
  ...awsconfig,
  aws_appsync_authenticationType: 'API_KEY'
})

const app = createApp(App)

app.use(Quasar, {
  lang: quasarLang,
  plugins: {}
})

app.use(createPinia())
app.use(router)

app.mount('#app')
