import { createRouter, createWebHistory } from 'vue-router'
import DocumentsView from '@/views/DocumentsView.vue'
import SecurePaymentsView from '@/views/SecurePaymentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'documents',
      component: DocumentsView
    },
    {
      path: '/secure-payments',
      name: 'secure-payments',
      component: SecurePaymentsView
    }
  ]
})

export default router
