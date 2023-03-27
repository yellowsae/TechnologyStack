import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import router from '@/router'
import foucsDirective from '@/directive/focus'
import 'element-plus/dist/index.css'
import App from '@/App'
import 'uno.css'
import './styles/index.css'

const pinia = createPinia()
const app = createApp(App)

app.directive('focus', foucsDirective)

app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
