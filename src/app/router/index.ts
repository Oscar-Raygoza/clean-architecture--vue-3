import { createRouter, createWebHistory } from 'vue-router'
const MainLayout = () => import('@/app/layouts/MainLayout.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          component: () => import('@/app/views/HomeView.vue')
        },
      ]
    },
  ],
})

export default router
