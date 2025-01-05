import '@/app/assets/css/main.css'

import App from './App.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// plugins
import i18n from '@/app/plugins/i18n.settings'

import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
