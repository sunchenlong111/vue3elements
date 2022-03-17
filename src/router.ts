import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from "./components/Switch.vue"
import Button from "./components/Button.vue"
import Dialog from "./components/Dialog.vue"
import Tabs from "./components/Tabs.vue"
import { h } from 'vue'
import Markdown from './components/Markdown.vue'

const histroy = createWebHashHistory()
const md = fileName => h(Markdown, { path: `../markdown/${fileName}.md`, key: fileName })
export const router = createRouter({
  history: histroy,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: "intro", component: md('intro') },
        { path: "get-started", component: md('getStarted') },
        { path: "install", component: md('install') },
        { path: "", component: Doc },
        { path: "switch", component: Switch },
        { path: "button", component: Button },
        { path: "dialog", component: Dialog },
        { path: "tabs", component: Tabs },
      ]
    }
  ]
})



