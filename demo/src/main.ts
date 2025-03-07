import { createApp } from 'vue'
import KfcFormDesigner from '@koodo-fuoomu/form-designer'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

import App from './App.vue'

const app = createApp(App)

app.use(KfcFormDesigner)

app.mount('#app')
