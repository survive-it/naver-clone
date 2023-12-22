import { createRouter, createWebHistory } from 'vue-router'

import PublishingLayout from '@/layouts/PublishingIndex.vue'
import MainLayout from '@/layouts/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'publishign index',
      component: () => import('@/publishing/index.vue'),
      meta: { layout: PublishingLayout }
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/Main.vue'),
      meta: { layout: MainLayout }
    }
  ]
})

export default router
