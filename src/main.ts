import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App'
import 'uno.css'
import './styles/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
