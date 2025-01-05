import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'not-found',
    component: () => import('@/app/views/NotFound.vue'),
    meta: {
      title: 'Not Found',
      requiresAuth: false
    }
  },
]

export default routes
