import { createApp } from 'vue'
import KfcFormDesigner from '@koodo-fuoomu/form-designer'
// import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(KfcFormDesigner)

app.mount('#app')
