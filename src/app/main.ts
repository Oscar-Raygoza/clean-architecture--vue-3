import '@/app/assets/css/main.css'

import { createApp } from 'vue'

import App from './App.vue'

// store
import { createPinia } from 'pinia'

// plugins
import i18n from '@/app/plugins/i18n.settings'

// router
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
