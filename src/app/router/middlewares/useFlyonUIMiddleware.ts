import { nextTick } from 'vue'
import type { Router } from 'vue-router'

export function useFlyonUIMiddleware(router: Router) {
  router.afterEach((_to, _from, error) => {
    if (!error)
      nextTick(() => {
        window.HSStaticMethods.autoInit()
      })
  })
}
