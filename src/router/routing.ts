import { createRouter, createWebHistory } from 'vue-router'

import SignIn from '../components/SignIn.vue'
import Home from '../components/Home.vue'

const routes= [
    {path: '/', name:'SignIn', component: SignIn},
    {path: '/home', name:'Home', component: Home}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router