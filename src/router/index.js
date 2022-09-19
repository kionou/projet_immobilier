import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ViewClient/HomeView.vue'

const routes = [
  // router client debut
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
  {
    path: '/agentlogin',
    name: 'agentlogin',
    component: () => import('../views/ViewClient/LoginAgent.vue')
  },
    {
    path: '/agent',
    name: 'agent',
    component: () => import('../views/ViewClient/AgentView.vue')
  },
  // router client fin


  // router   admin debut

  {
    path: '/dashbord',
    name: 'dashbord',
    component: () => import('../views/ViewAdmin/HomeAdmin.vue')
  },



  // router admin fin
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
