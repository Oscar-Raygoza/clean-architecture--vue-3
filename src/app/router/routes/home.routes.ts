import type { RouteRecordRaw } from 'vue-router'

import HomeView from '@/app/views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Home',
      requiresAuth: false,
      metaTags: [
        {
          name: 'description',
          content: "Nice description here"
        },
        {
        name: 'keywords',
        content: "all, of, my, keywords, here"
        }
      ]
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
