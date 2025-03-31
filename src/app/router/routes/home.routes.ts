import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'Home',
    component: import('@/app/views/Home.vue'),
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
