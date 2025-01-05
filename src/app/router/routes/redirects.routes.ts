import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: "/commercial/*",
    redirect: { name: "Home" },
  },
]

export default routes
