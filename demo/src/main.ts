import { createApp } from 'vue'
import App from './App.vue'
import KoodoFuoomu from 'koodo-fuoomu'
import 'virtual:uno.css'

const app = createApp(App)
app.use(KoodoFuoomu)
app.mount('#app')
