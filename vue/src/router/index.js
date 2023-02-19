import {createRouter, createWebHistory} from "vue-router";
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import About from '../components/About.vue'

const routes = [
    {
        path: '/',
        component: Login
    }, {
        path: '/about',
        component: About
    }, {
        path: '/dashboard',
        component: Dashboard
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
