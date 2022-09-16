import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ViewClient/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/ViewClient/DetailView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/ViewClient/LoginView.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../views/ViewClient/SignView.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
