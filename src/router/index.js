import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ViewClient/HomeView.vue'

const routes = [
  // router client debut
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props:true
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/ViewClient/DetailView.vue'),
    props:true
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
    path: '/agent/:id',
    name: 'agent',
    component: () => import('../views/ViewClient/AgentView.vue'),
    props:true
  },
  {
    path: '/agent/bien/detail/:id',
    name: 'agent/bien/detail',
    component: () => import('../views/ViewClient/DetailBienAgent.vue'),
    props:true
  },
  {
    path: '/profil',
    name: 'profil',
    component: () => import('../views/ViewClient/ProfilUser.vue'),
    props:true
  },
    {
    path: '/recherche',
    name: 'recherche',
    component: () => import('../views/ViewClient/RechercheView.vue'),
    props:true
  },
  // router client fin


  // router   admin debut

  {
    path: '/dashbord',
    name: 'dashbord',
    component: () => import('../views/ViewAdmin/HomeAdmin.vue'),
    props:true
  },
  {
    path: '/dashbord/updatebien/:id',
    name: 'dashbord/updatebien',
    component: () => import('../views/ViewAdmin/UpdateBien.vue'),
    props:true
  },
  {
    path: '/dashbord/bien/:id',
    name: 'dashbord/bien',
    component: () => import('../views/ViewAdmin/DetailBien.vue'),
    props:true
  },
  {
    path: '/update/:id',
    name: '/update',
    component: () => import('../views/ViewAdmin/UpdateAgent.vue'),
    props:true
  },
  



  // router admin fin
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
