import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from '~/App.vue'
import '~/assets/scss/main.scss'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App).use(router).mount('#app')
