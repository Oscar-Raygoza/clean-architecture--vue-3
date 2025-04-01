import type { RouteRecordRaw } from 'vue-router'


const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'SearchCards',
    component: () => import('@/app/views/SearchCards.vue'),
  },
  {
    path: ':id',
    name: 'CardDetail',
    component: () => import('@/app/views/CardDetail.vue'),
  }
]

export default routes
