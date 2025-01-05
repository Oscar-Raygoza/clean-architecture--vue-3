import type { RouteRecordRaw } from 'vue-router'
import SearchView from "@/app/views/SearchView.vue"
const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'Search',
    component: () => SearchView,
  },
  {
    path: ':id',
    name: 'CardDetail',
    component: () => import('@/app/views/TCGSystemColors.vue'),
  }
]

export default routes
