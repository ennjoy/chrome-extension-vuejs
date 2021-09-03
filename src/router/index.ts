import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('../views/Contacts.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router