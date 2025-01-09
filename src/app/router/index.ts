import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// layouts
import MainLayout from '@/app/layouts/MainLayout.vue'
import ContentLayout from '@/app/layouts/ContentLayout.vue'

// routes
import authRoutes from './routes/auth.routes'
import homeRoutes from './routes/home.routes'
import searchRoutes from './routes/search.routes'
import sharedRoutes from './routes/shared.routes'

// redirects
import redirectsRoutes from './routes/redirects.routes'

// middlewares
import { useFlyonUIMiddleware } from './middlewares/useFlyonUIMiddleware'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: homeRoutes,
  },
  {
    path: '/search',
    component: ContentLayout,
    children: searchRoutes,
  },
  {
    path: '/auth',
    component: MainLayout,
    children: authRoutes,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: MainLayout,
    children: sharedRoutes,
    meta: {
      layout: 'MainLayout'
    }
  },
  ...redirectsRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

useFlyonUIMiddleware(router)

export default router
