import { ContainerModule } from 'inversify'
import type { interfaces } from 'inversify'

import httpTypes from "@/modules/network/types"

// repository
import type { HttpRepository } from '@/infrastructure/network/repository/HttpRepository'
import HttpServiceRepository from '@/infrastructure/network/repository/HttpServiceRepository'

export default new ContainerModule((bind: interfaces.Bind) => {
  // repositories
  bind<HttpRepository>(httpTypes.httpKyClient).to(
    HttpServiceRepository
  )
})
