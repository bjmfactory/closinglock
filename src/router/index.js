import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SecurePaymentsView from '@/views/SecurePaymentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/secure-payments',
      name: 'secure-payments',
      component: SecurePaymentsView
    }
  ]
})

export default router
