import './libs/gulu.scss'
import './index.css'
import { router } from './router';
import { createApp } from 'vue'
import App from './App.vue'
import './libs/svg.js'
import 'github-markdown-css'
import MarkDown from './components/Markdown.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('MarkDown', MarkDown)
