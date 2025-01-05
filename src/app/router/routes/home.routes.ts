import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/app/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Home',
      requiresAuth: false
    }
  },
  {
    path: 'colors',
    name: 'ColorsSystem',
    component: () => import('@/app/views/TCGSystemColors.vue'),
    meta: {
      title: 'Colors System',
      requiresAuth: false
    }
  }
]

export default routes
