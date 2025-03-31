import type { RouteRecordRaw } from 'vue-router'
import SearchCards from "@/app/views/SearchCards.vue"
const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'SearchCards',
    component: () => SearchCards,
  },
  {
    path: ':id',
    name: 'CardDetail',
    component: () => import('@/app/views/CardDetail.vue'),
  }
]

export default routes
