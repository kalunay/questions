import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Learning from '../pages/Learning.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/learning',
      name: 'learning',
      component: Learning
    }
  ]
})

export default router
