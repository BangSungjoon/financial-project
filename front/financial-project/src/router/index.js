import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '@/views/SignUpView.vue'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/signup',
      name: 'SignUpView',
      component: SignUpView
    },

  ],
})

export default router
