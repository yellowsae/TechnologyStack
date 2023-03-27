import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from '@/router'
import 'element-plus/dist/index.css'
import App from '@/App'
import 'uno.css'
import './styles/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
