import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import Team from '@/pages/Team.vue'
import Pictures from '@/pages/Pictures.vue'
import Boyage from '@/pages/Boyage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/boyage',
        name: 'Boyage',
        component: Boyage
    },
    {
        path: '/photos',
        name: 'Pictures',
        component: Pictures
    },
    {
        path: '/equipe',
        name: 'Team',
        component: Team
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
